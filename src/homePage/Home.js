import React from 'react';
import whiteShoe from '../images/white Shoe.png';
import homeBg from '../images/roadshare.png';

const Home = () => {

  return (
    <section id="home" className="bg-contain bg-right media830:bg-contain pt-36 px-6 md:px-12 max-w-[1440px] mx-auto" style={{backgroundImage : `url(${homeBg})`, loading:'lazy'}}>
      <div className="flex flex-col media830:flex-row media830:items-center justify-between max-w-6xl mx-auto ">
        <h1 className="text-3xl media450:text-5xl media830:text-7xl font-bold leading-[64px] media830:leading-[92px]">THE <br/> SHOE <br/> COMPANY</h1>
        <div>
          <img className="w-full max-w-[100px] media321:max-w-[150px] media450:max-w-[430px] media830:max-w-xl ml-16 media450:ml-0" src={whiteShoe} alt="white shoe" loading="lazy"/>
        </div>
      </div>
    </section>
  )
}

export default Home;