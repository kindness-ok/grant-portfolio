"use client"

import Image from "next/image";
import Link from "next/link";
import { Typewriter } from 'react-simple-typewriter'
import MobileNav from '../components/mobilenav';
import DesktopNav from '../components/desktopNav';
import Man from '../../public/man.png';
import Clothone from '../../public/clothone.jpg';
import { IoMenuOutline } from "react-icons/io5";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from "embla-carousel-autoplay";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Grant from "../../public/grant.jpg";
import GrantSews from "../../public/grant-sews.png";
import styles from './style.module.css';

export default function Home() {
  
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    <>
      <DesktopNav />
      <MobileNav />
      <section id='#home' className={styles.homeSection}>
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
          <div className="w-full h-5/6 flex items-center justify-center" ref={emblaRef}>
            <Image src={Clothone} alt='display' className='w-80 h-full object-cover'/>
          </div>
        </div>
      </main>
      </section>
      <section>
        <div>
          <div>
            <h1>About</h1>
          </div>
        </div>
      </section>
    </>
  );
}
