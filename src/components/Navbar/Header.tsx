import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import NavLink from "../Nav/nav-link";
import {AddsAccordion} from "@/components/addressTab";

import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const [NavOpen, setNavOpen] = useState(true);

  const HanldeSVGClosed = () => {
    setIsMenuOpen(false);
    setNavOpen(false);
  };

  const HanldeSVGOpen = () => {
    setIsMenuOpen(true);
    setNavOpen(true);
  };



  return (
    <nav>
      <div className="md:w-[100%]  bg-[#002b17] shadow-md relative z-10">
        <div className="">
          {router.pathname == "/" && (
            <Link href={"/"}>
              <Image
                src="/banneranjalicomputereducation.jpg"
                className="m-auto pt-10"
                alt=""
                width={800}
                height={100}
              />
            </Link>
          )}
        </div>
        <div className="lg:hidden block">
            {router.pathname != "/" && (
              <Link href={"/"}>
                <Image
                  src="/anjalilogo.png"
                  className="m-auto "
                  alt="anjalicomputereducationlogo"
                  width={200}
                  height={100}
                />
              </Link>
            )}
          </div>
        <div className="flex justify-between md:px-20 px-2 lg:py-4 py-0 align-center items-center text-white">
          <div className="lg:block hidden">
            {router.pathname != "/" && (
              <Link href={"/"}>
                <Image
                  src="/anjalilogo.png"
                  className="m-auto "
                  alt="anjalicomputereducationlogo"
                  width={200}
                  height={100}
                />
              </Link>
            )}
          </div>

          <NavLink />
        
        </div>
       
      </div>
      <AddsAccordion/>
    </nav>
  );
};

export default Header;
