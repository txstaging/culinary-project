"use client";

import { useState } from "react";
import { logos, navigation } from "@/data/site";

export function BrandLogo({ side }: { side: "right" | "left" }) {
  const logo = logos[side];
  return (
    <a className={`brand-${side}`} href={logo.href} title={logo.title}>
      <img src={logo.src} alt={logo.alt} />
    </a>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header" onKeyDown={(event) => { if (event.key === "Escape") setOpen(false); }}>
      <BrandLogo side="right" />
      <nav className={`nav${open ? " is-open" : ""}`} id="mainNav" aria-label="الانتقال بين أقسام الموقع">
        {navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
      </nav>
      <a className="header-cta" href="#join-journey">كن جزءًا من الرحلة</a>
      <BrandLogo side="left" />
      <button
        type="button"
        className="menu-toggle"
        id="menuToggle"
        aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
        aria-expanded={open}
        aria-controls="mainNav"
        onClick={() => setOpen(!open)}
      >{open ? "×" : "☰"}</button>
    </header>
  );
}
