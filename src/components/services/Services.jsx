import Image from 'next/image';
import React from 'react'
//=============== Import Components
import { AutoScrollSlider } from "@/components";

const Services = ({ content }) => {
    const { serviceData } = content;
    return (
        <section className='bg-[#F8F8F8] py-5'>
            <div className="container">
                <AutoScrollSlider>
                    {serviceData.map((item, i) => (
                        <div key={i} className="grow-0 shrink-0 basis-[70%] md:basis-[40%] lg:basis-[33%] 2xl:basis-[25%] pl-4">
                            <div className="border border-[#EEF1ED] rounded-lg flex flex-col gap-4 p-6">
                                <div className="flex items-center gap-2">
                                    <Image src={item.icon} priority="true" alt="icon" />
                                    <h3 className='text-[14px] lg:text-[16px] leading-[26px] font-semibold font-montserrat text-primary'>{item.title}</h3>
                                </div>
                                <p className='text-[14px] lg:text-[16px] leading-[26px] font-normal font-montserrat text-primary'>{item.para}</p>
                            </div>
                        </div>
                    ))}
                </AutoScrollSlider>

            </div>
        </section>
    )
}

export default Services
