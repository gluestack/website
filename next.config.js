/** @type {import('next').NextConfig} */
const { DOCS_URL } = process.env;
const nextConfig = {
  // reactStrictMode: true,
  // swcMinify: true,
  // assetPrefix: `${DOCS_URL}`,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/docs",
        destination: `${DOCS_URL}/docs`,
      },
      {
        source: "/docs/:path*",
        destination: `${DOCS_URL}/docs/:path*`,
      },
    ];
  },
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ["localhost"] },
}

module.exports = nextConfig;
