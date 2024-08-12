"use client";

import React, { FC, useEffect, useState } from "react";
import TestimonialCard from "../Cards/TestimonialCard";

// Define the type for individual testimonial items
interface TestimonialItem {
  author: string;
  authorID: string;
  testimonial: string;
  link: string;
  date: string;
  authorImageSrc: string;
  icon: string;
}

interface Props {
  title: React.ReactNode | string;
  list: TestimonialItem[];
}

const TestimonialSection: FC<Props> = ({ list = [], title = "" }) => {
  const [testimonialList, setTestimonialList] = useState<TestimonialItem[][]>([[], [], []]);

  useEffect(() => {
    handleTestimonial();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  const handleTestimonial = () => {
    const newList: TestimonialItem[][] = [[], [], []];

    list.forEach((item, i) => {
      newList[i % 3].push(item);
    });

    setTestimonialList(newList);
  };

  return (
    <section>
      <div className="container py-20">
        <h3 className="font-extrabold text-center">{title}</h3>
        <div className="flex flex-wrap mt-10 gap-y-4">
          {testimonialList.map((group, index) => (
            <div key={index} className="w-full lg:w-1/3 px-2 space-y-4">
              {group.map((e, i) => (
                <TestimonialCard
                  key={i}
                  author={e.author}
                  authorID={e.authorID}
                  testimonial={e.testimonial}
                  link={e.link}
                  date={e.date}
                  authorImageSrc={e.authorImageSrc}
                  icon={e.icon}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
