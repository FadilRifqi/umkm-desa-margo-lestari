import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Star,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Play,
  MapPin,
  Award,
  Heart,
  Leaf,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { SEOHead } from "@/components/seo/SEOHead";
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
} from "@/utils/seo";
import { siteConfig } from "@/config/site";

// Sample data for carousel - Village UMKM Products get products from database.ts
import { products } from "@/data/database";
// show 3 of random products from products array
const randomProducts = products.sort(() => 0.5 - Math.random()).slice(0, 3);
// show in carousel

// Sample reviews data - Village UMKM Customers
const reviews = [
  {
    id: 1,
    name: "Ibu Sari Wulandari",
    business: "Pengrajin Anyaman Bambu",
    village: "Desa Cikarang",
    avatar: "/api/placeholder/64/64",
    rating: 5,
    review:
      "Produk anyaman bambu saya sekarang dikenal sampai Jakarta! Kualitas bagus dan pengiriman cepat. Terima kasih tim marketplace!",
    date: "2 minggu lalu",
  },
  {
    id: 2,
    name: "Pak Sutrisno",
    business: "Batik Tulis Tradisional",
    village: "Desa Laweyan",
    avatar: "/api/placeholder/64/64",
    rating: 5,
    review:
      "Batik tulis saya sekarang bisa dijual online ke seluruh Indonesia. Platform ini sangat membantu UMKM desa seperti saya.",
    date: "1 bulan lalu",
  },
  {
    id: 3,
    name: "Ibu Marlina",
    business: "Keripik Singkong Sukamaju",
    village: "Desa Sukamaju",
    avatar: "/api/placeholder/64/64",
    rating: 5,
    review:
      "Pesanan keripik singkong meningkat pesat setelah bergabung. Sekarang saya bisa mengirim ke seluruh Nusantara!",
    date: "3 minggu lalu",
  },
  {
    id: 4,
    name: "Pak Hendra",
    business: "Madu Hutan Rimba Jaya",
    village: "Desa Rimba Jaya",
    avatar: "/api/placeholder/64/64",
    rating: 5,
    review:
      "Madu hutan murni saya sekarang dipercaya konsumen karena sertifikat kualitas yang jelas. Penjualan naik 400%!",
    date: "1 bulan lalu",
  },
];

// Product advantages data - Village UMKM Focus
const advantages = [
  {
    icon: Heart,
    title: "Produk Berkualitas Tinggi",
    description:
      "Setiap produk dipilih langsung dari pengrajin terbaik di desa dengan standar kualitas tinggi dan autentik.",
  },
  {
    icon: Leaf,
    title: "Ramah Lingkungan",
    description:
      "Mendukung produk berkelanjutan dari bahan alami dan proses produksi yang ramah lingkungan.",
  },
  {
    icon: MapPin,
    title: "Langsung dari Desa",
    description:
      "Produk asli dari berbagai desa di Indonesia dengan keunikan dan cita rasa khas daerah masing-masing.",
  },
  {
    icon: Users,
    title: "Pemberdayaan UMKM",
    description:
      "Setiap pembelian membantu meningkatkan ekonomi desa dan pemberdayaan masyarakat lokal.",
  },
  {
    icon: Award,
    title: "Sertifikat Kualitas",
    description:
      "Semua produk telah melalui kontrol kualitas ketat dan memiliki sertifikat halal serta standar nasional.",
  },
  {
    icon: TrendingUp,
    title: "Harga Langsung dari Produsen",
    description:
      "Dapatkan harga terbaik karena membeli langsung dari produsen tanpa perantara yang berlebihan.",
  },
];

const HomePage = () => {
  const organizationSchema = generateOrganizationSchema();
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Beranda"
        description="Temukan produk UMKM terbaik dari Desa Margo Lestari, Lampung Selatan. Kerajinan tangan, makanan tradisional, produk pertanian organik, dan fashion lokal berkualitas tinggi langsung dari pengrajin desa."
        keywords="UMKM Desa Margo Lestari, produk unggulan lampung, kerajinan tangan, makanan tradisional, pertanian organik, fashion lokal, umkm indonesia, produk desa, margo lestari lampung selatan"
        url={siteConfig.url}
        schemaData={[organizationSchema, localBusinessSchema]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-emerald-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Temukan <span className="text-green-600">Produk Asli</span> UMKM
              Desa
            </motion.h1>
            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Dapatkan produk-produk unggulan dari UMKM Desa Margo Lestari yang
              berkualitas tinggi dan harga terjangkau. Setiap produk
              mencerminkan kearifan lokal dan keunikan budaya desa.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="text-lg px-8 bg-green-600 hover:bg-green-700"
                asChild
              >
                <Link to="/produk">
                  <Play className="w-5 h-5 mr-2" />
                  Belanja Sekarang
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 border-green-600 text-green-600 hover:bg-green-50"
                asChild
              >
                <Link to="/kategori">Lihat Semua Produk</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Carousel Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Produk Pilihan dari Desa
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Koleksi terbaik produk UMKM dari berbagai desa di Indonesia dengan
              kualitas premium dan harga terjangkau
            </p>
          </motion.div>

          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {randomProducts.map((product, index) => (
                <CarouselItem
                  key={product.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    className="p-1"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow flex flex-col">
                      <div className="relative">
                        <img
                          src={product.thumbnail || product.images[0]}
                          alt={product.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        {(product.isBestSeller || product.isNewProduct) && (
                          <Badge
                            className="absolute top-3 left-3"
                            variant="secondary"
                          >
                            {product.isBestSeller
                              ? "Best Seller"
                              : "Produk Baru"}
                          </Badge>
                        )}
                      </div>

                      <CardHeader className="flex-grow-0">
                        <CardTitle className="text-lg line-clamp-2 min-h-[3.5rem]">
                          {product.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-3 min-h-[4.5rem]">
                          {product.description}
                        </CardDescription>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mt-2">
                          <MapPin className="w-4 h-4" />
                          <span className="line-clamp-1">
                            {product.village}
                          </span>
                        </div>
                      </CardHeader>

                      <CardContent className="flex-grow">
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xl font-bold text-green-600">
                              {product.price}
                            </span>
                            <span className="text-sm text-muted-foreground line-through">
                              {product.originalPrice}
                            </span>
                          </div>
                        </div>

                        <ul className="space-y-1">
                          {product.features
                            .slice(0, 3)
                            .map((feature, index) => (
                              <li
                                key={index}
                                className="flex items-center text-sm"
                              >
                                <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          {product.features.length > 3 && (
                            <li className="text-sm text-muted-foreground">
                              +{product.features.length - 3} fitur lainnya
                            </li>
                          )}
                        </ul>
                      </CardContent>

                      <CardFooter className="mt-auto pt-4">
                        <Button
                          className="w-full bg-green-600 hover:bg-green-700"
                          asChild
                        >
                          <Link to={`/produk/${product.id}`}>
                            Beli Sekarang
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Product Advantages Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mengapa Memilih Produk Desa?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Keunggulan produk UMKM desa yang membuat pilihan Anda lebih
              bermakna dan berkualitas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <advantage.icon className="w-8 h-8 text-green-600" />
                    </div>
                    <CardTitle className="text-xl">{advantage.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Testimoni Pelanggan
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dengarkan cerita kepuasan pelanggan yang telah merasakan kualitas
              produk UMKM desa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={review.avatar} alt={review.name} />
                        <AvatarFallback>
                          {review.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-semibold">{review.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {review.business}
                        </div>
                        <div className="flex items-center mt-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground italic">
                      "{review.review}"
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {review.date}
                    </span>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      <span>{review.village}</span>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <motion.div
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mulai Belanja Produk Asli Indonesia?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Jelajahi Produk Unggulan dari Desa Margo Lestari dan Dukung UMKM
            Lokal
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 bg-white text-green-600 hover:bg-gray-100"
              asChild
            >
              <Link to="/produk">Belanja Sekarang</Link>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 bg-white text-green-600 hover:bg-gray-100"
              asChild
            >
              <Link to="/kategori">Lihat Semua Produk</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
