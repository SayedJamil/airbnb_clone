import Image from "next/image";

function Largecard({ img, title, description, buttonText }) {
    return (
        <div className="relative py-16 cursor-pointer">
            <div className="relative h-96 min-w-[300px]">
                <Image src={img} layout="fill" objectFit="cover" className="rounded-xl" />
            </div>

            <div>

            </div>
        </div>
    )
}

export default Largecard
