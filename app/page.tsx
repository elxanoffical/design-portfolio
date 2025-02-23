

"use client";

import { useEffect, useState } from "react";

import React from "react";
import Navlink from "next/link";



interface Project {
  _id: string;
  title: string;
  subtitle: string;
  description: string
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
        if (res.ok) {
          const data = await res.json();
          setProjects(data);
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);
  if (loading) return <p>Loading...</p>;

  
if (projects.length == 0) return <p>No projects found.</p>;
  return (
    <>
      <section className="">
        <div className="container ">
          <h2 className="font-medium text-[26px] text-[#242321] mt-[50px] mb-[8px]">
            Portfolio
          </h2>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-[24px]">
            <p className="text-[#666666] text-[16px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
              Perferendis, consequuntur voluptatibus accusamus
            </p>
            <nav className="flex gap-4 items-center">
              <Navlink
                className="text-[16px]  text-[#666666] active:border-b-[1px] active:border-[#ca8b0d]"
                href="/all"
              >
                All
              </Navlink>
              <Navlink className="text-[16px]  text-[#666666]" href="/logo">
                Logo
              </Navlink>
            </nav>
          </div>
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] py-[40px]">
        
          {projects.map((card, index) => {
            return (
              <div key={index} className="cursor-pointer">
                <div className="relative h-auto md:h-[300px]">
                  <img
                    className="w-full h-full object-cover"
                    src="/cardImg.jpg"
                    alt=""
                  />
                  <div className="absolute w-[90%] h-[90%] bg-[#e09a0ee6] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 hover:opacity-100 transition duration-500"></div>
                </div>
                <h2 className="font-medium text-[20px] mt-2 text-[#242321]">
                  {card.title}
                </h2>
                <p className="text-[16px] text-[#666666]">{card.subtitle}</p>
                <p className="text-[16px] text-[#666666]">{card.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}