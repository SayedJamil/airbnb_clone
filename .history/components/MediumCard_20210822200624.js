import Image from "next/image";

function MediumCard({ img, title }) {
    return (
        <div>
            <div className="relative h-80 w-80">
                <Image src={img} layout="fill" />

            </div>
            <h3 className="text-">{title}</h3>
        </div>

    )
}

export default MediumCard
