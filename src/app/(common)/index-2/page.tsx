import App from "@/components/home-1/App";
import GetStarted from "@/components/home-1/GetStarted";
import About from "@/components/home-2/About";
import Banner from "@/components/home-2/Banner";
import Category from "@/components/home-2/Category";
import Faq from "@/components/home-2/Faq";
import Freelancer from "@/components/home-2/Freelancer";
import HowWork from "@/components/home-2/HowWork";
import Services from "@/components/home-2/Services";
import Testimonial from "@/components/home-2/Testimonial";
import WhyChoose from "@/components/home-2/WhyChoose";

export default function Home2() {
  return (
    <>
      <Banner />
      {/* <!-- Hero Section End --> */}

      {/* <!-- timely worktwo Here --> */}
      <HowWork />
      {/* <!-- timely worktwo End --> */}

      {/* <!-- Choose Here --> */}
      <WhyChoose />
      {/* <!-- Choose End --> */}

      {/* <!-- Category Here --> */}
      <Category />
      {/* <!-- Category End --> */}

      {/* <!-- Perfoming section Here --> */}
      <About />
      {/* <!-- Perfoming section End --> */}

      {/* <!-- Categoris section Here --> */}
      <Services />
      {/* <!-- Categoris section End --> */}

      {/* <!-- Categoris section Here --> */}
      <Freelancer />
      {/* <!-- Categoris section End --> */}

      {/* <!-- App Here --> */}
      <App />
      {/* <!-- App End --> */}

      {/* <!-- task categorish Section Here --> */}
      <GetStarted />
      {/* <!-- task categorish Section End --> */}

      {/* <!-- Faq Here --> */}
      <Faq />
      {/* <!-- Faq End --> */}

      {/* <!-- testimonial two Here --> */}
      <Testimonial />
    </>
  );
}
