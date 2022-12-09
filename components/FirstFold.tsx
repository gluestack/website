import Heading from "../elements/Heading";
export const FirstFold = () => {
  return (
    <div>
      <section className="relative pt-32 pb-20 overflow-hidden lg:pt-32 xl:pt-32 xl:pb-28">
        <span className="hidden absolute bg-radial-gradient opacity-[.15] pointer-events-none lg:inline-flex left-[-20%] -top-24 w-[640px] h-[640px]"></span>
        <div className="relative max-w-screen-xl px-5 mx-auto">
          <div className="absolute -left-2 -translate-y-12 pointer-events-none md:left-[12%]"></div>
          <div className="absolute -translate-y-20 pointer-events-none -right-2 md:right-1/4"></div>
          <div className="absolute bottom-0 right-6 -translate-y-20 pointer-events-none md:right-[12%]"></div>
          <div className="relative">
            <h1 className="max-w-3xl mx-auto text-5xl font-bold text-center text-black md:text-6xl lg:text-7xl">
              The PHP Framework <br />
              <span className="text-red-500">for Web Artisans</span>
            </h1>
            {/* <div className='text-center'>
           <Heading title={'The PHP Framework'} isLight={undefined} color={undefined} priority={1} children={undefined}/>
           <div className='px-14'>
           <Heading title={'for Web Artisans'} isLight={undefined} color={'primary'} priority={1} children={undefined}/>
           </div>
           </div> */}
            <p className="max-w-xl mx-auto mt-6 leading-relaxed text-center text-gray-700 text-md md:mt-8 md:text-lg lg:mt-10">
              Laravel is a web application framework with expressive, elegant
              syntax. We’ve already laid the foundation — freeing you to create
              without sweating the small things.
            </p>
            <div className="flex flex-col items-center justify-center max-w-sm gap-4 mx-auto mt-6 sm:flex-row md:mt-8 lg:mt-10">
              <a
                className="relative inline-flex w-full border border-red-500 group focus:outline-none sm:w-auto"
                href="/docs"
              >
                <span className="inline-flex items-center self-stretch justify-center w-full px-4 py-2 text-sm font-bold text-center text-white uppercase transition-transform transform bg-red-500 ring-1 ring-red-500 ring-offset-1 ring-offset-red-500 group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1">
                  Get Started
                </span>
              </a>
              <a
                className="relative inline-flex w-full border border-red-600 group focus:outline-none sm:w-auto"
                href="https://laracasts.com"
              >
                <span className="inline-flex items-center self-stretch justify-center w-full px-4 py-2 text-sm font-bold text-center text-red-600 uppercase transition-transform transform bg-white ring-1 ring-red-600 ring-offset-1 group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1">
                  Watch Laracasts
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
