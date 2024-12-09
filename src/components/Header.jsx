import { FaSun, FaMoon } from 'react-icons/fa'

export const Header = () => {
    return (
        <section className='flex justify-between items-center px-4 py-4 tablet:px-12 shadow-sm shadow-black/20 '>
            <h1 className='font-bold text-md tablet:text-xl'>Where in the world?</h1>
            <div className='flex items-center space-x-2 text-md'>
                <FaMoon className=' fill-veryDarkBlueBg cursor-pointer' />
                <span>Dark Mode</span>
            </div>

        </section>
    )
}