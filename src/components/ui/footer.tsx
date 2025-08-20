import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 space-y-4">
            <h3 className="text-xl font-bold">UMKM Desa Margo Lestari</h3>
            <p className="text-muted-foreground max-w-md">
              Website ecommerce khusus UMKM Desa Margo Lestari, menyediakan
              platform digital untuk mempromosikan dan menjual produk lokal
              berkualitas tinggi dari pengrajin desa.
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Margo Lestari, Lampung Selatan, Indonesia</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="Facebook">
                  <Facebook className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Link Cepat</h4>
            <nav className="space-y-2">
              <Button
                variant="link"
                className="h-auto p-0 text-muted-foreground justify-start"
                asChild
              >
                <a href="#">Beranda</a>
              </Button>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Layanan</h4>
            <nav className="space-y-2">
              <Button
                variant="link"
                className="h-auto p-0 text-muted-foreground justify-start"
                asChild
              >
                <a href="#">Website UMKM</a>
              </Button>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Website UMKM. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Button
              variant="link"
              className="h-auto p-0 text-sm text-muted-foreground"
              asChild
            >
              <a href="#">Kebijakan Privasi</a>
            </Button>
            <Button
              variant="link"
              className="h-auto p-0 text-sm text-muted-foreground"
              asChild
            >
              <a href="#">Syarat & Ketentuan</a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
