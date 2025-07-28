import fs from "fs";
import path from "path";
import { generateSitemap, generateRobotsTxt } from "@/utils/sitemap";

// Path ke public/
const publicPath = path.join(__dirname, "..", "public");

// Pastikan folder ada
if (!fs.existsSync(publicPath)) {
  fs.mkdirSync(publicPath, { recursive: true });
}

// Tulis sitemap.xml
fs.writeFileSync(path.join(publicPath, "sitemap.xml"), generateSitemap(), "utf8");
console.log("✅ sitemap.xml berhasil dibuat");

// Tulis robots.txt
fs.writeFileSync(path.join(publicPath, "robots.txt"), generateRobotsTxt(), "utf8");
console.log("✅ robots.txt berhasil dibuat");
