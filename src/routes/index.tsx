import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

import "../landing.css";
import bodyHtml from "../landing-body.html?raw";

// Script inline original que ativa drawer mobile, FAB, tabs de clínica, FAQ e scroll reveal.
const landingScript = `
  document.documentElement.classList.add('js-ready');
  function toggleDrawer() {
    var drawer = document.getElementById('nav-drawer');
    var burger = document.getElementById('hamburger');
    var isOpen = drawer.classList.contains('open');
    drawer.classList.toggle('open', !isOpen);
    burger.classList.toggle('open', !isOpen);
    document.body.style.overflow = isOpen ? '' : 'hidden';
  }
  function closeDrawer() {
    document.getElementById('nav-drawer').classList.remove('open');
    document.getElementById('hamburger').classList.remove('open');
    document.body.style.overflow = '';
  }
  window.addEventListener('scroll', function () {
    var fab = document.getElementById('fab-wa');
    if (fab) fab.classList.toggle('compact', window.scrollY > 300);
  }, { passive: true });
  function switchClinic(idx, btn) {
    document.querySelectorAll('.local-tab').forEach(function (t) { t.classList.remove('active'); });
    document.querySelectorAll('.local-panel').forEach(function (p) { p.classList.remove('active'); });
    btn.classList.add('active');
    var panel = document.getElementById('clinic-' + idx);
    if (panel) panel.classList.add('active');
  }
  function toggleFaq(btn) {
    var item = btn.parentElement;
    var isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(function (el) { el.classList.remove('open'); });
    if (!isOpen) item.classList.add('open');
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, i) {
      if (entry.isIntersecting) {
        setTimeout(function () { entry.target.classList.add('visible'); }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(function (el) { observer.observe(el); });
`;

const SITE_URL = "https://my-sweet-site-publish.lovable.app";
const PAGE_TITLE = "Dr. Carlos Vallim — Ortopedista do Joelho | RJ";
const PAGE_DESC =
  "Ortopedista e traumatologista com 35+ anos de experiência. Especialista em cirurgia do joelho e artroscopia. Atendimento na Pavuna, Rio de Janeiro.";

const physicianJsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Carlos Augusto Vallim Rosa",
  medicalSpecialty: ["Orthopedic", "SportsMedicine"],
  url: SITE_URL,
  telephone: "+55-21-3837-5301",
  identifier: "CRM-RJ 47514-1",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pavuna",
    addressRegion: "RJ",
    addressCountry: "BR",
  },
  areaServed: "Rio de Janeiro",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Quando é necessário procurar um ortopedista?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Você deve procurar um ortopedista quando sentir dor persistente nas articulações ou membros, perceber limitação de movimentos, após traumas ou quedas com suspeita de fratura, ou quando a dor interferir nas atividades do dia a dia. A avaliação precoce permite diagnóstico preciso e melhores resultados de tratamento.",
      },
    },
    {
      "@type": "Question",
      name: "Artrose tem cura? Qual o tratamento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A artrose é uma condição crônica e progressiva, mas com tratamento adequado é possível controlar os sintomas, preservar a função articular e manter qualidade de vida. O tratamento inclui desde medidas conservadoras (fisioterapia, medicamentos, infiltrações, viscossuplementação) até procedimentos cirúrgicos como a prótese de joelho nos casos mais avançados.",
      },
    },
    {
      "@type": "Question",
      name: "Cirurgia de joelho é sempre necessária?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Não. A maioria dos casos ortopédicos pode ser resolvida com tratamento conservador — fisioterapia, medicamentos, infiltrações e mudanças de hábito. A cirurgia é indicada quando o tratamento clínico não apresenta resposta adequada, em lesões estruturais que exigem reparo, ou em estágios avançados de desgaste articular. Cada caso é avaliado individualmente.",
      },
    },
    {
      "@type": "Question",
      name: "Quanto tempo leva a recuperação de uma cirurgia de joelho?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O tempo de recuperação varia conforme o procedimento. Artroscopias simples costumam permitir retorno às atividades leves em 2 a 4 semanas. Cirurgias de reconstrução ligamentar levam de 4 a 6 meses para retorno ao esporte. Já a prótese total de joelho tem recuperação de 3 a 6 meses para atividades plenas. O protocolo de reabilitação é individualizado para cada paciente.",
      },
    },
    {
      "@type": "Question",
      name: "O consultório atende por convênio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, o Dr. Carlos Augusto atende por diversos convênios na Clínica Centro Trauma. Entre em contato pelo WhatsApp ou telefone para verificar a disponibilidade para o seu plano de saúde e agendar sua consulta. Também há opção de consulta particular.",
      },
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
    ],
    links: [
      { rel: "canonical", href: SITE_URL + "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(physicianJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    const script = document.createElement("script");
    script.textContent = landingScript;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: bodyHtml }}
      suppressHydrationWarning
    />
  );
}
