
import React from "react";

export default function About() {
return(
  <section id ="about">
  <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
  <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium font-serif text-gray-700"> Hello, I am Winnie.
  <br className="hidden lg:inline-block" /> I am Computer Science Student.
  </h1>
  <p className="mb-8 leading-relaxed">
            Bachelor's in Computer Science & Technology focus in Security Network,
           Cloud Computer and Big Data. Knowledge in web and mobile Development.
           Interesting to achieve new goals and challenges.
          </p>
  <div className="flex justify-center">
  
    <a
  href="#projects"
    className="ml-4 inline-flex text-gray-400 bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 hover:text-white rounded text-lg">
      See My Past Work
    </a>
      </div>
      </div>
      <div className="lg:max-w-lg lg:w-full max-auto md:w-1/2 w-5/6">
      <img
     className="w-60 h-60 object-cover object-center rounded-full opacity-50"
        alt="hero"
        src="./wp.jpg"
        />
      </div>
      </div>
    </section>
);
}
