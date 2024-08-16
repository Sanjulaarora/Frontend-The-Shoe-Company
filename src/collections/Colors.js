import React from 'react';
import Input from './Input';

const Colors = ({handleChange}) => {
  return (
    <div className="mt-[2px] media450:mt-2 p-1">
      <h2 className="text-sm lg:text-[18px] font-medium">Colors</h2>
      <form className="flex flex-col">    
        <Input className=""
          handleChange={handleChange}
          value=""
          name="color"
          title=" All"
        />
        <Input
          handleChange={handleChange}
          value="black"
          name="color"
          title=" Black"
        />
        <Input
          handleChange={handleChange}
          value="red"
          name="color"
          title=" Red"
        />
        <Input 
          handleChange={handleChange}
          value="white"
          name="color"
          title=" White"
        />
      </form>
    </div>
  )
}

export default Colors;