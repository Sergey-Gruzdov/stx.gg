"use client";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { FC, useEffect, useRef, useState } from "react";

interface Props {
  title: React.ReactNode | string;
  description: React.ReactNode | string;
}

const Accordion: FC<Props> = ({ title = "", description = "" }) => {
  const [show, setShow] = useState(false);
  const hideItem = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hideItem.current) {
      hideItem.current.style.height = show
        ? `${hideItem.current.scrollHeight}px`
        : "0px";
    }
  }, [show]);

  return (
    <dl className={` w-full transition-all ease-in-out duration-300`}>
      <div
        className="p-6 relative cursor-pointer"
        onClick={() => {
          setShow(!show);
        }}
      >
        <dt className={`pr-5 select-none text-[#fff] font-bold" `}>{title}</dt>
        <CaretDownIcon
          className={`absolute text-lg right-6 top-7 transition duration-200 ${
            show ? "rotate-180" : ""
          }`}
        />
      </div>
      <div
        className={`h-[0px] overflow-hidden transition-all ease-in-out duration-300`}
        ref={hideItem}
      >
        <dd
          className={`px-6 pb-4 text-sm text-zinc-400 rounded-md "text-gray-300"`}
        >
          {description}
        </dd>
      </div>
    </dl>
  );
};

export default Accordion;
