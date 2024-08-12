import Accordion from "../Accordion";
import { FC } from "react";

interface Props {
  title: React.ReactNode | string;
}
const FAQSection: FC<Props> = ({ title = "" }) => {
  return (
    <section className="py-12"> 
      <div className="container">
        <h3 className="text-3xl lg:text-5xl xl:text-7xl mb-7">{title}</h3>

        <div className="mt-12 grid gap-4 mx-auto bg-[#110e1a]/60 p-3 rounded-xl">
          <div className="border-zinc-900 border-b">
            <Accordion
              title="1. Analyse"
              description="Die Analyse Ihrer Systeme und Netzwerkumgebung erfolgt je nach Umfang und Anforderungen in einem oder mehreren Terminen. 
                           Hierbei werden die Anforderungen und Wünsche des Kunden aufgenommen und in einem Pflichtenheft festgehalten.
                           Ebenfalls wird der aktuelle Hardwarebestand und die Softwarelizenzen erfasst und protokolliert."
                           
            />
          </div>
          <div className="border-zinc-900 border-b">
            <Accordion
              title="2. Planung"
              description="In der Planungsphase wird das Pflichtenheft in ein Konzept umgesetzt. Hier werden verschiedene Bausteine wie z.B. bestimmte Hardware und Software Lösungen ausgewählt und in Ihrem Szenario getestet.
                           Sobald das Konzept steht, wird ein Angebot erstellt. Sofern es keine Anpassungswünsche gibt, wird das Konzept in die Umsetzungsphase überführt." 
            />{" "}
          </div>
          <div className="border-zinc-900 border-b">
            <Accordion
              title="3. Umsetzung"
              description="In der Umsetzungsphase wird das Konzept in die Realität umgesetzt. Hierbei wird die Hardware, Software und ggf. Netzwerkkomponenten installiert sowie eventuell benötigte Lizenzen aktiviert.
                           Die Umsetzung wird mit Ihnen abgestimmt und in einem oder mehreren Terminen durchgeführt."
            />{" "}
          </div>
          <div className="border-zinc-900 border-b">
            <Accordion
              title="4. Abnahme & Revision"
              description="In dieser Phase wird das Projekt abgenommen und auf Herz und Nieren geprüft. Hierbei wird die Funktionalität der Systeme und Netzwerkkomponenten getestet und ggf. Anpassungen vorgenommen.
                           Nach erfolgreicher Abnahme wird das Projekt in den Betrieb überführt und die Dokumentation übergeben."
            />{" "}
          </div>
          <div className="border-zinc-900 border-b">
            <Accordion
              title="5. Profitieren"
              description="Nach erfolgreicher Umsetzung und Abnahme profitieren Sie von einem stabilen und sicheren IT-System sowie einer zuverlässigen Serviceleistung durch uns.
                           Wir stehen Ihnen auch nach der Umsetzung mit Rat und Tat zur Seite und unterstützen Sie bei Fragen und Problemen.
                           Sofern Sie einen Wartungsvertrag abgeschlossen haben, werden Ihre Systeme und Netzwerkkomponenten regelmäßig gewartet und gepflegt."
                           
            />{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
