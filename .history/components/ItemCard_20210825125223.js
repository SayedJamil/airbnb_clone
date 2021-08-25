import { HeartIcon } from "@heroicons/react/outline"
import Image from "next/image"

function ItemCard({ img, location, title, description, star, price, total }) {
    return (
        <div className="">
            <div className="h-24 w-40 relative md:h-52 md:w-80 flex-shrink-0 ">
                <Image src={img} layout="fill" objectFit="cover" className="rounded-xl" />
            </div>
            <div>
                <div>
                    <p>
                        {location}
                    </p>
                    <HeartIcon />
                    <
                </div>
            </div>

        </div>
    )
}

export default ItemCard
