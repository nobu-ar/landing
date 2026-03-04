/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // <- clave: genera /out estático
  images: {
    unoptimized: true,     // <- necesario para export estático si usás next/image
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig