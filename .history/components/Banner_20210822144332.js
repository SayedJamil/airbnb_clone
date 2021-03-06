import Image from "next/image";

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]">
            <Image src="https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" layout="fill" objectFit="cover" className="blur-md" />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg text-white">Not sure where to go? Perfect.</p>
                <button>I'm flexible</button>
            </div>
        </div>
    )
}

export default Banner
