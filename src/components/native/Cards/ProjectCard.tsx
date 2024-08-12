import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  title: string;
  description: React.ReactNode | string;
  imgSrc: string;
  link: string;
}

const ProjectCard: FC<Props> = ({
  title = "",
  description = "",
  imgSrc = "",
  link = "",
}) => {
  return (
    <div className="border bg-[#140f22]/30 border-zinc-800/50 p-8 rounded-xl relative z-10">
      <div className="h-[250px] overflow-hidden relative border rounded-lg border-zinc-800/50">
        <Image
          src={imgSrc}
          alt={title}
          width={1000}
          height={1000}
          className="absolute min-h-full top-0 left-0 right-0 w-full object-cover"
        />
      </div>
      <strong className="mt-5 block text-2xl">{title}</strong>
      <p className="mt-3 text-[14px] text-zinc-300 h-[105px] mb-4 overflow-hidden">
        {description}
      </p>
      <div>
        <Link
          href={link}
          className="group inline-flex w-full items-center transition-all ease-in-out duration-300 justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
        >
          View more{" "}
          <ArrowRightIcon className="ml-2 group-hover:left-1 transition-all ease-in-out duration-300 relative left-0" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
