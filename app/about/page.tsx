import React from "react";

export default function AboutPage() {
  return (
    <section className="">
      <div className="container mb-[80px] flex flex-col gap-5">
        <div className="mt-10 flex flex-col items-center justify-center">
          <h2 className="text-[24px] text-[#242321] font-medium">About Me.</h2>
          <p className="text-[16px] text-[#666666] font-normal text-center leading-7">
            My everyday work is presented here, I do what I love, <br />
            Who I am, what I do and my social networks, connect with me.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row md:gap-7">
          <div className="bg-[#EEEEEE] pl-10 pr-4 lg:pr-10 py-11 overflow-hidden">
            <div className="overflow-scroll overflow-x-auto lg:w-[620px] h-[500px] border-black">
              <div className="mb-10">
                <h4 className="text-[26px] text-[#242321] font-normal">
                  Danilo Pelzer
                </h4>
                <span className="text-[17px] font-normal">
                  Chief Executive Officer
                </span>
              </div>
              <div className="text-[#666666] text-[16px] mr-2 lg:mr-4">
                Certainty listening no no behaviour existence assurance
                situation is. Because <br /> add why not esteems amiable him.
                Interested the unaffected mrs law friendship add principles.
                Indeed on people do merits to. Court heard which up above <br />{" "}
                hoped grave do. Answer living law things either sir bed length.
                Looked before <br /> we an on merely. <br />
                These no death he at share alone. Yet outward the him compass
                hearted are tedious. <br />
                <br />
                Listening no no behaviour existence assurance situation is.
                Because add why not esteems amiable him. Interested the
                unaffected mrs law friendship add principles. Indeed on people
                do merits to. Court heard which up above hoped grave do. Answer
                living law things either sir bed length. Looked before we an on
                merely. <br />
                These no death he at share alone. Yet outward the him compass
                hearted are tedious. <br />
                <br />
                Because add why not esteems amiable him. Interested the
                unaffected mrs law friendship add principles. Indeed on people
                do merits to. Court heard which up above hoped grave do. Answer
                living law things either sir bed length. Looked before we an on
                merely. <br />
                <br />
                Certainty listening no no behaviour existence assurance
                situation is. Because add why not esteems amiable him.
                Interested the unaffected mrs law friendship add principles.
                Indeed on people do merits to. Court heard which up above hoped
                grave do. Answer living law things either sir bed length. Looked
                before we an on merely. <br />
                These no death he at share alone. Yet outward the him compass
                hearted are tedious.
                <br />
              </div>
            </div>
          </div>

          <div className="flex justify-center md:justify-start mt-5 md:mt-0">
            <img
              src="/about-me.jpg"
              alt="About Me"
              className="w-full md:w-[300px] lg:w-[500px] xl:w-[500px] rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
