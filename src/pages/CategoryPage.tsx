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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  getProductsByCategory,
  getProductsBySubcategory,
  getCategoryBySlug,
  getSubcategoryBySlug,
} from "@/data/database";
import type { Product } from "@/data/database";
import {
  MapPin,
  Star,
  ArrowRight,
  Search,
  Grid3X3,
  List,
  Heart,
  SlidersHorizontal,
} from "lucide-react";
import { motion } from "motion/react";
import { Link, useParams } from "react-router";
import { useState, useMemo } from "react";

const CategoryPage = () => {
  const { categorySlug, subcategorySlug } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [priceRange, setPriceRange] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Get category and subcategory info
  const category = getCategoryBySlug(categorySlug || "");
  const subcategory = subcategorySlug
    ? getSubcategoryBySlug(categorySlug || "", subcategorySlug)
    : null;

  // Get products based on category or subcategory
  const rawProducts = subcategorySlug
    ? getProductsBySubcategory(subcategorySlug)
    : getProductsByCategory(categorySlug || "");

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = rawProducts;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          product.village.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Price range filter
    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map(Number);
      filtered = filtered.filter((product) => {
        if (max) {
          return product.price >= min && product.price <= max;
        }
        return product.price >= min;
      });
    }

    // Sort products
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "popular":
        filtered.sort((a, b) => b.sold - a.sold);
        break;
      case "newest":
      default:
        filtered.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        break;
    }

    return filtered;
  }, [rawProducts, searchQuery, sortBy, priceRange]);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Kategori Tidak Ditemukan</h1>
          <Button asChild>
            <Link to="/kategori">Kembali ke Kategori</Link>
          </Button>
        </div>
      </div>
    );
  }

  const pageTitle = subcategory ? subcategory.name : category.name;
  const pageDescription = subcategory
    ? subcategory.description
    : category.description;

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-50 to-emerald-100 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {pageTitle}
            </h1>
            <p className="text-lg text-gray-600 mb-4">{pageDescription}</p>
            <Badge variant="secondary" className="text-sm">
              {filteredProducts.length} produk ditemukan
            </Badge>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Cari produk..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Terbaru</SelectItem>
                  <SelectItem value="popular">Terpopuler</SelectItem>
                  <SelectItem value="rating">Rating Tertinggi</SelectItem>
                  <SelectItem value="price-low">Harga Terendah</SelectItem>
                  <SelectItem value="price-high">Harga Tertinggi</SelectItem>
                </SelectContent>
              </Select>

              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Rentang Harga" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Harga</SelectItem>
                  <SelectItem value="0-50000">&lt; Rp 50.000</SelectItem>
                  <SelectItem value="50000-100000">
                    Rp 50.000 - 100.000
                  </SelectItem>
                  <SelectItem value="100000-200000">
                    Rp 100.000 - 200.000
                  </SelectItem>
                  <SelectItem value="200000">&gt; Rp 200.000</SelectItem>
                </SelectContent>
              </Select>

              {/* View Mode Toggle */}
              <div className="flex border rounded-lg p-1">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="px-3"
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="px-3"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subcategories (only show on main category page) */}
      {!subcategory && category.subcategories.length > 0 && (
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-semibold mb-4">Subkategori</h2>
            <div className="flex flex-wrap gap-2">
              {category.subcategories.map((sub) => (
                <Button
                  key={sub.id}
                  variant="outline"
                  size="sm"
                  asChild
                  className="hover:bg-green-50 hover:border-green-300"
                >
                  <Link to={`/kategori/${categorySlug}/${sub.slug}`}>
                    {sub.name}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Grid/List */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {filteredProducts.length === 0 ? (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="max-w-md mx-auto">
                <SlidersHorizontal className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Tidak Ada Produk</h3>
                <p className="text-muted-foreground mb-4">
                  Tidak ada produk yang sesuai dengan filter yang dipilih.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchQuery("");
                    setSortBy("newest");
                    setPriceRange("all");
                  }}
                >
                  Reset Filter
                </Button>
              </div>
            </motion.div>
          ) : (
            <div
              className={`grid gap-6 ${
                viewMode === "grid"
                  ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                  : "grid-cols-1"
              }`}
            >
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                  viewMode={viewMode}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

// Product Card Component
interface ProductCardProps {
  product: Product;
  index: number;
  viewMode: "grid" | "list";
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  index,
  viewMode,
}) => {
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  if (viewMode === "list") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Card className="hover:shadow-lg transition-shadow">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-64 flex-shrink-0">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 md:h-full object-cover rounded-l-lg"
              />
            </div>
            <div className="flex-1 p-6">
              <div className="flex justify-between items-start mb-2">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 hover:text-green-600">
                    <Link to={`/produk/${product.id}`}>{product.title}</Link>
                  </h3>
                  <p className="text-muted-foreground mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{product.rating}</span>
                      <span className="text-sm text-muted-foreground">
                        ({product.reviewCount})
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {product.village}
                    </div>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Heart className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl font-bold text-green-600">
                      Rp {product.price.toLocaleString("id-ID")}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      Rp {product.originalPrice.toLocaleString("id-ID")}
                    </span>
                    <Badge variant="destructive" className="text-xs">
                      -{discount}%
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {product.sold} terjual
                  </p>
                </div>

                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <Link to={`/produk/${product.id}`}>
                    Lihat Detail
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow flex flex-col">
        <div className="relative">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="absolute top-3 left-3 flex gap-1">
            {product.isBestSeller && (
              <Badge className="bg-orange-500">Best Seller</Badge>
            )}
            {product.isNewProduct && (
              <Badge className="bg-blue-500">Baru</Badge>
            )}
            {discount > 0 && <Badge variant="destructive">-{discount}%</Badge>}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-3 right-3 bg-white/80 hover:bg-white"
          >
            <Heart className="w-4 h-4" />
          </Button>
        </div>

        <CardHeader className="flex-grow-0">
          <CardTitle className="text-lg line-clamp-2 min-h-[3.5rem] hover:text-green-600">
            <Link to={`/produk/${product.id}`}>{product.title}</Link>
          </CardTitle>
          <CardDescription className="line-clamp-2 min-h-[3rem]">
            {product.description}
          </CardDescription>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="w-3 h-3" />
            <span className="line-clamp-1">{product.village}</span>
          </div>
        </CardHeader>

        <CardContent className="flex-grow">
          <div className="flex items-center gap-1 mb-2">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm">{product.rating}</span>
            <span className="text-sm text-muted-foreground">
              ({product.reviewCount})
            </span>
          </div>

          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg font-bold text-green-600">
              Rp {product.price.toLocaleString("id-ID")}
            </span>
            <span className="text-sm text-muted-foreground line-through">
              Rp {product.originalPrice.toLocaleString("id-ID")}
            </span>
          </div>

          <p className="text-sm text-muted-foreground">
            {product.sold} terjual
          </p>
        </CardContent>

        <CardFooter className="mt-auto pt-4">
          <Button asChild className="w-full bg-green-600 hover:bg-green-700">
            <Link to={`/produk/${product.id}`}>
              Lihat Detail
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CategoryPage;
