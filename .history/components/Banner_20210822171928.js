import Image from "next/image";

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]">
            <Image src="https://links.papareact.com/0fm" layout="fill" objectFit="cover" />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg text-gray-800 font-medium">Not sure where to go? Perfect.</p>
                <button className="  bg-white rounded-full px-10 py-4 shadow-md font-bold hover:shadow-xl active:scale-90 transition duration-150"><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-red-600">I'm flexible</span></button>
            </div>
        </div>
    )
}

export default Banner
