import memojiImage from "@/assets/images/kabin-profile-abhishek-dai-ghar.webp";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";

import Image from "next/image";
import HeroOrbit from "@/components/HeroOrbit";
import Link from "next/link";
export const HeroSection = () => {
  return (
    <section className="py-32 md:py-48 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] pointer-events-none">
        <div
          className="absolute inset-0 -z-30 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>

        {/* Star rings for hero section */}
        <div className="star-ring size-[620px]"></div>
        <div className="hidden md:block star-ring size-[820px]"></div>
        <div className="hidden lg:block star-ring size-[1020px]"></div>
        <div className="hidden lg:block star-ring size-[1220px]"></div>

        {/**
         * Star, Sparkle and circle icons sorted in ascending order to increase the animation duration to give a pleasant effect.
         */}

        <HeroOrbit
          size={590}
          rotation={98}
          orbitDuration={30}
          shouldOrbit
          shouldSpin
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit
          size={550}
          rotation={20}
          orbitDuration={32}
          shouldOrbit
          shouldSpin
        >
          <StarIcon className="text-emerald-300 size-12" />
        </HeroOrbit>

        <HeroOrbit
          size={440}
          rotation={-14}
          orbitDuration={34}
          shouldOrbit
          shouldSpin
          spinDuration={6}
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={445}
          rotation={79}
          orbitDuration={36}
          shouldOrbit
          shouldSpin
          spinDuration={6}
        >
          <SparkleIcon className="size-6 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={520}
          rotation={-41}
          orbitDuration={38}
          shouldOrbit={true}
          shouldSpin
        >
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={530}
          rotation={178}
          orbitDuration={40}
          shouldOrbit
          shouldSpin
          spinDuration={6}
        >
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={653}
          rotation={-5}
          orbitDuration={42}
          shouldOrbit={true}
          shouldSpin
        >
          <div className="size-2 rounded-full bg-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={707}
          rotation={144}
          orbitDuration={44}
          shouldOrbit
          shouldSpin
          spinDuration={6}
        >
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={723}
          rotation={85}
          orbitDuration={46}
          shouldOrbit
          spinDuration={3}
          shouldSpin
        >
          <div className="size-3 rounded-full bg-emerald-300/20" />
        </HeroOrbit>

        <HeroOrbit
          size={800}
          rotation={-72}
          orbitDuration={48}
          shouldOrbit
          shouldSpin
        >
          <StarIcon className="text-emerald-300 size-28" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col items-center">
          {/* Hero Image */}
          <Image
            src={memojiImage}
            alt="Person peeking from behind the laptop."
            className="size-[120px] rounded-full md:size-[150px] lg:size-[180px]"
          />

          {/* Available for projects section */}
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>

            <div className="text-sm font-medium">
              Available For Exciting Opportunities
            </div>
          </div>

          <div className="max-w-lg mx-auto">
            {/* Heading Text */}
            <h1 className="font-serif font-medium text-3xl md:text-5xl text-center mt-8 tracking-wide md:leading-tight">
              Computer Engineer, Athlete and an avid learner!
            </h1>

            {/* Description */}
            <p className="text-center text-white/60 md:text-lg mt-4">
              I specialize in transforming designs into functional,
              high-performing web applications. Lets discuss your next project.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
              {/* Explore Work */}
              <Link href="#projects" rel="noopener noreferrer">
                <button className="inline-flex items-center gap-2 px-6 h-12 bg-gray-900 text-white border border-white/15 rounded-xl hover:cursor-pointer hover:bg-white hover:text-gray-900 transition duration-300">
                  <span className=" font-semibold">Explore My Work</span>
                  <ArrowDown className="size-4" />
                </button>
              </Link>

              {/* Lets Connect Button */}
              <Link
                href={"https://www.linkedin.com/in/kabin7/"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 h-12 gap-2 text-gray-900 bg-white border-white rounded-xl hover:cursor-pointer hover:bg-white/80 transition duration-300"
              >
                <span>👋</span>
                <span className="font-semibold">Let's Connect</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
