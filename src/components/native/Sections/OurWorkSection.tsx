import React, { FC } from "react";
import ProjectCard from "../Cards/ProjectCard";

interface Props {
  title: React.ReactNode | string;
  list: any;
}

const OurWorkSection: FC<Props> = ({ title = "", list = [] }) => {
  return (
    <section className="py-24">
      <div className="container">
        <h3 className="text-3xl lg:text-5xl xl:text-7xl mb-7">{title}</h3>
        <div className="grid max-w-[1000px] mx-auto grid-cols-12 gap-5 mt-12 relative after:max-w-full after:content-[''] after:bg-[#241a3e74] after:w-[600px] after:h-[600px] after:blur-[300px] after:rounded-full after:absolute after:inset-0 after:m-auto">
          {list.map((e: any, i: number) => (
            <div className="col-span-12 md:col-span-6" key={i}>
              <ProjectCard
                imgSrc={e.imgSrc}
                title={e.title}
                link={e.link}
                description={e.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;
