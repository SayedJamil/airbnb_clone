import Image from "next/image";

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-">
            <Image src="https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" layout="fill" objectFit="cover" />
        </div>
    )
}

export default Banner
