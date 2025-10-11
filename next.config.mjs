/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
    ],
  },
  // Remove the 'export' line below if deploying to Vercel (it's optimized for server-side rendering)
  // Uncomment it only for static exports (GitHub Pages, etc.)
  // output: 'export',
}

export default nextConfig
