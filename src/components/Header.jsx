import { FaSun, FaMoon } from 'react-icons/fa'
import { useState } from 'react'

export const Header = (isDark) => {

    const [dark, setDark] = useState(isDark)


    function cambiarModo(e) {
        document.documentElement.classList.toggle('dark', e.target.checked);
        setDark(document.documentElement.classList.contains('dark'))

    }

    return (
        <section className='flex justify-between bg-veryLightGray dark:bg-darkBlue items-center px-4 py-4 tablet:px-12 shadow-sm shadow-black/20 '>
            <h1 className='font-bold text-md tablet:text-xl'>Where in the world?</h1>
            <div className='flex items-center space-x-2 text-md '>
                <label className='relative cursor-pointer transition-all'>
                    <input type="checkbox" id='modeDark' className='absolute opacity-0 w-0 h-0' onClick={(event) => cambiarModo(event)} />
                    {
                        dark ? <FaSun className='fill-yellow-500 cursor-pointer' /> : <FaMoon className='fill-veryDarkBlueText cursor-pointer' />
                    }

                </label>

                <span>{
                    dark ? 'Light Mode' : 'Dark Mode'
                }</span>
            </div>

        </section>
    )
}