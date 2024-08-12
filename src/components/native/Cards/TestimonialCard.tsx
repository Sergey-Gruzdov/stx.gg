import Image from "next/image";
import Link from "next/link";
import twitter from "@/assets/images/twitter.png";
import { FC } from "react";

interface Props {
  author: string;
  authorID: string;
  testimonial: string;
  link: string;
  date: string;
  authorImageSrc: string;
  icon: string;
}

const TestimonialCard: FC<Props> = ({
  author = "",
  authorID = "",
  testimonial = "",
  link = "/",
  date = "",
  authorImageSrc = "",
  icon = "none",
}) => {
  return (
    <div className="p-7 rounded-xl bg-[#0c0a12] backdrop-blur-md relative overflow-hidden">
      <Link
        href={link}
        className="absolute inset-0 h-full w-full z-20"
        target="_blank"
      />
      <div className="absolute top-5 right-2 w-[30px] h-[30px]">
        {icon === "none" && (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
          </svg>
        )}
        {icon === "twitter" && (
          <Image
            src={twitter}
            alt="twitter"
            width={50}
            height={50}
            className="w-[20px] h-[20px] rounded"
          />
        )}
        {icon === "producthunt" && (
          <svg
            className="text-xl text-[#ff6154]"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M326.3 218.8c0 20.5-16.7 37.2-37.2 37.2h-70.3v-74.4h70.3c20.5 0 37.2 16.7 37.2 37.2zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-128.1-37.2c0-47.9-38.9-86.8-86.8-86.8H169.2v248h49.6v-74.4h70.3c47.9 0 86.8-38.9 86.8-86.8z"></path>
          </svg>
        )}
      </div>
      <div className="flex items-center gap-3">
        <Image
          src={authorImageSrc}
          alt="avatar"
          width={50}
          height={50}
          className="bg-gray-600 w-[50px] h-[50px] rounded-full"
        />
        <div>
          <b className="text-lg">{author}</b>
          <span className="block text-[14px] text-gray-500">@{authorID}</span>
        </div>
      </div>
      <div className="mt-5">
        <p className="">
          {testimonial.split("\n").map((item: any, index: number) => {
            return index === 0 ? item : [<br key={index} />, item];
          })}
        </p>
      </div>
      <span className="block mt-4 text-gray-400 text-[14px]">{date}</span>
    </div>
  );
};

export default TestimonialCard;
