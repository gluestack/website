import React from 'react'
import Details from '../section/Terms/Details'
import Layout from "../Layout/Layout";
import InerBanner from '../components/InerBanner';

function term() {
  return (
    <Layout  title={"Terms & Condition - gluestack"}>
      <div className="relative z-10">
        <InerBanner title="Terms & " last="Conditions" />
        <Details/>
        </div>
    </Layout>
  )
}

export default term