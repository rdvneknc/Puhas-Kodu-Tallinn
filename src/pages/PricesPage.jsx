import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function PricesPage() {
  const { t } = useLanguage();
  const p = t.pricesPage;

  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} />

      <section className="page-section">
        <div className="container price-list">
          {p.categories.map((category) => (
            <article className="price-category" key={category.id} id={category.id}>
              <div className="price-category-head">
                <h2>{category.title}</h2>
                <Link to="/contact" className="btn btn-outline">
                  {t.common.requestQuote}
                </Link>
              </div>

              <div className="price-table-wrap">
                <table className={`price-table${category.singleColumn ? " price-table--single" : ""}`}>
                  <thead>
                    <tr>
                      <th scope="col" className="price-table-item">
                        &nbsp;
                      </th>
                      <th scope="col">{category.colA || ""}</th>
                      {!category.singleColumn ? <th scope="col">{category.colB}</th> : null}
                    </tr>
                  </thead>
                  <tbody>
                    {category.rows.map((row) => (
                      <tr key={row.item}>
                        <th scope="row">{row.item}</th>
                        <td>{row.a}</td>
                        {!category.singleColumn ? <td>{row.b}</td> : null}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          ))}

          <div className="pricing-warning" role="note">
            <span className="pricing-warning-mark" aria-hidden="true">
              !
            </span>
            <p>{p.warning}</p>
          </div>

          <div className="pricing-footnote">
            <p>{p.footnote}</p>
          </div>
        </div>
      </section>

      <section className="page-section page-section--soft">
        <div className="container faq-block">
          <h2 className="section-title">{p.faqTitle}</h2>
          <div className="faq-grid">
            {p.faqs.map((item) => (
              <article key={item.q}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
