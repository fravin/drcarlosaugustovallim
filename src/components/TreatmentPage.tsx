import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, ExternalLink, MessageCircle, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { OG_IMAGE, treatments, type Treatment, WHATSAPP_URL } from "@/lib/treatments";
import "@/treatment.css";

export function HomeTreatmentGrid() {
  return (
    <section className="trat" id="tratamentos">
      <div className="trat-inner">
        <div className="trat-header reveal">
          <div className="section-label treatment-centered-label">Abordagem Clínica</div>
          <h2>Principais Tratamentos</h2>
          <p className="treatment-grid-intro">Protocolos clínicos e cirúrgicos baseados em evidências científicas atualizadas</p>
        </div>
        <div className="trat-grid">
          {treatments.map((treatment) => (
            <Link
              key={treatment.slug}
              to={`/tratamentos/${treatment.slug}`}
              className="trat-card treatment-card-link reveal"
              aria-label={`Saiba mais sobre ${treatment.shortTitle}`}
            >
              <div className="trat-num">{treatment.number}</div>
              <h3>{treatment.shortTitle}</h3>
              <p>{treatment.summary}</p>
              <span className="treatment-learn-more">Saiba mais <ArrowRight aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TreatmentPage({ treatment }: { treatment: Treatment }) {
  const relatedTreatments = treatment.related
    .map((slug) => treatments.find((item) => item.slug === slug))
    .filter((item): item is Treatment => Boolean(item));

  return (
    <div className="treatment-page">
      <header className="treatment-nav">
        <Link to="/" className="treatment-brand">
          Dr. Carlos Augusto Vallim Rosa
          <span>Ortopedista · Traumatologista</span>
        </Link>
        <Button asChild className="treatment-nav-cta">
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <MessageCircle aria-hidden="true" /> Agendar avaliação
          </a>
        </Button>
      </header>

      <main>
        <section className="treatment-hero">
          <div className="treatment-shell">
            <nav className="treatment-breadcrumb" aria-label="Navegação estrutural">
              <Link to="/">Início</Link><span aria-hidden="true">/</span><Link to="/" hash="tratamentos">Tratamentos</Link><span aria-hidden="true">/</span><span>{treatment.shortTitle}</span>
            </nav>
            <div className="treatment-hero-grid">
              <div>
                <p className="treatment-eyebrow">{treatment.eyebrow}</p>
                <h1>{treatment.title}</h1>
                <p className="treatment-summary">{treatment.summary}</p>
                <div className="treatment-actions">
                  <Button asChild size="lg" className="treatment-primary-button">
                    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> Agendar avaliação</a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="treatment-outline-button">
                    <Link to="/" hash="tratamentos"><ArrowLeft aria-hidden="true" /> Ver tratamentos</Link>
                  </Button>
                </div>
              </div>
              <aside className="treatment-overview" aria-label="Resumo do tratamento">
                <ShieldCheck aria-hidden="true" />
                <p>Informação médica para apoiar uma conversa responsável com o ortopedista.</p>
                <dl>
                  {treatment.highlights.map((item) => (
                    <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>
                  ))}
                </dl>
              </aside>
            </div>
          </div>
        </section>

        <section className="treatment-content-band">
          <div className="treatment-shell treatment-content-grid">
            <article className="treatment-article">
              <p className="treatment-lead">{treatment.intro}</p>
              {treatment.sections.map((section) => (
                <section key={section.title} className="treatment-copy-section">
                  <h2>{section.title}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.bullets ? (
                    <ul>{section.bullets.map((bullet) => <li key={bullet}><Check aria-hidden="true" /> <span>{bullet}</span></li>)}</ul>
                  ) : null}
                </section>
              ))}

              <section className="treatment-copy-section treatment-faq-section">
                <p className="treatment-eyebrow">Dúvidas frequentes</p>
                <h2>Perguntas sobre {treatment.shortTitle.toLowerCase()}</h2>
                <div className="treatment-faq-list">
                  {treatment.faqs.map((faq) => (
                    <details key={faq.question}>
                      <summary>{faq.question}</summary>
                      <p>{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>

              <section className="treatment-references" aria-labelledby="references-title">
                <h2 id="references-title">Referências para leitura</h2>
                <ul>
                  {treatment.references.map((reference) => (
                    <li key={reference.href}><a href={reference.href} target="_blank" rel="noreferrer">{reference.label}<ExternalLink aria-hidden="true" /></a></li>
                  ))}
                </ul>
                <p>Conteúdo informativo. Não substitui consulta, exame físico ou orientação médica individual.</p>
              </section>
            </article>

            <aside className="treatment-doctor-card">
              <img src={OG_IMAGE} alt="Dr. Carlos Augusto Vallim Rosa, ortopedista no Rio de Janeiro" />
              <div>
                <p className="treatment-card-kicker">Avaliação ortopédica</p>
                <h2>Dr. Carlos Augusto Vallim Rosa</h2>
                <p>CRM-RJ 47514-1 · Mais de 35 anos de experiência em ortopedia, traumatologia e cirurgia do joelho.</p>
                <Button asChild className="treatment-primary-button">
                  <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" /> Falar pelo WhatsApp</a>
                </Button>
              </div>
            </aside>
          </div>
        </section>

        <section className="treatment-related-band">
          <div className="treatment-shell">
            <p className="treatment-eyebrow">Continue se informando</p>
            <h2>Tratamentos relacionados</h2>
            <div className="treatment-related-grid">
              {relatedTreatments.map((item) => (
                <Link key={item.slug} to={`/tratamentos/${item.slug}`} className="treatment-related-card">
                  <span>{item.number}</span><h3>{item.shortTitle}</h3><p>{item.summary}</p><ArrowRight aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="treatment-footer">
        <div className="treatment-shell"><span>© 2026 Dr. Carlos Augusto Vallim Rosa</span><span>CRM-RJ 47514-1</span></div>
      </footer>
    </div>
  );
}
