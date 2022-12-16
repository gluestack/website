import Head from "next/head";
import React from "react";

function Meta({ title, description, ogImgUrl, ogUrl }: any) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link
          rel="icon"
          type="image/svg"
          sizes="32x32"
          href="/icon/favicon.ico"
        ></link>
        <meta key="description" name="description" content={description} />
        <meta key="og:type" property="og:type" content="website" />
        <meta key="og:title" property="og:title" content={title} />
        <meta property="twitter:title" content={title || "Gluestack"} />
        <meta
          key="og:description"
          property="og:description"
          content={description}
        />
        <meta
          property="twitter:description"
          content={description || "One stack for web, mobile, & backend"}
        />

        <meta key="og:image" property="og:image" content={ogImgUrl} />
        <meta
          property="twitter:image"
          content={ogImgUrl || "https://geekyants.com/images/og.jpeg"}
        />
        <meta key="og:url" property="og:url" content={ogUrl} />
      </Head>
    </>
  );
}

export default Meta;
