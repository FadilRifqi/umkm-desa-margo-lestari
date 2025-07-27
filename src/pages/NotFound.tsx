import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertTriangle,
  Home,
  ArrowLeft,
  Search,
  ShoppingBag,
  Package,
} from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="max-w-2xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          {/* Animated Error Icon */}
          <motion.div
            className="mx-auto w-32 h-32 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AlertTriangle className="w-16 h-16 text-orange-500" />
          </motion.div>

          {/* 404 Text with Gradient */}
          <motion.h1
            className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            404
          </motion.h1>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Halaman Tidak Ditemukan
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 mb-8 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin produk
            telah dipindahkan atau link sudah tidak aktif.
          </motion.p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-lg px-8"
            >
              <Link to="/">
                <Home className="w-5 h-5 mr-2" />
                Kembali ke Beranda
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => window.history.back()}
              className="text-lg px-8 border-green-600 text-green-600 hover:bg-green-50"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Halaman Sebelumnya
            </Button>
          </div>

          <Button variant="ghost" asChild className="text-lg">
            <Link to="/produk">
              <Search className="w-5 h-5 mr-2" />
              Cari Produk UMKM
            </Link>
          </Button>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-gray-900">
            Halaman Populer
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-6">
                <Link to="/kategori" className="block">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                      <Package className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                        Kategori Produk
                      </h4>
                      <p className="text-sm text-gray-600">
                        Jelajahi produk berdasarkan kategori
                      </p>
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardContent className="p-6">
                <Link to="/produk" className="block">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <ShoppingBag className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        Semua Produk
                      </h4>
                      <p className="text-sm text-gray-600">
                        Lihat koleksi lengkap produk UMKM
                      </p>
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Contact Support */}
        <motion.div
          className="mt-12 p-6 bg-white/80 backdrop-blur rounded-xl border border-green-100"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <p className="text-gray-600 mb-4">
            Masih membutuhkan bantuan untuk menemukan produk UMKM yang Anda
            cari?
          </p>
          <Button
            variant="link"
            asChild
            className="text-green-600 font-semibold"
          >
            <Link to="/kontak">Hubungi Tim Support Kami →</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
