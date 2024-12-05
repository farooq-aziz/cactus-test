"use client"

const CTA = ({ text, href, icon }) => {
    return (
        <>
            <div dangerouslySetInnerHTML={{__html:
                `
                    <a href=${href} class="bg-secondary text-primary border-0 h-[40px] lg:h-[50px] px-6 rounded-[7px] flex items-center justify-between"> 
                        <span class="text-[16px] font-semibold font-montserrat tracking-wide">${text}</span>
                        <img src="icons/ctaArrow.png" alt="Arrow" />
                    </a>
                `
            }} />
        </>
    );
}

export default CTA