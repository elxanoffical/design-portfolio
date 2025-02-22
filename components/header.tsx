import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
import logo from "../app/assets/image/dp.png";

export default function Header() {
  return (
    <header className="flex items-center container justify-between py-[50px]">
      <Image
        src={logo}
        alt="logo"
        width={40}
        height={40}
        className=" w-9 h-9 md:w-12 md:h-12"
      />
      <IoMdMenu className="w-6 h-6 cursor-pointer md:w-8 md:h-8" />
    </header>
  );
}
