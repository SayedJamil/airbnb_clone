import Image from "next/image"

function ItemCard(({ img, location, title, description, star, price, total }) {
    return (
        <div className="">
            <div>
                
            </div>
            <Image src={img} layout="fill"/>
        </div>
    )
}

export default ItemCard
