import React from 'react'
import { FaCheck } from 'react-icons/fa'
//=============== Import Components
import { CTA } from "@/components";

const Hero = ({ content }) => {
    const { title, para, features, ctaTxt, ctaHref } = content;
    return (
        <section className='py-[150px] flex items-center'>
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-4">
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
                        <div className="w-[75%]">
                            <CTA text={ctaTxt} href={ctaHref} />
                        </div>
                    </div>
                    <div className="col-span-8"></div>
                </div>
            </div>
        </section>
    )
}

export default Hero
