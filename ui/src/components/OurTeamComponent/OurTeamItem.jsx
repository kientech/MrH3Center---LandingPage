import React from 'react'
import { HiHeart } from "react-icons/hi2";

const OurTeamItem = ({imageUrl, memberName, memberPosition, facebookLink, instagramLink, xLink}) => {
  return (
    <div>
        <div className='w-full h-full rounded-lg bg-green-50'>
            <img src={imageUrl} alt="" className='rounded-lg' 
            />

            <div className='px-6 py-4 rounden-lg shadow-sm'>
                <h1 className='text-lg font-bold text-gray-900'>{memberName}</h1>
                <span className='text-sm font-base'>{memberPosition}</span>

                <div className='h-0.5 w-[90%]  bg-gray-200 my-4'></div>
                <div className='flex items-center gap-x-6'>
                    <a href={facebookLink}>
                        <HiHeart />
                    </a>
                    <a href={xLink}>
                        <HiHeart />
                    </a>
                    <a href={instagramLink}>
                        <HiHeart />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurTeamItem