import Image from "next/image";
import { SearchIcon } from '@heroicons/react/solid';
function Header() {
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
            <div>
                <input type="text" placeholder="start your search" />
                <SearchIcon className="h-8 bg-red-400 rounded- text-white p " />
            </div>
            {/* Right */}
            <div>

            </div>
        </header>
    )
}

export default Header
