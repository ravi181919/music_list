import React from 'react'

function Navbar({dataValue}) {
  return (
    <div className='px-5 p-2  w-full flex justify-between items-center '>
      <div className="flex items-center justify-center gap-1 w-fit">
        <h2 className='font-medium text-lg'>music</h2>
        <img src="./src/assets/netease-cloud-music-fill.png" className='h-5 w-5 mt-1'/>
      </div>
      <div className="flex items-center justify-center gap-3 px-4 py-2 rounded-md bg-black/80 text-white">
        <h2 className='font-medium text-xs'>favorite</h2>
        <h2 className='font-medium text-xs'>{dataValue.filter(item => item.addToFav).length}</h2>
      </div>
    </div>
  )
}

export default Navbar
