import React from "react";
import Blog from "../../components/Blog/Blog";

function Blogs() {
  return (
    <>
      <section className="container mx-auto ">
        <div className="grid gap-8 bg-white lg:grid-cols-1">
         <Blog/>
         <Blog/>
         <Blog/>
        </div>
      </section>
    </>
  );
}

export default Blogs;
