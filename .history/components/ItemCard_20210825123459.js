import Image from "next/image"

function ItemCard(({ img, location, title, description, star, price, total }) {
    return (
        <div>
            <Image src={img} />
        </div>
    )
}

export default ItemCard
