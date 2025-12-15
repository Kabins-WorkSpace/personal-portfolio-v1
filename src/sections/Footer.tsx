import ArrowIcon from "@/assets/icons/arrow-up-right.svg";
const socialMediaChannels = [
  {
    name: "YouTube",
    link: "",
  },
  {
    name: "Twitter",
    link: "",
  },
  {
    name: "Instagram",
    link: "",
  },
  {
    name: "LinkedIn",
    link: "",
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="relative pt-16 lg:pt-24 overflow-x-clip -z-10">
      <div className="absolute -z-10 bg-emerald-300/30 w-[1600px] h-[400px] bottom-0 left-1/2 -translate-x-1/2 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
      <div className="container">
        <div className="flex flex-col pb-6">
          <hr className="border-white/15 border-t w-full" />
          <div className="flex flex-col md:flex-row gap-8 items-center md:justify-between mt-6">
            <p className="text-white/30 text-sm">
              © {currentYear}. All rights reserved.
            </p>

            <nav className="flex flex-col md:flex-row items-center gap-8">
              {socialMediaChannels.map((channel) => (
                <a href="" className="inline-flex items-center gap-1.5">
                  <span className="text-sm font-medium">{channel.name}</span>
                  <ArrowIcon className="size-4" />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
