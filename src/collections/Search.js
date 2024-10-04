import React from 'react';

const Search = ({ search, setSearch }) => {

  return (
    <section id="search-bar" className="bg-black border-t-2 border-[#efefef] pt-36 pb-4 px-6 md:px-32 max-w-[1440px] mx-auto">
      <form id="search-form" onSubmit={(e) =>e.preventDefault()}>
        <input className="ml-[130px] media450:ml-[150px] media830:ml-[250px] mb-3 w-[140px] media450:w-[300px] media830:w-[500px] p-1 border-2 border-solid border-black rounded-md hover:bg-slate-500 outline-none text-black text-xs media450:text-base"
          id="searchItem"
          type="text"
          placeholder="Search Your Shoes"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </section>    
  )
}

export default Search;