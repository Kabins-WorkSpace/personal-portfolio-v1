"use client";
import ChromeIcon from "@/assets/icons/chrome.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ToolItem from "./ToolItem";
import { ComponentPropsWithoutRef, Fragment } from "react";
import { twMerge } from "tailwind-merge";

const toolBoxItems = [
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "HTML5",
    iconType: HtmlIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
];
export default function ToolBoxItems({
  className,
  ...other
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className={twMerge("flex flex-none gap-6 pr-6 py-0.5", className)}
      {...other} >
        {[...new Array(2)].fill(0).map((_, idx) => (
          <Fragment key={idx}>
            {toolBoxItems.map((item) => (
              <div
                className="inline-flex items-center gap-4 font-semibold outline outline-2 py-2 px-3 rounded-lg outline-white/10"
                key={item.title}
              >
                <ToolItem component={item.iconType} />
                <p className="font-semibold">{item.title}</p>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
