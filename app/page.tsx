import React from "react";
import NavLink from "next/link";

export default function HomePage() {
  const cards = [
    {
      titile: "People",
      category: "Album Covers",
    },
    {
      titile: "Adestra",
      category: "Print",
    },
    {
      titile: "Desk Concept",
      category: "Furniture",
    },
    {
      titile: "Multi Color",
      category: "Logo",
    },
    {
      titile: "Verein",
      category: "Furniture",
    },
    {
      titile: "Ethics for Design",
      category: "Print",
    },
  ];
  return (
    <section>
      <div className="container">
        <h2 className="font-medium text-[26px] text-[#242321] mt-[50px] mb-[3px]">
          Portfolio
        </h2>
        <div className="flex flex-col lg:flex-row lg items-center lg:justify-between gap-[24px]">
          <p className="font-normal text-[16px] text-[#666666]">
            My everyday work is presented here, <br />
            for more check out my portfolio on Behance.
          </p>
          <nav className="flex items-center gap-[17px]">
            <NavLink href={"/all"} className="text-[16px] text-[#666666]">
              All
            </NavLink>
            <NavLink
              href={"/all"}
              className="text-[16px] text-[#666666] border-b-[1px] border-[#ca8b0d]"
            >
              Furniture
            </NavLink>
            <NavLink href={"/all"} className="text-[16px] text-[#666666]">
              Logo
            </NavLink>
            <NavLink href={"/all"} className="text-[16px] text-[#666666]">
              People
            </NavLink>
            <NavLink href={"/all"} className="text-[16px] text-[#666666]">
              Print
            </NavLink>
          </nav>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] py-[40px]">
          {cards.map((card, index) => {
            return (
              <div key={index} className="">
                <div className=" relative mb-2 h-auto md:h-[300px]">
                  <img
                    src={"/cardImg.jpg"}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute w-[90%] h-[90%] bg-[#e09a0ee6] top-[50%] left-[50%] 
                  translate-x-[-50%] translate-y-[-50%] opacity-0 hover:opacity-100 transition-all duration-500"></div>
                </div>
                <h2 className="font-medium text-[20px] text-[#242321]">
                  {card.titile}
                </h2>
                <p className=" text-[16px] text-[#666666]">{card.category}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
