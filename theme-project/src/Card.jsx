import React from 'react'

const Card = ({ item, theme }) => {
  return (
    <div className={`${theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'} rounded-lg overflow-hidden shadow-md w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5`}>
      <img 
        src={item.download_url} 
        alt={item.author} 
        className="w-full h-50 object-cover"
      />
      <div className="p-2 flex items-center justify-center">
        <h3 className="font-semibold text-xs">{item.author}</h3>     
      </div>
    </div>
  )
}

export default Card
