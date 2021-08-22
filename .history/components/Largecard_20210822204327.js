import Image from "next/image";

function Largecard({ img, title, description, buttonText }) {
    return (
        <div>
            <div>
<Image src={img} layout="fill" />
            </div>
            
            <div>
                
</div>
        </div>
    )
}

export default Largecard
