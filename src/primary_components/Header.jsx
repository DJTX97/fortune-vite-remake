import { useState } from "react";
import Logo from "../header_components/Logo";
import HamburgerBtn from "../header_components/MobileNav";
import Nav from "../header_components/Nav";

export default function Header() {
  const [isMobile, setMobile] = useState(false);

  return (
    <>
      <div className="sticky top-0 flex h-16 mb-[3rem] py-[8px] bg-white border-b border-color text-[16px] uppercase font-[600]">
        <HamburgerBtn />
        <Logo />
        <Nav />
      </div>
    </>
  );
}
