import { Building2 } from "lucide-react";
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

const services = [
  {
    title: "Website UMKM",
    href: "/layanan/website",
    description:
      "Pembuatan website profesional untuk UMKM dengan harga terjangkau dan fitur lengkap.",
  },
  {
    title: "E-commerce",
    href: "/layanan/ecommerce",
    description:
      "Platform online shop untuk menjual produk secara digital dengan sistem pembayaran terintegrasi.",
  },
  {
    title: "Digital Marketing",
    href: "/layanan/digital-marketing",
    description:
      "Strategi pemasaran digital untuk meningkatkan visibilitas dan penjualan online.",
  },
  {
    title: "Konsultasi Bisnis",
    href: "/layanan/konsultasi",
    description:
      "Konsultasi strategi bisnis digital untuk mengembangkan UMKM ke level selanjutnya.",
  },
  {
    title: "Maintenance & Support",
    href: "/layanan/support",
    description:
      "Layanan maintenance website dan dukungan teknis 24/7 untuk kelancaran bisnis.",
  },
  {
    title: "Training Digital",
    href: "/layanan/training",
    description:
      "Pelatihan penggunaan platform digital dan strategi marketing online.",
  },
];

const solutions = [
  {
    title: "Paket Starter",
    href: "/paket/starter",
    description:
      "Solusi website dasar untuk UMKM yang baru memulai digitalisasi.",
  },
  {
    title: "Paket Professional",
    href: "/paket/professional",
    description:
      "Website lengkap dengan fitur e-commerce dan sistem manajemen.",
  },
  {
    title: "Paket Enterprise",
    href: "/paket/enterprise",
    description:
      "Solusi komprehensif untuk UMKM yang ingin ekspansi besar-besaran.",
  },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <Building2 className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              Website UMKM
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
              <NavigationMenuTrigger>Layanan</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {services.map((service) => (
                    <ListItem
                      key={service.title}
                      title={service.title}
                      href={service.href}
                    >
                      {service.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Paket</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/paket"
                      >
                        <Building2 className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">
                          Pilih Paket Terbaik
                        </div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Solusi website yang sesuai dengan kebutuhan dan budget
                          UMKM Anda.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  {solutions.map((solution) => (
                    <ListItem
                      key={solution.title}
                      title={solution.title}
                      href={solution.href}
                    >
                      {solution.description}
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
                Kontak
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
              <a href="/login">Masuk</a>
            </Button>
            <Button size="sm" asChild>
              <a href="/konsultasi">Konsultasi Gratis</a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
