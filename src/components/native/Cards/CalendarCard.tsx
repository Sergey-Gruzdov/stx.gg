"use client";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CalendarCard = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "erstgesprach" });
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <Cal
      namespace="erstgesprach"
      calLink="stx.gg/erstgesprach"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view", theme: "dark" }}
    />
  );
};
export default CalendarCard;
