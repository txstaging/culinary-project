export default function ExecutiveCommittee() {
  return (
    <section
      className={"tx-network"}
      id={"executive-committee"}
      aria-labelledby={"tx-committee-title"}
    >
      {"\n "}
      <div className={"tx-network__wrap"}>
        <div className={"tx-network__head"}>
          <h2 id={"tx-committee-title"}>{"اللجنة التنفيذية"}</h2>
          <p>{"الجهات المشاركة في دعم وتنفيذ مبادرات المشروع"}</p>
        </div>
        {"\n "}
        <div className={"tx-logo-grid"}>
          <article className={"tx-logo-card committee"}>
            <div className={"tx-logo-frame"}>
              <img
                src={"/media/executive-committee-e44f1e3bc420.webp"}
                alt={"شعار هيئة فنون الطهي"}
                loading={"lazy"}
              />
            </div>
            <h3>{"هيئة فنون الطهي"}</h3>
          </article>
          {"\n"}
          <article className={"tx-logo-card committee"}>
            <div className={"tx-logo-frame"}>
              <img
                src={"/media/executive-committee-3c07cd1c7b6a.webp"}
                alt={"شعار جامعة دار الحكمة"}
                loading={"lazy"}
              />
            </div>
            <h3>{"جامعة دار الحكمة"}</h3>
          </article>
          {"\n"}
          <article className={"tx-logo-card committee"}>
            <div className={"tx-logo-frame"}>
              <img
                src={"/media/executive-committee-8ad0ec582460.webp"}
                alt={"شعار تعاونية المرشدين السياحيين"}
                loading={"lazy"}
              />
            </div>
            <h3>{"تعاونية المرشدين السياحيين"}</h3>
          </article>
          {"\n"}
          <article className={"tx-logo-card committee"}>
            <div className={"tx-logo-frame"}>
              <img
                src={"/media/executive-committee-e3b459a9753a.webp"}
                alt={"شعار أكاديمية عيش"}
                loading={"lazy"}
              />
            </div>
            <h3>{"أكاديمية عيش"}</h3>
          </article>
          {"\n"}
          <article className={"tx-logo-card committee"}>
            <div className={"tx-logo-frame"}>
              <img
                src={"/media/executive-committee-69682098c3c6.webp"}
                alt={"شعار جهة مشاركة"}
                loading={"lazy"}
              />
            </div>
            <h3>{"جهة مشاركة"}</h3>
          </article>
          {"\n"}
          <article className={"tx-logo-card committee"}>
            <div className={"tx-logo-frame"}>
              <img
                src={"/media/executive-committee-a14e08922422.webp"}
                alt={"شعار مذاق الملكة"}
                loading={"lazy"}
              />
            </div>
            <h3>{"مذاق الملكة"}</h3>
          </article>
          {"\n"}
          <article className={"tx-logo-card committee"}>
            <div className={"tx-logo-frame"}>
              <img
                src={"/media/executive-committee-02329f600add.webp"}
                alt={"شعار أزكى للأطعمة"}
                loading={"lazy"}
              />
            </div>
            <h3>{"أزكى للأطعمة"}</h3>
          </article>
        </div>
      </div>
      {"\n"}
    </section>
  );
}
