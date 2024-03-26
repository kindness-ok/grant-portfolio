"use client"

import React, { useState, useEffect} from 'react';
import Image from "next/image";
import Link from "next/link";
import Video from "next-video";
import { motion } from "framer-motion";
import { FaTwitter, FaFacebook, FaYoutube, FaInstagramSquare } from "react-icons/fa";
import { FaWhatsapp, FaInstagram } from "react-icons/fa6";
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
import useUtilities from '@/utils/index';
import styles from './style.module.css';

const text = `I'm`;
const textTwo = `Let's Talk`;
export default function Home() {
  const {
    openInNewTab
  } = useUtilities();
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <>
      <DesktopNav />
      <MobileNav />
      <section id='#home' className='h-full lg:h-screen pt-20 bg-purple-700'>
      <main className="grid grid-cols-1 gap-4 lg:grid-cols-5 h-full font-mono">
        <div className='lg:col-span-3 justify-center px-3 lg:pl-10 lg:px-0'>
          <div className="mt-16 flex flex-row items-center">
            <h1 className="text-4xl lg:text-5xl text-white  font-bold">
              Hi, {text} {' '}<span className="bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 inline-block text-transparent bg-clip-text">Grant Grawoh</span>.{' '}
              <span className="text-4xl" role="img" aria-label="waving hand">
                👋
              </span>
            </h1>
          </div>
          <div className='my-5 flex flex-row items-center'>
            <h1 className="text-xl md:text-4xl text-white font-bold">
              Discover True Personalization<br></br>For Your Path To<br></br>
              <span className='bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 inline-block text-transparent bg-clip-text text-2xl md:text-5xl'>
                <Typewriter
                  words={['Sucess.', 'Accomplishment.', 'Wealth.', 'Perfection.']}
                  loop={5}
                  cursor
                  cursorStyle='|'
                  typeSpeed={120}
                  deleteSpeed={150}
                  delaySpeed={1800}
                />
              </span>
            </h1>
          </div>
          <div className='flex flex-row gap-5 mt-16'>
            <button type='button' className='w-36 h-14 border-2 text-white text-xl border-purple-600 rounded-2xl bg-purple-600 hover:bg-transparent'>Hire Me</button>
            <button type='button' className='w-36 h-14 border-2 text-white text-xl border-purple-600 rounded-2xl hover:bg-purple-600'>{textTwo}</button>
          </div>
          <div className='flex flex-col md:flex-row justify-between w-full md:w-4/5 gap-2 mt-5 '>
            <div className='flex flex-row md:gap-8 w-full justify-around md:justify-start md:w-2/3 my-4 md:mt-0'>
              <Link href='/instagram' className=''>
                <i className="text-blue-600 duration-200 text-4xl"><FaFacebook /></i>
              </Link>
              <Link href='/youtube' className=''>
                <i className="text-green-600 duration-200 text-4xl"><FaWhatsapp /></i>
              </Link>
              <Link href='/twitter' className=''>
                <i className="text-blue-600 duration-200 text-4xl"><FaTwitter /></i>
              </Link>
              <Link href='/instagram' className=''>
                <i className="text-red-600 duration-200 text-4xl"><FaInstagram /></i>
              </Link>
              <Link href='/instagram' className='block md:hidden'>
                <i className="text-purple-800 text-4xl"><RiVerifiedBadgeFill className="text-blue-500" /> </i>
              </Link>
            </div>
            <div className='hidden md:block'>
              <i className="text-purple-800 text-4xl"><RiVerifiedBadgeFill className="text-blue-500" /> </i>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 h-full flex justify-center items-center lg:rounded-l-[150px] bg-purple-600">
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
              onClick={()=>openInNewTab('http://Wa.me/2349014231777')}
              className='w-10 h-10 lg:w-12 lg:h-12 flex justify-center items-center text-xl bg-green-400 text-white bottom-7 lg:bottom-10 fixed right-2 lg:right-5 rounded-full z-5'
              type='button' 
            >
              <FaWhatsapp 
                className="text-2xl lg:text-3xl"
              />
            </button>
        </div>
    </>
  );
};
