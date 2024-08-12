import AboutUsSection from "@/components/native/Sections/AboutUsSection";
import OurTeamSection from "@/components/native/Sections/OurTeamSection";
import TeamSection from "@/components/native/Sections/TeamSection";
import TestimonialSection from "@/components/native/Sections/TestimonialSection";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export const metadata = {
  title: "STX | Über uns",
  description: "Cloud, Managed Services und IT-Security",
};

export default function AboutUs() {
  return (
    <>
      <div className="pt-20 before:content-[''] before:absolute before:inset-0 before:bg-top-gradient before:z-[-10]">
        <AboutUsSection
          title={
            <>
              Unsere <span className="gradient-text-primary">Reise</span>{" "}
            </>
          }
          description={`Unsere Lösungen: so individuell wie Ihr Unternehmen. Jeder Auftrag eine neue Herausforderung.`}
        />
      </div>
      <TeamSection
        title={"Unsere Geschichte (bis jetzt)"}
        description={
          <>
            Sie begann vor nicht allzu langer Zeit, als eine Idee, die in dem Kopf des Gründers,<br/>
            <strong className="text-zinc-200">Sergey Gruzdov</strong>, entstand. Die Idee: ein Konzept von mehr als nur einer IT-Firma.
            <br />
            Und so war auch schon unser Managed Service Konzept kurz <strong className="text-zinc-200">&quot;MSK&quot;</strong> geboren. 
            <br/>Ein Konzept welches in der Theorie die Anforderungen eines <strong className="text-zinc-200">jeden</strong> Unternehmens erfüllen kann. <br/>
            <strong className="text-zinc-200"><br/>
              Nach 2 Jahren </strong>Entwicklungszeit und vielen Tests sowie Kundendemos war es soweit.<br/>
              Die ersten Kunden konnten von unseren <strong className="text-zinc-200">Managed Services </strong>profitieren.
            
          </>
        }
        imgSrc="/img/team.jpg"
      />
    </>
  );
}