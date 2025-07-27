import { ChevronRight, Home } from "lucide-react";
import { Link, useLocation } from "react-router";
import { Fragment } from "react";
import {
  getCategoryBySlug,
  getSubcategoryBySlug,
  getProductById,
} from "@/data/database";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Generate breadcrumb items based on current path
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [{ label: "Beranda", href: "/" }];

    if (pathnames.length === 0) return breadcrumbs;

    // Handle different routes
    for (let i = 0; i < pathnames.length; i++) {
      const segment = pathnames[i];
      const isLast = i === pathnames.length - 1;

      switch (segment) {
        case "kategori":
          if (pathnames.length === 1) {
            breadcrumbs.push({ label: "Kategori" });
          } else {
            breadcrumbs.push({ label: "Kategori", href: "/kategori" });

            // Handle category page
            if (pathnames[i + 1]) {
              const categorySlug = pathnames[i + 1];
              const category = getCategoryBySlug(categorySlug);

              if (category) {
                if (pathnames.length === i + 2) {
                  breadcrumbs.push({ label: category.name });
                } else {
                  breadcrumbs.push({
                    label: category.name,
                    href: `/kategori/${categorySlug}`,
                  });

                  // Handle subcategory
                  if (pathnames[i + 2]) {
                    const subcategorySlug = pathnames[i + 2];
                    const subcategory = getSubcategoryBySlug(
                      categorySlug,
                      subcategorySlug
                    );
                    if (subcategory) {
                      breadcrumbs.push({ label: subcategory.name });
                    }
                  }
                }
              }
              i++; // Skip next iteration as we handled it
            }
          }
          break;

        case "produk":
          if (pathnames.length === 1) {
            breadcrumbs.push({ label: "Semua Produk" });
          } else {
            breadcrumbs.push({ label: "Semua Produk", href: "/produk" });

            // Handle product detail
            if (pathnames[i + 1]) {
              const productId = pathnames[i + 1];
              const product = getProductById(productId);

              if (product) {
                const category = getCategoryBySlug(product.category);
                if (category) {
                  breadcrumbs.push({
                    label: category.name,
                    href: `/kategori/${product.category}`,
                  });
                }
                breadcrumbs.push({ label: product.title });
              } else {
                breadcrumbs.push({ label: "Detail Produk" });
              }
              i++; // Skip next iteration
            }
          }
          break;

        case "tentang":
          breadcrumbs.push({ label: "Tentang Kami" });
          break;

        case "kontak":
          breadcrumbs.push({ label: "Kontak" });
          break;

        default: {
          // Capitalize first letter
          const label = segment.charAt(0).toUpperCase() + segment.slice(1);
          breadcrumbs.push({
            label,
            href: isLast
              ? undefined
              : `/${pathnames.slice(0, i + 1).join("/")}`,
          });
          break;
        }
      }
    }

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav className="bg-muted/30 py-3 border-b">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((breadcrumb, index) => (
            <Fragment key={index}>
              <li className="flex items-center">
                {index === 0 && <Home className="w-4 h-4 mr-1" />}
                {breadcrumb.href ? (
                  <Link
                    to={breadcrumb.href}
                    className="text-muted-foreground hover:text-green-600 transition-colors"
                  >
                    {breadcrumb.label}
                  </Link>
                ) : (
                  <span className="text-foreground font-medium">
                    {breadcrumb.label}
                  </span>
                )}
              </li>
              {index < breadcrumbs.length - 1 && (
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              )}
            </Fragment>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;
