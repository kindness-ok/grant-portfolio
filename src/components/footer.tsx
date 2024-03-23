import Image from "next/image";
import Link from "next/link";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaTwitter, FaFacebook, FaYoutube, FaInstagramSquare } from "react-icons/fa";
import Projectone from '../../../public/projectone.png';
import { Fade } from "react-awesome-reveal";
import style from './style.module.css'


export default function FooterContainer() {
  return (
    <>
		  <footer className="mt-16 font-mono text-black px-2 flex flex-col">
        <section id='contact'>
          <div className="w-full flex flex-row justify-center items-center mb-20">
            <h2 className="text-black text-4xl font-mono font-bold relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-2 after:bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 after:h-1 after:w-full after:rounded-xl after:duration-300">
              Contact
            </h2>
          </div>
          <div className="my-7 w-full">
            <form>
              <div className="w-full flex flex-col justify-center items-center gap-2">
                <div className="w-full grid-cols-1 lg:w-4/6 grid md:grid-cols-2 gap-2">
                  <div className="col-span-1">
                    <input placeholder="Name" type='text' className={style.inputText} />
                  </div>
                  <div className="col-span-1">
                    <input placeholder="Email" type='text' className={style.inputText} />
                  </div>
                </div>
                <div className="w-full lg:w-4/6">
                  <textarea placeholder="Message..." className={style.textArea}></textarea>
                </div>
                <div className="">
                  <button type="submit" className="w-40 h-10 text-white bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">Send</button>
                </div>
              </div>
            </form>
          </div>
          <div className='flex justify-around md:justify-evenly items-center w-full my-4 md:mt-0'>
            <Link href='/youtube' className=''>
              <i className="text-red-600 duration-200 text-5xl"><FaYoutube /></i>
            </Link>
            <Link href='/instagram' className=''>
              <i className="text-blue-600 duration-200 text-5xl"><FaFacebook /></i>
            </Link>
            <Link href='/twitter' className=''>
              <i className="text-blue-600 duration-200 text-5xl"><FaTwitter /></i>
            </Link>
            <Link href='/instagram' className=''>
              <i className="text-red-600 duration-200 text-5xl"><FaInstagramSquare /></i>
            </Link>
          </div>
          <div className="my-10 flex flex-col justify-center items-center">
            <p className="text-black">Created and Licensed By{' '}
              <Link href='google.com'><span className="text-purple-700">Kindness Okpugie</span></Link>
            </p>
          </div>
        </section>
			</footer>
    </>
  );
};