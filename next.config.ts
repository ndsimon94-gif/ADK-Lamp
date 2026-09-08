import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: builds to /out as plain HTML/CSS/JS so the site can be
  // uploaded to any web host (e.g. SiteGround) without a Node.js server.
  output: "export",
  // Generates /about/index.html etc. so clean URLs ("/about") work as
  // directory index requests on standard Apache/Nginx shared hosting.
  trailingSlash: true,
  images: {
    // next/image's on-demand optimizer needs a server; disable it so any
    // future <Image> usage still works from a static export.
    unoptimized: true,
  },
};

export default nextConfig;
