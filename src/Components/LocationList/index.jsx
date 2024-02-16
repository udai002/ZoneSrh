import React from 'react'

const LocationList = () => {
  return (
    <div className='md:p-6 p-2'>
      <h1 className='mb-8 font-bold text-3xl text-center'>Locations</h1>
      <div className='flex flex-row flex-wrap justify-center w-full'>
      <div className="bg-[url('lawgate.jpg')] md:flex-1 w-80 h-56 bg-cover rounded-xl flex items-center justify-center mr-4 mb-6">
        <h1 className='text-white font-bold text-2xl text-center'>Lawgate</h1>
      </div>
      <div className="bg-[url('lawgate.jpg')] w-80 md:flex-1 h-56 bg-cover rounded-xl flex items-center justify-center mr-4 mb-6">
        <h1 className='text-white font-bold text-2xl text-center'>Lawgate</h1>
      </div>
      <div className="bg-[url('lawgate.jpg')] w-80 md:flex-1 h-56 bg-cover rounded-xl flex items-center justify-center mr-4 mb-6">
        <h1 className='text-white font-bold text-2xl text-center'>Lawgate</h1>
      </div>
      </div>
      
    </div>
  )
}

export default LocationList
