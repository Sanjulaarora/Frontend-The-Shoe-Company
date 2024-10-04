import React from 'react';

const Input = ({handleChange, value, title, name, color}) => {
  return (
    <label htmlFor="101" className="text-[11px] media582:text-sm lg:text-[14px] p-[0.75px]">
      <input onChange={handleChange}
        id="101"
        type="radio"
        value={value}
        name={name}
      />
      <span style={{backgroundColor:color}}></span> {title}
    </label>
  )
}

export default Input;