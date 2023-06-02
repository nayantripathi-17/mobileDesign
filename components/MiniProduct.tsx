import { Card, Image } from '@mantine/core'
import React from 'react'
import HeartIcon from './icons/HeartIcon'

function MiniProduct({ src, alt, title, subtitle, price, href }: { src: string, alt: string, title: string, subtitle: string, price: string, href: string }) {
    return (
        <Card className="text-center px-0" component="a" href={href}>
            <div className="relative">
                <Image src={src} alt={alt} classNames={{ image: "rounded-2xl h-44 w-40" }} />
                <div className="bg-black rounded-full w-5 h-5 flex flex-col items-center justify-center cursor-pointer absolute top-[10%] right-[20%]">
                    <HeartIcon line={{ width: 3, height: 3 }} heart={{ width: 10, height: 10 }} fill="#fff" />
                </div>
            </div>
            <p className="font-semibold text-sm mb-0">{title}</p>
            <p className="text-[#666666] my-1 text-xs">{subtitle}</p>
            <p className="font-semibold my-1 text-sm">$ {Number(price).toFixed(2)}</p>
        </Card>
    )
}

export default MiniProduct