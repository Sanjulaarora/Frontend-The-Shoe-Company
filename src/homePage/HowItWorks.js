import React from 'react';
import imgworking from '../images/how-it-works-image.png';
import imgarr1 from '../images/arrow-1.png';
import imgarr2 from '../images/arrow-2.png';
import imgarr3 from '../images/arrow-3.png';

const HowItWorks = () => {

  return (
    <section id="howItWorks" className="px-6 md:px-12 max-w-[1440px] mx-auto pt-20 scroll-mt-5">
      <h1 className="text-xl media450:text-3xl font-bold text-center max-w-md mx-auto mb-10">Have they finally made the perfect workout shoe?</h1>
      <div className="max-w-2xl mx-auto pt-72 xl:pt-20 relative">
        <img className="w-full max-w-[186px] media321:max-w-[295px] media450:max-w-lg media830:max-w-xl rotate-12 p-8 media440:p-0 xl:rotate-0 translate-x-[14px] media321:translate-x-[24px] media450:translate-x-[70px] media830:translate-x-0 xl:translate-x-[60px] -translate-y-6 media450:translate-y-0" src={imgworking} alt="shoe" loading="lazy"/>
        <div className="max-w-[200px] xl:max-w-xs absolute top-4 xl:top-0 xl:-translate-x-72 translate-y-20 xl:translate-y-24">
          <h2 className="text-sm media450:text-lg media582:text-2xl font-bold">THE HEEL</h2>
          <p className="text-[8px] media450:text-xs media582:text-lg">The heel is well-built, has appropriate elevation and is not too rigid.</p>
          <img className="translate-y-4 w-[100px] media450:w-[140px] xl:max-w-[180px] xl:ml-auto rotate-45 xl:rotate-0" src={imgarr1} alt="arrow-1" loading="lazy"/>
        </div>
        <div className="max-w-[200px] xl:max-w-xs absolute top-16 media450:top-0 right-[108px] xl:-right-40 translate-x-[110px] media450:translate-x-[100px] media830:translate-x-3 translate-y-[72px] media450:translate-y-4">
          <img className="w-[100px] media450:w-[140px] xl:max-w-[180px] xl:-ml-32 translate-y-full media450:translate-y-60 xl:translate-y-0 media321:translate-x-12 media450:translate-x-0 xl:translate-x-10 rotate-[120deg] xl:rotate-0" src={imgarr2} alt="arrow-2" loading="lazy"/>
          <h2 className="text-sm media450:text-lg media582:text-2xl font-bold -mt-20 translate-y-3 xl:translate-y-[10px] xl:ml-16">THE FRONT</h2>
          <p className="text-[8px] media450:text-xs media582:text-lg translate-y-[12px] xl:translate-x-16">The front is comfortable and adjusts well to the shape of your foot.</p>           
        </div>
        <div className="max-w-[200px] xl:max-w-xs absolute -bottom-16 translate-y-5 media450:translate-y-10 xl:translate-y-[0px] xl:translate-x-[-16px] ">
          <img className="ml-auto -mb-8 media450:-mb-10 w-[100px] media450:w-[140px] xl:max-w-[170px] translate-y-[-10px] media321:translate-y-0 translate-x-[-14px] media321:translate-x-0" src={imgarr3} alt="arrow-3" loading="lazy"/>
          <h2 className="text-md media450:text-lg media582:text-2xl font-bold">TRACTION</h2>
          <p className="text-[10px] media450:text-xs media582:text-lg">The shoe has good traction and doesn't slip easily.</p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks;