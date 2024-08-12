"use client";
import React, { FC, useState } from "react";
import PricingCard from "../Cards/PricingCard";

interface Props {
  title: React.ReactNode | string;
}

const ManagedPricingSection: FC<Props> = ({ title = "" }) => {
  return (
    <section className="py-2">
      <div className="container">
        <h3 className="text-3xl lg:text-5xl xl:text-7xl mb-7"> {title}</h3>

        <div className="mt-16 relative after:content-[''] after:bg-[#241a3e74] after:max-w-full after:w-[600px] after:h-[600px] after:blur-[300px] after:rounded-full after:absolute after:inset-0 after:m-auto">
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            <li>
              <PricingCard
                type="Workstation Flatrate ab"
                currency="€"
                price={40}
                priceSubTitle="netto Monatlich"
                options={[
                  "Monitoring & Wartung",
                  "Hotline für Störungen",
                  "Updates & Upgrades",
                  "Anwender Support & Beratung",
                  "Software Installation sowie Konfiguration",
                ]}
              >
              </PricingCard>
            </li>
            <li>
            <PricingCard
                type="Server Flatrate ab"
                currency="€"
                price={120}
                priceSubTitle="netto Monatlich"
                options={[
                  "Monitoring & Wartung",
                  "Hotline für Störungen (Mo - Fr 10-23 Uhr)",
                  "Updates & Upgrades",
                  "Server Support & Beratung",
                  "Software Installation sowie Konfiguration",
                ]}
              >
              </PricingCard>
            </li>
            <li>
              <PricingCard
                type="Anfahrtkosten"
                currency="€"
                price={0}
                priceSubTitle="netto pro Kilometer"
                options={[
                  "Innerhalb Kiel",
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

export default ManagedPricingSection;
