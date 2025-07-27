import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.tsx";
import NotFound from "@/pages/NotFound.tsx";
import Categories from "@/pages/Categories.tsx";
import CategoryPage from "@/pages/CategoryPage.tsx";
import ProductsPage from "@/pages/ProductsPage.tsx";
import ProductDetailPage from "@/pages/ProductDetailPage.tsx";
import Layout from "@/components/ui/layouts/layout.tsx";
import { ThemeProvider } from "@/contexts/theme-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="umkm-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout showBreadcrumb={false}>
                <App />
              </Layout>
            }
          />
          <Route
            path="/kategori"
            element={
              <Layout>
                <Categories />
              </Layout>
            }
          />
          <Route
            path="/kategori/:categorySlug"
            element={
              <Layout>
                <CategoryPage />
              </Layout>
            }
          />
          <Route
            path="/kategori/:categorySlug/:subcategorySlug"
            element={
              <Layout>
                <CategoryPage />
              </Layout>
            }
          />
          <Route
            path="/produk"
            element={
              <Layout>
                <ProductsPage />
              </Layout>
            }
          />
          <Route
            path="/produk/:productId"
            element={
              <Layout>
                <ProductDetailPage />
              </Layout>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
