import { HeartIcon } from "@heroicons/react/outline"
import { StarIcon } from "@heroicons/react/solid"
import Image from "next/image"

function ItemCard({ img, location, title, description, star, price, total }) {
    return (
        <div className="flex py-7 px-2 border-b cursor-pointer hover:opac">
            {/* Left image */}
            <div className="h-24 w-40 relative md:h-52 md:w-80 flex-shrink-0 ">
                <Image src={img} layout="fill" objectFit="cover" className="rounded-xl" />
            </div>
            {/* Right information */}
            <div className='flex flex-col flex-grow pl-5'>
                <div className="flex justify-between">
                    <p>{location}</p>
                    <HeartIcon className="h-7 cursor-pointer" />
                </div>
                <h4 className="text-xl font-semibold">{title}</h4>
                <div className="border-b w-10 pt-2" />
                <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

                <div className="flex justify-between items-end pt-5">
                    <p className="flex items-center">
                        <StarIcon className="h-5 text-red-500" />
                        {star}
                    </p>
                    <div>
                        <p className="text-lg font-bold pb-2 lg:tex-2xl">{price}</p>
                        <p className="font-extralight text-right">{total}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ItemCard
