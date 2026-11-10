import type { Metadata } from "next";
import CriteriaContent from "@/components/CriteriaContent";
import BackToTop from "@/components/BackToTop";
import "./criteria.css";

export const metadata: Metadata = { title: "معايير منظمة IGCAT — المعايير الستة" };

export default function CriteriaPage() {
  return <>
    <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
    <CriteriaContent /><BackToTop hideInFrame />
  </>;
}
