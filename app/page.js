import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Hero from "@/components/home/Hero";
import MyWorkSkills from "@/components/home/MyWorkSkills";
import Portfolio from "@/components/home/Portfolio";
import Services from "@/components/home/Services";
import WhyHireMe from "@/components/home/WhyHireMe";

export const dynamic = 'force-static';

export default function Home() {
  return (
    <div className="bg-slate-500 light:bg-slate-100 text-white light:text-black">
      <Hero />
      <About />
      <Services />
      <WhyHireMe />
      <MyWorkSkills />
      <Portfolio />
      <Contact />
    </div>
  );
}
