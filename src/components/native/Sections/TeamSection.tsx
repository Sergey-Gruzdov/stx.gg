import Image from "next/image";
import React, { FC } from "react";

interface Props {
  title: React.ReactNode | string;
  description: React.ReactNode | string;
  imgSrc: string;
}
const TeamSection: FC<Props> = ({
  title = "",
  description = "",
  imgSrc = "",
}) => {
  return (
    <section className="py-20">
      <div className="container">
        <h3 className="text-center font-extrabold mb-16">{title}</h3>
        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            <Image
              src={imgSrc}
              className="max-w-full w-full lg:w-[400px] lg:ml-auto lg:mr-20 rounded-md lg:-rotate-[6deg] lg:mt-2 lg:sticky lg:top-20"
              alt={""}
              width={1000}
              height={1000}
            />
          </div>
          <div>
            <p className="text-white">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
