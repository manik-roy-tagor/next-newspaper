import Brands from "@/components/Brands";
import Hero from "@/components/Hero";
import HowWorks from "@/components/HowWorks";
import Stats from "@/components/Stats";

const page = () => {
  return (
    <div>
      <Hero/>
      <Stats />
      <HowWorks />
      <Brands />
    </div>
  );
};

export default page;