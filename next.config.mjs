/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Netlify/CI doesn't install devDeps; linting handled locally
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
