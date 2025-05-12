import About from "@/components/About/About";
import Appoinment from "@/components/Appoinment/Appoinment";
import Clients from "@/components/Clients/Clients";
import Counter from "@/components/Counter/Counter";
import Features from "@/components/Features/Features";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import Services from "@/components/Services/Services";
import Testimonial from "@/components/Testimonial/Testimonial";
import Gallery from "@/components/Gallery";


export default function Home() {
  return (
    <main id="main">
      <HeroBanner />
      <Features />
      <About />
      {/*<Counter />*/}
      <Services />
      <Gallery />
      <Appoinment />
      {/* <Testimonial />
      <Clients /> */}
    </main>
  );
}
