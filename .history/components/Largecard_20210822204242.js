import Image from "next/image";

function Largecard({ img, title, description, buttonText }) {
    return (
        <div>
            <Image src={img} layout="fill" />

        </div>
    )
}

export default Largecard
