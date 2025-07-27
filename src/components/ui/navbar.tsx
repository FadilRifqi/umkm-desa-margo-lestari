import { Building2, ShoppingBag, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      "Anyaman bambu, ukiran kayu, keramik, dan kerajinan tradisional lainnya dari berbagai desa.",
  },
  {
    title: "Makanan & Minuman",
    href: "/kategori/makanan",
    description:
      "Keripik, makanan tradisional, minuman herbal, dan produk olahan dari bahan lokal.",
  },
  {
    title: "Produk Herbal",
    href: "/kategori/herbal",
    description:
      "Madu murni, jamu tradisional, minyak herbal, dan produk kesehatan alami.",
  },
  {
    title: "Tekstil & Fashion",
    href: "/kategori/tekstil",
    description:
      "Batik, tenun, pakaian tradisional, dan aksesoris fashion dari pengrajin lokal.",
  },
  {
    title: "Produk Pertanian",
    href: "/kategori/pertanian",
    description:
      "Beras organik, sayuran segar, buah-buahan, dan hasil pertanian langsung dari petani.",
  },
  {
    title: "Produk Peternakan",
    href: "/kategori/peternakan",
    description:
      "Susu segar, telur organik, daging segar, dan produk olahan dari peternak lokal.",
  },
];

const villages = [
  {
    title: "Desa Cikarang",
    href: "/desa/cikarang",
    description:
      "Spesialis kerajinan anyaman bambu dan produk ramah lingkungan.",
  },
  {
    title: "Desa Laweyan",
    href: "/desa/laweyan",
    description:
      "Pusat batik tulis tradisional dengan motif khas Solo yang autentik.",
  },
  {
    title: "Desa Sukamaju",
    href: "/desa/sukamaju",
    description:
      "Terkenal dengan keripik singkong dan makanan ringan tradisional.",
  },
  {
    title: "Desa Rimba Jaya",
    href: "/desa/rimba-jaya",
    description:
      "Penghasil madu hutan murni dan produk herbal berkualitas tinggi.",
  },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <Store className="h-6 w-6 text-green-600" />
            <span className="hidden font-bold sm:inline-block text-green-700">
              UMKM Desa
            </span>
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

        {/* Right side buttons */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* Mobile menu button can be added here */}
          </div>
          <nav className="flex items-center space-x-2">
            <Button variant="outline" size="sm" asChild>
              <a href="/keranjang">
                <ShoppingBag className="w-4 h-4 mr-2" />
                Keranjang
              </a>
            </Button>
            <Button
              size="sm"
              className="bg-green-600 hover:bg-green-700"
              asChild
            >
              <a href="/jual">Jual Produk</a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
