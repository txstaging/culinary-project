export default function StakeholdersWorkshop() {
  return (
    <section
      className={"tx-stakeholders"}
      id={"stakeholders-workshop"}
      aria-labelledby={"tx-workshop-title"}
    >
      {"\n  "}
      <div className={"tx-stakeholders__wrap"}>
        <div className={"tx-stakeholders__grid"}>
          {"\n    "}
          <div className={"tx-stakeholders__copy"}>
            {"\n      "}
            <span className={"tx-eyeline"}>{"ورش العمل والمشاركة"}</span>
            {"\n      "}
            <h2 id={"tx-workshop-title"}>{"ورشة عمل مع أصحاب المصلحة"}</h2>
            {"\n      "}
            <p>
              {
                "أُقيمت ورشة العمل الأولى لترشيح جدة والطائف كمنطقة طهي عالمية، بهدف حصر المبادرات والمشاريع القائمة والمستقبلية لدى الجهات المشاركة، ودراسة مدى مواءمتها مع متطلبات ومعايير المعهد الدولي للثقافة وفنون الطهي والسياحة (IGCAT)، تمهيدًا لتضمين المبادرات المناسبة ضمن ملف الترشيح."
              }
            </p>
            {"\n      "}
            <p>
              {
                "وشهدت الورشة استعراض متطلبات الترشيح والتعريف بدور IGCAT وبرامجه، إلى جانب مناقشة الفرص والمبادرات ذات الصلة، بمشاركة ممثلين من القطاعات الحكومية والخاصة وغير الربحية والتعليمية."
              }
            </p>
            {"\n    "}
          </div>
          {"\n    "}
          <figure className={"tx-stakeholders__figure"}>
            <img
              className={"tx-stakeholders__photo"}
              src={"/media/stakeholders-workshop-3f644f8bbf54.jpg"}
              alt={"صورة جماعية لورشة عمل أصحاب المصلحة"}
            />
            <figcaption className={"tx-stakeholders__date"}>{"02 نوفمبر 2025"}</figcaption>
          </figure>
          {"\n  "}
        </div>
      </div>
      {"\n"}
    </section>
  );
}
