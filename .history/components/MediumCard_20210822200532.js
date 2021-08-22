import Image from "next/image";

function MediumCard({img, title}) {
    return (
        <div className="relative h-80 ">
            <Image src={img} layout="fill"/>
            
        </div>
    )
}

export default MediumCard
