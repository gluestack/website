import React from 'react'
import Details from '../section/Terms/Details'
import Layout from "../Layout/Layout";
import InerBanner from '../components/InerBanner';

function term() {
  return (
    <Layout  title={"Terms & Condition"} description={"terms"}>
            <InerBanner title="Terms and " last="Conditions" />

        <Details/>
    </Layout>
  )
}

export default term