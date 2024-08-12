import React, { FC } from "react";
import { MagicCard } from "@/components/magicui/magic-card";
import Image from "next/image";

interface Props {
  title: React.ReactNode | string;
  list: any;
}

const OurTeamSection: FC<Props> = ({ title = "", list = [] }) => {
  return (
    <section className="py-24">
      <div className="container">
        <h3 className="text-3xl lg:text-5xl xl:text-7xl mb-7">{title}</h3>
        <div className={"grid md:grid-cols-2 lg:grid-cols-3 gap-4 relative after:content-[''] after:max-w-full after:bg-[#241a3e74] after:w-[600px] after:h-[600px] after:blur-[300px] after:rounded-full after:absolute after:inset-0 after:m-auto"}>
          {list.map((e: any, i: number) => (
            <MagicCard
              className="cursor-pointer p-5 relative z-10 !bg-[#140f22]/30 border-zinc-800/50 shadow-2xl whitespace-nowrap"
              gradientColor={"#231a3d"}
              key={i}
            >
              <div>
                <Image src={e.imgSrc} alt="" width={80} height={80} />
              </div>
              <b className="mt-3 block text-3xl">{e.name}</b>
              <span className="block text-sm text-[var(--forge-theme-pink)] my-3">{e.role}</span>
              {e.content}
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
