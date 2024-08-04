import React from 'react';
import Search from '../collections/Search';
import Recommended from '../collections/Recommended';
import Products from '../collections/Products';

const Collections = () => {
  return (
    <section id="collections" className="grow">
      <Search />
      <Recommended />
      <Products />   
    </section>
  )
}

export default Collections;