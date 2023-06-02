import ArrowIcon from "./icons/ArrowIcon"
import BagIcon from "./icons/BagIcon"

function ProductNavBar() {
    return (
        <div className="mt-12 mx-6 flex flex-grow items-center justify-between">
            <div className="bg-black rounded-full w-10 h-10 flex flex-col items-center justify-center cursor-pointer">
                <div>
                    <ArrowIcon />
                </div>
            </div>
            <div className="bg-white rounded-full w-8 h-8 flex flex-col items-center justify-center cursor-pointer">
                <div>
                    <BagIcon fill="#000" />
                </div>
            </div>
        </div>
    )
}

export default ProductNavBar