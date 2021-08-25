import { HeartIcon } from "@heroicons/react/outline"
import { StarIcon } from "@heroicons/react/solid"
import Image from "next/image"

function ItemCard({ img, location, title, description, star, price, total }) {
    return (
        <div className="">
            <div className="h-24 w-40 relative md:h-52 md:w-80 flex-shrink-0 ">
                <Image src={img} layout="fill" objectFit="cover" className="rounded-xl" />
            </div>
            <div className=''>
                <div className="flex justify-between">
                    <p>{location}</p>
                    <HeartIcon className="h-7 cursor-pointer" />
                </div>
            </div>

        </div>
    )
}

export default ItemCard
