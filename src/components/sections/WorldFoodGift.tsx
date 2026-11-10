export default function WorldFoodGift() {
  return (
    <section aria-labelledby={"fg2-main-title"} className={"fg2"} id={"world-food-gift"}>
      <div className={"fg2-layout"}>
        <div className={"fg2-copy"}>
          <h2 id={"fg2-main-title"}>{"تحدي هدايا الطعام العالمي"}</h2>
          <div className={"fg2-title-line"}></div>
          <p className={"fg2-intro"}>
            {
              "يُعد تحدي هدايا الطعام العالمي مبادرة ضمن فعاليات الترشيح للقب، وتهدف إلى إبراز الهوية المحلية وتعزيز الحضور الدولي للمنطقة من خلال منتجات تعبّر عن الثقافة والموروث."
            }
          </p>
          <h3 className={"fg2-goals-head"}>{"أهداف المشاركة"}</h3>
          <ul className={"fg2-list"}>
            <li>
              <span className={"fg2-icon"}>
                <svg
                  aria-hidden={"true"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  strokeWidth={"1.8"}
                  viewBox={"0 0 24 24"}
                >
                  <path d={"m3 20 7-12 4 6 3-4 5 10H3Z"}></path>
                  <circle cx={"17"} cy={"5"} r={"2"}></circle>
                </svg>
              </span>
              <span>{"تعزيز السياحة المحلية."}</span>
            </li>
            {"\n"}
            <li>
              <span className={"fg2-icon"}>
                <svg
                  aria-hidden={"true"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  strokeWidth={"1.8"}
                  viewBox={"0 0 24 24"}
                >
                  <path d={"M20 4c-8 0-15 4-15 12a5 5 0 0 0 5 5c8 0 12-7 10-17Z"}></path>
                  <path d={"M6 20c2-6 6-10 12-13"}></path>
                </svg>
              </span>
              <span>{"تسليط الضوء على التراث الثقافي وقيمته."}</span>
            </li>
            {"\n"}
            <li>
              <span className={"fg2-icon"}>
                <svg
                  aria-hidden={"true"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  strokeWidth={"1.8"}
                  viewBox={"0 0 24 24"}
                >
                  <circle cx={"12"} cy={"8"} r={"5"}></circle>
                  <path d={"m8 12-2 9 6-3 6 3-2-9"}></path>
                </svg>
              </span>
              <span>{"تحقيق الاعتراف الدولي وتعزيز السمعة."}</span>
            </li>
            {"\n"}
            <li>
              <span className={"fg2-icon"}>
                <svg
                  aria-hidden={"true"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  strokeWidth={"1.8"}
                  viewBox={"0 0 24 24"}
                >
                  <path d={"m2 9 4-4 4 1 3 3 4-3 5 4-7 8-4-2-4-2-5-5Z"}></path>
                  <path d={"m9 13 4 3m-1-6 2 2"}></path>
                </svg>
              </span>
              <span>{"فتح باب التعاون والشراكات الدولية."}</span>
            </li>
            {"\n"}
            <li>
              <span className={"fg2-icon"}>
                <svg
                  aria-hidden={"true"}
                  fill={"none"}
                  stroke={"currentColor"}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  strokeWidth={"1.8"}
                  viewBox={"0 0 24 24"}
                >
                  <path d={"m2 9 10-5 10 5-10 5L2 9Z"}></path>
                  <path d={"M6 12v5c3 3 9 3 12 0v-5m4-3v8"}></path>
                </svg>
              </span>
              <span>{"تعزيز التعليم والتوعية حول التراث الغذائي."}</span>
            </li>
          </ul>
        </div>
        <div className={"fg2-visual"}>
          <div className={"fg2-ring"}>
            <div className={"fg2-photo-clip"}>
              <img
                alt={"المشاركون في تحدي هدايا الطعام العالمي"}
                className={"fg2-photo"}
                src={"/media/world-food-gift-b6489a02a5f0.jpg"}
              />
            </div>
          </div>
          <div className={"fg2-caption"}>
            <div className={"fg2-gift"}>
              <svg
                aria-hidden={"true"}
                fill={"none"}
                stroke={"currentColor"}
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                strokeWidth={"1.8"}
                viewBox={"0 0 24 24"}
              >
                <rect height={"12"} rx={"2"} width={"18"} x={"3"} y={"9"}></rect>
                <path
                  d={"M12 9v12M2 9h20M12 9c-2-5-7-5-7-2 0 2 3 2 7 2Zm0 0c2-5 7-5 7-2 0 2-3 2-7 2Z"}
                ></path>
              </svg>
            </div>
            <strong>{"الإعلان عن الفائزين في تحدي"}</strong>
            <p>{"هدايا الطعام في جزيرة كريت، اليونان"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
