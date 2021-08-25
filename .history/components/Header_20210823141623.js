import Image from "next/image";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {
    GlobeAltIcon,
    MenuIcon,
    SearchIcon,
    UserCircleIcon
} from '@heroicons/react/solid';
import { useState } from "react";
import { DateRangePicker } from 'react-date-range';




function Header() {
    const [searchInput, setSearchInput] = useState('');
    const selectionRange
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-4 px-5 md:px-10">
            {/* Left */}
            <div className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
            {/* Middle - search */}
            <div className="flex items-center border-2 rounded-full py-2 px-1 shadow-sm ">
                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    type="text"
                    placeholder="start your search" className="pl-2 pg-transparent outline-none flex-grow text-gray-600 text-sm placeholder-gray-400" />
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 rounded-full text-white p-2 cursor-pointer md:mx-2 " />
            </div>
            {/* Right */}
            <div className="flex space-x-4 items-center justify-end text-gray-500">
                <p className="cursor-pointer hidden md:inline">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer " />
                <div className="flex border-2 rounded-full items-center space-x-2 p-2">
                    <MenuIcon className="h-6 cursor-pointer" />
                    <UserCircleIcon className="h-6 cursor-pointer" />
                </div>
            </div>
            {searchInput && (
                <div>
                    <DateRangePicker
                        ranges={[selectionRange]}
                    />
                </div>
            )}
        </header>
    )
}

export default Header
