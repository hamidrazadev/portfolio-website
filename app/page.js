import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import MyWorkSkills from "@/components/home/MyWorkSkills";
import Portfolio from "@/components/home/Portfolio";
import Services from "@/components/home/Services";
import WhyHireMe from "@/components/home/WhyHireMe";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-slate-500 light:bg-slate-100 text-white light:text-black">
      <About />
      <Services />
      <WhyHireMe />
      <MyWorkSkills />
      <Portfolio />
      <Contact />
    </div>
  );
}
