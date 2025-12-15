import Card from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import bookImage from "@/assets/images/book-cover.png";
import ToolBoxItems from "@/components/ToolBoxItems";
import mapImage from "@/assets/images/map-image.png";
import personalImage from "@/assets/images/kabin-profile-abhishek-dai-ghar.webp";

import Image from "next/image";
import CardHeader from "@/components/CardHeader";
import { Hobbies } from "@/components/Hobbies";
export const AboutSection = () => {
  return (
    <section className="pt-36 lg:pt-28" id="about">
      <div className="container">
        <SectionHeader
          title="About me"
          header="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />

        <div className="grid grid-cols-1 gap-8 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-8">
            <Card className="h-[320px] md:col-span-2">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />

              <div className="mx-auto w-40 mt-8">
                <Image src={bookImage} alt="Atomic Habits" className="" />
              </div>
            </Card>

            {/* Toolbox card for displaying the necessary tools. */}
            <Card className="h-[320px] md:col-span-3 lg:col-span-4">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
              />
              <ToolBoxItems className="mt-6 md:mt-8 animate-move-left [animation-duration:30s]" />
              <ToolBoxItems className="mt-6 animate-move-right [animation-duration:20s]" />
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6 gap-8">
            <Hobbies className="md:col-span-3 lg:col-span-4" />
            <Card className="h-[320px] relative md:col-span-2 lg:col-span-2">
              <Image
                src={mapImage}
                alt="Location"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3">
                <div className="absolute inset-0 bg-white/60 -z-10 rounded-full animate-ping [animation-duration:2s]"></div>
                <Image
                  src={personalImage}
                  alt="Kabin Thapa standing with hands crossed."
                  className="size-20 rounded-full"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
