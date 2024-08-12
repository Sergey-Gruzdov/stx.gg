import { FC } from "react";

interface Props {
  title: React.ReactNode | string;
  description: React.ReactNode | string;
}
const AboutUsSection: FC<Props> = ({ title = "", description = "" }) => {
  return (
    <section className="pt-36 overflow-hidden pb-32">
      <div className="container flex flex-col items-center flex-wrap justify-center">
        <h1 className="font-black text-center text-3xl lg:text-5xl xl:text-7xl ">{title}</h1>
        <p className="mt-10 text-lg md:text-xl lg:text-xl text-zinc-300 font-semibold text-center w-[500px] max-w-full block mx-auto">
          {description}
        </p>
      </div>
    </section>
  );
};

export default AboutUsSection;
