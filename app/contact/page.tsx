import React from "react";

export default function ContactPage() {
  return (
    <section>
      <div className="  container flex flex-col gap-[60px]">
        <img src="/contact.jpg" alt="" />
        <div className=" flex gap-[150px]">
          <div className="flex flex-col gap-[50px]">
            <div>
              <h3 className="text-[26px] font-medium">Contact Me.</h3>
              <p className="text-[16px] text-[#666666] font-normal">
                Write me an e-mail via the form, <br /> or just send us an
                e-mail directly at
              </p>
              <span className="text-[16px] text-[#E09A0E] group cursor-pointer">
                danilo@pelzer.com
                <div className="bg-[#c08c23] h-[1px] w-0 group-hover:w-[55%] transition-all duration-200"></div>
              </span>
            </div>
            <div>
              <h4 className="text-[16px] text-[#666666] font-semibold mb-4">
                Telephone:
              </h4>
              <p className="text-[16px] text-[#666666] font-normal">
                1-408-555-5555
              </p>
              <p className="text-[16px] text-[#666666] font-normal">
                1-408-555-2259
              </p>
            </div>
          </div>

          <form className=" w-[783px] flex flex-col gap-10" action="">
            <div className="flex items-center gap-7">
              <div className="flex flex-col w-[50%] group relative">
                <div className="flex mb-2">
                  <label
                    className="text-[16px] text-[#666666] w-[60px]"
                    htmlFor="inputId"
                  >
                    Name.
                  </label>
                  <input
                    id="inputId"
                    className="outline-none w-full"
                    type="text"
                  />
                </div>
                <div className="bg-neutral-200 h-[1px] w-full relative">
                  <div className="absolute bottom-0 left-0 h-[1px] bg-yellow-500 w-[60px] transition-all duration-300 group-focus-within:w-full"></div>
                </div>
              </div>

              <div className="flex flex-col w-[50%] group relative">
                <div className="flex mb-2">
                  <label
                    className="text-[16px] text-[#666666] w-[60px]"
                    htmlFor="inputId"
                  >
                    Email.
                  </label>
                  <input
                    id="inputId"
                    className="outline-none w-full"
                    type="text"
                  />
                </div>
                <div className="bg-neutral-200 h-[1px] w-full relative">
                  <div className="absolute bottom-0 left-0 h-[1px] bg-yellow-500 w-[60px] transition-all duration-300 group-focus-within:w-full"></div>
                </div>
              </div>
            </div>
            <div>
              <label className="text-[16px] text-[#666666]" htmlFor="">
                Message.
              </label>
              <textarea
                rows={5}
                name="textarea"
                className="w-full  border-b-2 resize outline-none"
              ></textarea>
            </div>

            <div className="border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" name="" id="" />
                <h2 className="text-[16px] font-normal text-[#666]">
                  I’ve read and accept the <span className="text-[#E09A0E] border-b border-b-yellow-500">terms & conditions</span> *
                </h2>
              </div>
              <button className="py-[6px] px-3 text-[16px] font-normal text-white bg-[#E09A0E] rounded">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
