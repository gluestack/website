/** @type {import('next').NextConfig} */
const path = require("path");

const withPlugins = require("next-compose-plugins");
const { withExpo } = require("@expo/next-adapter");
const withTM = require("next-transpile-modules")([
  "react-native-web",
  "react-native",

  "@gluestack/design-system",

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

  "@gluestack-ui/actionsheet",
  "@gluestack-ui/form-control",
  "@gluestack-ui/avatar",
  "@gluestack-ui/modal",
  "@gluestack-ui/button",
  "@gluestack-ui/checkbox",
  "@gluestack-ui/divider",
  "@gluestack-ui/fab",
  "@gluestack-ui/hooks",
  "@gluestack-ui/hstack",
  "@gluestack-ui/icon",
  "@gluestack-ui/input",
  "@gluestack-ui/link",
  "@gluestack-ui/menu",
  "@gluestack-ui/modal",
  "@gluestack-ui/overlay",
  "@gluestack-ui/popover",
  "@gluestack-ui/progress",
  "@gluestack-ui/provider",
  "@gluestack-ui/radio",
  "@gluestack-ui/select",
  "@gluestack-ui/slider",
  "@gluestack-ui/spinner",
  "@gluestack-ui/stack",
  "@gluestack-ui/switch",
  "@gluestack-ui/textarea",
  "@gluestack-ui/toast",
  "@gluestack-ui/tooltip",
  "@gluestack-ui/vstack",
  "@gluestack-ui/transitions",
  "@gluestack-ui/utils",
  "@gluestack-ui/tabs",
  "@gluestack-ui/react-native-aria",
  "@gluestack-ui/alert-dialog",
  "@gluestack-ui/pressable",
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
      "s3.us-west-2.amazonaws.com",
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
    remarkPlugins: [],
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
