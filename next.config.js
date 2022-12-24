/** @type {import('next').NextConfig} */

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [require("remark-prism")],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "localhost",
      `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}`,
      "flowbite.s3.amazonaws.com",
      "gluestack-strapi.sfo3.digitaloceanspaces.com",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/docs",
        destination: "/",
        permanent: false,
      },
    ];
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

module.exports = withMDX(nextConfig);
