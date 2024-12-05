import React from 'react'
import Image from 'next/image';
import { FaCheck, FaStar } from 'react-icons/fa'
//=============== Import Components
import { CTA, AutoPlaySlider } from "@/components";
//=============== Import Images
import google from "media/icons/google.png"
import arrowDown from "media/icons/arrowDown.png"

const Hero = ({ content }) => {
    const { title, para, features, ctaTxt, ctaHref, sliderData } = content;
    return (
        <section className='pt-[150px] pb-[50px] flex items-center'>
            <div className="container">
                <div className="grid grid-cols-12 gap-y-8">
                    <div className="col-span-12 xl:col-span-4">
                        <h3 className='text-[44px] leading-[55px] font-bold font-montserrat text-primary'>{title}</h3>
                        <p className='text-[16px] leading-[26px] font-medium font-montserrat text-primary my-4'>{para}</p>
                        <div className="flex flex-col gap-2 mb-6">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-5">
                                    <div className="bg-[#354F52] flex items-center justify-center p-1 rounded-full">
                                        <FaCheck className="text-white text-[10px]" />
                                    </div>
                                    <p className="text-[16px] leading-[26px] font-medium font-montserrat text-primary">
                                        {feature}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="w-full xl:w-[75%]">
                            <CTA text={ctaTxt} href={ctaHref} />
                        </div>
                        <div className="flex flex-col items-center mt-6 w-full xl:w-[75%]">
                            <div className="flex gap-3 items-center">
                                <Image src={google} priority="true" alt="Review" />
                                <div className="flex gap-1 items-center">
                                    <FaStar className='text-[#F7871B]' />
                                    <FaStar className='text-[#F7871B]' />
                                    <FaStar className='text-[#F7871B]' />
                                    <FaStar className='text-[#F7871B]' />
                                    <FaStar className='text-[#F7871B]' />
                                </div>
                            </div>
                            <p className="text-[16px] leading-[26px] font-semibold font-montserrat text-primary">rated 5 stars on google</p>
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-span-8">
                        <AutoPlaySlider arrowPosition="" options={{ align: "start" }}>
                            {sliderData.map((item, index) => (
                                <div key={index} className="grow-0 shrink-0 basis-[50%] md:basis-4/12 xl:basis-[30%] pl-5">
                                    <div className="rounded-lg overflow-hidden">
                                        <Image src={item.slideImg} priority="true" className='w-full' alt="Slider" />
                                    </div>
                                </div>
                            ))}
                        </AutoPlaySlider>
                        <div className="border border-[#EEF1ED] rounded-md h-[40px] flex items-center justify-between px-6 mt-5">
                            <p className='text-[16px] leading-[26px] font-normal font-montserrat text-[#52796F]'>Testimonial Disclaimer</p>
                            <Image src={arrowDown} priority="true" alt="arrowDown" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
