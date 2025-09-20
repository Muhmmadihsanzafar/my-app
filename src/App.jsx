import React from "react";
import Header from "./components/Header";
import Services from "./components/Services";
import Hero from "./components/Hero";
import About from "./components/About";
import Tips from "./components/Tips";
import BookAppointment from "./components/BookAppointment";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Tips />
      <BookAppointment />
      <Testimonial />
      <Footer />
    </>
  );
};

export default App;