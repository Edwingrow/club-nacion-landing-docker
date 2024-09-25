import React from 'react'

export const SearchInput = () => {
  return (
    <div className="relative flex">
  <input
    type="text"
    placeholder="Busca un comercio..."
    className="bg-transparent w-1/2 px-4 py-2 placeholder-white text-white focus:outline-none rounded-l-full  border  border-white "
  />
  <input
    type="text"
    placeholder="Ingresa una ubicación..."
    className="bg-transparent w-1/2 px-4 py-2 text-white placeholder-white focus:outline-none rounded-r-full border  border-white "
  />

<button type="submit" className="inline-flex items-center py-2.5 px-3 ml-2  text-white bg-tertiary border border-tertiary hover:bg--primary focus:ring-4 focus:outline-none  rounded-full">
        <svg aria-hidden="true" className="w-5 h-5  " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
   </button>
</div>
  )
}
