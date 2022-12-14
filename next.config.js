/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}`],
  },

  async rewrites() {
    return [
      // {
      //   source: "/docs",
      //   destination: "/framework",
      // },
      // {
      //   source: "/docs/*",
      //   destination: "/docs/1.0.x/*",
      // },
      // {
      //   source: "/docs/*/ui",
      //   destination: "/docs/1.0.x/*/ui/1.0.x/*",
      // },
    ];
  },
};

module.exports = nextConfig;
