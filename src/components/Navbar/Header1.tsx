import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import NavLink from "../Nav/nav-link";
import {
  navLinks,
  TestLinks,
  TestLinks2,
  TestLinksContent,
  TestLinksContents,
} from "../../../utils/links";
import { Transition } from "@headlessui/react";
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

  const { adpage } = router.query;
  const { ad } = router.query;
  const { cm } = router.query;
  const course1 = "/course/python-software-training-course/";

  return (
    <nav>
      <div className="md:w-[100%]  bg-[#002b17] shadow-md relative z-10">
        <div className="">
          {router.pathname == "/" && (
            <Link href={"/"}>
              <Image
                src="/assets/anjali/banfirst.jpg"
                className="m-auto pt-10"
                alt=""
                width={800}
                height={100}
              />
            </Link>
          )}
        </div>
        <div className="flex justify-between md:px-20 px-2 align-center items-center text-white">
          <div>
            {router.pathname != "/" && (
              <Link href={"/"}>
                <Image
                  src="/anjalilogo.png"
                  className="m-auto "
                  alt=""
                  width={200}
                  height={100}
                />
              </Link>
            )}
          </div>

          <NavLink/>
         
          <div className="flex md:hidden">
            {isMenuOpen && NavOpen == true ? (
              <button
                aria-label="Close Menu"
                title="Close Menu"
                className="p-5 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={HanldeSVGClosed}
              >
                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                  />
                </svg>
              </button>
            ) : (
              adpage == undefined &&
              ad == undefined &&
              cm == undefined && (
                <button
                  aria-label="Open Menu"
                  title="Open Menu"
                  className="p-5 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                  onClick={HanldeSVGOpen}
                >
                  <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                    />
                  </svg>
                </button>
              )
            )}
            {isMenuOpen && NavOpen == true && (
              <Transition
                show={isMenuOpen}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <NavLink/>
                {/* <div className="absolute lg:top-16 top-56 right-0 z-50 w-[100%]">
                  <div className="bg-white border rounded shadow-sm text-black">
                    <div className="lg:mb-4 mb-4">
                      <div id="navLinks" className="grid grid-flow-row lg:mt-10 mt-4">
                        {navLinks.map((link: any, index: any) => (
                          <NavLink
                            title={link.title}
                            href={link.href}
                            key={index}
                            id={link.id}
                            className="text-black px-8 py-2"
                            isMegaMenu={link.isMegaMenu}
                            megaMenuLinks={TestLinks}
                            ContentMegaLink={TestLinksContent}
                            TestLinksContents={TestLinksContents}
                            Show={null}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div> */}
              </Transition>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
