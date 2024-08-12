import { MagicCard } from "@/components/magicui/magic-card";
import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import { FC } from "react";

interface Props {
  type: string;
  currency: string;
  price: any;
  priceSubTitle: string;
  options: string[];
}

const PricingCard: FC<Props> = ({
  type = "",
  currency = "",
  price = 0,
  priceSubTitle = "",
  options = [],
}) => {
  return (
    <MagicCard
      className="cursor-pointer p-5 !block relative z-10 !bg-[#140f22]/30 border-zinc-800/50 shadow-2xl whitespace-nowrap"
      gradientColor={"#231a3d"}
    >
      <div className="relative w-full z-10">
        <div className={`w-full p-6`}>
          <div className={`relative text-white z-10`}>
            <span className="text-sm text-zinc-400">{type}</span>
            <h4 className="text-4xl my-4">
              {Number(Number(price).toFixed(1)).toLocaleString()} {currency}
            </h4>
            <span className={`block text-sm text-zinc-400`}>
              {priceSubTitle}
            </span>
          </div>
          <div className=" border-t border-zinc-900 pt-4 mt-4 relative ">
            <ul className="">
              {options.map((e, i) => {
                if (e.includes("/NOT/")) {
                  return (
                    <li
                      key={i}
                      className={`pb-2 mt-2 text-[14px] text-[#e0e0e0] opacity-60`}
                    >
                      <Cross2Icon className="text-[#e0e0e0] inline-block mr-2 text-xl" />
                      {e.replace(/\/NOT\/$/g, "")}
                    </li>
                  );
                }
                return (
                  <li key={i} className={`pb-2 mt-2 text-[14px] text-white`}>
                    <CheckIcon className="text-[var(--forge-theme-primary)] inline-block mr-2 text-xl" />
                    {e}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </MagicCard>
  );
};

export default PricingCard;
