"use client";
import useIntersectionObserver from "@/components/hooks/useIntersectionObserver";
import React, { FC, useEffect, useState } from "react";

interface Props {
  description: string;
}

const createWordsArray = (str: string) => {
  return str.split(" ").filter(Boolean);
};

const DescribeSection: FC<Props> = ({ description = "" }) => {
  const wordsArray = createWordsArray(description);
  const [sectionRef, isIntersecting] = useIntersectionObserver({
    root: null,
    rootMargin: "-200px",
    threshold: 0.5,
  });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isIntersecting) {
      console.log("Section is in view!");
      setIsActive(true);
    }
  }, [isIntersecting]);

  return (
    <section
      ref={sectionRef}
      className="after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(75%_100%_at_100%_0%,#241a3e_0%,_rgba(8,_7,_7,_0)_100%)] after:z-[10] lg:after:block after:hidden relative"
    >
      <div className="container py-12 lg:py-32 relative z-20">
        <h1 className="lg:text-[3.2rem] xl:text-[4rem] lg:!leading-[6rem]">
          {wordsArray.map((e, i) => (
            <span
              className={`!text-white lg:!text-[#5e5e5e] text ${isActive ? "text-active" : ""}`}
              key={i}
              data-text={e}
            >
              {e}{" "}
            </span>
          ))}
        </h1>
      </div>
    </section>
  );
};

export default DescribeSection;
