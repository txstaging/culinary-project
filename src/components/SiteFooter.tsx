export default function SiteFooter() {
  return (
    <footer className={"tx-site-footer"} id={"site-footer"} dir={"rtl"} aria-label={"تذييل الموقع"}>
      {"\n  "}
      <div className={"tx-footer-inner"}>
        {"\n    "}
        <div className={"tx-footer-top"}>
          {"\n      "}
          <div className={"tx-footer-about"}>
            {"\n        "}
            <span className={"tx-footer-eyebrow"}>{"جدة والطائف"}</span>
            {"\n        "}
            <h2>{"منطقة طهي عالمية"}</h2>
            {"\n        "}
            <p>
              {
                "رحلة تجمع التراث الغذائي والثقافة المحلية والسياحة المستدامة، وتُبرز هوية جدة والطائف ومبادراتهما على المستوى الدولي."
              }
            </p>
            {"\n        "}
            <a
              className={"tx-footer-top-link"}
              href={"#home"}
              aria-label={"العودة إلى أعلى الصفحة"}
            >
              {"العودة للأعلى "}
              <span aria-hidden={"true"}>{"↑"}</span>
            </a>
            {"\n      "}
          </div>
          {"\n      "}
          <div className={"tx-footer-links"}>
            {"\n        "}
            <h3>{"استكشف المشروع"}</h3>
            {"\n        "}
            <nav aria-label={"روابط المشروع في الفوتر"}>
              {"\n          "}
              <a href={"#about-igcat"}>{"عن المعهد"}</a>
              {"\n          "}
              <a href={"#why-gastronomy"}>{"فنون الطهي"}</a>
              {"\n          "}
              <a href={"#standards"}>{"المعايير"}</a>
              {"\n          "}
              <a href={"#stakeholders-workshop"}>{"ورش العمل"}</a>
              {"\n        "}
            </nav>
            {"\n      "}
          </div>
          {"\n      "}
          <div className={"tx-footer-links"}>
            {"\n        "}
            <h3>{"المبادرات والأنشطة"}</h3>
            {"\n        "}
            <nav aria-label={"روابط المبادرات في الفوتر"}>
              {"\n          "}
              <a href={"#nomination-file"}>{"ملف الترشيح"}</a>
              {"\n          "}
              <a href={"#jury-visit"}>{"لجنة التحكيم"}</a>
              {"\n          "}
              <a href={"#world-food-gift"}>{"هدايا الطعام"}</a>
              {"\n          "}
              <a href={"#feeding-planet-initiatives"}>{"إطعام الكوكب"}</a>
              {"\n        "}
            </nav>
            {"\n      "}
          </div>
          {"\n    "}
        </div>
        {"\n    "}
        <div className={"tx-footer-bottom"}>
          {"\n      "}
          <span>{"© 2026 مشروع جدة والطائف – منطقة طهي عالمية"}</span>
          {"\n      "}
          <span>{"تراث أصيل · مستقبل مستدام"}</span>
          {"\n    "}
        </div>
        {"\n  "}
      </div>
      {"\n"}
    </footer>
  );
}
