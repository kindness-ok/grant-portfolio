import React from 'react';
import Image from "next/image";
import { RxEnvelopeClosed } from "react-icons/rx";
import { GiGreenhouse } from "react-icons/gi";
import Grant from "../../public/grant.jpg";
import { FcGlobe } from "react-icons/fc";

export default function About () {
  return (
    <> 
      <div className="my-10">
          <div className="w-full flex flex-row justify-center items-center">
            <h2 className="text-black text-4xl font-mono font-bold relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-2 after:bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 after:h-1 after:w-full after:rounded-xl after:duration-300">
              About
            </h2>
          </div>
          <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5 h-full my-10">
            <div className="md:col-span-2 flex flex-col pl-8 relative cursor-pointer">
              <div className="my-1">
                <h2 className="text-black text-xl md:text-2xl font-mono font-bold ">Gwawoh Grant</h2>
              </div>
              <div className="">
                <p className="text-gray-500 font-medium font-mono">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Suspendisse varius enim in eros elementum tristique.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
              <div className="flex flex-col w-full my-2 gap-1">
                <div className="flex flex-row gap-3 items-center">
                  <RxEnvelopeClosed className="text-purple-700 text-2xl" />
                  <p className="text-xs font-mono font-bold ">johndoe@gmail.com</p>
                </div>
                <div className="flex flex-row gap-3 items-center bg-transparent">
                  <FcGlobe className="text-purple-700 text-2xl" />
                  <p className="text-xs font-mono font-bold ">wikipedia.com</p>
                </div>
                <div className="flex flex-row gap-3 items-center bg-transparent">
                  <GiGreenhouse className="text-purple-700 text-2xl" />
                  <p className="text-xs font-mono font-bold ">418, Obafemi Awolowo Way, Ikeja Lagos.</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-1 flex flex-col items-center justify-center">
              <Image
                src={Grant}
                alt="Logo"
                className="w-60 h-60 rounded-full object-cover border-4 border-yellow-200"
              />
            </div>
            <div className="pr-8 md:col-span-3 lg:col-span-2 flex flex-col cursor-pointer font-mono">
              <div className="my-1">
                <h2 className="text-black text-xl md:text-2xl font-mono font-bold ">My Professional Skills</h2>
              </div>
              <div className="">
                <p className="text-gray-500 font-medium font-mono">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
              <div className="flex flex-col w-full my-2 gap-2">
                <div className="flex flex-col w-full">
                  <div className="flex flex-row justify-between">
                    <p>Crocheting</p>
                    <p>90%</p>
                  </div>
                  <div className="w-full h-4 bg-slate-400 rounded-xl">
                    <div className="w-[90%] h-4 bg-purple-700 rounded-xl"></div>
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex flex-row justify-between">
                    <p>Measuring</p>
                    <p>95%</p>
                  </div>
                  <div className="w-full h-4 bg-slate-400 rounded-xl">
                    <div className="w-[95%] h-4 bg-purple-700 rounded-xl"></div>
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex flex-row justify-between">
                    <p>Braiding</p>
                    <p>75%</p>
                  </div>
                  <div className="w-full h-4 bg-slate-400 rounded-xl">
                    <div className="w-[75%] h-4 bg-purple-700 rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
};