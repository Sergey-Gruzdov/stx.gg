import React, { FC } from "react";

interface Props {
  title: React.ReactNode | string;
  description: React.ReactNode | string;
  children: React.ReactNode;
}

const Card: FC<Props> = ({ title = "", description = "", children = "" }) => {
  return (
    <div className="border bg-[#140f22]/30 border-zinc-800/50 p-8 rounded-xl relative z-10">
      <div className="h-[200px] overflow-hidden relative border rounded-lg border-zinc-800/50 ">
        {children}
      </div>
      <strong className="mt-5 block text-3xl">{title}</strong>
      <p className="mt-3 text-[14px] text-zinc-300">{description}</p>
    </div>
  );
};

export default Card;
