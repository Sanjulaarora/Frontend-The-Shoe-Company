import React from 'react';
import Input from './Input';

const Category = ({handleChange}) => {
  return (
    <div className="p-1">
      <h2 className="text-sm lg:text-[18px] font-medium">Category</h2>
      <form className="flex flex-col">
        <Input 
          handleChange={handleChange}
          value=""
          name="category"
          title=" All"
        />
        <Input
          handleChange={handleChange}
          value="shoes"
          name="category"
          title=" Shoes"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          name="category"
          title=" Heels"
        />
      </form>
    </div>
  )
}

export default Category;