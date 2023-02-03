/** @type {import('next').NextConfig} */
const path = require("path");

const withPlugins = require("next-compose-plugins");
const { withExpo } = require("@expo/next-adapter");
const withTM = require("next-transpile-modules")([
  "react-native-web",
  "react-native",
  "@gluestack/design-system",
  "@universa11y/modal",
  "@gluestack/ui",
  "@gluestack/css-injector",
  "@gluestack/cssify",
  "@gluestack/ui-convert-utility-to-sx",
  "@dank-style/react",
  "@dank-style/css-injector",
  "@dank-style/color-mode",
  "@dank-style/cssify",
  "@expo/html-elements",
  "expo-linear-gradient",
  "react-native-svg",
  "@react-native-aria/checkbox",
  "@react-native-aria/focus",
  "@react-native-aria/overlays",
  "@react-native-aria/radio",
  "@react-native-aria/slider",
  "@react-native-aria/toggle",
  "@react-native-aria/utils",
  "@universa11y/actionsheet",
  "@universa11y/form-control",
  "@universa11y/avatar",
  "@universa11y/button",
  "@universa11y/checkbox",
  "@universa11y/divider",
  "@universa11y/fab",
  "@universa11y/hooks",
  "@universa11y/hstack",
  "@universa11y/icon",
  "@universa11y/input",
  "@universa11y/link",
  "@universa11y/menu",
  "@universa11y/modal",
  "@universa11y/overlay",
  "@universa11y/popover",
  "@universa11y/popper",
  "@universa11y/progress",
  "@universa11y/provider",
  "@universa11y/radio",
  "@universa11y/select",
  "@universa11y/slider",
  "@universa11y/spinner",
  "@universa11y/stack",
  "@universa11y/switch",
  "@universa11y/textarea",
  "@universa11y/toast",
  "@universa11y/tooltip",
  "@universa11y/ui-provider",
  "@universa11y/vstack",
  "@universa11y/transitions",
  "@universa11y/utils",
  "@universa11y/tabs",
  "@universa11y/react-native-aria",
  "@universa11y/alert-dialog",
  "@universa11y/pressable",
]);
const nextConfig = {
  // typescript: {
  //   ignoreBuildErrors: true,
  // },

  // eslint: {
  //   ignoreDuringBuilds: true,
  // },

  reactStrictMode: true,
  images: {
    domains: [
      "localhost",
      `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}`,
      "flowbite.s3.amazonaws.com",
      "gluestack-strapi.sfo3.digitaloceanspaces.com",
    ],
  },

  webpack5: true,
  webpack: (config, { isServer }) => {
    config.resolve.fallback = { fs: false };

    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      // Transform all direct `react-native` imports to `react-native-web`
      "react-native$": "react-native-web",
    };

    return config;
  },
};

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: "@mdx-js/react",
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [require("remark-prism")],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withPlugins([[withTM], [withMDX], [withExpo]], {
  // Append the default value with md extensions
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  ...nextConfig,
  withBundleAnalyzer,
});
