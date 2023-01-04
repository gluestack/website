import React from "react";
import Card from "../../components/Card";

function ShowcaseSIngle({showcase}:any) {
  return (
    <>
      <section className="container py-20">
        <div className="grid gap-8 grid-col-1 lg:grid-cols-3">
         {
            showcase.map((ele:any,index:any)=>{
              return  <Card src={ele?.attributes?.coverImg?.data?.attributes?.url} title={ele.attributes.title} href={`showcase/${ele.attributes.slug}`} description={ele.attributes.description} key={index} />
          
            })
          }
        </div>
      </section>
    </>
  );
}

export default ShowcaseSIngle;
