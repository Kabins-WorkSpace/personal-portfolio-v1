import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimised",
  "Usable",
  "Reliable",
];
export const TapeSection = () => {
  return (
    <div className="py-32 lg:py-24 overflow-x-clip">
      <div className="xl:container">
        <div className="-rotate-3 -mx-1 bg-gradient-to-r from-emerald-300 to-sky-400 ">
          <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-duration:30s]">
              {[...new Array(2)].fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {words.map((word) => (
                    <div
                      className="inline-flex items-center gap-4 text-gray-900"
                      key={word}
                    >
                      <span className="font-extrabold uppercase text-sm">
                        {word}
                      </span>
                      <StarIcon className="size-6 -rotate-12" />
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
