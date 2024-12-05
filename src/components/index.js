import dynamic from "next/dynamic";

const AutoPlaySlider = dynamic(() => import("./slider/AutoPlaySlider"));
const AutoScrollSlider = dynamic(() => import("./slider/AutoScrollSlider"));
const Header = dynamic(() => import('./header/Header'))
const CTA = dynamic(() => import('./cta/CTA'))
const Hero = dynamic(() => import('./hero/Hero'))

export {
  AutoPlaySlider,
  AutoScrollSlider,
  CTA,
  Header,
  Hero,
};
