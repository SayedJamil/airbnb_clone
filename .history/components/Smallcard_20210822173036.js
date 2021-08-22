import Image from "next/image";

function Smallcard({ img, location, distance }) {
    return (
        <div>
            {/* Left */}
            <div className="relative h-16 w-16">
                <Image src={img} layout="fill" className=""/>
            </div>
            {/* Right */}
            <div>

            </div>
        </div>
    )
}

export default Smallcard
