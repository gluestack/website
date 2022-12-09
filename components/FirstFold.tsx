export const FirstFold = () => {
  return (
    <div>
      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-32 xl:pt-32 xl:pb-28">
        <span className="hidden absolute bg-radial-gradient opacity-[.15] pointer-events-none lg:inline-flex left-[-20%] -top-24 w-[640px] h-[640px]"></span>
        <div className="relative max-w-screen-xl px-5 mx-auto">
          <div className="absolute -left-2 -translate-y-12 pointer-events-none md:left-[12%]"></div>
          <div className="absolute -right-2 -translate-y-20 pointer-events-none md:right-1/4"></div>
          <div className="absolute bottom-0 right-6 -translate-y-20 pointer-events-none md:right-[12%]"></div>
          <div className="relative">
            <h1 className="max-w-6xl mx-auto text-5xl font-bold text-black text-center md:text-6xl lg:text-7xl">
              Revolutionizing the way <br />
              <span className="text-red-500">you build apps</span>
            </h1>
            <p className="mt-6 max-w-xl mx-auto text-center text-gray-700 text-md leading-relaxed md:mt-8 md:text-lg lg:mt-10">
              Power up your app development with our full stack framework - all
              the tools you need in one place!
            </p>
            <div className="mt-6 max-w-sm mx-auto flex flex-col justify-center items-center gap-4 sm:flex-row md:mt-8 lg:mt-10">
              <a
                className="group relative inline-flex border border-red-500 focus:outline-none w-full sm:w-auto"
                href="/docs"
              >
                <span className="w-full inline-flex items-center justify-center self-stretch px-4 py-2 text-sm text-white text-center font-bold uppercase bg-red-500 ring-1 ring-red-500 ring-offset-1 ring-offset-red-500 transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1">
                  Coming soon
                </span>
              </a>
              {/* <a
                className="group relative inline-flex border border-red-600 focus:outline-none w-full sm:w-auto"
                href="https://laracasts.com"
              >
                <span className="w-full inline-flex items-center justify-center self-stretch px-4 py-2 text-sm text-red-600 text-center font-bold uppercase bg-white ring-1 ring-red-600 ring-offset-1 transform transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1">
                  Watch Laracasts
                </span>
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
