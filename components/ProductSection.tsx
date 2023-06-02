import { Carousel } from "@mantine/carousel";
import { Button, Card, Image } from "@mantine/core";
import HeartIcon from "./icons/HeartIcon";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { productsState } from "../atoms/productAtoms";
import ProductMeta from "./ProductMeta";
import SizeSelector from "./SizeSelector";
import BagIcon from "./icons/BagIcon";


function ProductSection() {

    const id = "id_1"
    //Assuming id is retreived from some API
    const [product, setProduct] = useRecoilState(productsState(id))
    const [size, setSize] = useState("s")
    const sizes = ["s", "m", "l", "xl", "xxl"]

    useEffect(() => {
        setProduct({
            name: "Roller Rabbit",
            metaDescription: "Vado Odelle Dress",
            price: 198,
            rating: 5,
            reviews: 320,
            quantity: 1
        })
    }, [setProduct])

    return (
        <div>
            <div className="relative">
                <Carousel
                    slideGap={0}
                    loop
                    withControls={false}
                    classNames={{ indicator: "bg-white mx-1 w-2 h-2 rounded-full -mt-14 data-[active=true]:ring-1 data-[active=true]:ring-white data-[active=true]:ring-offset-4 data-[active=true]:ring-offset-gray-400" }}
                    withIndicators
                >
                    <Carousel.Slide>
                        <Image src="/productImage.png" alt="Product Image" classNames={{ image: "z-0" }} />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Image src="/productImage.png" alt="Product Image" classNames={{ image: "z-0" }} />
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <Image src="/productImage.png" alt="Product Image" classNames={{ image: "z-0" }} />
                    </Carousel.Slide>
                </Carousel>
                <div className="bg-white rounded-full w-8 h-8 flex flex-col items-center justify-center cursor-pointer absolute top-[42vh] right-6">
                    <HeartIcon line={{ width: 2.5, height: 2.5 }} heart={{ width: 10, height: 10 }} fill="#000" scale={150} />
                </div>
            </div>
            <Card className="rounded-t-[30px] shadow-[0_10px_15px_0px_rgba(0,0,0,1)] bg-white w-full -mt-10 z-10 min-h-fit relative px-6 pt-8">
                <ProductMeta />
                <SizeSelector sizes={sizes} size={size} setSize={setSize} />
                <div className="mt-6 mx-0">
                    <h1 className="text-lg leading-8 font-semibold">Description</h1>
                    <p className="mt-2 text-xs text-[#666666]">Get a little lift from these Sam Edelman sandals featuring ruched straps and leather lace-up ties, while a braided jute sole makes a fresh statement for summer.</p>
                </div>
                <div className="mt-6 mx-0 flex flex-grow justify-between">
                    <div>
                        <p className="text-[9px] text-[#AAAAAA] pb-0 mb-0 leading-none">Total Price</p>
                        <h1 className="text-lg leading-none font-bold align-top">$ {(product.price * Number(product.quantity)).toFixed(2)}</h1>
                    </div>
                    <Button className="w-3/5 h-12 bg-black text-white rounded-full flex justify-center" component="a" href="/payment" target="_blank">
                        <div className="scale-125 mx-2">
                        <BagIcon fill="#fff" />
                        </div>
                        <p className="mx-2 align-baseline tracking-wide">Buy Now</p>
                    </Button>
                </div>
            </Card>
        </div>
    )
}

export default ProductSection