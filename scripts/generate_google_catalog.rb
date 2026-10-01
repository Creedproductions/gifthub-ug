#!/usr/bin/env ruby

require "cgi"
require "fileutils"
require "json"

ROOT = File.expand_path("..", __dir__)
DIST = File.join(ROOT, "dist")
APP = File.read(File.join(DIST, "app.js"))
BASE_URL = "https://gifthubug.creedmotions.store"

def value(line, key)
  match = line.match(/(?:\{|,)#{Regexp.escape(key)}:'([^']*)'/)
  raise "Missing #{key} in #{line}" unless match
  match[1]
end

def html(value)
  CGI.escapeHTML(value.to_s)
end

product_lines = APP[/const products = \[(.*?)\n\];/m, 1].lines.grep(/\{id:/)
products = product_lines.map do |line|
  {
    id: value(line, "id"),
    name: value(line, "name"),
    category: value(line, "category"),
    occasion: value(line, "occasion"),
    recipient: value(line, "recipient"),
    price: Integer(line.match(/(?:^|,)price:(\d+)/)[1]),
    tag: value(line, "tag"),
    description: value(line, "desc")
  }
end

raise "Duplicate product IDs" unless products.map { |product| product[:id] }.uniq.length == products.length

FileUtils.mkdir_p(File.join(DIST, "products"))
Dir[File.join(DIST, "products", "*.html")].each { |file| File.delete(file) }

navigation = '<nav class="crawl-nav" aria-label="GiftHub UG"><a href="/">GiftHub UG</a><a href="/shop">Shop gifts</a><a href="/occasions">Occasions</a><a href="/flowers">Flowers</a><a href="/money-gifts">Money gifts</a><a href="/cakes">Cakes</a><a href="/concierge">Gift concierge</a><a href="/contact">Contact</a></nav>'

products.each do |product|
  url = "#{BASE_URL}/products/#{product[:id]}"
  image = "#{BASE_URL}/assets/products/#{product[:id]}.jpg"
  schema_type = product[:category] == "Room Styling" ? "Service" : "Product"
  schema = if schema_type == "Service"
    {
      "@context" => "https://schema.org",
      "@type" => "Service",
      "name" => product[:name],
      "description" => product[:description],
      "image" => image,
      "url" => url,
      "provider" => { "@type" => "LocalBusiness", "name" => "GiftHub UG", "url" => BASE_URL },
      "areaServed" => "Kampala, Uganda",
      "offers" => { "@type" => "Offer", "url" => url, "price" => product[:price], "priceCurrency" => "UGX", "availability" => "https://schema.org/InStock" }
    }
  else
    {
      "@context" => "https://schema.org",
      "@type" => "Product",
      "@id" => "#{url}#product",
      "name" => product[:name],
      "description" => product[:description],
      "image" => [image],
      "url" => url,
      "sku" => "GHU-#{product[:id].upcase}",
      "brand" => { "@type" => "Brand", "name" => "GiftHub UG" },
      "category" => product[:category],
      "offers" => {
        "@type" => "Offer",
        "url" => url,
        "price" => product[:price],
        "priceCurrency" => "UGX",
        "availability" => "https://schema.org/InStock",
        "itemCondition" => "https://schema.org/NewCondition",
        "seller" => { "@type" => "Organization", "name" => "GiftHub UG", "url" => BASE_URL }
      }
    }
  end

  document = <<~HTML
    <!doctype html>
    <html lang="en-UG" data-theme="light">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1">
      <meta name="theme-color" content="#07382b">
      <meta name="description" content="#{html(product[:description])} Order #{html(product[:name])} from GiftHub UG with Kampala delivery.">
      <meta name="robots" content="index,follow,max-image-preview:large">
      <link rel="canonical" href="#{url}">
      <meta property="og:type" content="product">
      <meta property="og:locale" content="en_UG">
      <meta property="og:site_name" content="GiftHub UG">
      <meta property="og:title" content="#{html(product[:name])} | GiftHub UG">
      <meta property="og:description" content="#{html(product[:description])}">
      <meta property="og:url" content="#{url}">
      <meta property="og:image" content="#{image}">
      <meta property="product:price:amount" content="#{product[:price]}">
      <meta property="product:price:currency" content="UGX">
      <meta name="twitter:card" content="summary_large_image">
      <title>#{html(product[:name])} in Kampala | GiftHub UG</title>
      <link rel="icon" href="/assets/favicon-32.png" sizes="32x32" type="image/png">
      <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png" sizes="180x180">
      <link rel="manifest" href="/site.webmanifest">
      <link rel="stylesheet" href="/styles.css">
      <script type="application/ld+json">#{JSON.generate(schema)}</script>
    </head>
    <body data-page="shop">
      <div id="siteHeader">#{navigation}</div>
      <main>
        <nav class="breadcrumbs shell" aria-label="Breadcrumb"><a href="/">Home</a><span>›</span><a href="/shop">Shop</a><span>›</span><span>#{html(product[:name])}</span></nav>
        <section class="standalone-product shell">
          <div class="standalone-product-media"><img src="/assets/products/#{product[:id]}.jpg" alt="#{html(product[:name])}"></div>
          <div class="standalone-product-copy">
            <p class="kicker">#{html(product[:occasion])} · #{html(product[:category])}</p>
            <h1>#{html(product[:name])}</h1>
            <p class="standalone-price">From UGX #{product[:price].to_s.reverse.scan(/.{1,3}/).join(",").reverse}</p>
            <p class="standalone-description">#{html(product[:description])}</p>
            <div class="product-facts"><span><b>Availability</b> Available to order; final stock confirmed</span><span><b>Presentation</b> Signature wrap and gift card</span><span><b>Delivery</b> Kampala, Wakiso and Entebbe</span></div>
            <button class="btn btn-orange" type="button" data-product="#{product[:id]}">Choose options &amp; add to bag</button>
            <p class="fine-print">Price shown is the base package. Personalisation, package upgrades and delivery are confirmed before payment.</p>
            <div class="product-policy-links"><a href="/contact">Delivery information</a><a href="/payments">Secure payment guide</a><a href="/refund-policy">Refund policy</a></div>
          </div>
        </section>
      </main>
      <div id="siteFooter"></div><div id="storeUi"></div><script src="/app.js"></script>
    </body>
    </html>
  HTML
  File.write(File.join(DIST, "products", "#{product[:id]}.html"), document)
end

feed_products = products.reject do |product|
  product[:category] == "Room Styling" || product[:category] == "Money Gifts" || product[:id] == "kampala-money-bouquet" || product[:id] == "phone-upgrade-gift"
end

feed_items = feed_products.map do |product|
  <<~ITEM
    <item>
      <g:id>GHU-#{html(product[:id].upcase)}</g:id>
      <title>#{html(product[:name])}</title>
      <description>#{html(product[:description])}</description>
      <link>#{BASE_URL}/products/#{html(product[:id])}</link>
      <g:image_link>#{BASE_URL}/assets/products/#{html(product[:id])}.jpg</g:image_link>
      <g:availability>in_stock</g:availability>
      <g:price>#{product[:price]} UGX</g:price>
      <g:condition>new</g:condition>
      <g:brand>GiftHub UG</g:brand>
      <g:product_type>Gifts &gt; #{html(product[:category])}</g:product_type>
      <g:identifier_exists>no</g:identifier_exists>
    </item>
  ITEM
end.join

feed = <<~XML
  <?xml version="1.0" encoding="UTF-8"?>
  <rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
    <channel>
      <title>GiftHub UG Product Catalogue</title>
      <link>#{BASE_URL}</link>
      <description>GiftHub UG gifts available for delivery in Kampala, Uganda.</description>
  #{feed_items}  </channel>
  </rss>
XML
File.write(File.join(DIST, "google-products.xml"), feed)

sitemap_path = File.join(DIST, "sitemap.xml")
sitemap = File.read(sitemap_path).sub(%r{</urlset>\s*\z}, "")
sitemap = sitemap.gsub(/\n\s*<url><loc>#{Regexp.escape(BASE_URL)}\/products\/.*?<\/url>/, "")
product_urls = products.map do |product|
  "  <url><loc>#{BASE_URL}/products/#{product[:id]}</loc><lastmod>2026-10-01</lastmod><changefreq>weekly</changefreq><priority>0.7</priority></url>"
end.join("\n")
File.write(sitemap_path, "#{sitemap.rstrip}\n#{product_urls}\n</urlset>\n")

puts "Generated #{products.length} detail pages and #{feed_products.length} eligible feed items."
