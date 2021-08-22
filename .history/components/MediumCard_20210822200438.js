import Image from "next/image";

function MediumCard({img, title}) {
    return (
        <div className='"relative"'>
            <Image src={img} layout="fill"/>
            
        </div>
    )
}

export default MediumCard
