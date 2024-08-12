import PricingSection from "@/components/native/Sections/PricingSection";
import ManagedPricingSection from "@/components/native/Sections/ManagedPricingSection";
import FAQSection from "@/components/native/Sections/FAQSection";
import ManagedNetworkPricingSection from "@/components/native/Sections/ManagedNetworkPricingSection";
import HeadlinesSection from "@/components/native/Sections/HeadlineSection";
import CalendarCard from "@/components/native/Cards/CalendarCard";

export const metadata = {
  title: "STX | Services",
  description: "Cloud, Managed Services und IT-Security",
};

export default function Pricing() {
  return (
    <>
      <div className="pt-20 before:content-[''] before:absolute before:inset-0 before:bg-top-gradient before:z-[-10]">
        <PricingSection
          title={
            <>
              <span className="text-[var(--forge-theme-pink)]">Einzelaufträge</span>
            </>
          }
        />
      </div>
      <div className="pt-20 before:content-[''] before:absolute before:inset-0 before:bg-top-gradient before:z-[-10]">
        <ManagedPricingSection
          title={
            <>
              Managed Services: <span className="text-[var(--forge-theme-pink)]">PC & Server</span>
            </>
          }
        />
      </div>
      <div className="pt-20 before:content-[''] before:absolute before:inset-0 before:bg-top-gradient before:z-[-10]">
        <ManagedNetworkPricingSection
          title={
            <>
              Managed Services: <span className="text-[var(--forge-theme-pink)]">Network</span>
            </>
          }
        />
      </div>
      <HeadlinesSection title="Interesse?" description="" />
      <HeadlinesSection title="oder" description="" />
      <HeadlinesSection title="noch offene Fragen?" description="Buchen Sie gerne ein unverbindliches Beratungsgespräch!" />
      <CalendarCard></CalendarCard>
    </>
  );
}
