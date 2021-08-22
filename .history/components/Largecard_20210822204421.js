import Image from "next/image";

function Largecard({ img, title, description, buttonText }) {
    return (
        <div>
            <div className="relative h-96 min-w">
                <Image src={img} layout="fill" objectFit="cover" />
            </div>

            <div>

            </div>
        </div>
    )
}

export default Largecard
