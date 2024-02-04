"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel"
import { HeroImages } from "@/constants"
import { log } from "console"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

const HeroSwiper = () => {
    return (
        <>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 2500,
                    }),
                ]}
            >
                <CarouselContent>
                    {HeroImages.map((image, i) => {
                        return (
                            < CarouselItem key={image.name} >
                                <Image src={image.url} alt={image.name} width={1000} height={1000} className="max-h-[70vh] object-center 2xl:max-h-[50vh] rounded-2xl" />
                            </CarouselItem>
                        )
                    })}
                </CarouselContent>
            </Carousel >
        </>
    )
}

export default HeroSwiper



