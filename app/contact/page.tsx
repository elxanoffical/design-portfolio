import React from "react";

export default function ContactPage() {
  return (
    <section>
      <div className=" border container flex flex-col gap-[60px]">
        <img src="/contact.jpg" alt="" />
        <div className="border border-black flex gap-[150px]">
          <div className="flex flex-col gap-[50px]">
            <div>
              <h3 className="text-[26px] font-medium">Contact Me.</h3>
              <p className="text-[16px] text-[#666666] font-normal">
                Write me an e-mail via the form, <br /> or just send us an
                e-mail directly at
              </p>
              <span className="text-[16px] text-[#E09A0E]">
                danilo@pelzer.com
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
          <form
            className="border border-black w-[783px] flex flex-col gap-10"
            action=""
          >
            <div className="flex items-center gap-7">
              <div className="flex items-center border-b  w-[50%]">
                <label className="text-[16px] text-[#666666]" htmlFor="">
                  Name.
                </label>
                <input className=" outline-none" type="text" />
              </div>
              <div className="flex items-center border-b  w-[50%]">
                <label className="text-[16px] text-[#666666]" htmlFor="">
                  Email.
                </label>
                <input className=" outline-none" type="text" />
              </div>
            </div>
            <div>
              <label className="text-[16px] text-[#666666]" htmlFor="">
                Message.
              </label>
              <textarea
              rows={5}
                name="textarea"
                className="w-full  border-b-2 resize-none outline-none"
                placeholder="Message..."
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
