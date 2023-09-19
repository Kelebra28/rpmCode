import React from "react";

import { AboutSection } from "./../sections/About";
import { ArticlesSection } from "./../sections/Articles";
import { ContactSection } from "./../sections/Contact";
import { HeroSection } from "./../sections/Hero";
import { InterestsSection } from "./../sections/Interests";
import { ProjectsSection } from "./../sections/Projects";

import { Seo } from "./../components/Seo";
import { Page } from "./../components/Page";
import { ServicesSection } from "../sections/Services";

export default function IndexPage() {
  return (
    <>
      <Seo title="RPM | Landing" thumbnailUrl='../../content/images/logo-white.png'/>
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        {/* <ArticlesSection
          sectionId="articles"
          heading="Latest Articles"
          sources={["Medium"]}
        /> */}
        <ServicesSection sectionId="services" />
        <AboutSection sectionId="about" heading="About RPM" />
        <InterestsSection sectionId="details" heading="Details of Projects" />
        <ProjectsSection sectionId="features" heading="Built-in Features" />
        <ContactSection sectionId="github" heading="Contact" />
      </Page>
    </>
  );
}
