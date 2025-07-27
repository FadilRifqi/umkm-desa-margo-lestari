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
  Globe,
  TrendingUp,
  Users,
  Clock,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Play,
} from "lucide-react";

// Sample data for carousel
const products = [
  {
    id: 1,
    title: "Website UMKM Professional",
    description:
      "Website lengkap dengan sistem manajemen konten, optimasi SEO, dan desain responsif untuk semua perangkat.",
    image: "/api/placeholder/400/250",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    badge: "Best Seller",
    features: [
      "Responsive Design",
      "SEO Optimized",
      "Admin Panel",
      "Free Hosting 1 Tahun",
    ],
  },
  {
    id: 2,
    title: "E-commerce Solution",
    description:
      "Platform online shop lengkap dengan payment gateway, inventory management, dan analytics dashboard.",
    image: "/api/placeholder/400/250",
    price: "Rp 4.000.000",
    originalPrice: "Rp 5.500.000",
    badge: "Popular",
    features: [
      "Payment Gateway",
      "Inventory System",
      "Analytics",
      "Mobile App",
    ],
  },
  {
    id: 3,
    title: "Digital Marketing Package",
    description:
      "Strategi pemasaran digital komprehensif dengan social media management dan Google Ads optimization.",
    image: "/api/placeholder/400/250",
    price: "Rp 1.800.000",
    originalPrice: "Rp 2.500.000",
    badge: "New",
    features: [
      "Social Media",
      "Google Ads",
      "Content Strategy",
      "Monthly Report",
    ],
  },
  {
    id: 4,
    title: "Business Consultation",
    description:
      "Konsultasi mendalam untuk strategi bisnis digital dan roadmap pengembangan UMKM jangka panjang.",
    image: "/api/placeholder/400/250",
    price: "Rp 1.200.000",
    originalPrice: "Rp 1.800.000",
    badge: "Expert",
    features: [
      "1-on-1 Session",
      "Business Plan",
      "Market Analysis",
      "3 Months Support",
    ],
  },
];

// Sample reviews data
const reviews = [
  {
    id: 1,
    name: "Siti Nurhaliza",
    business: "Warung Siti Bakery",
    avatar: "/api/placeholder/64/64",
    rating: 5,
    review:
      "Website yang dibuat sangat membantu bisnis saya. Pesanan online meningkat 300% dalam 3 bulan pertama!",
    date: "2 minggu lalu",
  },
  {
    id: 2,
    name: "Ahmad Fadli",
    business: "Fadli Electronics",
    avatar: "/api/placeholder/64/64",
    rating: 5,
    review:
      "Tim sangat profesional dan responsif. E-commerce platform yang mereka buat mudah digunakan dan fiturnya lengkap.",
    date: "1 bulan lalu",
  },
  {
    id: 3,
    name: "Maya Sari",
    business: "Maya's Fashion",
    avatar: "/api/placeholder/64/64",
    rating: 5,
    review:
      "Digital marketing strategy yang diberikan benar-benar efektif. Social media followers naik drastis dan sales meningkat.",
    date: "3 minggu lalu",
  },
  {
    id: 4,
    name: "Budi Santoso",
    business: "Budi Furniture",
    avatar: "/api/placeholder/64/64",
    rating: 5,
    review:
      "Konsultasi bisnis sangat membantu. Sekarang bisnis saya lebih terstruktur dan profitable. Terima kasih tim!",
    date: "1 bulan lalu",
  },
];

// Product advantages data
const advantages = [
  {
    icon: Globe,
    title: "Digital Presence",
    description:
      "Bangun kehadiran digital yang kuat dengan website profesional dan strategi online yang tepat sasaran.",
  },
  {
    icon: TrendingUp,
    title: "Boost Sales",
    description:
      "Tingkatkan penjualan hingga 300% dengan platform e-commerce dan digital marketing yang efektif.",
  },
  {
    icon: Users,
    title: "Customer Management",
    description:
      "Kelola pelanggan dengan lebih baik melalui sistem CRM terintegrasi dan analytics mendalam.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Bisnis Anda buka 24 jam dengan sistem otomatis yang melayani pelanggan kapan saja.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Keamanan data terjamin dengan backup otomatis dan sistem keamanan berlapis.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description:
      "Website super cepat dengan optimasi performa dan loading time kurang dari 3 detik.",
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Wujudkan <span className="text-blue-600">Impian Digital</span>{" "}
              UMKM Anda
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Solusi lengkap digitalisasi bisnis untuk UMKM Indonesia. Dari
              website profesional hingga strategi marketing yang terbukti
              efektif.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Play className="w-5 h-5 mr-2" />
                Mulai Sekarang
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Carousel Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Paket Unggulan Kami
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pilih solusi yang tepat untuk mengembangkan bisnis UMKM Anda ke
              level selanjutnya
            </p>
          </div>

          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent>
              {products.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <div className="relative">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-48 object-cover rounded-t-lg"
                        />
                        <Badge
                          className="absolute top-3 left-3"
                          variant="secondary"
                        >
                          {product.badge}
                        </Badge>
                      </div>

                      <CardHeader>
                        <CardTitle className="text-xl">
                          {product.title}
                        </CardTitle>
                        <CardDescription>{product.description}</CardDescription>
                      </CardHeader>

                      <CardContent className="flex-1">
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-2xl font-bold text-green-600">
                              {product.price}
                            </span>
                            <span className="text-sm text-muted-foreground line-through">
                              {product.originalPrice}
                            </span>
                          </div>
                        </div>

                        <ul className="space-y-2">
                          {product.features.map((feature, index) => (
                            <li
                              key={index}
                              className="flex items-center text-sm"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </CardContent>

                      <CardFooter>
                        <Button className="w-full">
                          Pilih Paket
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mengapa Memilih Kami?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Keunggulan yang membuat bisnis UMKM Anda unggul di era digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <advantage.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Testimoni Klien
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dengarkan cerita sukses UMKM yang telah bergabung dengan kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {reviews.map((review) => (
              <Card
                key={review.id}
                className="hover:shadow-lg transition-shadow"
              >
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
                <CardFooter>
                  <span className="text-sm text-muted-foreground">
                    {review.date}
                  </span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Mengembangkan UMKM Anda?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Konsultasi gratis dengan tim ahli kami dan dapatkan solusi terbaik
            untuk bisnis Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Konsultasi Gratis Sekarang
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-white text-white hover:bg-white hover:text-blue-600"
            >
              Lihat Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
