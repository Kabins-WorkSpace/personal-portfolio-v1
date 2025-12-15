"use client";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import Card from "@/components/Card";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import Link from "next/link";

const portfolioProjects = [
  {
    company: "Alti Finans AS",
    year: "2025",
    title: "Full Stack Web Application",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://altifinans.no",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          title="Real-world Results"
          header="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />

        {/**
         *  Project Card Box Outer component
         */}
        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:px-10 md:pt-12 lg:px-20 lg:pt-16 sticky"
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
                        className="flex items-center gap-2 text-white/50"
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
                    <button className="inline-flex items-center justify-center mt-8 w-full md:w-[178px] h-12 rounded-xl bg-white hover:bg-white/70 transition duration-300 text-gray-900 gap-2">
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
