import type { ReactNode } from "react";
import Navbar from "../navbar";
import Footer from "../footer";

interface LayoutProps {
  children: ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <main className="flex-grow min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default layout;
