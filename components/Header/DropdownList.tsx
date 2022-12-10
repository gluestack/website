import React from "react";
import Image from "next/image";
import img from "../../public/ecosystem/breeze.min.svg";

function DropdownList() {
  return (
    <>
      <div className="absolute  left-[20%] " id="wrapper">
        <div className="w-10/12 pt-10 ">
          <div className="p-2 px-2 bg-white rounded-md drop-shadow-2xl lg:px-6 ">
            <div>
              <ul className="relative list_grid">
                <li>
                  <a href="" className="flex">
                    <div className="card-list">
                      <span className="card-image"></span>
                      <Image
                        src={img}
                        alt="Icon"
                        className="w-7 h-7"
                        width={47}
                        height={32}
                      />
                    </div>
                    <div className="ml-4 leading-5">
                      <div className="text-gray-900">Breeze</div>
                      <span className="text-xs text-gray-700">
                        Lightweight starter kit scaffolding for new applications
                        with Blade or Inertia.
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="" className="flex">
                    <div className="card-list">
                      <span className="card-image"></span>
                      <Image
                        src={img}
                        alt="Icon"
                        className="w-7 h-7"
                        width={47}
                        height={32}
                      />
                    </div>
                    <div className="ml-4 leading-5">
                      <div className="text-gray-900">Breeze</div>
                      <span className="text-xs text-gray-700">
                        Lightweight starter kit scaffolding for new applications
                        with Blade or Inertia.
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="" className="flex">
                    <div className="card-list">
                      <span className="card-image"></span>
                      <Image
                        src={img}
                        alt="Icon"
                        className="w-7 h-7"
                        width={47}
                        height={32}
                      />
                    </div>
                    <div className="ml-4 leading-5">
                      <div className="text-gray-900">Breeze</div>
                      <span className="text-xs text-gray-700">
                        Lightweight starter kit scaffolding for new applications
                        with Blade or Inertia.
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="" className="flex">
                    <div className="card-list">
                      <span className="card-image"></span>
                      <Image
                        src={img}
                        alt="Icon"
                        className="w-7 h-7"
                        width={47}
                        height={32}
                      />
                    </div>
                    <div className="ml-4 leading-5">
                      <div className="text-gray-900">Breeze</div>
                      <span className="text-xs text-gray-700">
                        Lightweight starter kit scaffolding for new applications
                        with Blade or Inertia.
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DropdownList;
