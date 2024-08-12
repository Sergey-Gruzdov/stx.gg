import React, { FC } from "react";
import CalendarCard from "../Cards/CalendarCard";

interface Props {
  title: React.ReactNode | string;
  list: any;
}
const ContactUsSection: FC<Props> = ({ title = "", list = [] }) => {
  return (
    <section className="py-24" id="contact-section">
      <div className="container">
        <h3 className="text-3xl lg:text-5xl xl:text-7xl mb-7">{title}</h3>
        <div className="grid lg:grid-cols-12 gap-10 mt-16">
          <div className="lg:col-span-5">
            <ul>
              {list.map((e: any, i: number) => (
                <li key={i} className="mb-4 pb-4 border-b border-zinc-800">
                  <span className="block text-zinc-400 mb-5">{e.title}</span>
                  {e.content}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
