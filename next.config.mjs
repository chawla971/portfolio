/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed output: 'export' for Vercel deployment
  // Vercel handles SSR/ISR automatically
  images: { 
    unoptimized: true // Keep this for compatibility
  }
};

export default nextConfig;
