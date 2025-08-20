// Database produk UMKM Desa
export interface Product {
  id: string;
  avatar?: string;
  title: string;
  location: string;
  description: string;
  fullDescription: string;
  category: string;
  subcategory: string;
  price: number;
  originalPrice: number;
  images: string[];
  thumbnail: string;
  village: string;
  province: string;
  seller: string;
  sellerContact: {
    whatsapp: string;
    shopee?: string;
    tokopedia?: string;
    tiktok?: string;
  };
  features: string[];
  specifications: Record<string, string>;
  tags: string[];
  rating: number;
  reviewCount: number;
  sold: number;
  stock: number;
  weight: string;
  dimensions?: string;
  material?: string;
  isEcoFriendly: boolean;
  isBestSeller: boolean;
  isNewProduct: boolean;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  subcategories: Subcategory[];
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
  description: string;
}

// Kategori produk UMKM
export const categories: Category[] = [
  {
    id: "kerajinan",
    name: "Kerajinan Tangan",
    slug: "kerajinan",
    description: "Produk kerajinan tangan asli dari desa Margo Lestari",
    icon: "Palette",
    subcategories: [
      {
        id: "anyaman",
        name: "Anyaman",
        slug: "anyaman",
        description: "Produk anyaman bambu, pandan, rotan",
      },
    ],
  },
  {
    id: "makanan",
    name: "Makanan & Minuman",
    slug: "makanan",
    description:
      "Produk makanan khas daerah dan minuman tradisional Lampung Selatan",
    icon: "Cookie",
    subcategories: [
      {
        id: "camilan",
        name: "Camilan & Keripik",
        slug: "camilan",
        description: "Camilan tradisional dan keripik desa Margo Lestari",
      },
    ],
  },
  {
    id: "pertanian",
    name: "Produk Pertanian",
    slug: "pertanian",
    description: "Hasil pertanian segar dan produk olahan",
    icon: "Wheat",
    subcategories: [
      {
        id: "madu",
        name: "Madu & Hasil Lebah",
        slug: "madu",
        description: "Madu lebah dan tawon murni desa Margo Lestari",
      },
    ],
  },
];

// Database produk lengkap
export const products: Product[] = [
  // Kerajinan Tangan - Anyaman
  {
    id: "anyaman-001",
    title: "Piring Anyaman dari Daun Kelapa dan Sawit",
    location: "https://maps.app.goo.gl/6MNENKf1G1XrTcAeA",
    description: "Piring anyaman",
    fullDescription:
      "Piring ini terbuat dari tulang daun kelapa dan daun sawit yang dkeringkan sebelum akhirnya di anyam. Piring ini dapat digunakan saat ada acara pengajian, yasinan, arisan dan sebagainya. ",
    category: "kerajinan",
    subcategory: "anyaman",
    price: 65000,
    originalPrice: 95000,
    images: ["/images/piring1.png", "/images/piring2.png"],
    thumbnail: "/images/piring1.png",
    village: "Desa Margo Lestari",
    province: "Lampung Selatan",
    seller: "Neneknya Kak Niken",
    sellerContact: {
      whatsapp: "6281234567890",
      shopee: "https://shopee.co.id/bambulestari",
    },
    features: [
      "100% Daun Asli Pilihan",
      "Handmade dengan Teknik Tradisional",
      "Ramah Lingkungan",
      "Tahan Lama & Kuat",
      "Finishing Halus",
      "Simpel dan Praktis",
    ],
    specifications: {
      Bahan: "Daun Kelapa dan Sawit",
      Warna: "Natural",
      Finishing: "Vernis Natural",
    },
    tags: ["piring", "anyaman", "keranjang", "eco-friendly", "handmade"],
    rating: 4.8,
    reviewCount: 127,
    sold: 340,
    stock: 25,
    weight: "250g",
    dimensions: "30x25x15 cm",
    material: "Daun Kelapa dan Sawit",
    isEcoFriendly: true,
    isBestSeller: true,
    isNewProduct: false,
    createdAt: "2024-01-15",
  },
  {
    id: "kerajinan-02",
    title: "Teko dan Satu Set Alat Minum Bambu",
    price: 100000,
    originalPrice: 120000,
    location: "https://maps.app.goo.gl/6MNENKf1G1XrTcAeA",
    description: "Teko dan cangkir dari bambu",
    fullDescription:
      "Satu set alat minum, asa teko dan cangkir yang sudah di bersihkan dan di vernis agar tahan lama dan pastinya aman untuk digunakan saat asa acara di rumah",
    category: "kerajinan",
    subcategory: "anyaman",
    images: ["/images/minum.jpg"],
    thumbnail: "/images/minum.jpg",
    village: "Desa Margo Lestari",
    province: "Lampung Selatan",
    seller: "Neneknya Kak Niken",
    sellerContact: {
      whatsapp: "6281234567890",
      shopee: "https://shopee.co.id/bambulestari",
    },
    features: [
      "100% Bambu Asli Pilihan",
      "Handmade dengan Teknik Tradisional",
      "Ramah Lingkungan",
      "Tahan Lama & Kuat",
      "Finishing Halus",
    ],
    specifications: {
      Bahan: "Bambu",
      Ukuran: "30cm x 25cm x 15cm",
      Berat: "500 gram",
      Warna: "Natural Bambu",
      Finishing: "Vernis Natural",
      Garansi: "6 Bulan",
    },
    tags: ["alat minum", "teko", "gelas", "bambu", "eco-friendly", "handmade"],
    rating: 4.8,
    reviewCount: 127,
    sold: 340,
    stock: 25,
    weight: "500g",
    dimensions: "30x25x15 cm",
    material: "Daun Kelapa dan Sawit",
    isEcoFriendly: true,
    isBestSeller: true,
    isNewProduct: false,
    createdAt: "2024-01-15",
  },
  {
    id: "anyaman-03",
    title: "Tas Rajut",
    price: 300000,
    originalPrice: 350000,
    location: "https://maps.app.goo.gl/6MNENKf1G1XrTcAeA",
    description: "Tas rajutan tangan",
    fullDescription:
      "Tas ini terbuat dari benang rajut, yang di rajut langsung menggunakan tagan dan teknik tertentu agar mendspatkan corak sesuai keinginan. Tas rajut ini sudah pasti kuat karena sudah dilapisi kain dan suddah ddiikag dengan teknik yang ssuai",
    category: "kerajinan",
    subcategory: "anyaman",
    images: ["/images/tas_rajut.jpg"],
    thumbnail: "/images/tas_rajut.jpg",
    village: "Desa Margo Lestari",
    province: "Lampung Selatan",
    seller: "Neneknya Kak Niken",
    sellerContact: {
      whatsapp: "6281234567890",
      shopee: "https://shopee.co.id/bambulestari",
    },
    features: ["Homemade dengan Teknik Tradisional"],
    specifications: {
      Bahan: "Benang Rajut",
      Warna: "Custom",
    },
    tags: ["tas", "rajut", "eco-friendly", "handmade"],
    rating: 4.8,
    reviewCount: 127,
    sold: 340,
    stock: 25,
    weight: "500g",
    dimensions: "30x25x15 cm",
    material: "Benang Rajut",
    isEcoFriendly: true,
    isBestSeller: true,
    isNewProduct: false,
    createdAt: "2024-01-15",
  },
  {
    id: "anyaman-04",
    title: "Dompet Manik",
    price: 25000,
    originalPrice: 30000,
    location: "https://maps.app.goo.gl/6MNENKf1G1XrTcAeA",
    description: "Dompet manik-manik",
    fullDescription:
      "Dompet ini terbuat dari manik-manik dan di sambungin menggunakan benang nilon yang diikat secara kuat agar tidak mudah putus",
    category: "kerajinan",
    subcategory: "anyaman",
    images: ["/images/dompet.jpg"],
    thumbnail: "/images/dompet.jpg",
    village: "Desa Margo Lestari",
    province: "Lampung Selatan",
    seller: "Neneknya Kak Niken",
    sellerContact: {
      whatsapp: "6281234567890",
      shopee: "https://shopee.co.id/bambulestari",
    },
    features: ["Homemade dengan Teknik Tradisional"],
    specifications: {
      Bahan: "Manik-manik",
      Warna: "Custom",
    },
    tags: ["dompet", "custom", "eco-friendly", "handmade"],
    rating: 4.8,
    reviewCount: 127,
    sold: 340,
    stock: 25,
    weight: "500g",
    dimensions: "30x25x15 cm",
    material: "manik-manik",
    isEcoFriendly: true,
    isBestSeller: true,
    isNewProduct: false,
    createdAt: "2024-01-15",
  },
  {
    id: "anyaman-05",
    title: "Wadah Tissue",
    price: 75000,
    originalPrice: 80000,
    location: "https://maps.app.goo.gl/6MNENKf1G1XrTcAeA",
    description: "Kotak tissue",
    fullDescription:
      "Kotak tissue ini terbuat dari benang nilon dan manik-manik yang disusun secara rapi dan tersrtuktur",
    category: "kerajinan",
    subcategory: "anyaman",
    images: ["/images/tissue.jpg"],
    thumbnail: "/images/tissue.jpg",
    village: "Desa Margo Lestari",
    province: "Lampung Selatan",
    seller: "Neneknya Kak Niken",
    sellerContact: {
      whatsapp: "6281234567890",
      shopee: "https://shopee.co.id/bambulestari",
    },
    features: ["Homemade dengan Teknik Tradisional"],
    specifications: {
      Bahan: "Benang Rajut",
      Warna: "Custom",
    },
    tags: ["wadah tissue", "rajut", "custom", "eco-friendly", "handmade"],
    rating: 4.8,
    reviewCount: 127,
    sold: 340,
    stock: 25,
    weight: "500g",
    dimensions: "30x25x15 cm",
    material: "benang rajut",
    isEcoFriendly: true,
    isBestSeller: true,
    isNewProduct: false,
    createdAt: "2024-01-15",
  },
  {
    id: "anyaman-06",
    title: "Tas Manik",
    price: 150000,
    originalPrice: 175000,
    location: "https://maps.app.goo.gl/6MNENKf1G1XrTcAeA",
    description: "Tas manik -manik",
    fullDescription: "",
    category: "kerajinan",
    subcategory: "anyaman",
    images: ["/images/tas_manik.jpg"],
    thumbnail: "/images/tas_manik.jpg",
    village: "Desa Margo Lestari",
    province: "Lampung Selatan",
    seller: "Neneknya Kak Niken",
    sellerContact: {
      whatsapp: "6281234567890",
      shopee: "https://shopee.co.id/bambulestari",
    },
    features: ["Homemade dengan Teknik Tradisional"],
    specifications: {
      Bahan: "Manik-manik",
      Warna: "Custom",
    },
    tags: ["tas", "manik manik", "custom", "eco-friendly", "handmade"],
    rating: 4.8,
    reviewCount: 127,
    sold: 340,
    stock: 25,
    weight: "500g",
    dimensions: "30x25x15 cm",
    material: "manik-manik",
    isEcoFriendly: true,
    isBestSeller: true,
    isNewProduct: false,
    createdAt: "2024-01-15",
  },
  // Makanan & Minuman - Camilan
  {
    id: "camilan-001",
    title: "Keripik Pisang",
    description: "Keripik pisang renyah berkualitas dan bersertifikat nasional",
    avatar: "/images/logo.jpg",
    location: "https://maps.app.goo.gl/B5Q2eNC8LaotP6Lc6",
    fullDescription:
      "Keripik pisang premium yang dibuat oleh UMKM Desa Margo Lestari dengan kualitas terbaik dan bersertifikat dengan banyak varian rasa",
    category: "makanan",
    subcategory: "camilan",
    price: 15000,
    originalPrice: 20000,
    images: ["/images/keripikpisang.jpg"],
    thumbnail: "/images/keripikpisang.jpg",
    village: "Desa Margo Lestari",
    province: "Lampung Selatan",
    seller: "Keripik KMJ",
    sellerContact: {
      whatsapp: "6281234567892",
      tiktok: "https://www.tiktok.com/@keripikmama",
    },
    features: [
      "Pisang Segar Pilihan",
      "Tanpa Pengawet Kimia",
      "Renyah Tahan Lama",
      "Kemasan Kedap Udara",
      "Halal & Higienis",
    ],
    specifications: {
      "Berat Bersih": "150 gram",
      Komposisi: "Pisang, Minyak Kelapa, Bumbu Balado",
      "Masa Simpan": "6 Bulan",
      Kemasan: "Standing Pouch Aluminium",
      Sertifikat: "Halal MUI & PIRT",
      Asal: "Lampung",
    },
    tags: [
      "keripik",
      "pisang",
      "original",
      "balado",
      "pedas",
      "camilan",
      "halal",
    ],
    rating: 4.7,
    reviewCount: 203,
    sold: 363,
    stock: 45,
    weight: "250g",
    material: "Pisang ",
    isEcoFriendly: true,
    isBestSeller: true,
    isNewProduct: false,
    createdAt: "2024-01-20",
  },
  {
    id: "camilan-002",
    title: "Keripik Singkong",
    avatar: "/images/logo.jpg",
    description:
      "Keripik singkong renyah berkualitas dan bersertifikat nasional",
    location: "https://maps.app.goo.gl/B5Q2eNC8LaotP6Lc6",
    fullDescription:
      "Keripik singkong premium yang dibuat oleh UMKM Desa Margo Lestari dengan kualitas terbaik dan bersertifikat dengan banyak varian rasa",
    category: "makanan",
    subcategory: "camilan",
    price: 15000,
    originalPrice: 20000,
    images: ["/images/keripiksingkong.jpg"],
    thumbnail: "/images/keripiksingkong.jpg",
    village: "Desa Margo Lestari",
    province: "Lampung Selatan",
    seller: "Keripik KMJ",
    sellerContact: {
      whatsapp: "6281234567892",
      tiktok: "https://www.tiktok.com/@keripikmama",
    },
    features: [
      "Singkong Segar Pilihan",
      "Tanpa Pengawet Kimia",
      "Renyah Tahan Lama",
      "Kemasan Kedap Udara",
      "Halal & Higienis",
    ],
    specifications: {
      "Berat Bersih": "150 gram",
      Komposisi: "Singkong, Minyak Kelapa, Bumbu Balado",
      "Masa Simpan": "6 Bulan",
      Kemasan: "Standing Pouch Aluminium",
      Sertifikat: "Halal MUI & PIRT",
      Asal: "Lampung",
    },
    tags: ["keripik", "singkong", "balado", "pedas", "camilan", "halal"],
    rating: 4.7,
    reviewCount: 203,
    sold: 567,
    stock: 45,
    weight: "250g",
    material: "Singkong Organik",
    isEcoFriendly: true,
    isBestSeller: true,
    isNewProduct: false,
    createdAt: "2024-01-20",
  },
  {
    id: "camilan-003",
    title: "Keripik Ubi Ungu",
    avatar: "/images/logo.jpg",
    description:
      "Keripik ubi ungu renyah berkualitas dan bersertifikat nasional",
    location: "https://maps.app.goo.gl/B5Q2eNC8LaotP6Lc6",
    fullDescription:
      "Keripik ubi ungu premium yang dibuat oleh UMKM Desa Margo Lestari dengan kualitas terbaik dan bersertifikat dengan banyak varian rasa",
    category: "makanan",
    subcategory: "camilan",
    price: 15000,
    originalPrice: 20000,
    images: ["/images/keripikubiungu.jpg"],
    thumbnail: "/images/keripikubiungu.jpg",
    village: "Desa Margo Lestari",
    province: "Lampung Selatan",
    seller: "Keripik KMJ",
    sellerContact: {
      whatsapp: "6281234567892",
      tiktok: "https://www.tiktok.com/@keripikmama",
    },
    features: [
      "Singkong Segar Pilihan",
      "Tanpa Pengawet Kimia",
      "Renyah Tahan Lama",
      "Kemasan Kedap Udara",
      "Halal & Higienis",
    ],
    specifications: {
      "Berat Bersih": "150 gram",
      Komposisi: "Singkong, Minyak Kelapa, Bumbu Balado",
      "Masa Simpan": "6 Bulan",
      Kemasan: "Standing Pouch Aluminium",
      Sertifikat: "Halal MUI & PIRT",
      Asal: "Lampung",
    },
    tags: [
      "keripik",
      "ubi ungu",
      "original",
      "balado",
      "pedas",
      "camilan",
      "halal",
    ],
    rating: 4.7,
    reviewCount: 203,
    sold: 567,
    stock: 45,
    weight: "250g",
    material: "Ubi Ungu",
    isEcoFriendly: true,
    isBestSeller: true,
    isNewProduct: false,
    createdAt: "2024-01-20",
  },
  {
    id: "camilan-004",
    title: "Keripik Talas",
    avatar: "/images/logo.jpg",
    description: "Keripik talas renyah berkualitas dan bersertifikat nasional",
    location: "https://maps.app.goo.gl/B5Q2eNC8LaotP6Lc6",
    fullDescription:
      "Keripik talas premium yang dibuat oleh UMKM Desa Margo Lestari dengan kualitas terbaik dan bersertifikat dengan banyak varian rasa",
    category: "makanan",
    subcategory: "camilan",
    price: 15000,
    originalPrice: 20000,
    images: ["/images/keripiktalas.jpg"],
    thumbnail: "/images/keripiktalas.jpg",
    village: "Desa Margo Lestari",
    province: "Lampung Selatan",
    seller: "Keripik KMJ",
    sellerContact: {
      whatsapp: "6281234567892",
      tiktok: "https://www.tiktok.com/@keripikmama",
    },
    features: [
      "Talas Segar Pilihan",
      "Tanpa Pengawet Kimia",
      "Renyah Tahan Lama",
      "Kemasan Kedap Udara",
      "Halal & Higienis",
    ],
    specifications: {
      "Berat Bersih": "150 gram",
      Komposisi: "Talas",
      "Masa Simpan": "6 Bulan",
      Kemasan: "Standing Pouch Aluminium",
      Sertifikat: "Halal MUI & PIRT",
      Asal: "Lampung",
    },
    tags: [
      "keripik",
      "talas",
      "original",
      "balado",
      "pedas",
      "camilan",
      "halal",
    ],
    rating: 4.7,
    reviewCount: 203,
    sold: 567,
    stock: 45,
    weight: "250g",
    material: "Singkong Organik",
    isEcoFriendly: false,
    isBestSeller: true,
    isNewProduct: false,
    createdAt: "2024-01-20",
  },
  {
    id: "madu-001",
    title: "Madu Lebah dan Tawon Murni",
    description: "Madu hutan murni 100% dari lebah dan tawon pilihan",
    fullDescription:
      "Madu hutan yang dipanen dari lebah dan tawon ternak dengan metode ramah lingkungan. Tanpa campuran gula atau bahan pengawet. Kaya akan nutrisi dan enzim alami. Proses pemanenan dilakukan dengan metode tradisional yang ramah lingkungan. Telah lulus uji laboratorium dan memiliki sertifikat halal.",
    category: "pertanian",
    subcategory: "madu",
    price: 200000,
    location: "https://maps.app.goo.gl/WPRW1ZHfcfHzsfC5A",
    originalPrice: 220000,
    images: ["/images/madu.png"],
    thumbnail: "/images/madu.png",
    village: "Desa Margo Lestari",
    province: "Lampung Selatan",
    seller: "Muhdarun",
    sellerContact: {
      whatsapp: "6285788760089",
    },
    features: [
      "100% Madu Murni",
      "Tanpa Campuran Gula",
      "Kaya Nutrisi Alami",
      "Kemasan Aman",
    ],
    specifications: {
      Volume: "500ml",
      Jenis: "Monofloral",
      "Kadar Air": "< 20%",
      Kemasan: "Botol Kaca",
      Sertifikat: "",
      "Masa Simpan": "Sepanjang Masa",
    },
    tags: ["madu", "hutan", "murni", "monofloral", "organik", "sumatra"],
    rating: 4.9,
    reviewCount: 145,
    sold: 289,
    stock: 18,
    weight: "650g",
    material: "Madu Alami",
    isEcoFriendly: true,
    isBestSeller: true,
    isNewProduct: false,
    createdAt: "2024-03-05",
  },
];

// Fungsi helper untuk mencari produk
export const getProductsByCategory = (categorySlug: string) => {
  return products.filter((product) => product.category === categorySlug);
};

export const getProductsBySubcategory = (subcategorySlug: string) => {
  return products.filter((product) => product.subcategory === subcategorySlug);
};

export const getProductById = (id: string) => {
  return products.find((product) => product.id === id);
};

export const getCategoryBySlug = (slug: string) => {
  return categories.find((category) => category.slug === slug);
};

export const getSubcategoryBySlug = (
  categorySlug: string,
  subcategorySlug: string
) => {
  const category = getCategoryBySlug(categorySlug);
  return category?.subcategories.find((sub) => sub.slug === subcategorySlug);
};

export const searchProducts = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.title.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)) ||
      product.village.toLowerCase().includes(lowercaseQuery)
  );
};

export const getFeaturedProducts = () => {
  return products.filter(
    (product) => product.isBestSeller || product.isNewProduct
  );
};

export const getRelatedProducts = (
  currentProductId: string,
  category: string,
  limit: number = 4
) => {
  return products
    .filter(
      (product) =>
        product.id !== currentProductId && product.category === category
    )
    .slice(0, limit);
};
