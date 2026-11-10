"use client";

import { useEffect } from "react";

export default function RevealAnimations() {
  useEffect(() => {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const targets = document.querySelectorAll(".info-top, .objectives-title-wrap, .objective-card, .tx-vision-inner");
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
      }
    }, { threshold: 0.08, rootMargin: "0px 0px -25px 0px" });
    targets.forEach((target) => { target.classList.add("tx-reveal"); observer.observe(target); });
    document.body.classList.add("motion-ready");
    return () => {
      observer.disconnect();
      document.body.classList.remove("motion-ready");
      targets.forEach((target) => target.classList.remove("tx-reveal", "is-visible"));
    };
  }, []);
  return null;
}
