import { FC } from "react";

interface Props {
  title: React.ReactNode;
  description: React.ReactNode;
}
const HeadlinesSection: FC<Props> = ({ title = "", description = "" }) => {
  return (
    <section className="pt-4 overflow-hidden pb-4">
      <div className="container flex flex-col items-center flex-wrap justify-center">
        <h1 className="text-[var(--forge-theme-pink)] lg:text-5xl xl:text-7xl mb-7">{title}</h1>
        <p className="mt-10 text-lg md:text-xl lg:text-xl text-zinc-300 font-semibold text-center w-[500px] max-w-full block mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
};

export default HeadlinesSection;