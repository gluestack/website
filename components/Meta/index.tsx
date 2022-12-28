import Head from "next/head";
import React from "react";
import {useRouter} from 'next/router';

function Meta({ pageTitle, description, ogImgUrl, ogUrl }: any) {
  const router = useRouter ();
  const canonical = `https://gluestack.io${router.asPath.split ('?')[0]}`;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="canonical" href={canonical} />

        <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=4.0, minimum-scale=0.86, user-scalable=no"
      />
        <title>{pageTitle || "gluestack"}</title>
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
          content={
            ogImgUrl || "//gluestack.io/images/ogImg.png"
          }
        />

        <meta
          name="twitter:image"
          content={
            ogImgUrl || "https://gluestack.io/images/ogImg.png"
          }
        />
        <meta
          property="og:url"
          content={ogUrl|| "https://gluestack.io"}
        />
        <meta
          property="twitter:url"
          content={ogUrl || "https://gluestack.io"}
        />

      
      </Head>

    </>
  );
}

export default Meta;
