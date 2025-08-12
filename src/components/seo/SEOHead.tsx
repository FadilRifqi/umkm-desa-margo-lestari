interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  schemaData?: object;
}

interface SEODefaults {
  siteName: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultKeywords: string;
  defaultImage: string;
  siteUrl: string;
  twitterHandle: string;
  locale: string;
  region: string;
  placeName: string;
  coordinates: string;
}

const seoDefaults: SEODefaults = {
  siteName: "UMKM Desa Margo Lestari",
  defaultTitle: "UMKM Desa Margo Lestari | Produk Unggulan Lampung Selatan",
  defaultDescription:
    "Temukan produk UMKM terbaik dari Desa Margo Lestari, Lampung Selatan. Kerajinan tangan, makanan tradisional, produk pertanian organik, dan fashion lokal berkualitas tinggi langsung dari pengrajin desa.",
  defaultKeywords:
    "UMKM Desa Margo Lestari, UMKM Lampung Selatan, kerajinan tangan lampung, makanan tradisional lampung, produk pertanian organik, fashion lokal, umkm desa, margo lestari, lampung, produk unggulan desa",
  defaultImage: "/og-image.jpg",
  siteUrl: "https://www.umkmmargolestari.my.id",
  twitterHandle: "@umkm_margo_lestari",
  locale: "id_ID",
  region: "ID-LA",
  placeName: "Margo Lestari, Lampung Selatan",
  coordinates: "-5.424,105.266",
};

export function SEOHead({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  schemaData,
}: SEOProps) {
  const seoTitle = title
    ? `${title} | ${seoDefaults.siteName}`
    : seoDefaults.defaultTitle;
  const seoDescription = description || seoDefaults.defaultDescription;
  const seoKeywords = keywords
    ? `${keywords}, ${seoDefaults.defaultKeywords}`
    : seoDefaults.defaultKeywords;
  const seoImage = image || seoDefaults.defaultImage;
  const seoUrl = url || seoDefaults.siteUrl;
  const fullImageUrl = seoImage.startsWith("http")
    ? seoImage
    : `${seoDefaults.siteUrl}${seoImage}`;

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content={seoDefaults.siteName} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Indonesian" />
      <meta name="geo.region" content={seoDefaults.region} />
      <meta name="geo.placename" content={seoDefaults.placeName} />
      <meta name="geo.position" content={seoDefaults.coordinates} />
      <meta name="ICBM" content={seoDefaults.coordinates} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:site_name" content={seoDefaults.siteName} />
      <meta property="og:locale" content={seoDefaults.locale} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={seoTitle} />
      <meta property="twitter:description" content={seoDescription} />
      <meta property="twitter:image" content={fullImageUrl} />
      <meta property="twitter:site" content={seoDefaults.twitterHandle} />

      {/* Canonical URL */}
      <link rel="canonical" href={seoUrl} />

      {/* Schema.org structured data */}
      {schemaData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      )}
    </>
  );
}
