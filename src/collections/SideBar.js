import React from 'react';
import Category from './Category';
import Price from './Price';
import Colors from './Colors';


const SideBar = ({handleChange}) => {
  return (
    <section id="side-bar" className="px-3 media450:px-6 md:px-10 max-w-[1440px] mx-auto">
      <section className="flex flex-col justify-center align-center media450:w-3/12 absolute mt-12 pl-1 bg-slate-700 border-2 border-solid border-white rounded-xl">
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </section>
  )
}

export default SideBar;