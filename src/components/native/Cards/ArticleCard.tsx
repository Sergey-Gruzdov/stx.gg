import { TimerIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  title: React.ReactNode | string;
  summery: React.ReactNode | string;
  date: React.ReactNode | string;
  src: string;
  link: string;
}

const ArticleCard: FC<Props> = ({
  title = "",
  summery = "",
  date = "",
  src = "",
  link = "/",
}) => {
  return (
    <article className="bg-[#0c0a12] p-5 rounded-xl relative">
      <Image
        src={src}
        alt={""}
        width={800}
        height={800}
        className="w-full h-64 rounded-xl bg-gradient-to-l from-[#603195] to-[#7458ad] text-transparent border border-zinc-900"
      />
      <span className="inline-flex my-2 gap-2 text-zinc-300 items-center text-[13px]">
        <TimerIcon/>
        {date}
      </span>
      <h5 className="mb-3 font-extrabold">{title}</h5>
      <p className="mb-4">{summery}</p>
      <Link href={link} className="absolute inset-0 z-20" target="_blank" />
    </article>
  );
};

export default ArticleCard;
