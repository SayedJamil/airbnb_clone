import Image from "next/image";

function Smallcard({ img, location, distance }) {
    return (
        <div>
            <Image src={img} layout="fill/>
        </div>
    )
}

export default Smallcard
