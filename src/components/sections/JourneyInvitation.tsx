export default function JourneyInvitation() {
  return (
    <section
      className={"culinary-bridge-cta"}
      aria-labelledby={"culinary-bridge-title"}
      id={"journey-cta"}
    >
      {"\n "}
      <div className={"culinary-bridge-cta__inner"}>
        {"\n  "}
        <div className={"culinary-bridge-cta__eyebrow"}>{"من الرؤية إلى الواقع"}</div>
        {"\n  "}
        <h2 id={"culinary-bridge-title"}>
          {"رحلة "}
          <span>{"جدة والطائف"}</span>
          {" نحو منطقة عالمية لفنون الطهي"}
        </h2>
        {"\n  "}
        <p>
          {
            "تعرّف على أبرز محطات زيارة لجنة التحكيم الدولية، واكتشف كيف يلتقي التراث الغذائي بالثقافة والابتكار في المدينتين."
          }
        </p>
        {"\n  "}
        <a className={"culinary-bridge-cta__btn"} href={"#jury-visit"}>
          {"اكتشف تفاصيل الزيارة "}
          <span aria-hidden={"true"}>{"←"}</span>
        </a>
        {"\n "}
      </div>
      {"\n"}
    </section>
  );
}
