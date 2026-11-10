export default function JoinJourney() {
  return (
    <section className={"journey-cta"} id={"join-journey"}>
      <div className={"journey-inner"}>
        <div className={"journey-copy"}>
          <div className={"journey-kicker"}>{"انضم إلى الحركة"}</div>
          <h2>{"كن جزءًا من الرحلة"}</h2>
          <p>
            {
              "نجاح هذه المبادرة يعتمد على التعاون والشراكة، سواء كنت طاهياً أو مزارعاً أو حرفياً أو رائد أعمال أو أكاديمياً أو باحثاً أو مهتماً في السياحة أو أحد أفراد المجتمع، فإن مساهمتك تصنع الفرق."
            }
          </p>
          <p>
            {
              "معاً نبني مستقبلاً يحتفي بالتراث ويصنع فرصاً مستدامة للأجيال القادمة، يجمع بين فنون الطهي والثقافة والسياحة المستدامة."
            }
          </p>
          <a className={"journey-action"} href="#home">
            {"العودة للأعلى "}
            <svg
              aria-hidden={"true"}
              fill={"none"}
              stroke={"currentColor"}
              strokeWidth={"2"}
              viewBox={"0 0 24 24"}
            >
              <path d={"M12 19V5m-7 7 7-7 7 7"}></path>
            </svg>
          </a>
        </div>
        <div className={"journey-visual"}>
          <span className={"journey-edge"}></span>
          <div className={"journey-photo-frame"}>
            <img
              alt={"مجموعة صور من تراث جدة والطائف وفنون الطهي"}
              src={"/media/join-journey-5219d6653660.png"}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
