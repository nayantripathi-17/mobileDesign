import { Carousel } from '@mantine/carousel'
import { Button, Card } from '@mantine/core'
import React from 'react'

function ProductSlider() {
    return (
            <Carousel
                className="ml-6 my-8"
                slideGap={15}
                slideSize="75%"
                align="start"
                withControls={false}
                withIndicators={false}
                
            >
                <Carousel.Slide>
                    <Card className="rounded-[1.25rem] bg-[length:360px_300px] bg-[left_top_-1rem] py-5" style={{ backgroundImage: `url("/image90.png")` }}>
                        <h1 className="font-bold text-2xl my-0">50% Off</h1>
                        <h2 className="leading-6 my-0 text-lg">On everything today</h2>
                        <p className="text-[#666666] font-semibold text-xs">With Code: FSCREATION</p>
                        <Button className="rounded-full text-whte bg-black font-bold text-xs tracking-widest leading-4 mt-3" >Get Now</Button>
                    </Card>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Card className="rounded-[1.25rem] bg-[length:360px_300px] bg-[left_top_-1rem] py-5" style={{ backgroundImage: `url("/image90.png")` }}>
                        <h1 className="font-bold text-2xl my-0">70% Off</h1>
                        <h2 className="leading-6 my-0 text-lg">On everything today</h2>
                        <p className="text-[#666666] font-semibold text-xs">With Code: FSCREATION</p>
                        <Button className="rounded-full text-whte bg-black font-bold text-xs tracking-widest leading-4 mt-3" >Get Now</Button>
                    </Card>
                </Carousel.Slide>
            </Carousel>

    )
}

export default ProductSlider