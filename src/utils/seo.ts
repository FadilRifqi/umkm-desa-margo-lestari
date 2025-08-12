import type { Product } from "@/data/database";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateProductSchema(product: Product, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.fullDescription,
    image: product.images,
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: product.seller,
    },
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Person",
        name: product.seller,
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    category: product.category,
    url: url,
    manufacturer: {
      "@type": "Organization",
      name: product.seller,
      address: {
        "@type": "PostalAddress",
        addressLocality: product.village,
        addressRegion: product.province,
        addressCountry: "ID",
      },
    },
  };
}

export function generateCategorySchema(
  categoryName: string,
  products: Product[],
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Kategori ${categoryName} - UMKM Desa Margo Lestari`,
    description: `Koleksi produk ${categoryName} terbaik dari UMKM Desa Margo Lestari, Lampung Selatan`,
    url: url,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: products.length,
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: product.title,
          url: `/produk/${product.id}`,
          image: product.thumbnail,
          offers: {
            "@type": "Offer",
            price: product.price,
            priceCurrency: "IDR",
          },
        },
      })),
    },
  };
}

export function generateBreadcrumbSchema(breadcrumbs: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "UMKM Desa Margo Lestari",
    description:
      "Marketplace produk UMKM unggulan dari Desa Margo Lestari, Lampung Selatan",
    url: "https://www.umkmmargolestari.my.id",
    logo: "https://www.umkmmargolestari.my.id/logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Margo Lestari",
      addressRegion: "Lampung Selatan",
      addressCountry: "ID",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      areaServed: "ID",
      availableLanguage: "Indonesian",
    },
    sameAs: [
      "https://www.facebook.com/umkm-desa-margo-lestari",
      "https://www.instagram.com/umkm_desa_margo_lestari",
    ],
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "UMKM Desa Margo Lestari",
    description:
      "Pusat produk UMKM unggulan dari Desa Margo Lestari, Lampung Selatan",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Margo Lestari",
      addressRegion: "Lampung Selatan",
      addressCountry: "Indonesia",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -5.424,
      longitude: 105.266,
    },
    url: "https://www.umkmmargolestari.my.id",
    telephone: "+628123456789",
    openingHours: "Mo-Su 08:00-17:00",
    servesCuisine: "Indonesian",
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
  };
}
