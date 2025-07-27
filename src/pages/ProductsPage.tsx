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
import { Checkbox } from "@/components/ui/checkbox";
import { products, categories, searchProducts } from "@/data/database";
import type { Product, Category } from "@/data/database";
import {
  MapPin,
  Star,
  ArrowRight,
  Search,
  Grid3X3,
  List,
  Heart,
  Filter,
  X,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { useState, useMemo } from "react";
import { SEOHead } from "@/components/seo/SEOHead";
import { generateCategorySchema } from "@/utils/seo";

const ProductsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [priceRange, setPriceRange] = useState("all");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedProvinces, setSelectedProvinces] = useState<string[]>([]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  // Get unique provinces
  const provinces = Array.from(new Set(products.map((p) => p.province))).sort();

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Search filter
    if (searchQuery) {
      filtered = searchProducts(searchQuery);
    }

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    // Province filter
    if (selectedProvinces.length > 0) {
      filtered = filtered.filter((product) =>
        selectedProvinces.includes(product.province)
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
      case "name":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
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
  }, [searchQuery, sortBy, priceRange, selectedCategories, selectedProvinces]);

  const handleCategoryChange = (categorySlug: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, categorySlug]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((c) => c !== categorySlug)
      );
    }
  };

  const handleProvinceChange = (province: string, checked: boolean) => {
    if (checked) {
      setSelectedProvinces([...selectedProvinces, province]);
    } else {
      setSelectedProvinces(selectedProvinces.filter((p) => p !== province));
    }
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSortBy("newest");
    setPriceRange("all");
    setSelectedCategories([]);
    setSelectedProvinces([]);
  };

  const activeFiltersCount =
    (searchQuery ? 1 : 0) +
    (priceRange !== "all" ? 1 : 0) +
    selectedCategories.length +
    selectedProvinces.length;

  const productsUrl = "https://umkmmargolestari.my.id/produk";
  const allProductsSchema = generateCategorySchema(
    "Semua Produk UMKM",
    filteredProducts,
    productsUrl
  );

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Semua Produk UMKM"
        description="Jelajahi semua produk UMKM unggulan dari Desa Margo Lestari, Lampung Selatan. Kerajinan tangan, makanan tradisional, produk pertanian organik, fashion lokal, dan banyak lagi produk berkualitas langsung dari pengrajin desa."
        keywords="semua produk UMKM, marketplace UMKM, produk desa, kerajinan tangan, makanan tradisional, pertanian organik, fashion lokal, UMKM Lampung Selatan, Margo Lestari, produk unggulan indonesia"
        url={productsUrl}
        schemaData={allProductsSchema}
      />

      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-50 to-emerald-100 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Semua <span className="text-green-600">Produk UMKM</span>
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              Jelajahi koleksi lengkap produk berkualitas dari UMKM desa di
              seluruh Indonesia
            </p>
            <Badge variant="secondary" className="text-sm">
              {filteredProducts.length} dari {products.length} produk
            </Badge>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-8">
              <FilterSidebar
                categories={categories}
                provinces={provinces}
                selectedCategories={selectedCategories}
                selectedProvinces={selectedProvinces}
                priceRange={priceRange}
                onCategoryChange={handleCategoryChange}
                onProvinceChange={handleProvinceChange}
                onPriceRangeChange={setPriceRange}
                onClearFilters={clearFilters}
                activeFiltersCount={activeFiltersCount}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Controls */}
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Cari produk, desa, atau kategori..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Mobile Filter Button */}
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filter
                {activeFiltersCount > 0 && (
                  <Badge variant="destructive" className="ml-2">
                    {activeFiltersCount}
                  </Badge>
                )}
              </Button>

              <div className="flex items-center gap-4">
                {/* Sort */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Terbaru</SelectItem>
                    <SelectItem value="popular">Terpopuler</SelectItem>
                    <SelectItem value="rating">Rating Tertinggi</SelectItem>
                    <SelectItem value="price-low">Harga Terendah</SelectItem>
                    <SelectItem value="price-high">Harga Tertinggi</SelectItem>
                    <SelectItem value="name">Nama A-Z</SelectItem>
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

            {/* Mobile Filters */}
            {showFilters && (
              <div className="lg:hidden mb-6">
                <FilterSidebar
                  categories={categories}
                  provinces={provinces}
                  selectedCategories={selectedCategories}
                  selectedProvinces={selectedProvinces}
                  priceRange={priceRange}
                  onCategoryChange={handleCategoryChange}
                  onProvinceChange={handleProvinceChange}
                  onPriceRangeChange={setPriceRange}
                  onClearFilters={clearFilters}
                  activeFiltersCount={activeFiltersCount}
                />
              </div>
            )}

            {/* Active Filters Display */}
            {activeFiltersCount > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {searchQuery && (
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    Pencarian: "{searchQuery}"
                    <X
                      className="w-3 h-3 cursor-pointer"
                      onClick={() => setSearchQuery("")}
                    />
                  </Badge>
                )}
                {selectedCategories.map((categorySlug) => {
                  const category = categories.find(
                    (c) => c.slug === categorySlug
                  );
                  return (
                    <Badge
                      key={categorySlug}
                      variant="secondary"
                      className="flex items-center gap-1"
                    >
                      {category?.name}
                      <X
                        className="w-3 h-3 cursor-pointer"
                        onClick={() =>
                          handleCategoryChange(categorySlug, false)
                        }
                      />
                    </Badge>
                  );
                })}
                {selectedProvinces.map((province) => (
                  <Badge
                    key={province}
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    {province}
                    <X
                      className="w-3 h-3 cursor-pointer"
                      onClick={() => handleProvinceChange(province, false)}
                    />
                  </Badge>
                ))}
                {priceRange !== "all" && (
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1"
                  >
                    {priceRange === "0-50000" && "< Rp 50.000"}
                    {priceRange === "50000-100000" && "Rp 50.000 - 100.000"}
                    {priceRange === "100000-200000" && "Rp 100.000 - 200.000"}
                    {priceRange === "200000" && "> Rp 200.000"}
                    <X
                      className="w-3 h-3 cursor-pointer"
                      onClick={() => setPriceRange("all")}
                    />
                  </Badge>
                )}
                <Button variant="ghost" size="sm" onClick={clearFilters}>
                  Hapus Semua Filter
                </Button>
              </div>
            )}

            {/* Products Grid/List */}
            {filteredProducts.length === 0 ? (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <div className="max-w-md mx-auto">
                  <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    Tidak Ada Produk
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Tidak ada produk yang sesuai dengan pencarian atau filter
                    yang dipilih.
                  </p>
                  <Button variant="outline" onClick={clearFilters}>
                    Reset Pencarian
                  </Button>
                </div>
              </motion.div>
            ) : (
              <div
                className={`grid gap-4 md:gap-6 ${
                  viewMode === "grid"
                    ? "grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
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
        </div>
      </div>
    </div>
  );
};

// Filter Sidebar Component
interface FilterSidebarProps {
  categories: Category[];
  provinces: string[];
  selectedCategories: string[];
  selectedProvinces: string[];
  priceRange: string;
  onCategoryChange: (categorySlug: string, checked: boolean) => void;
  onProvinceChange: (province: string, checked: boolean) => void;
  onPriceRangeChange: (range: string) => void;
  onClearFilters: () => void;
  activeFiltersCount: number;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  categories,
  provinces,
  selectedCategories,
  selectedProvinces,
  priceRange,
  onCategoryChange,
  onProvinceChange,
  onPriceRangeChange,
  onClearFilters,
  activeFiltersCount,
}) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Filter Produk</CardTitle>
          {activeFiltersCount > 0 && (
            <Button variant="ghost" size="sm" onClick={onClearFilters}>
              Reset
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-3">Kategori</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.slug} className="flex items-center space-x-2">
                <Checkbox
                  id={category.slug}
                  checked={selectedCategories.includes(category.slug)}
                  onCheckedChange={(checked) =>
                    onCategoryChange(category.slug, checked as boolean)
                  }
                />
                <label
                  htmlFor={category.slug}
                  className="text-sm cursor-pointer"
                >
                  {category.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h3 className="font-semibold mb-3">Rentang Harga</h3>
          <Select value={priceRange} onValueChange={onPriceRangeChange}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua Harga</SelectItem>
              <SelectItem value="0-50000">&lt; Rp 50.000</SelectItem>
              <SelectItem value="50000-100000">Rp 50.000 - 100.000</SelectItem>
              <SelectItem value="100000-200000">
                Rp 100.000 - 200.000
              </SelectItem>
              <SelectItem value="200000">&gt; Rp 200.000</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Provinces */}
        <div>
          <h3 className="font-semibold mb-3">Provinsi</h3>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {provinces.map((province) => (
              <div key={province} className="flex items-center space-x-2">
                <Checkbox
                  id={province}
                  checked={selectedProvinces.includes(province)}
                  onCheckedChange={(checked) =>
                    onProvinceChange(province, checked as boolean)
                  }
                />
                <label htmlFor={province} className="text-sm cursor-pointer">
                  {province}
                </label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Product Card Component (reuse from CategoryPage with some modifications)
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
        transition={{ duration: 0.5, delay: index * 0.05 }}
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
                      {product.village}, {product.province}
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
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full hover:shadow-lg transition-shadow flex flex-col">
        <div className="relative">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <div className="absolute top-3 left-3 flex gap-1 flex-wrap">
            {product.isBestSeller && (
              <Badge className="bg-orange-500 text-xs">Best Seller</Badge>
            )}
            {product.isNewProduct && (
              <Badge className="bg-blue-500 text-xs">Baru</Badge>
            )}
            {discount > 0 && (
              <Badge variant="destructive" className="text-xs">
                -{discount}%
              </Badge>
            )}
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
            <span className="line-clamp-1">
              {product.village}, {product.province}
            </span>
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

export default ProductsPage;
