import React from 'react';
import Input from './Input';

const Price = ({handleChange}) => {
  return (
    <div className="mt-[2px] media450:mt-2 p-1">
      <h2 className="text-sm lg:text-[18px] font-medium">Price</h2>
      <form className="flex flex-col">
        <Input className=""
          handleChange={handleChange}
          value=""
          name="price"
          title=" All"
        />
        <Input
          handleChange={handleChange}
          value={400}
          name="price"
          title=" Rs.300-500"
        />
        <Input
          handleChange={handleChange}
          value={600}
          name="price"
          title=" Rs.500-800"
        />
        <Input 
          handleChange={handleChange}
          value={900}
          name="price"
          title=" Rs.900-1000"
        />
      </form>
    </div>
  )
}

export default Price;