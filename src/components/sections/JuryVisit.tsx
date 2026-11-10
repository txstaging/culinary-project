"use client";
import { useState, type MouseEvent, type KeyboardEvent } from "react";
import PhotoLightbox, { type GalleryPhoto } from "../PhotoLightbox";

export default function JuryVisit() {
  const [photo, setPhoto] = useState<GalleryPhoto | null>(null);
  function selectPhoto(target: EventTarget | null) {
    if (!(target instanceof Element)) return;
    const figure = target.closest<HTMLElement>(".ig-v-photo");
    const image = figure?.querySelector("img");
    if (figure && image)
      setPhoto({
        src: image.src,
        alt: image.alt,
        title: figure.dataset.title ?? "",
        trigger: figure,
      });
  }
  function openPhoto(event: MouseEvent<HTMLElement>) {
    selectPhoto(event.target);
  }
  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (
      (event.key === "Enter" || event.key === " ") &&
      event.target instanceof Element &&
      event.target.closest(".ig-v-photo")
    ) {
      event.preventDefault();
      selectPhoto(event.target);
    }
  }
  return (
    <section
      aria-labelledby={"ig-visit-heading"}
      className={"ig-visit"}
      id={"jury-visit"}
      onClick={openPhoto}
      onKeyDown={handleKeyDown}
    >
      <div className={"ig-v-wrap"}>
        <div className={"ig-v-overline"}>{"من ملف ترشيح جدة والطائف"}</div>
        <h2 className={"ig-v-title"} id={"ig-visit-heading"}>
          {"زيارة لجنة التحكيم الدولية "}
          <br />
          {"لتقييم جاهزية "}
          <em>{"جدة والطائف"}</em>
          {" لاستحقاق اللقب"}
        </h2>
        <p className={"ig-v-lead"}>
          {
            "رحلة ميدانية استعرضت الثقافة الغذائية والتراث المحلي والابتكار والمبادرات المستدامة، من خلال لقاءات وتجارب متنوعة في المدينتين."
          }
        </p>
        <div className={"ig-v-main"}>
          <div className={"ig-v-content"}>
            <p className={"ig-v-intro"}>
              {
                "نُظّمت زيارة لجنة التحكيم الدولية التابعة للمعهد الدولي لفنون الطهي والثقافة والفنون والسياحة "
              }
              <b>{"IGCAT"}</b>
              {
                " ضمن عملية تقييم جاهزية جدة والطائف للترشيح. وشملت الجولة زيارات ميدانية ولقاءات مع الجهات والمجتمعات المحلية للتعرف على المقومات الثقافية والطهوية للمنطقة."
              }
            </p>
            <div className={"ig-v-kicker"}>{"أبرز محطات الزيارة"}</div>
            <div className={"ig-v-points"}>
              <article className={"ig-v-point"}>
                <span className={"num"}>{"01"}</span>
                <h3>{"تجارب التراث والضيافة"}</h3>
                <p>{"التعرّف على الفنون المحلية والموروث الغذائي والعروض الثقافية."}</p>
              </article>
              <article className={"ig-v-point"}>
                <span className={"num"}>{"02"}</span>
                <h3>{"المنتجات والأسواق المحلية"}</h3>
                <p>{"زيارة الأسواق والاطلاع على المنتجات الغذائية وأساليب الإنتاج المحلي."}</p>
              </article>
              <article className={"ig-v-point"}>
                <span className={"num"}>{"03"}</span>
                <h3>{"التعليم والابتكار"}</h3>
                <p>{"أنشطة تعليمية ومبادرات مرتبطة بالغذاء والصحة والاستدامة."}</p>
              </article>
              <article className={"ig-v-point"}>
                <span className={"num"}>{"04"}</span>
                <h3>{"الاستدامة والمجتمع"}</h3>
                <p>
                  {"استعراض المشاريع التي تدعم المزارعين والممارسات المستدامة والمجتمع المحلي."}
                </p>
              </article>
            </div>
            <p className={"ig-v-bottom"}>
              {
                "واختُتمت الزيارة بعرض منجزات ملف الترشيح وبرامج الإعداد والتطوير، بما يعكس تكامل الثقافة والطهي والسياحة في جدة والطائف."
              }
            </p>
            <div className={"ig-v-action"}>
              <a
                aria-label={"شاهد زيارة لجنة التحكيم على إنستجرام"}
                className={"ig-v-watch"}
                href={
                  "https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MTgyMTU5NjkyMzY1MDQ3?story_media_id=3822942319801039257_6982418029&cplk=MTlla2dyZ3M4MWQ5bA=="
                }
                rel={"noopener noreferrer"}
                target={"_blank"}
              >
                <span>{"شاهد الزيارة"}</span>
                <span aria-hidden={"true"}>{"↗"}</span>
              </a>
              <span className={"ig-v-action-note"}>{"مشاهدة لقطات الزيارة على إنستجرام"}</span>
            </div>
          </div>
          <div className={"ig-v-gallery"}>
            <figure
              aria-label={"عرض صورة الفنون التراثية"}
              className={"ig-v-photo"}
              data-title={"التراث والفنون المحلية"}
              role={"button"}
              tabIndex={0}
            >
              <img
                alt={"مشاركون في فعالية للفنون التراثية"}
                loading={"lazy"}
                src={"/media/jury-visit-5d84c7b7ec86.jpg"}
              />
              <figcaption className={"overlay"}>{"التراث والفنون المحلية"}</figcaption>
            </figure>
            <figure
              aria-label={"عرض صورة ورشة الطهي"}
              className={"ig-v-photo"}
              data-title={"تجارب الطهي والتبادل الثقافي"}
              role={"button"}
              tabIndex={0}
            >
              <img
                alt={"مشاركون في ورشة طهي"}
                loading={"lazy"}
                src={"/media/jury-visit-131c31bfc619.jpg"}
              />
              <figcaption className={"overlay"}>{"تجارب الطهي والتبادل الثقافي"}</figcaption>
            </figure>
            <figure
              aria-label={"عرض صورة السوق"}
              className={"ig-v-photo"}
              data-title={"الأسواق والمنتجات المحلية"}
              role={"button"}
              tabIndex={0}
            >
              <img
                alt={"جولة في سوق الأسماك المحلي"}
                loading={"lazy"}
                src={"/media/jury-visit-a546849583f5.jpg"}
              />
              <figcaption className={"overlay"}>{"الأسواق والمنتجات المحلية"}</figcaption>
            </figure>
            <figure
              aria-label={"عرض صورة النشاط التعليمي"}
              className={"ig-v-photo"}
              data-title={"التعليم والتوعية الغذائية"}
              role={"button"}
              tabIndex={0}
            >
              <img
                alt={"عرض تعليمي عن الغذاء"}
                loading={"lazy"}
                src={"/media/jury-visit-954298df6b26.jpg"}
              />
              <figcaption className={"overlay"}>{"التعليم والتوعية الغذائية"}</figcaption>
            </figure>
          </div>
        </div>
        <div className={"ig-v-quote"}>
          <strong>{"تجربة تجمع بين التراث والمعرفة والمجتمع"}</strong>
          <span>
            {
              "من الزيارات الميدانية إلى الأنشطة التعليمية، أظهرت الجولة تنوع المقومات التي تدعم ترشيح جدة والطائف."
            }
          </span>
        </div>
      </div>
      <PhotoLightbox photo={photo} onClose={() => setPhoto(null)} />
    </section>
  );
}
