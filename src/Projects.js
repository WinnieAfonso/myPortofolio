

import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "./data";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-800 bg-gradient-to-r from-red-500 to-yellow-700  bg-opacity-70 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Projects I've Built
          </h1>

          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Still working...
            <p>Currently working on <a href="https://instagram.com/programming_withme?utm_medium=copy_link"> <b> INSTAGRAM</b></a> page, teaching programming.
          </p>
           <p>The idea is to create my own community for juinior programmers, that does not have so many experience.
           </p>
</p>

        </div>
        <div className="flex flex-wrap -m-4">

             <div className="flex relative mx-auto justify-center">
                <img
                  alt="work"
                  className="w-20 rounded-full object-contain object-center"
                  src= "./ld.gif"
                />

        </div>
      </div>
      </div>
    </section>
  );
}
