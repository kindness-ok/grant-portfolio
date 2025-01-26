import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaTwitter, FaFacebook, FaYoutube, FaInstagramSquare } from "react-icons/fa";
import Projectone from '../../../public/projectone.png';
import { Fade } from "react-awesome-reveal";
import { Toaster, toast } from '@/utils/toast';
import { githubUrl } from "@/utils/constant";
import axios from 'axios';
import useUtilities from '@/utils/index';
import style from './style.module.css'

type serverResponseProps = {
  submitting: boolean;
  status: {
    ok: boolean;
    msg: string;
  }
}
interface handleServerResponseProp {
  ok: boolean;
  msg: string;
  form: HTMLFormElement;
}

export default function FooterContainer() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE as string);
  const {
    nameText,
    emailText,
    messageText,
    openInNewTab,
    handleNameChange,
    handleEmailChange,
    handleMessageChange,
  } = useUtilities();

  useEffect(() => {
    // Event listener logic
    if (state.succeeded) {
      toast.dismiss();
      toast.success('Message Sent Successfully');
    };
  }, [state]);

  return (
		  <footer className="mt-16 font-mono text-black px-2 flex flex-col">
        <section id='contact'>                    
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
          <div className="w-full flex flex-col justify-center items-center mb-20 gap-3">
            <h2 className="text-black text-4xl font-mono font-bold relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-2 after:bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 after:h-1 after:w-full after:rounded-xl after:duration-300">
              Contact
            </h2>
            <p className="text-slate-800 text-base">Send me a Message</p>
          </div>
          <div className="my-7 w-full">
            <form action={handleSubmit}>
              <Fade>
              <div className="w-full flex flex-col justify-center items-center gap-2">
                <div className="w-full lg:w-4/6 ">
                  {
                    state.succeeded
                    ? <p className="text-black">Message Sent Succesfully</p>
                    : <p className="text-black-600"></p>
                  }
                </div>
                <div className="w-full grid-cols-1 lg:w-4/6 grid md:grid-cols-2 gap-2">
                  <div className="col-span-1">
                    <input 
                      placeholder="Name" 
                      type='text'
                      required={true}
                      className={style.inputText}
                      value={nameText}
                      onChange={handleNameChange}
                    />
                    <ValidationError
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                  <div className="col-span-1">
                    <input
                      placeholder="Email" 
                      type='email' 
                      id="email"
                      name="email"
                      required={true} 
                      className={style.inputText} 
                      value={emailText}
                      onChange={handleEmailChange}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-4/6">
                  <textarea
                    placeholder="Message..."
                    id="message"
                    name="message"
                    required={true}
                    className={style.textArea}
                    value={messageText}
                    onChange={handleMessageChange}
                  >
                  </textarea>
                  <ValidationError
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  />
                </div>
                <div className="">
                  <button type="submit" disabled={state.submitting} className="w-40 h-10 text-white bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
                    Send
                  </button>
                </div>
              </div>
              </Fade>
            </form>
          </div>
          <Fade>
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
          </Fade>
          <div className="my-10 flex flex-col justify-center items-center">
            <p className="text-black flex items-center gap-2 text-xs md:text-base">Created and Licensed By{' '}
              <Link href='google.com'><span className="text-purple-700 hover:underline">Kindness Okpugie</span></Link>
              {' '} <span className="md:text-2xl"> © </span>2024
            </p>
          </div>
        </section>
			</footer>
  );
};