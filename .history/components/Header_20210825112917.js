import Image from "next/image";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {
    GlobeAltIcon,
    MenuIcon,
    SearchIcon,
    UserCircleIcon,
    UsersIcon
} from '@heroicons/react/solid';
import { useState } from "react";
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/dist/client/router";




function Header() {
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [guestNumber, setGuestNumber] = useState(1);
    const selectionRange = {
        startDate: startDate
        , endDate: endDate
        , key: 'selection'
    }
    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    const resetInput = () => {
        setSearchInput("");
    }

    const router = useRouter();
    const search = () => {
        router.push
    }

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-4 px-5 md:px-10">
            {/* Left */}
            <div onClick={() => router.push("/")}
                className='relative flex items-center h-10 cursor-pointer my-auto'>
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
                <div className="flex flex-col col-span-3 mx-auto mt-5">
                    <DateRangePicker
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#FD5B61"]}
                        onChange={handleSelect}
                    />
                    <div className="flex items-center border-b mb-4">
                        <h2 className="text-2xl font-bold  flex-grow">
                            Number of Guests
                        </h2>
                        <UsersIcon className="h-5" />
                        <input
                            type="number"
                            value={guestNumber}
                            onChange={(e) => setGuestNumber(e.target.value)}
                            min={1}
                            max={10}
                            className="w-12 pl-4 text-l outline-none text-red-400" />

                    </div>
                    <div className="flex">
                        <button
                            className="flex-grow"
                            onClick={resetInput}>
                            Cancel
                        </button>
                        <button onClick={search} className="flex-grow text-red-400">
                            Search
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header
