
import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar()  { return(

  <header className="bg-black md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="title-font font-mono font-medium text-yellow-700 mb-4 md:mb-0">
            <a href="#about" className="ml-3 text-xl">
              Afonso Portofolio
            </a>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-r md:border-gray-800	flex flex-wrap items-center font-mono text-yellow-700 text-base justify-center">
            <a href="#projects" className="mr-5 hover:text-white">
              My Projects
            </a>
            <a href="#skills" className="mr-5 hover:text-white">
              Skills
            </a>
            <a href="#testimonials" className="mr-5 hover:text-white">
              Journey
            </a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-yellow-700 rounded text-base mt-4 md:mt-0">
            Let's talk
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </a>
        </div>
      </header>
    );
  }
