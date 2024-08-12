import AboutUsSection from "@/components/native/Sections/AboutUsSection";
import OurTeamSection from "@/components/native/Sections/OurTeamSection";
import TeamSection from "@/components/native/Sections/TeamSection";
import TestimonialSection from "@/components/native/Sections/TestimonialSection";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const metadata = {
  title: "STX | Impressum",
  description: "Cloud, Managed Services und IT-Security",
};

export default function AboutUs() {
  return (
    <>
      <div className="pt-20 before:content-[''] before:absolute before:inset-0 before:bg-top-gradient before:z-[-10]">
        <AboutUsSection
          title={
            <>
              <span className="gradient-text-primary">Impressum</span>{" "}
            </>
          }
          description={``}
        />
      </div>
      <TeamSection
        title={"STX | Sergey Gruzdov"}
        description={
          <>
            Sergey Gruzdov<br/>
            <br/>
            STX<br/>
            <br/>
            Kanalstraße 25b<br/>
            24159, Kiel<br/>
            <br/>
            Kontakt:<br/>
            <br/>
            E-Mail: <a href="mailto:contact@stx.gg">contact@stx.gg</a><br/>
            <br/>
            Telefon: <a href="tel:+4917620708079">+49 (0) 176 20 70 80 79</a><br/>
            <br/>
            <a href="https://stx.gg">www.stx.gg</a><br/>
            <br/>
            Ust-IdNr: beantragt<br/>
            <br/>
          </>
        }
        imgSrc="/img/team.jpg"
      />
    </>
  );
}
