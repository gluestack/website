import React from "react";
import Image from "next/image";
import img from "../../public/ecosystem/breeze.min.svg";
import data from "../../data.json";
import Heading from "../../elements/Heading";
import Text from "../../elements/Text";

function DropdownList() {
  return (
    <>
      <div className="absolute  left-[20%] " id="wrapper">
        <div className="w-10/12 pt-10 ">
          <div className="dropdown-div">
            <div>
              <ul className=" list_grid">
                {data.ecosystem.map((ele: any) => {
                  return (
                    <li key={ele.id}>
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
                          <Heading
                            isLight={undefined}
                            color={undefined}
                            priority={6}
                          >
                            {ele.title}
                          </Heading>
                          <Text size="sm" font="thin">
                            {ele.desc}
                          </Text>
                        </div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DropdownList;
