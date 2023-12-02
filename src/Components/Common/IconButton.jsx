import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


const IconButton = ({text, icon,className}) => {
  return (
    <div className={`flex items-center p-2 md:p-3 rounded-sm justify-center ${className} text-white transition-all duration-300 ease-in-out hover:bg-transparent hover:border-2 text-[12px] md:text-base`}>
      <FontAwesomeIcon icon={icon}/>
      <button className='ml-1 md:ml-2 font-normal md:font-medium'>{text}</button>
    </div>
  )
}

export default IconButton
