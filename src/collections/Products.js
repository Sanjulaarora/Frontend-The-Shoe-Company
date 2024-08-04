import React from 'react';
import Feed from './Feed';
import SideBar from './SideBar';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

const Products = () => {
  const { searchResult, handleChange, fetchError, isLoading} = useContext(DataContext);

  return (
    <section id="products" className="px-6 md:px-12 max-w-[1440px] mx-auto mt-8">
      <div id="items" className="flex flex-wrap ml-28 media450:ml-60 media830:ml-80">
        {isLoading && 
        <div className="ml-48 mt-24 min-h-96 text-center">
          <p className="text-lg font-bold">Loading items...</p>
          </div>} 
        {!isLoading && fetchError && 
        <div className="ml-48 mt-24 min-h-96 text-center">
          <p className="text-lg font-bold text-red-600">{fetchError}</p>
        </div>}
        {!isLoading && !fetchError && (searchResult.length ?
          <Feed searchResult={searchResult} /> : 
          <div className="ml-48 mt-24 min-h-96 text-center">
            <p className="text-lg font-bold">No Such item to display.</p>
          </div>)}
      </div>
      <div id="side-bar" className="absolute w-9/12 bottom-[60%]">
        <SideBar handleChange={handleChange}/>
      </div>
    </section>
     
  )
}

export default Products;