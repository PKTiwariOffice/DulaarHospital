import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Doctors from "@/components/Doctors";
import Facilities from "@/components/Facilities";
import Testimonials from "@/components/Testimonials";
import AppointmentForm from "@/components/AppointmentForm";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWidget from "@/components/FloatingWidget";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-[104px] sm:pt-[108px]">
        <Hero />
        <About />
        <Services />
        <Doctors />
        <Facilities />
        <Testimonials />
        <AppointmentForm />
        <Contact />
      </main>
      <Footer />
      <FloatingWidget />
    </>
  );
}
