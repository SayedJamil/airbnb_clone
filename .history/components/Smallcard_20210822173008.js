import Image from "next/image";

function Smallcard({ img, location, distance }) {
    return (
        <div>
            {/* Left */}
            <div>
                <Image src={img} layout="fill" />
            </div>
            {/* Right */}
            <div>

            </div>
        </div>
    )
}

export default Smallcard
