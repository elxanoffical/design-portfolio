import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
import logo from "../app/assets/image/dp.png";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-[50px]">
      <Image src={logo} alt="" width={40} height={40} className="" />
      <IoMdMenu />
    </header>
  );
}
