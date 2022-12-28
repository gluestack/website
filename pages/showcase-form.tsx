import React from 'react'
import Layout from '../Layout/Layout'
import ShowCaseForm from '../section/Showcase/ShowCaseForm';
import { EventsCategory } from '../services';

function showcaseform({categories}:any) {
  console.log(categories,"categories");
  
  return (
    <>
    {/* <Layout> */}
    <ShowCaseForm/>
    {/* </Layout> */}
    </>
  )
}

export default showcaseform;

export async function getServerSideProps() {
  let categories;

  try {
    const { data } = await EventsCategory();
    const content = data;
    categories = content;
    console.log(categories);
    
    
  } catch (error) {
    console.log(error,"error");
    
  }

  return {
    props: {
      categories: [],
    },
  };
}