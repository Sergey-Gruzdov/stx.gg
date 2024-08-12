"use client";
import React, { FC, useState } from "react";
import PricingCard from "../Cards/PricingCard";

interface Props {
  title: React.ReactNode | string;
}

const PricingSection: FC<Props> = ({ title = "" }) => {
  return (
    <section className="py-24">
      <div className="container">
        <h3 className="text-3xl lg:text-5xl xl:text-7xl mb-7"> {title}</h3>

        <div className="mt-16 relative after:content-[''] after:bg-[#241a3e74] after:max-w-full after:w-[600px] after:h-[600px] after:blur-[300px] after:rounded-full after:absolute after:inset-0 after:m-auto">
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <li>
              <PricingCard
                type="Einzelauftrag"
                currency="€"
                price={99}
                priceSubTitle="netto pro Stunde"
                options={[
                  "15 Minuten Taktung",
                ]}
              >
              </PricingCard>
            </li>
            <li>
              <PricingCard
                type="Anfahrtkosten"
                currency="€"
                price={0}
                priceSubTitle="netto Pro Kilometer"
                options={[
                  "Innerhalb Kiel",
                  "Kiel Umgebung (bis 10 KM)",
                ]}
              >
              </PricingCard>
            </li>
            <li>
              <PricingCard
                type="Anfahrtkosten"
                currency="€"
                price={1}
                priceSubTitle="netto pro Kilometer"
                options={[
                  "Außerhalb Kiel",
                ]}
              >
              </PricingCard>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
