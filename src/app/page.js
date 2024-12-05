//=============== Import Components
import { Hero, Services } from "@/components";
//========== Import Hero Images
import slide1 from "media/slide-1.png";
import slide2 from "media/slide-2.png";
import slide3 from "media/slide-3.png";
//==========
import icon1 from "media/icons/serv-1.png";
import icon2 from "media/icons/serv-2.png";
import icon3 from "media/icons/serv-3.png";
import icon4 from "media/icons/serv-4.png";
import icon5 from "media/icons/serv-5.png";

export default function Home() {
  //=============== Hero ===============
  const features = [
    "Aussie doctors who focus on TRT",
    "Fast diagnosis and treatment plans",
    "Convenient, online, transparent",
    "Science-backed hormone treatment",
    "Ongoing Tracking & Adjustments",
  ];
  // =====================
  const sliderData = [
    { slideImg: slide1 },
    { slideImg: slide2 },
    { slideImg: slide3 },
    { slideImg: slide1 },
    { slideImg: slide2 },
    { slideImg: slide3 },
  ];
  // =====================
  const heroContent = {
    title: (
      <>
        GP-Led TRT <br className="hidden xl:block" /> For Aussie Men
      </>
    ),
    para: (
      <>
        Test your T, protect it, and enhance you
        <br className="hidden xl:block" /> levels if needed.
      </>
    ),
    features: features,
    ctaTxt: "Get Started",
    ctaHref: "tel:123456789",
    sliderData: sliderData,
  };
  //=============== Services ===============
  const serviceData = [
    {
      icon: icon1,
      title: "Australia licensed",
      para: "Medications and clinicians",
    },
    {
      icon: icon2,
      title: "Free, discreet delivery",
      para: "No names, logos, or delivery fee",
    },
    {
      icon: icon3,
      title: "Unlimited clinical support",
      para: "Access ongoing medical advice",
    },
    {
      icon: icon4,
      title: "Flexible plans",
      para: "Take control of your treatment",
    },
    {
      icon: icon5,
      title: "Innovative treatment",
      para: "Clinically proven medication",
    },
  ];
  // =====================
  const servicesContent = {
    serviceData: serviceData,
  };

  return (
    <>
      <Hero content={heroContent} />
      <Services content={servicesContent} />
    </>
  );
}
