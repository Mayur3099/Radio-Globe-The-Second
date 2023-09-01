import React from 'react';
import { earthLogoWhite, about, contact1, contact2 } from '../assets';

const NavBar = () => {
    return (
        <div className='flex justify-between py-2 px-8 bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 border-b'>

            <div className='flex mt-2 w-full text-white font-bold text-4xl'>
                <img src={earthLogoWhite} alt="Logo"
                    className='rounded-full w-1/6 hover:shadow-[0px_0px_25px_1px_#f6e05e,inset_0px_0px_25px_5px_#1a202c] hover:cursor-pointer'
                />

                <div className='flex justify-start items-center py-4 px-8 w-full text-white font-bold text-4xl'>
                    RadioEarth
                </div>
            </div>


            <div className='flex justify-end mt-2 py-4 px-3 w-full text-white font-bold text-xl'>
                <div className='flex flex-col items-center justify-center mx-8'>
                    <img src={about} alt="Logo"
                        className='rounded-full w-10 hover:shadow-[0px_0px_25px_1px_#f6e05e,inset_0px_0px_25px_5px_#1a202c] hover:cursor-pointer'
                    />
                    About Us
                </div>
                <div className='flex flex-col items-center justify-center ml-8'>
                    <img src={contact1} alt="Logo"
                        className='rounded-lg w-10 hover:shadow-[0px_0px_25px_1px_#f6e05e,inset_0px_0px_25px_5px_#1a202c] hover:cursor-pointer'
                    />
                    Contact US
                </div>
            </div>
        </div>
    )
}

export default NavBar