import Particles from "@/components/magicui/particles";
import React from "react";
import ColorCircle from "@/components/native/Shapes/ColorCircle";

interface HeroSectionParams {
  title: React.ReactNode | string | null;
  description: React.ReactNode | string | null;
  children?: React.ReactNode;
}

const HeroSection: React.FC<HeroSectionParams> = ({
  title = null,
  description = null,
  children = null,
}) => {
  return (
    <section className="relative">
      <div className="lg:h-[100vh] min-h-[800px] lg:min-h-[500px]  overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-top-gradient before:z-[-10] after:content-[''] after:absolute after:inset-0 after:bg-bottom-gradient after:z-[10] lg:after:block after:hidden">
        <div className="container relative lg:h-full  min-h-[800px] lg:min-h-[500px] pt-[2rem] flex flex-col items-center justify-center">
          <div className="text-center relative z-20">
            <h1 className="font-black text-5xl lg:text-[4rem] xl:text-[4.5rem] lg:!leading-[5.2rem]">
              {title}
            </h1>

            <p className="mt-4 text-white/90">{description}</p>

            <div className="mt-8 space-x-2">{children}</div>
          </div>
          <div>
            <ColorCircle />
          </div>

          <Particles
            className="absolute inset-0 -z-10"
            quantity={100}
            ease={80}
            color={"#fff"}
            refresh
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
