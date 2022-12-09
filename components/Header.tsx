import Link from "next/link";

export const Header = () => {
  return (
   <>
   <div className="container mx-auto">
   <div className="relative w-full py-4 mx-auto transition duration-200 bg-white max-w-screen-2xl lg:bg-transparent lg:py-6">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <div className="">
          <Link href="/" passHref legacyBehavior>
            <a className="inline-flex items-center">
              <img
                className="w-36"
                src="data:image/png;base64,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"
                alt="Laravel"
              />
            </a>
          </Link>
        </div>
        <ul className="relative hidden text-black lg:flex lg:items-center lg:justify-center lg:gap-6 xl:gap-10">
          <li>
            <a href="https://forge.laravel.com">Forge</a>
          </li>
          <li>
            <a href="https://vapor.laravel.com">Vapor</a>
          </li>

          <li>
            <a href="https://vapor.laravel.com"> Ecosystem</a>
          </li>
          <li>
            <a href="https://vapor.laravel.com"> News</a>
          </li>
          <li>
            <a href="https://vapor.laravel.com"> Partners</a>
          </li>
        </ul>
        <div>
          <a
            className="relative inline-flex hidden border border-red-600 group focus:outline-none lg:ml-4 lg:inline-flex"
            href="/docs"
          >
            <span className="inline-flex items-center self-stretch justify-center w-full px-4 py-2 text-sm font-bold text-center text-red-600 uppercase transition-transform transform bg-white ring-1 ring-red-600 ring-offset-1 group-hover:-translate-y-1 group-hover:-translate-x-1 group-focus:-translate-y-1 group-focus:-translate-x-1">
              Documentation
            </span>
          </a>
        </div>
      </div>
    </div>
   </div>
   </>
  );
};
