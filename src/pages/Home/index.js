import React from "react";
import Banner from "../../components/Banner";
import ExperienceTestimonial from "../../components/ExperienceTestimonial";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProjectsList from "../../components/ProjectsList";
import Section from "../../components/Section";
import ServicesList from "../../components/ServicesList";
import Testimonial from "../../components/Testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <ExperienceTestimonial />
      <Section title="Servicios">
        <ServicesList />
      </Section>
      <Section title="Proyectos populares">
        <ProjectsList />
      </Section>
      <Section title="Nuestros clientes">
        <Testimonial />
      </Section>
      <Banner />
      <Footer />
    </>
  );
}
