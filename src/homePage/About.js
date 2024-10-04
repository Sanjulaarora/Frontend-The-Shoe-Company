import React from 'react';
import imgabout from '../images/about-shoe-company.png';
import imgaboutBg from '../images/about-us-background.png';

const About = () => {

  return (
    <section id="about" className="px-6 md:px-12 max-w-[1440px] mx-auto mt-28 mb-8 flex flex-col media830:flex-row space-x-8 pt-[20px] scroll-mt-28">
      <h2 className="text-xl media450:text-3xl my-6 text-center font-bold media830:hidden">About Us!</h2>
      <div className="bg-no-repeat media830:w-full mx-auto self-center" style={{backgroundImage:`url(${imgaboutBg})`, loading:'lazy'}}>
        <img className="h-[400px] media450:h-[600px]" src={imgabout} alt="legs" loading="lazy" />
      </div>
      <div className="space-y-5 media450:space-y-8 max-w-xl pt-6 media450:pt-16 lg:pt-28 media830:w-full text-xs media450:text-base">
        <h2 className="text-6xl font-bold hidden media830:block">About Us!</h2>
        <p>
          For each one of those shoe sweethearts out there, THE SHOE COMPANY offer the one-stop goal to pick the correct match of footwear.
        </p>
        <p> 
          Gone are the days when you needed to go from store to store to locate the correct style and size for yourself.
        </p>
        <p>
          At THE SHOE COMPANY, you can locate a vast accumulation of dashing footwear in all sizes and styles, all inside a couple of snaps.
        </p>
        <p>
          Simple right? Not just we are here to spare your time, we are putting forth you the most dazzling footwear alternatives from all the first-rate brands like NIKE, PUMA, and VANS. At THE SHOE COMPANY, we offer men and ladies shoes perfect for any and each event.
        </p>
      </div>
    </section>
  )
}

export default About;