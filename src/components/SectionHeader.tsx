export const SectionHeader = ({
  title,
  header,
  description,
}: {
  title: string;
  header: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {/**
       * Projects Headers
       */}
      <p className="uppercase mb-6 tracking-widest font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
        {title}
      </p>
      <h2 className="font-serif text-3xl md:text-5xl text-center">{header}</h2>
      <p className="text-center text-white/60 md:text-lg lg:text-xl max-w-md mx-auto mt-4">
        {description}
      </p>
    </div>
  );
};
