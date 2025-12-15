import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
export const ContactSection = () => {
  return (
    <div className="pt-32 lg:pt-48">
      <div className="container ">
        <div className="relative py-8 px-10 grid grid-cols-1 md:grid-cols-5  bg-gradient-to-r from-emerald-300 to-sky-400 rounded-3xl overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10 pointer-events-none"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col justify-center text-center md:text-left gap-2 md:col-span-3 lg:col-span-4">
            <h3 className="font-serif text-2xl md:text-3xl text-gray-950">
              Let's create something amazing together
            </h3>
            <p className="text-sm text-gray-900 md:text-base">
              Ready to bring your next project to life? Let's connect and
              discuss how I can help you achieve your goals.
            </p>
          </div>
          <div className="text-center mt-8 md:mt-[51px] lg:mt-6 md:col-span-2 lg:col-span-1 md:ml-[84px] lg:ml-0.5">
            <a href="" rel="noopener noreferrer" target="_blank">
              <button className="py-3 px-6 inline-flex items-center justify-center gap-2 bg-gray-900 mx-auto rounded-xl">
                <span className="text-base font-medium">Contact Me</span>
                <ArrowUpRightIcon className="size-4" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
