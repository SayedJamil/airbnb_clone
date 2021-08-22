import Image from "next/image";

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]">
            <Image src="https://images.unsplash.com/photo-1544955175-1fb49cf83123?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80" layout="fill" objectFit="cover" />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg text-white font-bold">Not sure where to go? Perfect.</p>
                <button className="text-purple-700 bg-white rounded-full px-10 py-4 shadow-md font-bold hover:shadow-xl active:scale-90 transition">I'm flexible</button>
            </div>
        </div>
    )
}

export default Banner
