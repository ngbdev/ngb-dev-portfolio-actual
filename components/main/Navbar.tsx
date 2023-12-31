import Image from "next/image";
import React from "react";
import { Socials } from "../constants";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w0full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          {/*         <Image
            src="/NavLogo.png"
            alt="Logo ngv dev"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowpin"
          /> */}

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold mr-2">
            {" "}
            NGBDEV{" "}
          </span>
        </a>
        <div className="w-[500px] hh-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861} bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#About-me" className="cursor-pointer mr-2">
              About
            </a>
            <a href="#Skills" className="cursor-pointer mr-2">
              Skills
            </a>
            <a href="#Projects" className="cursor-pointer mr-2">
              Projects
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-5">
          {Socials.map((social) =>
            // Verifica que social.link existe y es una cadena antes de renderizar el enlace
            social.link ? (
              <Link
                href={social.link}
                key={social.name}
                passHref
                target="_blank"
              >
                <div>
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={34}
                    height={34}
                  />
                </div>
              </Link>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
