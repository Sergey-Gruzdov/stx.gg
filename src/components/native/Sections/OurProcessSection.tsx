import React, { FC } from "react";
import Card from "../Cards/Card";
import Image from "next/image";
import Globe from "@/components/magicui/globe";

interface Props {
  title: React.ReactNode | string;
}

const OurProcessSection: FC<Props> = ({ title = "" }) => {
  return (
    <section className="py-24">
      <div className="container">
        <h3 className="text-3xl lg:text-5xl xl:text-7xl mb-7">{title}</h3>
        <div className="grid grid-cols-12 gap-5 mt-12 relative after:content-[''] after:bg-[#241a3e74] lg:after:w-[800px] lg:after:h-[800px] after:max-w-full after:blur-[300px] after:rounded-full after:absolute after:inset-0 after:m-auto">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <Card
              title={
                <>
                  <span className="text-[var(--forge-theme-pink)]">01.</span>{" "}
                  Analyse
                </>
              }
              description="Wir analysieren Ihre Infrastruktur und erarbeiten gemeinsam ein individuelles Konzept."
            >
              <Image src="/img/features/1.png" alt={''}  width={1000} height={1000} className="w-full h-full object-cover"/>
            </Card>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <Card
              title={
                <>
                  <span className="text-[var(--forge-theme-pink)]">02.</span>{" "}
                  Planung
                </>
              }
              description="Wir erarbeiten gemeinsam mit Ihnen die Umsetzung des IT-Konzeptes und erstellen einen Zeitplan."
            >
              <Image src="/img/features/2.png" alt={''}  width={1000} height={1000} className="w-full h-full object-cover"/>
            </Card>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <Card
              title={
                <>
                  <span className="text-[var(--forge-theme-pink)]">03.</span>{" "}
                  Umsetzung
                </>
              }
              description="Wir setzen das IT-Konzept um und stehen Ihnen bei Fragen jederzeit zur Verfügung."
            >
              <Image src="/img/features/3.png" alt={''}  width={1000} height={1000} className="w-full h-full object-cover"/>
            </Card>
          </div>
          <div className="col-span-12 md:col-span-6">
            <Card
              title={
                <>
                  <span className="text-[var(--forge-theme-pink)]">04.</span>{" "}
                  Abnahme & Revision
                </>
              }
              description="Die Zufriendenheit unserer Kunden ist uns wichtig. Wir überprüfen gemeinsam mit Ihnen das Ergebnis und nehmen ggf. Anpassungen vor."
            >
              <Image src="/img/features/4.png" alt={''}  width={1000} height={1000} className="w-full h-full object-cover"/>
            </Card>
          </div>
          <div className="col-span-12 md:col-span-6">
            <Card
              title={
                <>
                  <span className="text-[var(--forge-theme-pink)]">05.</span>{" "}
                  Profitieren
                </>
              }
              description="Profitieren Sie von Ihrer neuen IT-Infrastruktur und steigern Sie die Produktivität Ihres Unternehmens."
            >
              <Globe className="top-1" />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcessSection;
