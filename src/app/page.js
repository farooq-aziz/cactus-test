//=============== Import Components
import { Hero } from "@/components";
//========== Import Hero Images
// import BannerImg from "media/home/heroBanner.png"

export default function Home() {
  //=============== Hero ===============
  const features = [
    "Aussie doctors who focus on TRT",
    "Fast diagnosis and treatment plans",
    "Convenient, online, transparent",
    "Science-backed hormone treatment",
    "Ongoing Tracking & Adjustments"
  ];
  const heroContent = {
    title: (<> GP-Led TRT <br className="hidden md:block" /> For Aussie Men </>),
    para: (<> Test your T, protect it, and enhance your <br className="hidden md:block" /> levels if needed. </>),
    features: features,
    ctaTxt: "Get Started",
    ctaHref: "tel:123456789",
  };

  return (
    <>
      <Hero content={heroContent} />
    </>
  );
}
