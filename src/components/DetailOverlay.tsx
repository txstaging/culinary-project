"use client";

import { useEffect, useRef, useState } from "react";
import { BrandLogo } from "./SiteHeader";
import { navigation } from "@/data/site";

export default function DetailOverlay() {
  const [criterion, setCriterion] = useState<string | null>(null);
  const [hasOpened, setHasOpened] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const frame = useRef<HTMLIFrameElement>(null);

  function returnHome() { window.location.hash = "igcat-standards-heading"; }

  useEffect(() => {
    function sync() {
      const match = /^#(criterion-0[1-6])$/.exec(window.location.hash);
      setCriterion(match?.[1] ?? null);
      if (match) setHasOpened(true);
      setMenuOpen(false);
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape" && /^#criterion-0[1-6]$/.test(window.location.hash)) returnHome();
    }
    sync();
    window.addEventListener("hashchange", sync);
    document.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("hashchange", sync);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("tx-in-details", !!criterion);
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth";
    if (criterion) frame.current?.contentDocument?.getElementById(criterion)?.scrollIntoView({ behavior, block: "start" });
    return () => document.body.classList.remove("tx-in-details");
  }, [criterion]);

  function frameLoaded() {
    if (criterion) frame.current?.contentDocument?.getElementById(criterion)?.scrollIntoView({ behavior: "instant", block: "start" });
    frame.current?.contentDocument?.addEventListener("keydown", (event) => { if (event.key === "Escape") returnHome(); });
  }

  return (
    <div id="tx-detail-screen" className={criterion ? "open" : ""} aria-label="صفحة تفاصيل معايير IGCAT" aria-hidden={!criterion}>
      <div id="tx-detail-header">
        <header className="tx-details-nav">
          <div className="tx-details-brands"><BrandLogo side="right" /></div>
          <nav id="detailsNav" className={`nav tx-details-links${menuOpen ? " tx-open" : ""}`} aria-label="الانتقال بين أقسام الموقع">
            {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
          </nav>
          <div className="tx-details-controls">
            <button className="tx-return" type="button" onClick={returnHome}>العودة إلى الرئيسية ←</button>
            <button className="tx-details-menu" type="button" aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"} aria-expanded={menuOpen} aria-controls="detailsNav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "×" : "☰"}</button>
            <BrandLogo side="left" />
          </div>
        </header>
      </div>
      {hasOpened && <iframe ref={frame} id="tx-detail-iframe" title="معايير IGCAT الستة بالتفصيل" src="/criteria" onLoad={frameLoaded} />}
    </div>
  );
}
