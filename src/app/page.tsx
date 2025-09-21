// components
import { Navbar, Footer, BlogSection } from "@/components";

// sections
import Hero from "./hero";
import Skills from "./skills";
import Testimonial from "./testimonial";
import ContactForm from "./contact-form";

export default function TrenovationsWebsite() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Testimonial />
      <ContactForm />
      <BlogSection />
      <Footer />
    </>
  );
}
