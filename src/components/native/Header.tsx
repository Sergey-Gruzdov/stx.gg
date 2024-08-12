"use client";

import Link from "next/link";
import logo from "@/assets/images/logo.svg";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BorderBeam } from "@/components/magicui/border-beam";

const Header = () => {
  const NAV_ITEMS = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Services",
      link: "/services",
    },
    {
      title: "Konzept",
      link: "/concept",
    },
    {
      title: "Über uns",
      link: "/about-us",
    },
  ];
  const navItemClassName =
    "py-2 px-3 rounded-lg opacity-90 text-white transition-all inline-flex items-center duration-300 ease-in-out";

  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const logoElement = (text = true) => (
    <Link href="/" className="flex gap-2 items-center ">
      <Image
        width={80}
        height={80}
        className="w-[80px] h-80px] object-contain relative top-[2px]"
        src={logo}
        alt="STX Logo"
      />

      <span
        className={`text-white ${
          !text && "lg:block hidden"
        }  font-bold text-lg relative`}
      >
        S T X
      </span>
    </Link>
  );

  const ctaElement = (mode = "") => (
    <Link
      href={"/#contact-section"}
      className={`text-white relative ${
        mode === "fixed"
          ? "bg-[#11051d] hover:bg-[#11051d]/90"
          : "hover:bg-[#292929]/40"
      } transition-all ease-in-out duration-300 flex w-full text-[14px] flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl`}
    >
      <span
        className={`pointer-events-none ${
          mode === "fixed" ? "px-4 py-2" : "px-6 py-3"
        } whitespace-pre-wrap bg-clip-text text-center leading-none`}
      >
        Kontakt
      </span>

      <BorderBeam size={50} duration={12} delay={9} className="opacity-80" />
    </Link>
  );

  // Function to check the screen size and scroll position
  const checkScreenSizeAndScroll = () => {
    const isPC = window.innerWidth >= 1024;
    const isScrolled = window.scrollY > 100;
    setIsMenuVisible(isPC && isScrolled);
  };

  // useEffect to run when the component mounts and when the window is resized or scrolled
  useEffect(() => {
    // Initial check when component mounts
    checkScreenSizeAndScroll();

    // Add event listeners for window resize and scroll
    window.addEventListener("resize", checkScreenSizeAndScroll);
    window.addEventListener("scroll", checkScreenSizeAndScroll);

    // Cleanup the event listeners on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenSizeAndScroll);
      window.removeEventListener("scroll", checkScreenSizeAndScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed lg:absolute backdrop-blur-[6px] lg:backdrop-blur-none top-0 left-0 right-0 lg:top-auto lg:left-auto lg:right-auto w-full z-50 transition-all ease-in-out duration-200`}
      >
        <nav className="lg:py-0 py-5">
          <div className="container flex lg:grid lg:grid-cols-12 justify-between items-center">
            <div className="lg:hidden flex items-center">
              <button
                className={`text-white text-3xl`}
                aria-label="Mobile Menu"
                onClick={() => {
                  setShowMenu(!showMenu);
                }}
              >
                <HamburgerMenuIcon className="w-6 h-6" />
              </button>
            </div>
            <div className=" lg:justify-center lg:mr-0 ml-4 lg:ml-0 items-center lg:block lg:col-span-2">
              {typeof logoElement === "function"
                ? logoElement(false)
                : logoElement}
            </div>
            <div
              className={`${
                showMenu ? "left-0" : "-left-[335px]"
              }  fixed top-0 bottom-0 lg:col-span-8 lg:ml-3 h-screen lg:h-auto transition-all ease-in-out duration-300 w-[335px]  lg:w-auto lg:static lg:flex justify-between flex-wrap z-[70] grow`}
            >
              {showMenu && (
                <div
                  className="lg:hidden left-0 right-0 top-0 bottom-0 h-screen w-full fixed bg-[#69696996] backdrop-blur-sm z-[70]"
                  onClick={() => {
                    setShowMenu(!showMenu);
                  }}
                ></div>
              )}
              <div
                className={`text-white text-[14px] bg-black lg:bg-transparent  z-[80] relative overflow-x-hidden overflow-y-auto py-10 lg:py-4 px-4  overflow-unset w-[335px] h-screen lg:h-auto  lg:w-full lg:flex lg:justify-between lg:items-center`}
              >
                <button
                  type="button"
                  className="absolute right-3 top-[42px] text-3xl lg:hidden"
                  onClick={() => {
                    setShowMenu(!showMenu);
                  }}
                >
                  <Cross2Icon />
                </button>
                <div className="lg:hidden mb-10 ml-2">
                  {typeof logoElement === "function"
                    ? logoElement()
                    : logoElement}
                </div>
                <ul className="inline-flex lg:border lg:px-3 py-0.5 border-white/10 mx-auto gap-y-10 relative lg:gap-3 lg:bg-transparent lg:rounded-lg rounded-none flex-col lg:flex-row">
                  {NAV_ITEMS.map((e: any, i: number) => (
                    <li className="relative" key={i}>
                      <Link
                        className={`${
                          pathname === e.link && "font-bold"
                        } ${navItemClassName}`}
                        href={e.link}
                      >
                        {e.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-2 flex justify-center lg:gap-0 gap-4 lg:justify-end items-center flex-wrap ml-auto lg:mt-0">
              {typeof ctaElement === "function" ? ctaElement() : ctaElement}
            </div>
          </div>
        </nav>

        {isMenuVisible && (
          // Desktop Fixed menu
          <div
            className={`fixed animate-[fromTop_0.4s_ease-in-out] top-0 left-0 right-0 text-white text-[14px] bg-black lg:bg-transparent  z-[80] py-4 px-4  overflow-unset h-auto w-full flex justify-between items-center`}
          >
            <ul className="inline-flex items-center border px-3 py-1 backdrop-blur-sm bg-black/20 border-white/10 mx-auto relative gap-3 rounded-lg flex-row">
              {NAV_ITEMS.map((e: any, i: number) => (
                <li className="relative" key={i}>
                  <Link
                    className={`${
                      pathname === e.link && "font-bold"
                    } ${navItemClassName} drop-shadow-md`}
                    href={e.link}
                  >
                    {e.title}
                  </Link>
                </li>
              ))}
              <li>
                {typeof ctaElement === "function"
                  ? ctaElement("fixed")
                  : ctaElement}
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
