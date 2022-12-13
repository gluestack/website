import React from "react";
import Card from "../../components/Card";
import Heading from "../../elements/Heading";
import data from '../../data.json'

function Testimonial() {
  return (
    <>
      <div className="container relative py-24 mx-auto lg:py-28">
      <div className="absolute right-[12%] -translate-y-20 pointer-events-none">
            <svg className="text-red-600 animate-cube" width="46" height="53" viewBox="0 0 46 53" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="m23.102 1 22.1 12.704v25.404M23.101 1l-22.1 12.704v25.404" stroke="currentColor" stroke-width="1.435" stroke-linejoin="bevel"></path><path d="m45.202 39.105-22.1 12.702L1 39.105" stroke="currentColor" stroke-width="1.435" stroke-linejoin="bevel"></path><path transform="matrix(.86698 .49834 .00003 1 1 13.699)" stroke="currentColor" stroke-width="1.435" stroke-linejoin="bevel" d="M0 0h25.491v25.405H0z"></path><path transform="matrix(.86698 -.49834 -.00003 1 23.102 26.402)" stroke="currentColor" stroke-width="1.435" stroke-linejoin="bevel" d="M0 0h25.491v25.405H0z"></path><path transform="matrix(.86701 -.49829 .86701 .49829 1 13.702)" stroke="currentColor" stroke-width="1.435" stroke-linejoin="bevel" d="M0 0h25.491v25.491H0z"></path>
</svg>
        </div>
        <div className="absolute pointer-events-none -left-6 top-24">
            <svg className="text-red-600 animate-cube" width="46" height="53" viewBox="0 0 46 53" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="m23.102 1 22.1 12.704v25.404M23.101 1l-22.1 12.704v25.404" stroke="currentColor" stroke-width="1.435" stroke-linejoin="bevel"></path><path d="m45.202 39.105-22.1 12.702L1 39.105" stroke="currentColor" stroke-width="1.435" stroke-linejoin="bevel"></path><path transform="matrix(.86698 .49834 .00003 1 1 13.699)" stroke="currentColor" stroke-width="1.435" stroke-linejoin="bevel" d="M0 0h25.491v25.405H0z"></path><path transform="matrix(.86698 -.49834 -.00003 1 23.102 26.402)" stroke="currentColor" stroke-width="1.435" stroke-linejoin="bevel" d="M0 0h25.491v25.405H0z"></path><path transform="matrix(.86701 -.49829 .86701 .49829 1 13.702)" stroke="currentColor" stroke-width="1.435" stroke-linejoin="bevel" d="M0 0h25.491v25.491H0z"></path>
</svg>
        </div>
        <div className="px-0 text-center lg:px-44">
          <Heading
            isLight={undefined}
            color={undefined}
            priority={2}
          >
            Loved by thousands of developers around the world.
          </Heading>
        </div>

        <div className="testimonial_grid">
            {
                data.testimonials.map((ele:any)=> <Card istestimonial image={ele.image} href='/car' name={ele.name} title={ele.title} creator={ele.creator}/>)
            }
        </div>
      </div>
    </>
  );
}

export default Testimonial;
