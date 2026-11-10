"use client";

import { useEffect, useRef } from "react";

export type GalleryPhoto = { src: string; alt: string; title: string; trigger: HTMLElement };

export default function PhotoLightbox({ photo, onClose }: { photo: GalleryPhoto | null; onClose: () => void }) {
  const closeButton = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);
  useEffect(() => { onCloseRef.current = onClose; }, [onClose]);

  useEffect(() => {
    if (!photo) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onCloseRef.current();
      if (event.key === "Tab") { event.preventDefault(); closeButton.current?.focus(); }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      photo.trigger.focus({ preventScroll: true });
    };
  }, [photo]);

  return (
    <div
      className={`ig-v-modal${photo ? " active" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label={photo?.title || "عرض الصورة"}
      aria-hidden={!photo}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
    >
      <button className="ig-v-close" type="button" aria-label="إغلاق" ref={closeButton} onClick={onClose}>×</button>
      <img src={photo?.src} alt={photo?.alt ?? ""} />
      <div className="ig-v-caption">{photo?.title}</div>
    </div>
  );
}
