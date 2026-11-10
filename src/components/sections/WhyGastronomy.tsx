export default function WhyGastronomy() {
  return (
    <section aria-labelledby={"taif-title"} className={"taif-why"} id={"why-gastronomy"}>
      <div className={"taif-why__inner"}>
        {"\n"}
        <div className={"taif-why__copy"}>
          <p className={"taif-why__eyebrow"}>{"الطائف • إرث ثقافي وتجارب ملهمة"}</p>
          <h2 id={"taif-title"}>{"لماذا فنون الطهي؟"}</h2>
          {"\n"}
          <p className={"taif-why__intro"}>
            {
              "لأنها رابط يجمع بين الثقافة والتاريخ والزراعة والهوية والإبداع والمكان. ومن خلالها يمكن:"
            }
          </p>
          {"\n"}
          <ul className={"taif-why__list"}>
            <li>
              <span className={"taif-why__check"}>{"✓"}</span>
              {"تعزيز الهوية الثقافية."}
            </li>
            <li>
              <span className={"taif-why__check"}>{"✓"}</span>
              {"دعم المنتجين المحليين."}
            </li>
            <li>
              <span className={"taif-why__check"}>{"✓"}</span>
              {"تشجيع الابتكار."}
            </li>
            <li>
              <span className={"taif-why__check"}>{"✓"}</span>
              {"خلق فرص العمل."}
            </li>
            <li>
              <span className={"taif-why__check"}>{"✓"}</span>
              {"تنمية السياحة المستدامة."}
            </li>
            <li>
              <span className={"taif-why__check"}>{"✓"}</span>
              {"تحسين جودة الحياة."}
            </li>
            <li>
              <span className={"taif-why__check"}>{"✓"}</span>
              {"الحفاظ على المعرفة التقليدية."}
            </li>
            <li>
              <span className={"taif-why__check"}>{"✓"}</span>
              {"دعم الاقتصاد المحلي."}
            </li>
          </ul>
        </div>
        {"\n"}
        <div className={"taif-why__gallery"}>
          <img
            alt={"زيارة في منشأة مرتبطة بفنون الطهي"}
            loading={"lazy"}
            src={"/media/why-gastronomy-6cd5fa934528.jpg"}
          />
          <img
            alt={"تجربة ثقافية وتراثية"}
            loading={"lazy"}
            src={"/media/why-gastronomy-8ae6e18b8fef.jpg"}
          />
          <img
            alt={"فنون الأداء والاحتفالات التراثية"}
            loading={"lazy"}
            src={"/media/why-gastronomy-b07a1a3cf52b.jpg"}
          />
          <img
            alt={"لقاء ثقافي جماعي"}
            loading={"lazy"}
            src={"/media/why-gastronomy-5603dce119af.jpg"}
          />
        </div>
        {"\n"}
      </div>
    </section>
  );
}
