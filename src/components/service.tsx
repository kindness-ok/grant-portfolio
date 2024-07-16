import React from 'react';
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from "embla-carousel-autoplay";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Fade } from "react-awesome-reveal";
import Grant from "../../public/grant.jpg";
import GrantSews from "../../public/grant-sews.png";
import Sweing from '../../public/sweing1.png';
import Sweingtwo from '../../public/sweing2.png';
import Sweingthree from '../../public/sweing3.png';
import ImageGallery from "@/components/imageGallery";
import styles from './style.module.css';

export default function Services () {
  return (
    <> 
    <div className="my-10">
      <div className="w-full flex flex-row justify-center items-center">
        <h2 className="text-black text-4xl font-mono font-bold relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-2 after:bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 after:h-1 after:w-full after:rounded-xl after:duration-300">
          Services
        </h2>
      </div>
      <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 h-full my-10 px-2">
        <div className="lg:col-span-1 flex flex-col items-center justify-center relative cursor-pointer">
          <Fade direction="left" duration={1000} delay={200} triggerOnce className='w-full relative flex flex-col items-center justify-center'>
          <div className="w-4/6">
            <Image 
              src={Sweingthree} 
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
                {`I'll`} carefully join pieces of fabric together to achieve the desired fit and style.
              </p>
            </div>
          </div>
          <div className="">
            <p className="w-12 h-12 flex justify-center items-center text-xl bg-purple-700 text-white border-2 border-purple-700 rounded-full absolute bottom-24 left-1 lg:left-0">
              1
            </p>
          </div>
          </Fade>
        </div>
        <div className="lg:col-span-1 flex flex-col items-center justify-center relative cursor-pointer">
          <Fade direction="up" duration={1000} delay={200} triggerOnce className='w-full relative flex flex-col items-center justify-center'>
          <div className="w-4/6">
            <Image 
              src={Sweing} 
              alt='display' 
              className='rounded-4xl w-full h-full object-contain' 
            />
          </div>
          <div className="mt-5 w-4/6">
            <div className="">   
              <h2 className="text-black text-2xl font-mono font-bold relative cursor-pointer">Measurement</h2>
            </div>
            <div className="mb-5">   
              <p className="text-slate-500 font-mono font-bold">
                {`I'll`} take your precise measurements to understand your body shape.
              </p>
            </div>
          </div>
          <div className="">
            <p className="w-12 h-12 flex justify-center items-center text-xl bg-purple-700 text-white border-2 border-purple-700 rounded-full absolute bottom-24 left-1 lg:left-0">
              2
            </p>
          </div>
          </Fade>
        </div>
        <div className="lg:col-span-1 flex flex-col items-center justify-center relative cursor-pointer">
          <Fade direction="right" duration={1000} delay={200} triggerOnce className='w-full relative flex flex-col items-center justify-center'>
          <div className="w-4/6">
            <Image 
              src={Sweingtwo} 
              alt='display' 
              className='rounded-4xl w-full h-full object-contain' 
            />
          </div>
          <div className="mt-5 w-4/6">
            <div className="">   
              <h2 className="text-black text-2xl font-mono font-bold relative cursor-pointer">Already Made</h2>
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
              3
            </p>
          </div>
          </Fade>
        </div>
      </div>
      <div className='w-full my-16 font-mono'>
        <div className='w-full flex flex-col justify-center items-center'>
          <Fade>
          <h1 className='text-black text-xl md:text-3xl font-bold'>
            Why Need My Services?
          </h1>
          </Fade>
        </div>
        <div className='w-full flex flex-col justify-center items-center'>
          <Fade>
          <p className={styles.paragrahpTwo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>
            Suspendisse varius enim in eros.
          </p>
          </Fade>
        </div>
      </div>
      <ImageGallery />
    </div>
    </>
  )
};
