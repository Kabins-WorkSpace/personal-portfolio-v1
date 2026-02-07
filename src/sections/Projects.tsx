"use client";
import altiFinansLandingPage from "@/assets/images/alti-finans-hero-image-portfolio.webp";
import zaikaLandingPage from "@/assets/images/zaika-hero-image-portfolio.webp";
import neposLandingPage from "@/assets/images/nepos-landing-page.webp";
import edomaeLandingPage from "@/assets/images/edomae-restuarant-portfolio.webp";
import suburbiaLandingPage from "@/assets/images/suburbiaImage.webp";
import coteRoyaleLandingPage from "@/assets/images/coteRoyaleImage.webp";

import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Card from "@/components/Card";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import Link from "next/link";

const portfolioProjects = [
  {
    company: "Alti Finans AS",
    year: "2023 - Present",
    title: "Full-Stack Digital Platform & Brand System",
    results: [
      { title: "End-to-end full-stack loan platform" },
      { title: "Automated credit assessment" },
      { title: "Internal workflows & CRM integrations" },
      { title: "Company-wide digital brand identity" },
    ],
    link: "https://altifinans.no",
    image: altiFinansLandingPage,
  },
  {
    company: "NEPOS Norway",
    year: "2026",
    title: "Informative Website for a Social Organisation.",
    results: [
      { title: "Clear and Informative website." },
      { title: "Sleek design, descriptive information." },
      { title: "Helpful Links for People moving to Norway." },
      { title: "Organisation Wide Brand Identity" },
    ],
    link: "https://neposnorway.no",
    image: neposLandingPage,
  },
  {
    company: "Zaika Restaurant",
    year: "2025",
    title: "Digitalisation & Complete Tech Solution",
    results: [
      { title: "High-conversion restaurant website." },
      { title: "Centralized online ordering flow." },
      { title: "Smoother internal operations." },
      { title: "Digital marketing & brand visibility." },
    ],
    link: "https://www.zaikarestaurant.no",
    image: zaikaLandingPage,
  },
  {
    company: "Edomae Omakase",
    year: "2025",
    title: "Digital Presence & Experience Design",
    results: [
      { title: "Minimal, premium website experience." },
      { title: "Integrated reservation & booking flow." },
      { title: "Brand-aligned visual identity." },
      { title: "Elevated online presence." },
    ],
    link: "https://www.edomae.no",
    image: edomaeLandingPage,
  },
  {
    company: "Suburbia Skate",
    year: "2025",
    title: "Side Project for 3D animation.",
    results: [
      { title: "Minimal, premium website experience." },
      { title: "Premium animation." },
      { title: "3D rendering and animation." },
      { title: "Aesthetic design." },
    ],
    link: "https://suburbia-skate.netlify.app",
    image: suburbiaLandingPage,
  },
  {
    company: "Cote Royale",
    year: "2025",
    title: "Hobby Project for learning.",
    results: [
      { title: "Luxurious website experience." },
      { title: "Sleek animation." },
      { title: "High end design." },
      { title: "UX design." },
    ],
    link: "https://coteroyalecourse.netlify.app",
    image: coteRoyaleLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          title="My Recent work"
          header="Transforming designs into beautiful user experiences"
          description="See how I helped companies that I collaborated with achieve their goals."
        />

        {/**
         *  Project Card Box Outer component
         */}
        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-6 pt-8 pb-0 md:px-10 md:pt-12 lg:px-20 lg:pt-16 sticky"
              style={{
                top: `calc(60px + ${projectIndex * 40}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16 relative">
                <div className="lg:pb-16">
                  <div className="inline-flex gap-2 bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text font-bold text-sm tracking-widest">
                    <p className="uppercase">{project.company}</p>
                    <span>&bull;</span>
                    <p>{project.year}</p>
                  </div>

                  <h2 className="font-serif mt-2 md:mt-5 text-2xl md:text-4xl">
                    {project.title}
                  </h2>

                  <hr className="mt-4 md:mt-5 border-t-2 border-white/5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li
                        className="flex  gap-1 md:gap-2 text-white/50"
                        key={result.title}
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <p className="text-sm md:text-base">{result.title}</p>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="hover:cursor-pointer"
                  >
                    <button className="inline-flex items-center justify-center mt-8 w-full md:w-[178px] h-12 rounded-xl bg-secondary-900 hover:bg-secondary-900/70 transition duration-300 text-gray-900 gap-2">
                      <span className="font-semibold">Visit Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </Link>
                </div>
                <div className="">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 lg:mt-0 md:-mb-0 lg:h-full lg:absolute lg:w-auto"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
