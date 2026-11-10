export default function CriteriaContent() {
  return (
    <>
      <a className={"back-home"} href="/#igcat-standards-heading" target="_parent">
        {"↩ العودة إلى الصفحة الرئيسية"}
      </a>
      <header className={"intro"}>
        <div className={"kicker"}>{"معايير منظمة IGCAT"}</div>
        <h1>{"المعايير الستة"}</h1>
        <p>
          {"ستة معايير متكاملة تجعل من فنون الطهي رافدًا للثقافة والمجتمع والاقتصاد والاستدامة."}
        </p>
      </header>
      <nav className={"nav"} aria-label={"التنقل بين المعايير"}>
        <a href={"#criterion-01"}>{"01 — إطعام الكوكب"}</a>
        <a href={"#criterion-02"}>{"02 — الابتكار والإبداع وفرص العمل"}</a>
        <a href={"#criterion-03"}>{"03 — التعليم للمستقبل"}</a>
        <a href={"#criterion-04"}>{"04 — السياحة المتوازنة والمستدامة"}</a>
        <a href={"#criterion-05"}>{"05 — ربط الحضر بالريف"}</a>
        <a href={"#criterion-06"}>{"06 — الرفاهية ونمط الحياة الصحي"}</a>
      </nav>
      <main>
        <section className={"standard"} id={"criterion-01"}>
          <div className={"heading"}>
            <div className={"headingcopy"}>
              <div className={"eyebrow"}>{"معايير منظمة IGCAT"}</div>
              <h2>{"إطعام الكوكب"}</h2>
              <p>{"خمسة محاور مترابطة لتعزيز نظام غذائي مستدام، وصون الموارد والمعرفة المحلية."}</p>
            </div>
            <div className={"numbergroup"}>
              <div className={"big-number"}>{"01"}</div>
              <div className={"number-label"}>
                {"المعيار الأول"}
                <br />
                {"من ستة معايير"}
              </div>
            </div>
          </div>
          <div className={"about"}>
            <strong>{"عن المعايير"}</strong>
            <span>
              {
                "تم تقسيم كل معيار إلى مجموعة من المتطلبات التفصيلية، التي ينبغي استيفاؤها بالكامل لضمان تحقيق المعيار وفقًا لرؤية ومعايير منظمة IGCAT."
              }
            </span>
          </div>
          <div className={"cards"}>
            <article className={"card"}>
              <div className={"card-top"}>
                <span className={"ordinal"}>{"05 / 01"}</span>
              </div>
              <div className={"icon-wrap"}>
                <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                  <rect x={"5"} y={"3"} width={"14"} height={"18"} rx={"2"}></rect>
                  <path d={"M9 8h6M9 12h6M9 16h4"}></path>
                </svg>
              </div>
              <h3>{"الأمن الغذائي"}</h3>
              <p>{"استراتيجيات لضمان توفر الغذاء الصحي للجميع."}</p>
            </article>
            <article className={"card"}>
              <div className={"card-top"}>
                <span className={"ordinal"}>{"05 / 02"}</span>
              </div>
              <div className={"icon-wrap"}>
                <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                  <rect x={"4"} y={"8"} width={"16"} height={"13"} rx={"2"}></rect>
                  <path d={"M8 8V5h8v3M4 13h16"}></path>
                </svg>
              </div>
              <h3>{"الزراعة المستدامة"}</h3>
              <p>{"تقليل المبيدات، الحفاظ على التربة، وتنوع المحاصيل."}</p>
            </article>
            <article className={"card"}>
              <div className={"card-top"}>
                <span className={"ordinal"}>{"05 / 03"}</span>
              </div>
              <div className={"icon-wrap"}>
                <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                  <path d={"M12 22s-8-4-8-11V5l8-3 8 3v6c0 7-8 11-8 11Z"}></path>
                  <path d={"m9 11 2 2 4-4"}></path>
                </svg>
              </div>
              <h3>{"التنوع الحيوي"}</h3>
              <p>{"حماية التنوع الحيوي والمحاصيل المحلية."}</p>
            </article>
            <article className={"card"}>
              <div className={"card-top"}>
                <span className={"ordinal"}>{"05 / 04"}</span>
              </div>
              <div className={"icon-wrap"}>
                <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                  <rect x={"4"} y={"5"} width={"16"} height={"14"} rx={"2"}></rect>
                  <path d={"M8 9h8M8 13h8"}></path>
                </svg>
              </div>
              <h3>{"الهدر الغذائي"}</h3>
              <p>{"سياسات لإعادة التوزيع والتقليل من الفاقد."}</p>
            </article>
            <article className={"card"}>
              <div className={"card-top"}>
                <span className={"ordinal"}>{"05 / 05"}</span>
              </div>
              <div className={"icon-wrap"}>
                <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                  <rect x={"3"} y={"5"} width={"18"} height={"16"} rx={"2"}></rect>
                  <path d={"M7 2v6M17 2v6M3 10h18"}></path>
                </svg>
              </div>
              <h3>{"المعرفة التقليدية"}</h3>
              <p>{"حماية طرق الزراعة التقليدية والبذور المحلية."}</p>
            </article>
          </div>
          <div className={"bottom"}>
            <span>{"خمسة محاور أساسية"}</span>
            <span className={"rule"}></span>
            <span className={"bar"}></span>
            <span>
              {"IGCAT "}
              <em>{"01"}</em>
              {" / 06"}
            </span>
          </div>
        </section>
        <section className={"standard"} id={"criterion-02"}>
          <div className={"heading"}>
            <div className={"headingcopy"}>
              <div className={"eyebrow"}>{"معايير منظمة IGCAT"}</div>
              <h2>{"الابتكار والإبداع وفرص العمل"}</h2>
              <p>
                {
                  "ستة محاور مترابطة لدعم الابتكار، وتطوير المشاريع والمنتجات المحلية، والحفاظ على التراث الغذائي."
                }
              </p>
            </div>
            <div className={"numbergroup"}>
              <div className={"big-number"}>{"02"}</div>
              <div className={"number-label"}>
                {"المعيار الثاني"}
                <br />
                {"من ستة معايير"}
              </div>
            </div>
          </div>
          <div className={"about"}>
            <strong>{"عن المعايير"}</strong>
            <span>
              {
                "تم تقسيم كل معيار إلى مجموعة من المتطلبات التفصيلية، التي ينبغي استيفاؤها بالكامل لضمان تحقيق المعيار وفقًا لرؤية ومعايير منظمة IGCAT."
              }
            </span>
          </div>
          <div className={"cards"}>
            <article className={"card"}>
              <div className={"card-top"}>
                <span className={"ordinal"}>{"06 / 01"}</span>
              </div>
              <div className={"icon-wrap"}>
                <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                  <rect x={"5"} y={"3"} width={"14"} height={"18"} rx={"2"}></rect>
                  <path d={"M9 8h6M9 12h6M9 16h4"}></path>
                </svg>
              </div>
              <h3>{"المنتجات المبتكرة"}</h3>
              <p>{"تطوير منتجات جديدة ترتبط بالتراث."}</p>
            </article>
            <article className={"card"}>
              <div className={"card-top"}>
                <span className={"ordinal"}>{"06 / 02"}</span>
              </div>
              <div className={"icon-wrap"}>
                <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                  <rect x={"4"} y={"8"} width={"16"} height={"13"} rx={"2"}></rect>
                  <path d={"M8 8V5h8v3M4 13h16"}></path>
                </svg>
              </div>
              <h3>{"ريادة الأعمال"}</h3>
              <p>{"دعم المشاريع الصغيرة والمتوسطة في قطاع الأغذية."}</p>
            </article>
            <article className={"card"}>
              <div className={"card-top"}>
                <span className={"ordinal"}>{"06 / 03"}</span>
              </div>
              <div className={"icon-wrap"}>
                <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                  <path d={"M12 22s-8-4-8-11V5l8-3 8 3v6c0 7-8 11-8 11Z"}></path>
                  <path d={"m9 11 2 2 4-4"}></path>
                </svg>
              </div>
              <h3>{"حماية التراث"}</h3>
              <p>{"تسجيل الأطعمة ضمن مؤشرات جغرافية محمية."}</p>
            </article>
            <article className={"card"}>
              <div className={"card-top"}>
                <span className={"ordinal"}>{"06 / 04"}</span>
              </div>
              <div className={"icon-wrap"}>
                <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                  <rect x={"4"} y={"5"} width={"16"} height={"14"} rx={"2"}></rect>
                  <path d={"M8 9h8M8 13h8"}></path>
                </svg>
              </div>
              <h3>{"التحول الرقمي"}</h3>
              <p>{"التجارة الإلكترونية والتسويق الرقمي للأطعمة المحلية."}</p>
            </article>
            <article className={"card"}>
              <div className={"card-top"}>
                <span className={"ordinal"}>{"06 / 05"}</span>
              </div>
              <div className={"icon-wrap"}>
                <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                  <rect x={"3"} y={"5"} width={"18"} height={"16"} rx={"2"}></rect>
                  <path d={"M7 2v6M17 2v6M3 10h18"}></path>
                </svg>
              </div>
              <h3>{"الفعاليات والمهرجانات"}</h3>
              <p>{"منصات للترويج والابتكار الثقافي والغذائي."}</p>
            </article>
            <article className={"card"}>
              <div className={"card-top"}>
                <span className={"ordinal"}>{"06 / 06"}</span>
              </div>
              <div className={"icon-wrap"}>
                <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                  <path d={"M4 19V5h16v14ZM8 9h8M8 13h8"}></path>
                </svg>
              </div>
              <h3>{"المعرفة التقليدية"}</h3>
              <p>{"حماية طرق الزراعة القديمة والبذور المحلية."}</p>
            </article>
          </div>
          <div className={"bottom"}>
            <span>{"ستة محاور أساسية"}</span>
            <span className={"rule"}></span>
            <span className={"bar"}></span>
            <span>
              {"IGCAT "}
              <em>{"02"}</em>
              {" / 06"}
            </span>
          </div>
        </section>
        <section className={"standard"} id={"criterion-03"}>
          <div className={"heading"}>
            <div className={"headingcopy"}>
              <div className={"eyebrow"}>{"معايير منظمة IGCAT"}</div>
              <h2>{"التعليم للمستقبل"}</h2>
              <p>{"ستة محاور تربط التعليم بالممارسات الغذائية الصحية والمعرفة المجتمعية."}</p>
            </div>
            <div className={"numbergroup"}>
              <div className={"big-number"}>{"03"}</div>
              <div className={"number-label"}>
                {"المعيار الثالث"}
                <br />
                {"من ستة معايير"}
              </div>
            </div>
          </div>
          <div className={"about"}>
            <strong>{"عن المعايير"}</strong>
            <span>
              {
                "تم تقسيم كل معيار إلى مجموعة من المتطلبات التفصيلية، التي ينبغي استيفاؤها بالكامل لضمان تحقيق المعيار وفقًا لرؤية ومعايير منظمة IGCAT."
              }
            </span>
          </div>
          <div className={"cards"}>
            <article className={"card"}>
              <div className={"card-top"}>
                <span className={"ordinal"}>{"06 / 01"}</span>
              </div>
              <div className={"icon-wrap"}>
                <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                  <rect x={"5"} y={"3"} width={"14"} height={"18"} rx={"2"}></rect>
                  <path d={"M9 8h6M9 12h6M9 16h4"}></path>
                </svg>
              </div>
              <h3>{"التجارب العملية"}</h3>
              <p>{"حدائق مدرسية، طبخ، وأنشطة زراعية."}</p>
            </article>
            <article className={"card"}>
              <div className={"card-top"}>
                <span className={"ordinal"}>{"06 / 02"}</span>
              </div>
              <div className={"icon-wrap"}>
                <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                  <rect x={"4"} y={"8"} width={"16"} height={"13"} rx={"2"}></rect>
                  <path d={"M8 8V5h8v3M4 13h16"}></path>
                </svg>
              </div>
              <h3>{"التعليم العالي"}</h3>
              <p>{"شراكات بين الجامعات والجهات الخاصة."}</p>
            </article>
            <article className={"card"}>
              <div className={"card-top"}>
                <span className={"ordinal"}>{"06 / 03"}</span>
              </div>
              <div className={"icon-wrap"}>
                <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                  <path d={"M12 22s-8-4-8-11V5l8-3 8 3v6c0 7-8 11-8 11Z"}></path>
                  <path d={"m9 11 2 2 4-4"}></path>
                </svg>
              </div>
              <h3>{"التعلّم المستمر"}</h3>
              <p>{"ورش مجتمعية في غذاء مستدام."}</p>
            </article>
            <article className={"card"}>
              <div className={"card-top"}>
                <span className={"ordinal"}>{"06 / 04"}</span>
              </div>
              <div className={"icon-wrap"}>
                <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                  <rect x={"4"} y={"5"} width={"16"} height={"14"} rx={"2"}></rect>
                  <path d={"M8 9h8M8 13h8"}></path>
                </svg>
              </div>
              <h3>{"التوعية المجتمعية"}</h3>
              <p>{"الحد من الهدر الغذائي وإعادة التدوير."}</p>
            </article>
            <article className={"card"}>
              <div className={"card-top"}>
                <span className={"ordinal"}>{"06 / 05"}</span>
              </div>
              <div className={"icon-wrap"}>
                <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                  <rect x={"3"} y={"5"} width={"18"} height={"16"} rx={"2"}></rect>
                  <path d={"M7 2v6M17 2v6M3 10h18"}></path>
                </svg>
              </div>
              <h3>{"التغذية المدرسية"}</h3>
              <p>{"توفير وجبات صحية وتقليل السكر والملح."}</p>
            </article>
            <article className={"card"}>
              <div className={"card-top"}>
                <span className={"ordinal"}>{"06 / 06"}</span>
              </div>
              <div className={"icon-wrap"}>
                <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                  <path d={"M4 19V5h16v14ZM8 9h8M8 13h8"}></path>
                </svg>
              </div>
              <h3>{"المناهج المدرسية"}</h3>
              <p>{"دمج الغذاء والصحة في التعليم."}</p>
            </article>
          </div>
          <div className={"bottom"}>
            <span>{"ستة محاور أساسية"}</span>
            <span className={"rule"}></span>
            <span className={"bar"}></span>
            <span>
              {"IGCAT "}
              <em>{"03"}</em>
              {" / 06"}
            </span>
          </div>
        </section>
        <section className={"standard"} id={"criterion-04"}>
          <div className={"heading"}>
            <div className={"headingcopy"}>
              <div className={"eyebrow"}>{"معايير منظمة IGCAT"}</div>
              <h2>{"السياحة المتوازنة والمستدامة"}</h2>
              <p>{"ستة محاور تعزز السياحة الأصيلة وتحافظ على هوية المجتمعات والموارد."}</p>
            </div>
            <div className={"numbergroup"}>
              <div className={"big-number"}>{"04"}</div>
              <div className={"number-label"}>
                {"المعيار الرابع"}
                <br />
                {"من ستة معايير"}
              </div>
            </div>
          </div>
          <div className={"about"}>
            <strong>{"عن المعايير"}</strong>
            <span>
              {
                "تم تقسيم كل معيار إلى مجموعة من المتطلبات التفصيلية، التي ينبغي استيفاؤها بالكامل لضمان تحقيق المعيار وفقًا لرؤية ومعايير منظمة IGCAT."
              }
            </span>
          </div>
          <div className={"cards"}>
            <article className={"card"}>
              <div className={"card-top"}>
                <span className={"ordinal"}>{"06 / 01"}</span>
              </div>
              <div className={"icon-wrap"}>
                <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                  <rect x={"5"} y={"3"} width={"14"} height={"18"} rx={"2"}></rect>
                  <path d={"M9 8h6M9 12h6M9 16h4"}></path>
                </svg>
              </div>
              <h3>{"تجربة السائح"}</h3>
              <p>{"التركيز على الجودة بدل استهلاك الكمية."}</p>
            </article>
            <article className={"card"}>
              <div className={"card-top"}>
                <span className={"ordinal"}>{"06 / 02"}</span>
              </div>
              <div className={"icon-wrap"}>
                <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                  <rect x={"4"} y={"8"} width={"16"} height={"13"} rx={"2"}></rect>
                  <path d={"M8 8V5h8v3M4 13h16"}></path>
                </svg>
              </div>
              <h3>{"دعم المحلية"}</h3>
              <p>{"مطاعم وفنادق تستخدم منتجات محلية."}</p>
            </article>
            <article className={"card"}>
              <div className={"card-top"}>
                <span className={"ordinal"}>{"06 / 03"}</span>
              </div>
              <div className={"icon-wrap"}>
                <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                  <path d={"M12 22s-8-4-8-11V5l8-3 8 3v6c0 7-8 11-8 11Z"}></path>
                  <path d={"m9 11 2 2 4-4"}></path>
                </svg>
              </div>
              <h3>{"الضيافة"}</h3>
              <p>{"تعزيز تجربة الزائر عبر الضيافة المرتبطة بالمطبخ المحلي."}</p>
            </article>
            <article className={"card"}>
              <div className={"card-top"}>
                <span className={"ordinal"}>{"06 / 04"}</span>
              </div>
              <div className={"icon-wrap"}>
                <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                  <rect x={"4"} y={"5"} width={"16"} height={"14"} rx={"2"}></rect>
                  <path d={"M8 9h8M8 13h8"}></path>
                </svg>
              </div>
              <h3>{"الفعاليات الغذائية"}</h3>
              <p>{"مهرجانات وأسواق محلية للأطعمة."}</p>
            </article>
            <article className={"card"}>
              <div className={"card-top"}>
                <span className={"ordinal"}>{"06 / 05"}</span>
              </div>
              <div className={"icon-wrap"}>
                <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                  <rect x={"3"} y={"5"} width={"18"} height={"16"} rx={"2"}></rect>
                  <path d={"M7 2v6M17 2v6M3 10h18"}></path>
                </svg>
              </div>
              <h3>{"إشراك الريف"}</h3>
              <p>{"ربط القرى بالأنشطة السياحية لزيادة الدخل."}</p>
            </article>
            <article className={"card"}>
              <div className={"card-top"}>
                <span className={"ordinal"}>{"06 / 06"}</span>
              </div>
              <div className={"icon-wrap"}>
                <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                  <path d={"M4 19V5h16v14ZM8 9h8M8 13h8"}></path>
                </svg>
              </div>
              <h3>{"التوازن البيئي"}</h3>
              <p>{"سياسات للتحكم في تدفق السياح وحماية الموارد."}</p>
            </article>
          </div>
          <div className={"bottom"}>
            <span>{"ستة محاور أساسية"}</span>
            <span className={"rule"}></span>
            <span className={"bar"}></span>
            <span>
              {"IGCAT "}
              <em>{"04"}</em>
              {" / 06"}
            </span>
          </div>
        </section>
        <section className={"standard"} id={"criterion-05"}>
          <div className={"heading"}>
            <div className={"headingcopy"}>
              <div className={"eyebrow"}>{"معايير منظمة IGCAT"}</div>
              <h2>{"ربط الحضر بالريف"}</h2>
              <p>{"ستة محاور تقرّب المدن من الريف وتربط المعرفة الزراعية بالاقتصاد المحلي."}</p>
            </div>
            <div className={"numbergroup"}>
              <div className={"big-number"}>{"05"}</div>
              <div className={"number-label"}>
                {"المعيار الخامس"}
                <br />
                {"من ستة معايير"}
              </div>
            </div>
          </div>
          <div className={"about"}>
            <strong>{"عن المعايير"}</strong>
            <span>
              {
                "تم تقسيم كل معيار إلى مجموعة من المتطلبات التفصيلية، التي ينبغي استيفاؤها بالكامل لضمان تحقيق المعيار وفقًا لرؤية ومعايير منظمة IGCAT."
              }
            </span>
          </div>
          <div className={"cards"}>
            <article className={"card"}>
              <div className={"card-top"}>
                <span className={"ordinal"}>{"06 / 01"}</span>
              </div>
              <div className={"icon-wrap"}>
                <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                  <rect x={"5"} y={"3"} width={"14"} height={"18"} rx={"2"}></rect>
                  <path d={"M9 8h6M9 12h6M9 16h4"}></path>
                </svg>
              </div>
              <h3>{"الزراعة الحضرية"}</h3>
              <p>{"إنشاء حدائق ومزارع حضرية تعليمية."}</p>
            </article>
            <article className={"card"}>
              <div className={"card-top"}>
                <span className={"ordinal"}>{"06 / 02"}</span>
              </div>
              <div className={"icon-wrap"}>
                <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                  <rect x={"4"} y={"8"} width={"16"} height={"13"} rx={"2"}></rect>
                  <path d={"M8 8V5h8v3M4 13h16"}></path>
                </svg>
              </div>
              <h3>{"المعرفة التقليدية"}</h3>
              <p>{"توثيق وحفظ العادات الغذائية الريفية."}</p>
            </article>
            <article className={"card"}>
              <div className={"card-top"}>
                <span className={"ordinal"}>{"06 / 03"}</span>
              </div>
              <div className={"icon-wrap"}>
                <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                  <path d={"M12 22s-8-4-8-11V5l8-3 8 3v6c0 7-8 11-8 11Z"}></path>
                  <path d={"m9 11 2 2 4-4"}></path>
                </svg>
              </div>
              <h3>{"الحفاظ على التنوع"}</h3>
              <p>{"بنوك بذور ومبادرات لحماية الأصناف المحلية."}</p>
            </article>
            <article className={"card"}>
              <div className={"card-top"}>
                <span className={"ordinal"}>{"06 / 04"}</span>
              </div>
              <div className={"icon-wrap"}>
                <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                  <rect x={"4"} y={"5"} width={"16"} height={"14"} rx={"2"}></rect>
                  <path d={"M8 9h8M8 13h8"}></path>
                </svg>
              </div>
              <h3>{"التكامل الاقتصادي"}</h3>
              <p>{"إشراك المزارعين في أسواق المدن."}</p>
            </article>
            <article className={"card"}>
              <div className={"card-top"}>
                <span className={"ordinal"}>{"06 / 05"}</span>
              </div>
              <div className={"icon-wrap"}>
                <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                  <rect x={"3"} y={"5"} width={"18"} height={"16"} rx={"2"}></rect>
                  <path d={"M7 2v6M17 2v6M3 10h18"}></path>
                </svg>
              </div>
              <h3>{"البنية التحتية"}</h3>
              <p>{"تسهيل الوصول للريف بشكل مستدام."}</p>
            </article>
            <article className={"card"}>
              <div className={"card-top"}>
                <span className={"ordinal"}>{"06 / 06"}</span>
              </div>
              <div className={"icon-wrap"}>
                <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                  <path d={"M4 19V5h16v14ZM8 9h8M8 13h8"}></path>
                </svg>
              </div>
              <h3>{"تقريب الفجوة"}</h3>
              <p>{"تعزيز فهم سكان المدن لمصدر غذائهم."}</p>
            </article>
          </div>
          <div className={"bottom"}>
            <span>{"ستة محاور أساسية"}</span>
            <span className={"rule"}></span>
            <span className={"bar"}></span>
            <span>
              {"IGCAT "}
              <em>{"05"}</em>
              {" / 06"}
            </span>
          </div>
        </section>
        <section className={"standard"} id={"criterion-06"}>
          <div className={"heading"}>
            <div className={"headingcopy"}>
              <div className={"eyebrow"}>{"معايير منظمة IGCAT"}</div>
              <h2>{"الرفاهية ونمط الحياة الصحي"}</h2>
              <p>
                {"ستة محاور لتعزيز الصحة والرفاهية، وترسيخ العادات المسؤولة والممارسات المستدامة."}
              </p>
            </div>
            <div className={"numbergroup"}>
              <div className={"big-number"}>{"06"}</div>
              <div className={"number-label"}>
                {"المعيار السادس"}
                <br />
                {"من ستة معايير"}
              </div>
            </div>
          </div>
          <div className={"about"}>
            <strong>{"عن المعايير"}</strong>
            <span>
              {
                "تم تقسيم كل معيار إلى مجموعة من المتطلبات التفصيلية، التي ينبغي استيفاؤها بالكامل لضمان تحقيق المعيار وفقًا لرؤية ومعايير منظمة IGCAT."
              }
            </span>
          </div>
          <div className={"cards"}>
            <article className={"card"}>
              <div className={"card-top"}>
                <span className={"ordinal"}>{"06 / 01"}</span>
              </div>
              <div className={"icon-wrap"}>
                <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                  <rect x={"5"} y={"3"} width={"14"} height={"18"} rx={"2"}></rect>
                  <path d={"M9 8h6M9 12h6M9 16h4"}></path>
                </svg>
              </div>
              <h3>{"التجارب الصحية"}</h3>
              <p>{"أنشطة مرتبطة بالطبيعة والرياضة المجتمعية."}</p>
            </article>
            <article className={"card"}>
              <div className={"card-top"}>
                <span className={"ordinal"}>{"06 / 02"}</span>
              </div>
              <div className={"icon-wrap"}>
                <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                  <rect x={"4"} y={"8"} width={"16"} height={"13"} rx={"2"}></rect>
                  <path d={"M8 8V5h8v3M4 13h16"}></path>
                </svg>
              </div>
              <h3>{"البيئة للصحة"}</h3>
              <p>{"مساحات خضراء حضرية ومسارات للمشاة."}</p>
            </article>
            <article className={"card"}>
              <div className={"card-top"}>
                <span className={"ordinal"}>{"06 / 03"}</span>
              </div>
              <div className={"icon-wrap"}>
                <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                  <path d={"M12 22s-8-4-8-11V5l8-3 8 3v6c0 7-8 11-8 11Z"}></path>
                  <path d={"m9 11 2 2 4-4"}></path>
                </svg>
              </div>
              <h3>{"الداعمة"}</h3>
              <p>{"مساحات وحدائق وممرات تعزز النشاط اليومي."}</p>
            </article>
            <article className={"card"}>
              <div className={"card-top"}>
                <span className={"ordinal"}>{"06 / 04"}</span>
              </div>
              <div className={"icon-wrap"}>
                <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                  <rect x={"4"} y={"5"} width={"16"} height={"14"} rx={"2"}></rect>
                  <path d={"M8 9h8M8 13h8"}></path>
                </svg>
              </div>
              <h3>{"الاستدامة البيئية"}</h3>
              <p>{"تقليل البلاستيك، حماية النحل، والتشجير."}</p>
            </article>
            <article className={"card"}>
              <div className={"card-top"}>
                <span className={"ordinal"}>{"06 / 05"}</span>
              </div>
              <div className={"icon-wrap"}>
                <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                  <rect x={"3"} y={"5"} width={"18"} height={"16"} rx={"2"}></rect>
                  <path d={"M7 2v6M17 2v6M3 10h18"}></path>
                </svg>
              </div>
              <h3>{"الشفافية الغذائية"}</h3>
              <p>{"معلومات واضحة عن المكونات والقيمة الغذائية."}</p>
            </article>
            <article className={"card"}>
              <div className={"card-top"}>
                <span className={"ordinal"}>{"06 / 06"}</span>
              </div>
              <div className={"icon-wrap"}>
                <svg viewBox={"0 0 24 24"} aria-hidden={"true"}>
                  <path d={"M4 19V5h16v14ZM8 9h8M8 13h8"}></path>
                </svg>
              </div>
              <h3>{"الصحة المجتمعية"}</h3>
              <p>{"تعزيز الوعي الغذائي والأنماط الصحية."}</p>
            </article>
          </div>
          <div className={"bottom"}>
            <span>{"ستة محاور أساسية"}</span>
            <span className={"rule"}></span>
            <span className={"bar"}></span>
            <span>
              {"IGCAT "}
              <em>{"06"}</em>
              {" / 06"}
            </span>
          </div>
        </section>
      </main>
    </>
  );
}
