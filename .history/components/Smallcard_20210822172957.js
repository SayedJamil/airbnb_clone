import Image from "next/image";

function Smallcard({ img, location, distance }) {
    return (
        <div>
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
