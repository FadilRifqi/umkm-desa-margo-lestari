import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { getProductById, getRelatedProducts } from "@/data/database";
import type { Product } from "@/data/database";
import {
  MapPin,
  Star,
  Heart,
  Share2,
  Phone,
  MessageCircle,
  CheckCircle,
  Truck,
  Shield,
  RotateCcw,
  Award,
  Leaf,
  Users,
  ArrowLeft,
  ExternalLink,
  Check,
} from "lucide-react";
import { motion } from "motion/react";
import { Link, useParams, useNavigate } from "react-router";
import { useState } from "react";
import { SEOHead } from "@/components/seo/SEOHead";
import { generateProductSchema } from "@/utils/seo";
import { siteConfig } from "@/config/site";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);
  const [copied, setCopied] = useState(false);

  const product = getProductById(productId || "");

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Produk Tidak Ditemukan</h1>
          <Button asChild>
            <Link to="/produk">Kembali ke Produk</Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedProducts = getRelatedProducts(product.id, product.category);
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const productUrl = `${siteConfig.url.replace(/\/$/, "")}/produk/${
    product.id
  }`;
  const productSchema = generateProductSchema(product, productUrl);

  const handleWhatsAppContact = () => {
    const message = `Halo, saya tertarik dengan produk *${
      product.title
    }* seharga Rp ${product.price.toLocaleString(
      "id-ID"
    )}. Bisakah saya mendapatkan informasi lebih lanjut?`;
    const whatsappUrl = `https://wa.me/${
      product.sellerContact.whatsapp
    }?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleShopeeLink = () => {
    if (product.sellerContact.shopee) {
      window.open(product.sellerContact.shopee, "_blank");
    }
  };

  const handleTikTokLink = () => {
    if (product.sellerContact.tiktok || product.sellerContact.tiktokMobile) {
      const isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      const url = isMobile
        ? product.sellerContact.tiktokMobile || product.sellerContact.tiktok!
        : product.sellerContact.tiktok || product.sellerContact.tiktokMobile!;
      window.open(url, "_blank");
    }
  };

  const handleTokopediaLink = () => {
    if (product.sellerContact.tokopedia) {
      window.open(product.sellerContact.tokopedia, "_blank");
    }
  };

  const handleShareProduct = async () => {
    const shareUrl = window.location.href;
    const shareText = `Lihat produk UMKM keren ini: ${product.title}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: product.title,
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback to copying URL
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={product.title}
        description={product.fullDescription}
        keywords={`${product.title}, ${product.category}, ${product.village}, ${product.province}, UMKM, produk lokal, ${product.seller}`}
        image={product.images[0]}
        url={productUrl}
        type="product"
        schemaData={productSchema}
      />

      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="p-0 h-auto text-sm"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Kembali
        </Button>
      </div>

      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <motion.div
              className="relative aspect-square rounded-lg overflow-hidden bg-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={product.images[selectedImageIndex]}
                alt={product.title}
                className="w-full h-full object-cover"
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                {product.isBestSeller && (
                  <Badge className="bg-orange-500">Best Seller</Badge>
                )}
                {product.isNewProduct && (
                  <Badge className="bg-blue-500">Produk Baru</Badge>
                )}
                {product.isEcoFriendly && (
                  <Badge className="bg-green-500">
                    <Leaf className="w-3 h-3 mr-1" />
                    Eco-Friendly
                  </Badge>
                )}
                {discount > 0 && (
                  <Badge variant="destructive">-{discount}%</Badge>
                )}
              </div>

              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setIsFavorited(!isFavorited)}
                  className="bg-white/90 hover:bg-white"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      isFavorited ? "fill-red-500 text-red-500" : ""
                    }`}
                  />
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleShareProduct}
                  className="bg-white/90 hover:bg-white"
                >
                  {copied ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Share2 className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </motion.div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImageIndex === index
                        ? "border-green-500"
                        : "border-muted hover:border-green-300"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-2xl md:text-3xl font-bold mb-2">
                {product.title}
              </h1>

              {/* Rating and Reviews */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 md:w-5 md:h-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                  <span className="font-semibold text-sm md:text-base">
                    {product.rating}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    ({product.reviewCount} ulasan)
                  </span>
                </div>
                <Separator
                  orientation="vertical"
                  className="h-4 hidden sm:block"
                />
                <span className="text-muted-foreground text-sm">
                  {product.sold} terjual
                </span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-1 text-muted-foreground mb-4">
                <MapPin className="w-4 h-4" />
                <a href={product.location}>
                  <span className="text-sm">
                    {product.village}, {product.province}
                  </span>
                </a>
              </div>

              {/* Price */}
              <div className="bg-muted/50 p-4 rounded-lg mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                  <span className="text-2xl md:text-3xl font-bold text-green-600">
                    Rp {product.price.toLocaleString("id-ID")}
                  </span>
                  <span className="text-base md:text-lg text-muted-foreground line-through">
                    Rp {product.originalPrice.toLocaleString("id-ID")}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Hemat Rp{" "}
                  {(product.originalPrice - product.price).toLocaleString(
                    "id-ID"
                  )}{" "}
                  ({discount}%)
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Button
                    onClick={handleWhatsAppContact}
                    size="lg"
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat WhatsApp
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleWhatsAppContact}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Hubungi Penjual
                  </Button>
                </div>

                {/* Marketplace Links */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {product.sellerContact.shopee && (
                    <Button
                      variant="outline"
                      onClick={handleShopeeLink}
                      className="flex-1 border-orange-500 text-orange-600 hover:bg-orange-50"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Beli di Shopee
                    </Button>
                  )}
                  {product.sellerContact.tiktok && (
                    <Button
                      variant="outline"
                      onClick={handleTikTokLink}
                      className="flex-1 border-gray-500 text-gray-600 hover:bg-gray-50"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Beli di TikTok
                    </Button>
                  )}
                  {product.sellerContact.tokopedia && (
                    <Button
                      variant="outline"
                      onClick={handleTokopediaLink}
                      className="flex-1 border-green-500 text-green-600 hover:bg-green-50"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Beli di Tokopedia
                    </Button>
                  )}
                </div>
              </div>

              {/* Quick Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>Kualitas Terjamin</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Truck className="w-4 h-4 text-blue-500" />
                  <span>Pengiriman Seluruh Indonesia</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <RotateCcw className="w-4 h-4 text-purple-500" />
                  <span>Garansi Kepuasan</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Award className="w-4 h-4 text-yellow-500" />
                  <span>Produk Original</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12 space-y-8">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Deskripsi Produk</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {product.fullDescription}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Keunggulan Produk</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Specifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Spesifikasi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between border-b pb-2"
                      >
                        <span className="font-medium">{key}</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    )
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Seller Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Informasi Penjual</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={product.avatar} />
                    <AvatarFallback>
                      {product.seller
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{product.seller}</h3>
                    <div className="flex items-center gap-1 text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4" />
                      <a href={product.location}>
                        <span>
                          {product.village}, {product.province}
                        </span>
                      </a>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>UMKM Verified</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>4.8 Rating Penjual</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" onClick={handleWhatsAppContact}>
                    Hubungi Penjual
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl md:text-2xl font-bold mb-6">
              Produk Serupa
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <RelatedProductCard
                  key={relatedProduct.id}
                  product={relatedProduct}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

// Related Product Card Component
interface RelatedProductCardProps {
  product: Product;
}

const RelatedProductCard: React.FC<RelatedProductCardProps> = ({ product }) => {
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <Card className="h-full hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-32 md:h-48 object-cover rounded-t-lg"
        />
        {discount > 0 && (
          <Badge
            variant="destructive"
            className="absolute top-2 left-2 text-xs"
          >
            -{discount}%
          </Badge>
        )}
      </div>

      <CardHeader className="pb-2 p-3 md:p-6 md:pb-2">
        <CardTitle className="text-xs md:text-sm line-clamp-2 min-h-[2rem] md:min-h-[2.5rem]">
          <Link to={`/produk/${product.id}`} className="hover:text-green-600">
            {product.title}
          </Link>
        </CardTitle>
        <div className="flex items-center gap-1 text-xs md:text-sm text-muted-foreground">
          <MapPin className="w-3 h-3" />
          <span className="line-clamp-1">{product.village}</span>
        </div>
      </CardHeader>

      <CardContent className="pt-0 p-3 md:p-6 md:pt-0">
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs">{product.rating}</span>
          <span className="text-xs text-muted-foreground">
            ({product.reviewCount})
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-2">
          <span className="font-bold text-green-600 text-sm md:text-base">
            Rp {product.price.toLocaleString("id-ID")}
          </span>
          <span className="text-xs text-muted-foreground line-through">
            Rp {product.originalPrice.toLocaleString("id-ID")}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductDetailPage;
