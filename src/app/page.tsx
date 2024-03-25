"use client"

import React, { useState, useEffect} from 'react';
import Image from "next/image";
import Link from "next/link";
import Video from "next-video";
import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa6";
import { Typewriter } from 'react-simple-typewriter'
import MobileNav from '../components/mobilenav';
import DesktopNav from '../components/desktopNav';
import Man from '../../public/man.png';
import Clothone from '../../public/clothone.jpg';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from "embla-carousel-autoplay";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Grant from "../../public/grant.jpg";
import GrantSews from "../../public/grant-sews.png";
import Sweing from '../../public/sweing1.png';
import Sweingtwo from '../../public/sweing2.png';
import Sweingthree from '../../public/sweing3.png';
import ImageGallery from "@/components/imageGallery";
import About from '@/components/about';
import Services from '@/components/service';
import FooterContainer from '@/components/footer';
import styles from './style.module.css';

const text = `I'm`;
export default function Home() {
  
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    <>
      <DesktopNav />
      <MobileNav />
      <section id='#home' className='h-full lg:h-screen pt-20 bg-purple-700'>
      <main className="grid grid-cols-1 gap-4 lg:grid-cols-5 h-full">
        <div className='lg:col-span-3 justify-center'>
          <div className="ml-10 mt-16 flex flex-row items-center border-2 border-red-800">
            <h1 className="text-5xl text-white  font-bold">
              Hi, {text} {' '}<span className="bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 inline-block text-transparent bg-clip-text">Grant Grawoh</span>.{' '}
              <span className="text-4xl" role="img" aria-label="waving hand">
                👋
              </span>
            </h1>
          </div>
        </div>
        <div className="lg:col-span-2 h-full flex justify-center items-center md:rounded-l-[150px] bg-purple-600">
          <div className="w-full h-5/6 flex items-center justify-center overflow-hidden " ref={emblaRef} >
            <div className='flex flex-row w-full h-full'>
                <Image src={Man} alt='display' className='rounded-4xl mx-20 w-96 h-full object-cover' />
                <Image src={Clothone} alt='display' className='rounded-4xl mx-20 w-96 h-full object-cover' />
                <Image src={Man} alt='display' className='rounded-4xl mx-20 w-80 h-full object-cover'  />
            </div>
          </div>
        </div>
      </main>
      </section>
      <section id='about' className='h-full'>
        <About />
      </section>
      <section id='services' className='h-full'>
        <Services />
      </section>
      <FooterContainer />
        <div>
            <button 
              className='w-10 h-10 flex justify-center items-center text-xl bg-green-400 text-white bottom-5 lg:bottom-10 fixed right-2 lg:right-5 rounded-full z-5'
              type='button' 
            >
              <FaWhatsapp 
                className="text-2xl"
              />
            </button>
        </div>
    </>
  );
};
