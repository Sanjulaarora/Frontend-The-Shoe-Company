import React from 'react';
import imgphoto1 from '../images/photo1.png';
import imgphoto2 from '../images/photo2.png';
import imgphoto3 from '../images/photo3.png';
import testiBg from '../images/testimonial-background.png';

const Testimonials = () => {

  return (
    <section id="testimonials" className="px-6 md:px-12 max-w-[1440px] mx-auto py-3 media450:py-0 mt-16 media450:mt-24 mb-4 media450:mb-10 scroll-mt-28" style={{backgroundImage:`url(${testiBg})`, loading:'lazy'}}>
      <h2 className="text-xl media450:text-3xl media830:text-6xl font-bold text-center">What People are saying about THE SHOE COMPANY ?</h2>
      <div className="text-center flex flex-col items-center media830:items-stretch gap-8 media830:flex-row justify-between mt-8 media450:mt-16 max-w-5xl mx-auto">
        <div className="w-40 media450:w-60">
          <img className="w-full mb-2 media450:mb-4" src={imgphoto1} alt="photo1" loading="lazy"/>
          <p className="text-xs media450:text-base">
            “Looking for shoes that are built just for you? THE SHOE COMPANY is the way to go. Love the design and build quality.”
          </p>
        </div>
        <div className="w-40 media450:w-60">
          <img className="w-full mb-2 media450:mb-4" src={imgphoto2} alt="photo1" loading="lazy"/>
          <p className="text-xs media450:text-base">
            “I love the shoes, the quality, and everyting. They are worth the investment!”
          </p>
        </div>
        <div className="w-40 media450:w-60">
          <img className="w-full mb-2 media450:mb-4" src={imgphoto3} alt="photo1" loading="lazy"/>
          <p className="text-xs media450:text-base">
            “They make the best and forever lasting shoes. Superb fit and confort is literally the next level. Much recommended!”
          </p>
        </div>
      </div>
    </section>
  )
}

export default Testimonials;