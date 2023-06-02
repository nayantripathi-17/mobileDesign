import React from 'react'
import HomeIcon from './icons/HomeIcon'
import CartIcon from './icons/CartIcon'
import BellIcon from './icons/BellIcon'
import ProfileIcon from './icons/ProfileIcon'

function NavigationBar() {
  return (
    <div className="rounded-t-[30px] shadow-[0_10px_15px_0px_rgba(0,0,0,1)] sticky bottom-0 bg-white h-16 flex flex-grow items-center justify-evenly">
      <div className="flex items-center bg-[#EEEEEE] h-fit rounded-full">
        <div className="w-8 h-8 rounded-full bg-black flex flex-col justify-center">
          <HomeIcon />
        </div>
        <p className="pl-1 pr-2 text-xs font-semibold">Home</p>
      </div>
      <CartIcon />
      <BellIcon />
      <ProfileIcon />
    </div>
  )
}

export default NavigationBar