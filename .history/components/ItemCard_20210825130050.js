import { HeartIcon } from "@heroicons/react/outline"
import { StarIcon } from "@heroicons/react/solid"
import Image from "next/image"

function ItemCard({ img, location, title, description, star, price, total }) {
    return (
        <div className="flex">
            <div className="h-24 w-40 relative md:h-52 md:w-80 flex-shrink-0 ">
                <Image src={img} layout="fill" objectFit="cover" className="rounded-xl" />
            </div>
            <div className='flex flex-col flex-grow pl-5'>
                <div className="flex justify-between">
                    <p>{location}</p>
                    <HeartIcon className="h-7 cursor-pointer" />
                </div>
                <h4 className="text-xl font-semibold">{title}</h4>
                <div className="border-bm />
            </div>

        </div>
    )
}

export default ItemCard
