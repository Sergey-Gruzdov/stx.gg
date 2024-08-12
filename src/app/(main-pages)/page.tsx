import HeroSection from "@/components/native/Sections/HeroSection";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import DescribeSection from "@/components/native/Sections/DescribeSection";
import OurProcessSection from "@/components/native/Sections/OurProcessSection";
import OurServicesSection from "@/components/native/Sections/OurServicesSection";
import OurWorkSection from "@/components/native/Sections/OurWorkSection";
import ContactUsSection from "@/components/native/Sections/ContactUsSection";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import OurTeamSection from "@/components/native/Sections/OurTeamSection";
import PricingSection from "@/components/native/Sections/PricingSection";
import FAQSection from "@/components/native/Sections/FAQSection";
import CalendarCard from "@/components/native/Cards/CalendarCard";
import HeadlinesSection from "@/components/native/Sections/HeadlineSection";

export const metadata = {
  title: "STX | Home",
  description: "Cloud, Managed Services und IT-Security",
};

export default function Home() {
  return (
    <>
      <HeroSection
        title={
          <>
          <span className="text-[var(--forge-theme-pink)]">STX</span>
          <br />
          Cloud,
            <br />
            <span className="text-[var(--forge-theme-pink)]">
            Managed Services
            </span>
            <br />
              und IT-Security
          </>
        }
        description={
          "Ihre Anforderungen sind unsere Herausforderungen."
        }
      >
        <div className="mb-5 inline-flex gap-2">
          <Link
            href="calendar"
            className={buttonVariants({ variant: "default" })}
          >
            Termin vereinbaren
          </Link>

          <Link
            href="services"
            className={buttonVariants({ variant: "ghost" })}
          >
            Services
          </Link>
        </div>
      </HeroSection>

      <DescribeSection
        description={
          "Wir bereiten Ihr Unternehmen auf das next-big-thing vor."
        }
      />

      <OurProcessSection
        title={
          <>
            Prozess <span className="text-[var(--forge-theme-pink)]">Optimierung</span>
          </>
        }
      />

      <OurServicesSection
        title={
          <>
            Unsere <span className="text-[var(--forge-theme-pink)]">Services</span>
          </>
        }
      />
      <ContactUsSection
        title={
          <>
            <span className="text-[var(--forge-theme-pink)]">Kontakt</span>
          </>
        }
        list={[
          {
            title: "Adresse",
            content: (
              <>
                <Link className="text-2xl lg:text-4xl group" href="#contact-section">
                  Kanalstraße 25b, 24159 Kiel{" "}
                  <ArrowTopRightIcon className="group-hover:rotate-45 transition-all ease-in-out duration-300 text-[var(--forge-theme-pink)] inline-block w-10 h-auto" />
                </Link>
              </>
            ),
          },
          {
            title: "E-Mail",
            content: (
              <>
                <Link className="text-2xl lg:text-4xl group" href="mailto:contact@stx.gg">
                contact@stx.gg{" "}
                <ArrowTopRightIcon className="group-hover:rotate-45 transition-all ease-in-out duration-300 text-[var(--forge-theme-pink)] inline-block w-10 h-auto" />
              </Link>
              </>
            ),
          },
          {
            title: "Phone",
            content: (
              <>
                <Link className="text-2xl lg:text-4xl group" href="#">
                  +49 (0) 176 20 70 80 79{" "}
                  <ArrowTopRightIcon className="group-hover:rotate-45 transition-all ease-in-out duration-300 text-[var(--forge-theme-pink)] inline-block w-10 h-auto" />
                </Link>
              </>
            ),
          },
        ]}
      />
      <HeadlinesSection title="Kalender" description="Online Termin buchen" />
      <CalendarCard></CalendarCard>

    </>
  );
}
