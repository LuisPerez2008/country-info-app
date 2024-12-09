import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'

export const Search = ({ handleChangeInput }) => {


    return (
        <div className=' flex   my-6  tablet:w-[50%] laptop:w-[40%] '>
            <label className='flex shadow-[1px_0px_29px_17px_rgba(0,_0,_0,_0.1)] w-full h-16 space-x-4 items-center py-2 px-6 rounded-md  text-veryDarkBlueText dark:bg-darkBlue'>
                <FaSearch className='w-4 min-w-4 dark:fill-white' />
                <input
                    type="text"
                    placeholder='Search for a Country'
                    className='flex-auto focus:outline-none bg-transparent text-veryDarkBlueBg dark:text-white text-md'
                    onChange={handleChangeInput}
                />
            </label>
        </div>
    )
}