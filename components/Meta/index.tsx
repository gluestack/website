import Head from "next/head";
import React from "react";

function Meta({ title, description, ogImgUrl, ogUrl }: any) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=4.0, minimum-scale=0.86, user-scalable=no"
        />
        <title>{title || "Gluestack"}</title>
        <link
          rel="icon"
          type="image/svg"
          sizes="32x32"
          href="/icon/favicon.ico"
        ></link>
        <meta
          key="description"
          name="description"
          content={
            description ||
            "gluestack - One stack for web, mobile, & backend. 100% open source full-stack framework that takes away the complexities of building modern web & mobile apps."
          }
        />
        <meta key="og:type" property="og:type" content="website" />
        <meta
          key="og:title"
          property="og:title"
          content={title || "Gluestack"}
        />
        <meta name="twitter:title" content={title || "Gluestack"} />

        <meta
          key="og:description"
          property="og:description"
          content={
            description ||
            "gluestack - One stack for web, mobile, & backend. 100% open source full-stack framework that takes away the complexities of building modern web & mobile apps."
          }
        />
        <meta
          property="twitter:description"
          content={
            description ||
            "gluestack - One stack for web, mobile, & backend. 100% open source full-stack framework that takes away the complexities of building modern web & mobile apps."
          }
        />

        <meta
          key="og:image"
          property="og:image"
          content={
            ogImgUrl ||
            "//gluestack-strapi.sfo3.digitaloceanspaces.com/635d1accfe750c74ecd57f67d6aab3e4.png?updated_at=2022-12-19T06:51:52.905Z"
          }
        />

        <meta
          name="twitter:image"
          content={
            ogImgUrl ||
            "https://gluestack-strapi.sfo3.digitaloceanspaces.com/635d1accfe750c74ecd57f67d6aab3e4.png?updated_at=2022-12-19T06:51:52.905Z"
          }
        ></meta>
        <meta
          property="og:url"
          content={`https://gluestack.io${ogUrl}` || "https://gluestack.io"}
        />
        <meta
          property="twitter:url"
          content={`https://gluestack.io${ogUrl}` || "https://gluestack.io"}
        />
      </Head>
    </>
  );
}

export default Meta;
