import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

function Meta({ pageTitle, description, ogImgUrl, ogUrl }: any) {
  const router = useRouter();
  const canonical = `https://gluestack.io${router.asPath.split("?")[0]}`;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="index,follow" />

        <link rel="manifest" href="/manifest.json" />

        <link rel="canonical" href={canonical} />

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1,  shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <title>{pageTitle || "gluestack"}</title>

        <link
          rel="shortcut icon"
          href="/icon/favicon.ico"
          type="image/x-icon"
        />
        <link rel="apple-touch-icon" href="/icon/apple-touch-icon.png" />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/icon/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/icon/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/icon/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/icon/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/icon/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/icon/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icon/apple-touch-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icon/apple-touch-icon-180x180.png"
        />
        <meta
          key="description"
          name="description"
          content={
            description ||
            "gluestack - One stack for web, mobile & backend. 100% open source full-stack framework that takes away the complexities of building modern web & mobile apps."
          }
        />
        <meta key="og:type" property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          key="og:title"
          property="og:title"
          content={pageTitle || "gluestack"}
        />
        <meta name="twitter:title" content={pageTitle || "gluestack"} />
        <meta name="theme-color" content="#fff" />

        <meta
          key="og:description"
          property="og:description"
          content={
            description ||
            "gluestack - One stack for web, mobile & backend. 100% open source full-stack framework that takes away the complexities of building modern web & mobile apps."
          }
        />
        <meta
          property="twitter:description"
          content={
            description ||
            "gluestack - One stack for web, mobile & backend. 100% open source full-stack framework that takes away the complexities of building modern web & mobile apps."
          }
        />

        <meta
          key="og:image"
          property="og:image"
          content={ogImgUrl || "//gluestack.io/images/ogImg.png"}
        />

        <meta
          name="twitter:image"
          content={ogImgUrl || "https://gluestack.io/images/ogImg.png"}
        />
        <meta property="og:url" content={ogUrl || "https://gluestack.io"} />
        <meta
          property="twitter:url"
          content={ogUrl || "https://gluestack.io"}
        />
      </Head>
    </>
  );
}

export default Meta;
