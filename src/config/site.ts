export const siteConfig = {
  name: import.meta.env.VITE_SITE_NAME || "UMKM Desa Margo Lestari",
  description:
    import.meta.env.VITE_SITE_DESCRIPTION ||
    "Temukan produk UMKM terbaik dari Desa Margo Lestari, Lampung Selatan. Kerajinan tangan, makanan tradisional, produk pertanian organik, dan fashion lokal berkualitas tinggi langsung dari pengrajin desa.",
  url: import.meta.env.VITE_SITE_URL || "https://www.umkmmargolestari.my.id",

  social: {
    facebook:
      import.meta.env.VITE_FACEBOOK_URL ||
      "https://www.facebook.com/umkm-desa-margo-lestari",
    instagram:
      import.meta.env.VITE_INSTAGRAM_URL ||
      "https://www.instagram.com/umkm_desa_margo_lestari",
    twitter: import.meta.env.VITE_TWITTER_HANDLE || "@umkm_margo_lestari",
  },

  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL || "info@umkmmargolestari.my.id",
    whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || "+628123456789",
  },

  location: {
    village: import.meta.env.VITE_VILLAGE_NAME || "Margo Lestari",
    province: import.meta.env.VITE_PROVINCE || "Lampung Selatan",
    country: import.meta.env.VITE_COUNTRY || "Indonesia",
    latitude: import.meta.env.VITE_LATITUDE || "-5.424",
    longitude: import.meta.env.VITE_LONGITUDE || "105.266",
  },

  analytics: {
    googleId: import.meta.env.VITE_GA_TRACKING_ID,
    googleSiteVerification: import.meta.env.VITE_GOOGLE_SITE_VERIFICATION,
    facebookAppId: import.meta.env.VITE_FACEBOOK_APP_ID,
  },
};
