import React, { FC } from "react";
import Card from "../Cards/Card";
import Image from "next/image";

interface Props {
  title: React.ReactNode | string;
}

const OurServicesSection: FC<Props> = ({ title = "" }) => {
  return (
    <section className="py-24">
      <div className="container">
        <h3 className="text-3xl lg:text-5xl xl:text-7xl mb-7">{title}</h3>
        <div className="grid grid-cols-12 gap-5 mt-12 relative after:content-[''] after:max-w-full after:bg-[#241a3e74] after:w-[600px] after:h-[600px] after:blur-[300px] after:rounded-full after:absolute after:inset-0 after:m-auto">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <Card
              title={<><span className="text-[var(--forge-theme-pink)]"> Modern</span> Workspace </>}
              description="Wir entwickeln ein modernes Arbeitsumfeld und sorgen für eine reibungslose Integration in Ihre bestehende Infrastruktur."
            >
              <Image src="/img/features/1.png" alt={''}  width={1000} height={1000} className="w-full h-full object-cover"/>
            </Card>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <Card
              title={<> <span className="text-[var(--forge-theme-pink)]"> Managed</span> Services</>}
              description="Unser bewährtes IT-Infrastrukturkonzept sorgt für einen reibungslosen und einfachen Betrieb in Ihrem Unternehmen."
            >
              <Image src="/img/features/2.png" alt={''}  width={1000} height={1000} className="w-full h-full object-cover"/>
            </Card>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <Card
              title={<><span className="text-[var(--forge-theme-pink)]"> Professional</span> Consulting</>}
              description="Ihre Vorstellungen besprechen wir in einem Persönlichen Gespräch und untersützen Sie in jedem Schritt, denn Ihre Vision ist unser Ziel."
              >
              <Image src="/img/features/3.png" alt={''}  width={1000} height={1000} className="w-full h-full object-cover"/>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServicesSection;
