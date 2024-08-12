import AboutUsSection from "@/components/native/Sections/AboutUsSection";
import ContactUsSection from "@/components/native/Sections/ContactUsSection";
import FAQSection from "@/components/native/Sections/FAQSection";
import OurProcessSectionpage from "@/components/native/Sections/OurProcessSectionpage";
import OurTeamSection from "@/components/native/Sections/OurTeamSection";
import OurWorkSection from "@/components/native/Sections/OurWorkSection";
import TeamSection from "@/components/native/Sections/TeamSection";
import TestimonialSection from "@/components/native/Sections/TestimonialSection";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Contact2 } from "lucide-react";
import Link from "next/link";
import HeadlinesSection from "@/components/native/Sections/HeadlineSection";
import CalendarCard from "@/components/native/Cards/CalendarCard";

export const metadata = {
  title: "STX | Konzept",
  description: "Cloud, Managed Services und IT-Security",
};

export default function Concept() {
  return (
    <>
      <OurProcessSectionpage title="Das Konzept"></OurProcessSectionpage>
      <FAQSection title="Step by Step"></FAQSection>
      <HeadlinesSection title="Interesse?" description="" />
      <HeadlinesSection title="oder" description="" />
      <HeadlinesSection title="noch offene Fragen?" description="Buchen Sie gerne ein unverbindliches Beratungsgespräch!" />
      <CalendarCard></CalendarCard>
    </>
  );
}
