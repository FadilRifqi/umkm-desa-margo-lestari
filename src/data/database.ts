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
    description: "Produk kerajinan tangan asli dari berbagai desa",
    icon: "Palette",
    subcategories: [
      {
        id: "anyaman",
        name: "Anyaman",
        slug: "anyaman",
        description: "Produk anyaman bambu, pandan, rotan",
      },
      {
        id: "ukiran",
        name: "Ukiran Kayu",
        slug: "ukiran",
        description: "Ukiran kayu tradisional",
      },
      {
        id: "batik",
        name: "Batik & Tenun",
        slug: "batik",
        description: "Batik tulis dan tenun tradisional",
      },
      {
        id: "keramik",
        name: "Keramik & Gerabah",
        slug: "keramik",
        description: "Keramik dan gerabah tradisional",
      },
    ],
  },
  {
    id: "makanan",
    name: "Makanan & Minuman",
    slug: "makanan",
    description: "Produk makanan khas daerah dan minuman tradisional",
    icon: "Cookie",
    subcategories: [
      {
        id: "camilan",
        name: "Camilan & Keripik",
        slug: "camilan",
        description: "Camilan tradisional dan keripik",
      },
      {
        id: "bumbu",
        name: "Bumbu & Rempah",
        slug: "bumbu",
        description: "Bumbu dapur dan rempah-rempah",
      },
      {
        id: "minuman",
        name: "Minuman Tradisional",
        slug: "minuman",
        description: "Minuman herbal dan tradisional",
      },
      {
        id: "kue",
        name: "Kue & Oleh-oleh",
        slug: "kue",
        description: "Kue tradisional dan oleh-oleh khas",
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
        id: "sayuran",
        name: "Sayuran Organik",
        slug: "sayuran",
        description: "Sayuran segar organik",
      },
      {
        id: "buah",
        name: "Buah-buahan",
        slug: "buah",
        description: "Buah segar dari kebun",
      },
      {
        id: "beras",
        name: "Beras & Padi",
        slug: "beras",
        description: "Beras berkualitas dari petani",
      },
      {
        id: "madu",
        name: "Madu & Hasil Lebah",
        slug: "madu",
        description: "Madu murni dan produk lebah",
      },
    ],
  },
  {
    id: "fashion",
    name: "Fashion & Aksesoris",
    slug: "fashion",
    description: "Pakaian dan aksesoris tradisional",
    icon: "Shirt",
    subcategories: [
      {
        id: "pakaian",
        name: "Pakaian Tradisional",
        slug: "pakaian",
        description: "Pakaian adat dan tradisional",
      },
      {
        id: "tas",
        name: "Tas & Dompet",
        slug: "tas",
        description: "Tas dan dompet handmade",
      },
      {
        id: "perhiasan",
        name: "Perhiasan",
        slug: "perhiasan",
        description: "Perhiasan tradisional",
      },
      {
        id: "sepatu",
        name: "Sepatu & Sandal",
        slug: "sepatu",
        description: "Alas kaki tradisional",
      },
    ],
  },
];

// Database produk lengkap
export const products: Product[] = [
  // Kerajinan Tangan - Anyaman
  {
    id: "anyaman-001",
    title: "Keranjang Anyaman Bambu Premium",
    description:
      "Keranjang anyaman bambu berkualitas tinggi untuk keperluan rumah tangga",
    fullDescription:
      "Keranjang anyaman bambu premium yang dibuat dengan teknik tradisional turun temurun. Terbuat dari bambu pilihan yang telah dikeringkan dengan sempurna, sehingga tahan lama dan tidak mudah lapuk. Cocok untuk menyimpan buah, sayuran, atau sebagai dekorasi rumah. Setiap keranjang dibuat dengan ketelitian tinggi oleh pengrajin berpengalaman dari Desa Cikarang.",
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
    village: "Desa Cikarang",
    province: "Jawa Barat",
    seller: "Kelompok Tani Bambu Lestari",
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
      Bahan: "Bambu Betung Pilihan",
      Ukuran: "30cm x 25cm x 15cm",
      Berat: "500 gram",
      Warna: "Natural Bambu",
      Finishing: "Vernis Natural",
      Garansi: "6 Bulan",
    },
    tags: ["bambu", "anyaman", "keranjang", "eco-friendly", "handmade"],
    rating: 4.8,
    reviewCount: 127,
    sold: 340,
    stock: 25,
    weight: "500g",
    dimensions: "30x25x15 cm",
    material: "Bambu Betung",
    isEcoFriendly: true,
    isBestSeller: true,
    isNewProduct: false,
    createdAt: "2024-01-15",
  },
  {
    id: "batik-001",
    title: "Batik Tulis Motif Parang Premium",
    description:
      "Batik tulis asli dengan motif parang klasik dari pengrajin Solo",
    fullDescription:
      "Batik tulis premium dengan motif parang yang merupakan salah satu motif klasik Jawa. Dibuat dengan teknik tulis tangan menggunakan canting oleh pengrajin berpengalaman puluhan tahun. Kain katun berkualitas tinggi dengan pewarna alami yang ramah lingkungan. Setiap helai batik memiliki keunikan tersendiri karena dibuat secara manual.",
    category: "kerajinan",
    subcategory: "batik",
    price: 280000,
    originalPrice: 350000,
    images: [
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
      "/api/placeholder/600/400",
    ],
    thumbnail: "/api/placeholder/400/250",
    village: "Desa Laweyan",
    province: "Jawa Tengah",
    seller: "Batik Tulis Laweyan Heritage",
    sellerContact: {
      whatsapp: "6281234567891",
      shopee: "https://shopee.co.id/batiklaweyan",
      tokopedia: "https://tokopedia.com/batiklaweyan",
    },
    features: [
      "Batik Tulis Tangan Asli",
      "Motif Parang Klasik",
      "Kain Katun Premium",
      "Pewarna Alami",
      "Sertifikat Keaslian",
      "Kemasan Eksklusif",
    ],
    specifications: {
      Bahan: "Katun Prima",
      Ukuran: "2.5m x 1.1m",
      Teknik: "Tulis Tangan",
      Motif: "Parang Rusak",
      Pewarna: "Alami Indigo & Soga",
      Asal: "Solo, Jawa Tengah",
    },
    tags: ["batik", "tulis", "parang", "solo", "heritage", "premium"],
    rating: 4.9,
    reviewCount: 89,
    sold: 156,
    stock: 12,
    weight: "300g",
    dimensions: "250x110 cm",
    material: "Katun Prima",
    isEcoFriendly: true,
    isBestSeller: true,
    isNewProduct: false,
    createdAt: "2024-02-10",
  },
  // Makanan & Minuman - Camilan
  {
    id: "camilan-001",
    title: "Keripik Singkong Balado Pedas Manis",
    description:
      "Keripik singkong renyah dengan bumbu balado pedas manis khas Minang",
    fullDescription:
      "Keripik singkong premium yang dibuat dari singkong pilihan segar dari kebun sendiri. Diproses dengan teknologi modern namun tetap mempertahankan cita rasa tradisional. Bumbu balado dibuat dari cabai merah berkualitas tinggi dengan komposisi pedas manis yang pas. Tanpa pengawet berbahaya dan menggunakan minyak kelapa murni.",
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
      "Bumbu Balado Asli",
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
    title: "Madu Hutan Murni Multiflora",
    description: "Madu hutan murni 100% dari lebah liar hutan Sumatra",
    fullDescription:
      "Madu hutan murni yang dipanen langsung dari sarang lebah liar di hutan Sumatra. Tanpa campuran gula atau bahan pengawet. Kaya akan nutrisi dan enzim alami. Proses pemanenan dilakukan dengan metode tradisional yang ramah lingkungan. Telah lulus uji laboratorium dan memiliki sertifikat halal.",
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
    village: "Desa Rimba Jaya",
    province: "Sumatra Utara",
    seller: "Madu Hutan Nusantara",
    sellerContact: {
      whatsapp: "6281234567893",
      tokopedia: "https://tokopedia.com/maduhutan",
    },
    features: [
      "100% Madu Murni",
      "Tanpa Campuran Gula",
      "Kaya Nutrisi Alami",
      "Botol Kaca Premium",
      "Sertifikat Lab",
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
    village: "Desa Pandanwangi",
    province: "Jawa Timur",
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
