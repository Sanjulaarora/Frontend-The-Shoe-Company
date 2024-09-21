import React, { Suspense } from 'react';
import Search from '../collections/Search';
import Recommended from '../collections/Recommended';

const Products = React.lazy(() => import('../collections/Products'));


const Collections = () => {
  return (
    <section id="collections" className="grow">
      <Search />
      <Recommended />
      <Suspense fallback={<div>Loading...</div>}>
        <Products />   
      </Suspense>
    </section>
  )
}

export default Collections;