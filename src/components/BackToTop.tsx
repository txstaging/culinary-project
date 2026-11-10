"use client";

import { useEffect, useState } from "react";

export default function BackToTop({ hideInFrame = false }: { hideInFrame?: boolean }) {
  const [visible, setVisible] = useState(!hideInFrame);
  useEffect(() => { if (hideInFrame) setVisible(window.parent === window); }, [hideInFrame]);
  if (!visible) return null;

  function scrollToTop() {
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth";
    const detailScreen = document.getElementById("tx-detail-screen");
    const frame = document.getElementById("tx-detail-iframe") as HTMLIFrameElement | null;
    if (detailScreen?.classList.contains("open") && frame?.contentWindow) {
      frame.contentWindow.scrollTo({ top: 0, behavior });
    } else {
      window.scrollTo({ top: 0, behavior });
    }
  }

  return (
    <button className="back-to-top" type="button" aria-label="العودة إلى أعلى الصفحة" onClick={scrollToTop}>
      <span>إلى الأعلى</span>
      <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path d="M12 19V5m-7 7 7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
