/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',             // generates the static 'out' folder on build
  images: { unoptimized: true } // needed if you use next/image in static export
  // trailingSlash: true,        // optional if you have static hosting quirks
};

export default nextConfig;
