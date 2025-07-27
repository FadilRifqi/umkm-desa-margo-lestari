import { Button } from "@/components/ui/button";
import { AlertCircle, Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md mx-auto text-center px-4">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
            <AlertCircle className="w-12 h-12 text-muted-foreground" />
          </div>

          {/* 404 Text */}
          <h1 className="text-6xl font-bold text-primary mb-2">404</h1>
          <h2 className="text-2xl font-semibold text-foreground mb-2">
            Halaman Tidak Ditemukan
          </h2>
          <p className="text-muted-foreground mb-8">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman
            telah dipindahkan atau tidak lagi tersedia.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="w-full sm:w-auto">
              <a href="/">
                <Home className="w-4 h-4 mr-2" />
                Kembali ke Beranda
              </a>
            </Button>

            <Button variant="outline" asChild className="w-full sm:w-auto">
              <a href="#" onClick={() => window.history.back()}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Halaman Sebelumnya
              </a>
            </Button>
          </div>

          <Button variant="ghost" asChild className="w-full sm:w-auto">
            <a href="/kontak">
              <Search className="w-4 h-4 mr-2" />
              Butuh Bantuan?
            </a>
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-lg font-semibold mb-4">Halaman Populer</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <a
              href="/layanan"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-muted"
            >
              Layanan Kami
            </a>
            <a
              href="/paket"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-muted"
            >
              Paket Harga
            </a>
            <a
              href="/tentang"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-muted"
            >
              Tentang Kami
            </a>
            <a
              href="/kontak"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-muted"
            >
              Kontak
            </a>
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-8 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground mb-2">
            Masih membutuhkan bantuan?
          </p>
          <Button variant="link" asChild className="h-auto p-0">
            <a href="/kontak" className="text-sm font-medium">
              Hubungi Tim Support Kami →
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
