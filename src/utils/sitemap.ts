import { products, categories } from "@/data/database";

export function generateSitemap() {
  const baseUrl = "https://www.umkmmargolestari.my.id";
  const currentDate = new Date().toISOString().split("T")[0];

  const staticPages = [
    { url: "", priority: "1.0", changefreq: "daily" },
    { url: "/produk", priority: "0.9", changefreq: "daily" },
    { url: "/kategori", priority: "0.8", changefreq: "weekly" },
    { url: "/tentang", priority: "0.5", changefreq: "monthly" },
    { url: "/kontak", priority: "0.5", changefreq: "monthly" },
  ];

  const categoryPages = categories.map((category) => ({
    url: `/kategori/${category.slug}`,
    priority: "0.7",
    changefreq: "weekly",
  }));

  const subcategoryPages = categories.flatMap((category) =>
    category.subcategories.map((sub) => ({
      url: `/kategori/${category.slug}/${sub.slug}`,
      priority: "0.6",
      changefreq: "weekly",
    }))
  );

  const productPages = products.map((product) => ({
    url: `/produk/${product.id}`,
    priority: "0.8",
    changefreq: "weekly",
  }));

  const allPages = [
    ...staticPages,
    ...categoryPages,
    ...subcategoryPages,
    ...productPages,
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return sitemap;
}

export function generateRobotsTxt() {
  const baseUrl = "https://www.umkmmargolestari.my.id";

  return `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay for polite crawling
Crawl-delay: 1

# Allow search engines to crawl product images
User-agent: Googlebot
Allow: /images/
Allow: /api/placeholder/

# Block admin or private areas (if any in the future)
Disallow: /admin/
Disallow: /private/
Disallow: /*.json$

# Allow all other content
Allow: /
Allow: /produk/
Allow: /kategori/
Allow: /tentang
Allow: /kontak`;
}
