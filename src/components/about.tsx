import React from 'react';
import Image from "next/image";
import { RxEnvelopeClosed } from "react-icons/rx";
import { GiGreenhouse } from "react-icons/gi";
import { FcCellPhone } from "react-icons/fc";
import Grant from "../../public/grant.jpg";
import { FcGlobe } from "react-icons/fc";
import { Fade } from "react-awesome-reveal";
import useUtilities from '@/utils/index';
export default function About () {
  const {
    openInNewTab
  } = useUtilities();
  return (
    <> 
      <div className="my-10">
          <div className="w-full flex flex-row justify-center items-center">
            <h2 className="text-black text-4xl font-mono font-bold relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-2 after:bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 after:h-1 after:w-full after:rounded-xl after:duration-300">
              About
            </h2>
          </div>
          <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5 h-full my-10 px-2 lg:px-0">
            <div className="md:col-span-2 flex flex-col lg:pl-8 relative cursor-pointer">
            <Fade direction="left" duration={1000} delay={200} triggerOnce>
              <div className="my-1">
                <h2 className="text-black text-xl md:text-2xl font-mono font-bold ">Gwawoh Grant</h2>
              </div>
              <div className="">
                <p className="text-gray-500 font-medium font-mono">
                  My name is <span className="text-purple-600">Grant Gwawoh</span>, 
                  and i have been weaving magic with fabric for 4 years in the heart 
                  of Lagos, Nigeria. My journey as a tailor began with a personal desire
                  to look and feel their best. <br></br>
                  {' '} This passion for <span className="text-purple-600">self-expression </span> 
                  through clothing has evolved me to desire to create similar experiences for others. 
                  This passion has blossomed into a  dedication to crafting not just clothes, but 
                  <span className="text-purple-600"> confidence and style</span> for my clients.
                </p>
              </div>
              <div className="flex flex-col w-full my-2 gap-1">
                <div className="flex flex-row gap-3 items-center">
                  <FcGlobe className="text-purple-700 text-2xl" />
                  <p className="text-xs font-mono font-bold ">wikipedia.com</p>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <FcCellPhone className="text-purple-700 text-2xl" />
                  <p onClick={()=>openInNewTab('http://Wa.me/2349014231777')} className="text-xs font-mono font-bold hover:underline">
                    +2349014231777
                  </p>
                </div>
                <div className="flex flex-row gap-3 items-center">
                  <RxEnvelopeClosed className="text-purple-700 text-2xl" />
                  <p onClick={()=>openInNewTab('mailto:gredgwaint@gmail.com')} className="text-xs font-mono font-bold hover:underline">
                    gredgwaint@gmail.com
                  </p>
                </div>
                <div className="flex flex-row gap-3 items-center bg-transparent">
                  <GiGreenhouse className="text-purple-700 text-2xl" />
                  <p onClick={()=>console.log(process.env.NEXT_PUBLIC_BREVO_USER, 'oo')} className="text-xs font-mono font-bold ">418, Obafemi Awolowo Way, Ikeja Lagos.</p>
                </div>
              </div>
            </Fade>
            </div>
            <div className="md:col-span-1 flex flex-col items-center lg:items-start">
              <Fade direction="up" duration={1000} delay={200} triggerOnce>
              <Image
                src={Grant}
                alt="Logo"
                className="w-60 h-60 rounded-full object-cover border-4 border-purple-700"
              />
              </Fade>
            </div>
            <div className="lg:pr-8 md:col-span-3 lg:col-span-2 flex flex-col cursor-pointer font-mono">
            <Fade direction="right" duration={1000} delay={200} triggerOnce>
              <div className="my-1">
                <h2 className="text-black text-xl md:text-2xl font-mono font-bold ">My Professional Skills</h2>
              </div>
              <div className="">
                <p className="text-gray-500 font-medium font-mono">
                  The following below are the professional skills i have learnt along the way:
                </p>
              </div>
              <div className="flex flex-col w-full my-2 gap-2">
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
                    <p>Pattern Making</p>
                    <p>90%</p>
                  </div>
                  <div className="w-full h-4 bg-slate-400 rounded-xl">
                    <div className="w-[90%] h-4 bg-purple-700 rounded-xl"></div>
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex flex-row justify-between">
                    <p>Pattern Drafting</p>
                    <p>85%</p>
                  </div>
                  <div className="w-full h-4 bg-slate-400 rounded-xl">
                    <div className="w-[85%] h-4 bg-purple-700 rounded-xl"></div>
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex flex-row justify-between">
                    <p>Fabric Cutting</p>
                    <p>90%</p>
                  </div>
                  <div className="w-full h-4 bg-slate-400 rounded-xl">
                    <div className="w-[90%] h-4 bg-purple-700 rounded-xl"></div>
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex flex-row justify-between">
                    <p>Threading Machines</p>
                    <p>95%</p>
                  </div>
                  <div className="w-full h-4 bg-slate-400 rounded-xl">
                    <div className="w-[95%] h-4 bg-purple-700 rounded-xl"></div>
                  </div>
                </div>
              </div>
              </Fade>
            </div>
          </div>
        </div>
    </>
  )
};
