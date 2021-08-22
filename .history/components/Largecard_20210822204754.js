import Image from "next/image";

function Largecard({ img, title, description, buttonText }) {
    return (
        <div className="relative py-16 cursor-pointer">
            <div className="relative h-96 min-w-[300px]">
                <Image src={img} layout="fill" objectFit="cover" className="rounded-xl" />
            </div>

            <div className="absolute top-32 left-12">
                <h3 className='text-4xl mb-3 '>{title}</h3>
                <p>{description}</p>
                <button>{buttonText}</button>
            </div>
        </div>
    )
}

export default Largecard
