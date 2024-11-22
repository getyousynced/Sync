import React from "react";
import { cards } from "../data/navLinks";
import Image from "next/image";
import { CardHoverEffectDemo } from "./CardHoverEffect";

function EffortlessCarpooling() {
  return (
    <section className=" mb-20 sm:mb-40 lg:mb-80 font-manrope md:mt-20 mt-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <header className="w-full flex justify-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-[#099BE4] font-bold text-2xl sm:text-3xl lg:text-4xl text-center">
            Effortless Carpooling
          </h1>
        </header>
        <div className="w-full flex justify-center p-4 sm:p-8 lg:p-[8vw] relative">
          
          <Image className="w-[60%] sm:w-[50%] lg:w-[36%] max-w-md lg:max-w-lg" src="/carpooling.svg" alt="Carpooling" width={700} height={700}/>

          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              className="w-[70%] sm:w-[60%] max-w-md lg:max-w-full" 
              src="/carpooling.svg"
              alt="Carpooling"
              width={800} 
              height={800} 
            />
          </div>
          
          <div className="w-full lg:w-1/2">
            <CardHoverEffectDemo />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EffortlessCarpooling;
