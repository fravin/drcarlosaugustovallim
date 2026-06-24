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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Carlos Augusto Vallim Rosa | Ortopedista Especialista em Joelho – Rio de Janeiro" },
      { name: "description", content: "Dr. Carlos Augusto Vallim Rosa – Ortopedista e Traumatologista com mais de 35 anos de experiência. Especialista em Cirurgia do Joelho, Artroscopia e Traumatologia Esportiva. Atendimento na Pavuna, RJ." },
      { property: "og:title", content: "Dr. Carlos Augusto Vallim Rosa | Ortopedista Especialista em Joelho – Rio de Janeiro" },
      { property: "og:description", content: "Ortopedista e Traumatologista com mais de 35 anos de experiência. Especialista em Cirurgia do Joelho, Artroscopia e Traumatologia Esportiva. Atendimento na Pavuna, RJ." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Dr. Carlos Augusto Vallim Rosa | Ortopedista Especialista em Joelho – Rio de Janeiro" },
      { name: "twitter:description", content: "Ortopedista e Traumatologista com mais de 35 anos de experiência. Especialista em Cirurgia do Joelho, Artroscopia e Traumatologia Esportiva. Atendimento na Pavuna, RJ." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Outfit:wght@300;400;500;600&display=swap" },
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
