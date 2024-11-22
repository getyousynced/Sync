"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";

export function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold">
            Effortless Carpooling <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                With Sync
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/ipad.svg`}
          alt="hero"
          height={800}
          width={1400}
          className="mx-auto rounded-2xl md:object-cover object-fill h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
