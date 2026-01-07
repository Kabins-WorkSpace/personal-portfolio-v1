import StarIcon from "@/assets/icons/star.svg";

export default function CardHeader({
  title,
  description,
  link = "",
}: {
  title: string;
  description: string;
  link?: string;
}) {
  return (
    <div className="flex flex-col px-6 pt-6 md:px-10 md:pt-8">
      <div className="inline-flex items-center gap-2">
        <StarIcon className="size-9 text-emerald-300" />
        <a
          href={link}
          className="font-serif text-3xl cursor-pointer hover:underline"
        >
          {title}
        </a>
      </div>
      <p className="text-sm lg:text-base text-white/60 mt-2 max-w-xs">
        {description}
      </p>
    </div>
  );
}
