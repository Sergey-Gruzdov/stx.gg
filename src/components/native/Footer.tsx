import Link from "next/link";
import logo from "@/assets/images/logo.svg";
import Image from "next/image";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className=" text-white mt-20 py-12 sticky left-0 z-[1] bottom-[0px] overflow-auto">
      <div className="container border-t border-white/10 py-20 grid grid-cols-12 lg:!gap-0 gap-x-7 gap-y-10">
        <div className="col-span-12 lg:col-span-4 order-5 lg:order-1">
          <Link href="/" className="flex gap-2 items-center">
            <Image
              width={100}
              height={100}
              className="w-[80px] h-[80px] object-contain"
              src={logo}
              alt="STX Logo"
            />
            <span className="font-extrabold text-2xl">S T X</span>
          </Link>
          <p className="mt-4">
            Copyright © {new Date().getFullYear()} STX
          </p>
        </div>
        <div className="col-span-6 lg:col-span-2 order-1 lg:order-2">
          <b className="">Informationen</b>
          <ul className="mt-2 space-y-2 text-[14px]">
          <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/concept">Konzept</Link>
            </li>
          </ul>
        </div>

        <div className="col-span-6 lg:col-span-2 order-4 lg:order-3">
          <b className="">Kontakt</b>
          <ul className="mt-2 space-y-2 text-[14px]">
          <li>
              <Link href="mailto:contact@stx.gg">E-Mail: contact@stx.gg</Link>
            </li>
            <li>
              <Link href="tel:+4917620708079">Tel: +49 176 20 70 80 79</Link>
            </li>
          </ul>
        </div>
                <div className="col-span-6 lg:col-span-2 order-2 lg:order-4">
          <b className="">Rechtliches</b>
          <ul className="mt-2 space-y-2 text-[14px]">
            <li>
              <Link href="/privacy-policy">Datenschutz</Link>
            </li>
            <li>
              <Link href="/terms">AGB</Link>
            </li>
            <li>
              <Link href="/impressum">Impressum</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-6 lg:col-span-2 order-3 lg:order-5">
          <b className="">Allgemeines</b>
          <ul className="mt-2 space-y-2 text-[14px]">
          <li>
              <Link href="/about-us">Über STX</Link>
            </li>
            <li>
              <Link href="/changelog">Releases</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
