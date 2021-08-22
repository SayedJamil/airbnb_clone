import Image from "next/image";
function Header() {
    return (
        <header>
            {/* Left */}
            <div>
                <Image
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png"
                    layout="fill"
                    objectFit="contain"
                    objectPosition
                />
            </div>
            {/* Middle */}
            <div>

            </div>
            {/* Right */}
            <div>

            </div>
        </header>
    )
}

export default Header
