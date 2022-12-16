import Head from 'next/head'
import React from 'react'

function Meta({title,description,ogImgUrl,ogUrl,date}:any) {
  return (
    <>
        <Head>
        <title>{title}</title>
       <link rel="icon" type='image/svg' sizes="32x32" href="/icon/favicon.png"></link>
        <meta key="description" name="description" content={description} />
        <meta key="og:type" property="og:type" content="website"  />
        <meta key="og:title" property="og:title" content={title} />
        <meta key="og:description" property="og:description" content={description} />
        <meta key="og:image" property="og:image" content={ogImgUrl} />
        <meta key="og:url" property="og:url" content={ogUrl} />
       <meta property='Blog' content={date}/>
        </Head>
    </>
  )
}

export default Meta