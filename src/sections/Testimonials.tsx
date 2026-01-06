import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import joachimPhoto from "@/assets/images/joachim.webp";
import edomaeOwner from "@/assets/images/edomaeOwner.webp";
import zaikaOwner from "@/assets/images/zaikaOwner.webp";
import { SectionHeader } from "@/components/SectionHeader";
import { Fragment } from "react";
import Card from "@/components/Card";
import Image from "next/image";

const testimonials = [
  {
    name: "Joachim Bernsten",
    position: "Seniorrådgiver @ Alti Finans AS",
    text: "Kabin was instrumental in changing our fortune as a company. We can't be more happier with Kabin, and the work he have done for us to make us a deeply tech enabled company.",
    avatar: joachimPhoto,
  },
  {
    name: "Robin Upadhhay",
    position: "Daglig Leder @ Edomae Restaurant",
    text: "Working with Kabin was a pleasure. His expertise in technology elevated our company's impact and reach in a way we never imagined. The website has exceeded our expectations in all ways.",
    avatar: edomaeOwner,
  },
  {
    name: "Binod Bhusal",
    position: "Daglig Leder @ Zaika Restaurant",
    text: "Kabin's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: zaikaOwner,
  },
  {
    name: "Ifra Zia",
    position: "Founder @ Alti Finans",
    text: "Kabin is a true coding wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We've had nothing but positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="lg:py-24">
      <div className="container">
        {/* Flex Box for Client Testimonials Text Section */}
        <SectionHeader
          title="Happy Clients"
          header="What Clients Say about Me"
          description="Don't just take my word for it. See what my clients have to say about my work."
        />

        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          {/* Info Box for each Clients testimonial*/}

          <div className="flex gap-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {testimonials.map((testimonial) => (
                  // Mapping testimonial data to each individual client.
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 hover:pointer transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-white/40 text-sm">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                    <p className="text-sm mt-4 md:text-base md:mt-6">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
