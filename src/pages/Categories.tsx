import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { categories, getProductsByCategory } from "@/data/database";
import { Palette, Cookie, Wheat, Shirt, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";

// Icon mapping untuk kategori
const iconMap = {
  Palette: Palette,
  Cookie: Cookie,
  Wheat: Wheat,
  Shirt: Shirt,
};

const Categories = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-50 to-emerald-100 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Kategori <span className="text-green-600">Produk UMKM</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Jelajahi berbagai kategori produk berkualitas dari UMKM desa di
              seluruh Indonesia
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {categories.map((category, index) => {
              const IconComponent =
                iconMap[category.icon as keyof typeof iconMap];
              const productCount = getProductsByCategory(category.slug).length;

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <IconComponent className="w-10 h-10 text-green-600" />
                      </div>
                      <CardTitle className="text-2xl mb-2">
                        {category.name}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {category.description}
                      </CardDescription>
                      <Badge variant="secondary" className="w-fit mx-auto mt-2">
                        {productCount} Produk
                      </Badge>
                    </CardHeader>

                    <CardContent>
                      {/* Subcategories */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">
                          Subkategori:
                        </h4>
                        <div className="grid grid-cols-2 gap-2">
                          {category.subcategories.map((sub) => (
                            <Link
                              key={sub.id}
                              to={`/kategori/${category.slug}/${sub.slug}`}
                              className="text-sm text-muted-foreground hover:text-green-600 transition-colors p-2 hover:bg-green-50 rounded"
                            >
                              • {sub.name}
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button
                        asChild
                        className="w-full bg-green-600 hover:bg-green-700"
                      >
                        <Link to={`/kategori/${category.slug}`}>
                          Lihat Semua Produk
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <motion.div
          className="container mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tidak Menemukan yang Dicari?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Hubungi kami untuk produk khusus atau cari di semua kategori produk
            UMKM
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 bg-white text-green-600 hover:bg-gray-100"
              asChild
            >
              <Link to="/produk">Lihat Semua Produk</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-white text-white hover:bg-white hover:text-green-600"
              asChild
            >
              <Link to="/kontak">Hubungi Kami</Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Categories;
