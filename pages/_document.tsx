import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-WFW8FKC');`,
            }}
          >
             
            </script>
          <script src="js/noflash.js" async />
          <link
            rel="stylesheet"
            href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
          ></link>
           <link
          rel="preload"
          href="/fonts/sf-pro/FontsFree-Net-SFProDisplay-Regular.woff2"
          as="font"
          crossOrigin=""
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/sf-pro/FontsFree-Net-SFProDisplay-Light.woff2"
          as="font"
          crossOrigin=""
          type="font/woff2"
        />
          <link
          rel="preload"
          href="/fonts/sf-pro/FontsFree-Net-SFProDisplay-Bold1.woff2"
          as="font"
          crossOrigin=""
          type="font/woff2"
        />
          <link
          rel="preload"
          href="/fonts/sf-pro/FontsFree-Net-SFProDisplay-Semibold.woff2"
          as="font"
          crossOrigin=""
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/sf-pro/FontsFree-Net-SFProDisplay-BoldItalic.woff2"
          as="font"
          crossOrigin=""
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/sf-pro/SFProDisplay-Medium.woff2"
          as="font"
          crossOrigin=""
          type="font/woff2"
        />
        </Head>
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-WFW8FKC"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
