import React from 'react'
import Details from '../section/Terms/Details'
import HeroSection from '../section/Terms/HeroSection'
import Layout from "../Layout/Layout";

function Cookies() {
  return (
    <Layout  title={"Cookies"} description={"Cookies"}>
        <HeroSection/>
        <Details/>
    </Layout>
  )
}

export default Cookies;