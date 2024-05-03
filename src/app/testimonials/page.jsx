import Brands from "@/components/Brands";
import Contacts from "@/components/Contacts";
import HowWorks from "@/components/HowWorks";
import Testimonial from "@/components/Testimonial";

const page = () => {
  return (
    <>
      <Testimonial />
      <HowWorks />
      <Brands />
      <Contacts />
    </>
  );
};

export default page;