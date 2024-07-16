import React from 'react';
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import DesignOne from "../../public/gservice1.jpg";
import DesignTwo from "../../public/gservice2.jpg";
import DesignThree from "../../public/gservice3.jpg";
import DesignFour from "../../public/gservice4.jpg";
import DesignFive from "../../public/gservice5.jpg";
import DesignSix from "../../public/gservice6.jpg";
import DesignSeven from "../../public/gservice7.jpg";
import DesignEight from "../../public/gservice8.jpg";
import DesignNine from "../../public/gservice9.jpg";
import DesignTen from "../../public/gservice10.jpg";
import DesignEleven from "../../public/gservice11.jpg";
import DesignTwelve from "../../public/gservice12.jpg";

export default function ImageGallery () {
  return (
    <>
      <div className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 px-2 md:px-3">
        <div className="grid gap-2 md:gap-4">
          <div>
            <Fade direction="up" duration={1000} delay={200} triggerOnce>
              <Image sizes="100vw" width={0} height={0} style={{ width: '100%', height: 'auto' }} className="h-auto max-w-full rounded-lg" src={DesignOne} alt="imagegrid"/>
            </Fade>
          </div>
          <div>
            <Fade direction="up" duration={1000} delay={200} triggerOnce>
              <Image sizes="100vw" width={0} height={0} style={{ width: '100%', height: 'auto' }} className="h-auto max-w-full rounded-lg" src={DesignFour} alt="imagegrid"/>
            </Fade>
          </div>
          <div>
            <Fade direction="up" duration={1000} delay={200} triggerOnce>
            <Image sizes="100vw" width={0} height={0} style={{ width: '100%', height: 'auto' }} className="h-auto max-w-full rounded-lg" src={DesignThree} alt="imagegrid"/>
            </Fade>
          </div>
        </div>
        <div className="grid gap-2 md:gap-4">
          <div>
            <Fade direction="up" duration={1000} delay={200} triggerOnce>
              <Image sizes="100vw" width={0} height={0} style={{ width: '100%', height: 'auto' }} className="h-auto max-w-full rounded-lg" src={DesignTwo} alt="imagegrid"/>
            </Fade>
          </div>
          <div>
            <Fade direction="up" duration={1000} delay={200} triggerOnce>
              <Image sizes="100vw" width={0} height={0} style={{ width: '100%', height: 'auto' }} className="h-auto max-w-full rounded-lg" src={DesignFive} alt="imagegrid"/>
            </Fade>
          </div>
          <div>
            <Fade direction="up" duration={1000} delay={200} triggerOnce>
              <Image sizes="100vw" width={0} height={0} style={{ width: '100%', height: 'auto' }} className="h-auto max-w-full rounded-lg" src={DesignSix} alt="imagegrid"/>
            </Fade>
          </div>       
        </div>
        <div className="grid gap-2 md:gap-4">
          <div>
            <Fade direction="up" duration={1000} delay={200} triggerOnce>
              <Image sizes="100vw" width={0} height={0} style={{ width: '100%', height: 'auto' }} className="h-auto max-w-full rounded-lg" src={DesignSeven} alt="imagegrid"/>
            </Fade>
          </div>
          <div>
            <Fade direction="up" duration={1000} delay={200} triggerOnce>
              <Image sizes="100vw" width={0} height={0} style={{ width: '100%', height: 'auto' }} className="h-auto max-w-full rounded-lg" src={DesignEight} alt="imagegrid"/>
            </Fade>
          </div>
          <div>
            <Fade direction="up" duration={1000} delay={200} triggerOnce>
              <Image sizes="100vw" width={0} height={0} style={{ width: '100%', height: 'auto' }} className="h-auto max-w-full rounded-lg" src={DesignNine} alt="imagegrid"/>
            </Fade>
          </div>
        </div>
        <div className="grid gap-2 md:gap-4">
          <div>
            <Fade direction="up" duration={1000} delay={200} triggerOnce>
              <Image sizes="100vw" width={0} height={0} style={{ width: '100%', height: 'auto' }} className="h-auto max-w-full rounded-lg" src={DesignTen} alt="imagegrid"/>
            </Fade>
          </div>
          <div>
            <Fade direction="up" duration={1000} delay={200} triggerOnce>
              <Image sizes="100vw" width={0} height={0} style={{ width: '100%', height: 'auto' }} className="h-auto max-w-full rounded-lg" src={DesignEleven} alt="imagegrid"/>
            </Fade>
          </div>
          <div>
            <Fade direction="up" duration={1000} delay={200} triggerOnce>
              <Image sizes="100vw" width={0} height={0} style={{ width: '100%', height: 'auto' }} className="h-auto max-w-full rounded-lg" src={DesignTwelve} alt="imagegrid"/>
            </Fade>
          </div>
        </div>
        {/* <div className="grid gap-2 md:gap-4">
          <div>
            <Fade direction="up" duration={1000} delay={200} triggerOnce>
              <Image sizes="100vw" width={0} height={0} style={{ width: '100%', height: 'auto' }} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="imagegrid"/>
            </Fade>
          </div>
          <div>
            <Fade direction="up" duration={1000} delay={200} triggerOnce>
            <Image sizes="100vw" width={0} height={0} style={{ width: '100%', height: 'auto' }} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="imagegrid"/>
            </Fade>
          </div>
          <div>
            <Fade direction="up" duration={1000} delay={200} triggerOnce>
            <Image sizes="100vw" width={0} height={0} style={{ width: '100%', height: 'auto' }} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="imagegrid"/>
            </Fade>
          </div>
        </div>
        <div className="grid gap-2 md:gap-4">
          <div>
            <Fade direction="up" duration={1000} delay={200} triggerOnce>
              <Image sizes="100vw" width={0} height={0} style={{ width: '100%', height: 'auto' }} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="imagegrid"/>
            </Fade>
          </div>
          <div>
            <Fade direction="up" duration={1000} delay={200} triggerOnce>
              <Image sizes="100vw" width={0} height={0} style={{ width: '100%', height: 'auto' }} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="imagegrid"/>
            </Fade>
          </div>
          <div>
            <Fade direction="up" duration={1000} delay={200} triggerOnce>
              <Image sizes="100vw" width={0} height={0} style={{ width: '100%', height: 'auto' }} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="imagegrid"/>
            </Fade>
          </div>
        </div>
        <div className="grid gap-2 md:gap-4">
          <div>
            <Fade direction="up" duration={1000} delay={200} triggerOnce>
              <Image sizes="100vw" width={0} height={0} style={{ width: '100%', height: 'auto' }} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="imagegrid"/>
            </Fade>
          </div>
          <div>
            <Fade direction="up" duration={1000} delay={200} triggerOnce>
            <Image sizes="100vw" width={0} height={0} style={{ width: '100%', height: 'auto' }} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="imagegrid"/>
            </Fade>
          </div>
          <div>
            <Fade direction="up" duration={1000} delay={200} triggerOnce>
              <Image sizes="100vw" width={0} height={0} style={{ width: '100%', height: 'auto' }} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="imagegrid"/>
            </Fade>
          </div>
        </div>
        <div className="grid gap-2 md:gap-4">
          <div>
            <Fade direction="up" duration={1000} delay={200} triggerOnce>
              <Image sizes="100vw" width={0} height={0} style={{ width: '100%', height: 'auto' }} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="imagegrid"/>
            </Fade>
          </div>
          <div>
            <Fade direction="up" duration={1000} delay={200} triggerOnce>
              <Image sizes="100vw" width={0} height={0} style={{ width: '100%', height: 'auto' }} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="imagegrid"/>
            </Fade>
          </div>
          <div>
            <Fade direction="up" duration={1000} delay={200} triggerOnce>
              <Image sizes="100vw" width={0} height={0} style={{ width: '100%', height: 'auto' }} className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="imagegrid"/>
            </Fade>
          </div>
        </div> */ }
      </div>
    </>
  )
};
