import SiteHeader from "../SiteHeader";

export default function Hero() {
  return (
    <section className={"hero"} id={"home"} aria-label={"الصفحة الرئيسية"}>
      {"\n"}
      <SiteHeader />
      {"\n"}
      <div className={"content"}>
        <div className={"copy"}>
          {"\n  "}
          <span className={"eyebrow"}>{"نحو منطقة عالمية لفنون الطهي"}</span>
          {"\n  "}
          <h1 className={"hero-welcome"}>
            {"مرحبًا بكم "}
            <span className={"hero-subtitle"}>
              {"في الموقع الرسمي"}
              <br />
              {"جدة والطائف منطقة طهي عالمية"}
            </span>
          </h1>
          {"\n  "}
          <p className={"description"}>
            {
              "أعلن المعهد الدولي لفنون الطهي والثقافة والسياحة (IGCAT) فوز جدة والطائف بلقب منطقة طهي عالمية لعام 2027، في إنجاز يعكس تكامل جدة والطائف كنموذج لفنون الطهي يجمع بين الموروث البحري والهوية الزراعية والتنوع الثقافي والابتكار المعاصر."
            }
          </p>
          {"\n  "}
          <div className={"buttons"}>
            <a className={"btn btn-primary"} href={"#about-igcat"}>
              {"استكشف الرحلة"}
            </a>
            <a className={"btn btn-outline"} href={"#join-journey"}>
              {"كن جزءًا من الرحلة"}
            </a>
          </div>
          {"\n"}
        </div>
      </div>
      {"\n"}
    </section>
  );
}
