"use client"

import Image from "next/image";
import Link from "next/link";
import Video from "next-video";
import { Typewriter } from 'react-simple-typewriter'
import MobileNav from '../components/mobilenav';
import DesktopNav from '../components/desktopNav';
import Man from '../../public/man.png';
import Clothone from '../../public/clothone.jpg';
import { RxEnvelopeClosed } from "react-icons/rx";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { GiGreenhouse } from "react-icons/gi";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from "embla-carousel-autoplay";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Grant from "../../public/grant.jpg";
import { FcGlobe } from "react-icons/fc";
import GrantSews from "../../public/grant-sews.png";
import Sweing from '../../public/sweing1.png';
import styles from './style.module.css';

export default function Home() {
  
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    <>
      <DesktopNav />
      <MobileNav />
      <section id='#home' className='h-full lg:h-screen pt-20 bg-purple-700'>
      <main className="grid grid-cols-1 gap-4 lg:grid-cols-5 h-full">
        <div className='lg:col-span-3 flex flex-col items-center justify-center'>
          <div className="flex justify-center items-center">
            <Image
              src={Grant}
              alt="Logo"
              className="rounded-full  w-52 h-52 object-cover border-4 border-yellow-200"
            />
          </div>
          <div className="ml-10 my-2">
            <h1 className="text-4xl text-white  font-bold">
              Hi, I am <span className="bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 inline-block text-transparent bg-clip-text">Grant Grawoh</span>.{' '}
              <span className="wave-emoji" role="img" aria-label="waving hand">
                👋
              </span>
            </h1>
          </div>
          <div className="ml-10 mb-5">
            <h2 className="text-2xl text-white monospace font-bold">
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={['I make cloths that Suits You.', 'I make cloths that Complement You.', 'I make cloths that Empower You.', 'I make cloths that Suits You.']}
                  loop={5}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
            </h2>
          </div>
          <div className="flex flex-row w-2/3 gap-8 mt-5 ml-10">
            <div className="">
              <i className="text-purple-800 text-6xl"><RiVerifiedBadgeFill className="text-blue-500" /> </i>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-center text-white">2k+</p>
              <p className="text-slate-200">Services</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-center text-white">200+</p>
              <p className="text-slate-200">Clients</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 h-full flex justify-center items-center md:rounded-l-[150px] bg-purple-600">
          <div className="w-full h-5/6 flex items-center justify-center overflow-hidden " ref={emblaRef} >
            <div className='flex flex-row w-full h-full'>
                <Image src={Clothone} alt='display' className='rounded-4xl mx-20 w-96 h-full object-cover' />
                <Image src={Man} alt='display' className='rounded-4xl mx-20 w-96 h-full object-cover' />
                <Image src={GrantSews} alt='display' className='rounded-4xl mx-20 w-80 h-full object-cover'  />
            </div>
          </div>
        </div>
      </main>
      </section>
      <section id='#home' className='h-full'>
        <div className="my-10">
          <div className="w-full flex flex-row justify-center items-center">
            <h2 className="text-black text-4xl font-mono font-bold relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-2 after:bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 after:h-1 after:w-full after:rounded-xl after:duration-300">
              Services
            </h2>
          </div>
          <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 h-full my-10">
            <div className="lg:col-span-1 flex flex-col items-center justify-center border-4 border-red-800 relative cursor-pointer">
              <div className="w-4/6 border-4 border-green-800">
                <Image 
                  src={Sweing} 
                  alt='display' 
                  className='rounded-4xl w-full h-full object-contain' 
                />
              </div>
              <div className="mt-5 w-4/6">
                <div className="">   
                  <h2 className="text-black text-2xl font-mono font-bold relative cursor-pointer">Sweing</h2>
                </div>
                <div className="mb-5">   
                  <p className="text-slate-500 font-mono font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse varius enim in eros elementum tristique.
                  </p>
                </div>
              </div>
              <div className="">
                <p className="w-12 h-12 flex justify-center items-center text-xl bg-purple-700 text-white border-2 border-purple-700 rounded-full absolute bottom-24 left-1 lg:left-0">
                  1
                </p>
              </div>
            </div>
            <div className="lg:col-span-1 flex flex-col items-center justify-center border-4 border-red-800 relative cursor-pointer">
              <div className="w-4/6 border-4 border-green-800">
                <Image 
                  src={Sweing} 
                  alt='display' 
                  className='rounded-4xl w-full h-full object-contain' 
                />
              </div>
              <div className="mt-5 w-4/6">
                <div className="">   
                  <h2 className="text-black text-2xl font-mono font-bold relative cursor-pointer">Sweing</h2>
                </div>
                <div className="mb-5">   
                  <p className="text-slate-500 font-mono font-bold">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse varius enim in eros elementum tristique.
                  </p>
                </div>
              </div>
              <div className="">
                <p className="w-12 h-12 flex justify-center items-center text-xl bg-purple-700 text-white border-2 border-purple-700 rounded-full absolute bottom-24 left-1 lg:left-0">
                  1
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='#about' className='h-full'>
        <div className="my-10">
          <div className="w-full flex flex-row justify-center items-center">
            <h2 className="text-black text-4xl font-mono font-bold relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-2 after:bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 after:h-1 after:w-full after:rounded-xl after:duration-300">
              About
            </h2>
          </div>
          <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5 h-full my-10">
            <div className="md:col-span-2 flex flex-col pl-8 border-4 border-red-800 relative cursor-pointer">
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
            <div className="md:col-span-1 flex flex-col items-center justify-center border-4 border-red-800 relative cursor-pointer">
              <h2>Running</h2>
            </div>
            <div className="md:col-span-3 lg:col-span-2 flex flex-col items-center justify-center border-4 border-red-800 relative cursor-pointer">
              <h2>Running</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
