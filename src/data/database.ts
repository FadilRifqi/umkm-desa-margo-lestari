// Database produk UMKM Desa
export interface Product {
  id: string;
  title: string;
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
    description:
      "Piring anyaman dari daun kelapa dan sawit yang ramah lingkungan",
    fullDescription:
      "Piring anyaman ini terbuat dari daun kelapa dan sawit yang dikeringkan dan dianyam dengan tangan oleh pengrajin lokal. Desainnya yang unik dan alami menjadikannya pilihan yang sempurna untuk sajian makanan tradisional. Setiap piring dibuat dengan cinta dan perhatian terhadap detail, menciptakan produk yang tidak hanya fungsional tetapi juga estetis.",
    category: "kerajinan",
    subcategory: "anyaman",
    price: 75000,
    originalPrice: 95000,
    images: [
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
    ],
    thumbnail: "/api/placeholder/400/250",
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
      "Ukuran Standard 30x25cm",
    ],
    specifications: {
      Bahan: "Daun Kelapa dan Sawit",
      Ukuran: "30cm x 25cm x 15cm",
      Berat: "500 gram",
      Warna: "Natural Bambu",
      Finishing: "Vernis Natural",
      Garansi: "6 Bulan",
    },
    tags: ["piring", "anyaman", "keranjang", "eco-friendly", "handmade"],
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
  // Makanan & Minuman - Camilan
  {
    id: "camilan-001",
    title: "Keripik Singkong",
    description: "Keripik singkong renyah",
    fullDescription:
      "Keripik singkong premium yang dibuat dari singkong pilihan segar dari kebun sendiri. Diproses dengan teknologi modern namun tetap mempertahankan cita rasa tradisional.",
    category: "makanan",
    subcategory: "camilan",
    price: 28000,
    originalPrice: 35000,
    images: [
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
    ],
    thumbnail: "/api/placeholder/400/250",
    village: "Desa Sukamaju",
    province: "Lampung",
    seller: "UMKM Keripik Mama Sari",
    sellerContact: {
      whatsapp: "6281234567892",
      shopee: "https://shopee.co.id/keripikmama",
    },
    features: [
      "Singkong Segar Pilihan",
      "Tanpa Pengawet Kimia",
      "Renyah Tahan Lama",
      "Kemasan Kedap Udara",
      "Halal & Higienis",
    ],
    specifications: {
      "Berat Bersih": "200 gram",
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
    price: 180000,
    originalPrice: 220000,
    images: [
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
    ],
    thumbnail: "/api/placeholder/400/250",
    village: "Desa Margo Lestari",
    province: "Sumatra Utara",
    seller: "Pak RT",
    sellerContact: {
      whatsapp: "6281234567893",
      tokopedia: "https://tokopedia.com/maduhutan",
    },
    features: [
      "100% Madu Murni",
      "Tanpa Campuran Gula",
      "Kaya Nutrisi Alami",
      "Kemasan Aman",
    ],
    specifications: {
      Volume: "500ml",
      Jenis: "Multiflora",
      "Kadar Air": "< 20%",
      Kemasan: "Botol Kaca Food Grade",
      Sertifikat: "Halal & Lab Terakreditasi",
      "Masa Simpan": "2 Tahun",
    },
    tags: ["madu", "hutan", "murni", "multiflora", "organik", "sumatra"],
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
  // Fashion & Aksesoris - Tas
  {
    id: "tas-001",
    title: "Tas Anyaman Pandan Etnik Premium",
    description: "Tas anyaman pandan dengan desain etnik modern untuk wanita",
    fullDescription:
      "Tas anyaman pandan premium dengan desain etnik yang memadukan tradisi dan modernitas. Dibuat dari daun pandan pilihan yang diolah dengan teknik khusus agar tahan lama. Dilengkapi dengan furing kain katun dan resleting berkualitas. Cocok untuk acara formal maupun kasual.",
    category: "fashion",
    subcategory: "tas",
    price: 125000,
    originalPrice: 160000,
    images: [
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
    ],
    thumbnail: "/api/placeholder/400/250",
    village: "Desa Margo Lestari",
    province: "Lampung Selatan",
    seller: "Kerajinan Pandan Asri",
    sellerContact: {
      whatsapp: "6281234567894",
      shopee: "https://shopee.co.id/pandanasri",
    },
    features: [
      "Anyaman Pandan Asli",
      "Desain Etnik Modern",
      "Furing Katun Berkualitas",
      "Tali Kulit Sintetis",
      "Resleting YKK",
      "Compartment Terorganisir",
    ],
    specifications: {
      Ukuran: "30cm x 25cm x 12cm",
      "Bahan Utama": "Pandan Wangi",
      Furing: "Katun Canvas",
      Tali: "Kulit Sintetis Premium",
      Warna: "Natural dengan Aksen Coklat",
      Kapasitas: "Laptop 13 inch",
    },
    tags: ["tas", "pandan", "anyaman", "etnik", "wanita", "premium"],
    rating: 4.6,
    reviewCount: 78,
    sold: 134,
    stock: 22,
    weight: "400g",
    dimensions: "30x25x12 cm",
    material: "Pandan Wangi",
    isEcoFriendly: true,
    isBestSeller: false,
    isNewProduct: true,
    createdAt: "2024-03-20",
  },
  {
    id: "dompet-001",
    title: "Dompet Rajut Handmade",
    description: "Dompet rajut unik dengan motif etnik",
    fullDescription:
      "Dompet rajut handmade dengan desain etnik yang unik. Terbuat dari benang katun berkualitas tinggi yang nyaman dan tahan lama. Dilengkapi dengan resleting dan beberapa slot kartu. Cocok untuk penggunaan sehari-hari atau sebagai hadiah.",
    category: "fashion",
    subcategory: "dompet",
    price: 85000,
    originalPrice: 110000,
    images: [
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
    ],
    thumbnail: "/api/placeholder/400/250",
    village: "Desa Margo Lestari",
    province: "Lampung Selatan",
    seller: "Rajutan Cantik",
    sellerContact: {
      whatsapp: "6281234567895",
      shopee: "https://shopee.co.id/rajutcantik",
    },
    features: [
      "100% Katun Asli",
      "Handmade dengan Cinta",
      "Desain Etnik Unik",
      "Slot Kartu Terorganisir",
      "Resleting Berkualitas Tinggi",
      "Ringan dan Praktis",
    ],
    specifications: {
      Ukuran: "20cm x 10cm x 2cm",
      Bahan: "Benang Katun Premium",
      Warna: "Kombinasi Merah, Kuning, Hijau",
      Kapasitas: "5 Slot Kartu + Uang Tunai",
      Garansi: "1 Tahun Kerusakan Jahitan",
    },
    tags: ["dompet", "rajut", "handmade", "etnik", "katun", "unik"],
    rating: 4.5,
    reviewCount: 45,
    sold: 89,
    stock: 30,
    weight: "150g",
    dimensions: "20x10x2 cm",
    material: "Katun Premium",
    isEcoFriendly: true,
    isBestSeller: false,
    isNewProduct: true,
    createdAt: "2024-03-22",
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
