import type { ReactNode } from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import Breadcrumb from "../breadcrumb";

interface LayoutProps {
  children: ReactNode;
  showBreadcrumb?: boolean;
}

const Layout = ({ children, showBreadcrumb = true }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {showBreadcrumb && <Breadcrumb />}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
