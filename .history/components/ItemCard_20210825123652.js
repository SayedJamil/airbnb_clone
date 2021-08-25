import Image from "next/image"

function ItemCard({ img, location, title, description, star, price, total }) {
    return (
        <div className="">
            <div className="h-24 w-40 relative">
                <Image src={img} layout="fill" objectFit="cover" />
            </div>

        </div>
    )
}

export default ItemCard
