import { Building2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ListItem from "@/components/ui/listItem";

const productCategories = [
  {
    title: "Kerajinan Tangan",
    href: "/kategori/kerajinan",
    description:
      "Anyaman bambu, ukiran kayu, batik, keramik, dan kerajinan tradisional lainnya dari berbagai desa.",
  },
  {
    title: "Makanan & Minuman",
    href: "/kategori/makanan",
    description:
      "Keripik, camilan tradisional, minuman herbal, dan produk olahan dari bahan lokal.",
  },
  {
    title: "Produk Pertanian",
    href: "/kategori/pertanian",
    description:
      "Beras organik, sayuran segar, buah-buahan, madu murni dan hasil pertanian langsung dari petani.",
  },
  {
    title: "Fashion & Aksesoris",
    href: "/kategori/fashion",
    description:
      "Pakaian tradisional, tas handmade, perhiasan, dan aksesoris fashion dari pengrajin lokal.",
  },
];

const villages = [
  {
    title: "Desa Margo Lestari",
    href: "/desa/margo-lestari",
    description: "Segala produk unggulan dari Desa Margo Lestari.",
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center px-4">
        {/* Logo */}
        <div className="mr-4 hidden md:flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <Building2 className="h-6 w-6 text-green-600" />
            <span className="hidden font-bold sm:inline-block text-green-700">
              UMKM Desa Margo Lestari
            </span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="mr-4 flex md:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMobileMenu}
            className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>

        {/* Mobile Logo */}
        <div className="flex flex-1 items-center justify-start md:hidden">
          <a href="/" className="flex items-center space-x-2">
            <Building2 className="h-6 w-6 text-green-600" />
            <span className="font-bold text-sm text-green-700">UMKM Desa</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="/"
              >
                Beranda
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Kategori Produk</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {productCategories.map((category) => (
                    <ListItem
                      key={category.title}
                      title={category.title}
                      href={category.href}
                    >
                      {category.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Desa Mitra</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-4">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-green-50 to-green-100 p-6 no-underline outline-none focus:shadow-md"
                        href="/desa"
                      >
                        <Building2 className="h-6 w-6 text-green-600" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Jelajahi Desa
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Temukan produk autentik langsung dari berbagai desa di
                          Indonesia.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  {villages.map((village) => (
                    <ListItem
                      key={village.title}
                      title={village.title}
                      href={village.href}
                    >
                      {village.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="/produk"
              >
                Semua Produk
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="/tentang"
              >
                Tentang Kami
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                href="/kontak"
              >
                Bantuan
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side - Theme Toggle */}
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-2">
            <ThemeToggle />
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="border-t bg-background md:hidden">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a
                href="/"
                className="text-sm font-medium hover:text-green-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Beranda
              </a>
              <a
                href="/produk"
                className="text-sm font-medium hover:text-green-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Semua Produk
              </a>
              <a
                href="/tentang"
                className="text-sm font-medium hover:text-green-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tentang Kami
              </a>
              <a
                href="/kontak"
                className="text-sm font-medium hover:text-green-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Bantuan
              </a>

              {/* Mobile Category Links */}
              <div className="pt-4 border-t">
                <h3 className="text-sm font-semibold mb-3 text-muted-foreground">
                  Kategori Produk
                </h3>
                <div className="space-y-2">
                  {productCategories.map((category) => (
                    <a
                      key={category.title}
                      href={category.href}
                      className="block text-sm hover:text-green-600 transition-colors pl-4"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {category.title}
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
