"use client";
import { useState } from "react";

const projects = [
  {
    title: "CONFECCIONES LANDI EIRL: Sistema de Gestión de Ventas e Inventarios con Automatización de Stock y Dashboard Analítico",
    description:
      "Desarrollé un sistema automatizado en Google Sheets + Apps Script que centraliza ventas e inventarios por tienda, con actualización automática de stock y dashboard en Looker Studio.",
    tech: ["Google Sheets", "Apps Script", "Looker Studio"],
    category: "Creación, Automatización y análisis de Información",
    link: "https://github.com/BuggyBoza/Proyecto-de-automatizaci-n-para-la-empresa-CONFECCIONES-LANDI-EIRL",
  },
  {
    title: "Precio del Oro en Tiempo Real (2000 - Actualidad)",
    description:
      "Construí un dashboard en Power BI con datos automatizados vía Python, para analizar la evolución del oro y métricas financieras.",
    tech: ["Power BI", "Python", "DAX", "Batch"],
    category: "Automatización y análisis de información",
    link: "https://github.com/BuggyBoza/Proyecto-Precio-del-Oro-TR",
  },
  {
    title: "Análisis del PBI por Sectores Productivos del Perú (2000 - 2024)",
    description:
      "Desarrollé un dashboard en Power BI para analizar el PBI por sectores, aplicando modelado de datos y DAX sobre datos del BCRP.",
    tech: ["Power BI", "Excel", "DAX"],
    category: "Análisis de Información",
    link: "https://github.com/BuggyBoza/PBI-por-Sectores-Productivos-2000-2024-",
  },
];

const skills = [
  { name: "Power BI", level: 100 },
  { name: "DAX", level: 95 },
  { name: "Python", level: 85 },
  { name: "Google Sheets", level: 95 },
  { name: "Apps Script", level: 80 },
  { name: "Excel", level: 90 },
  { name: "GitHub", level: 90 },
  { name: "Finanzas Corporativas", level: 80 },
];

function NavDot({ active }: { active: boolean }) {
  return (
    <span
      className={`block w-2 h-2 rounded-full transition-all duration-300 ${
        active ? "bg-amber-400 scale-125" : "bg-zinc-600"
      }`}
    />
  );
}

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span className="text-zinc-300 font-medium">{name}</span>
        <span className="text-zinc-500">{level}%</span>
      </div>
      <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  tech,
  category,
  link,
}: typeof projects[0]) {
  return (
    <div className="group relative transform-gpu transition-all duration-500 hover:-translate-y-2">
      <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/5 hover:border-amber-400/40">

        <div className="mb-4">
          <span className="text-xs font-semibold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full uppercase tracking-widest">
            {category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
          {title}
        </h3>

        <p className="text-zinc-400 text-sm leading-relaxed mb-5">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-400 border border-zinc-700"
            >
              {t}
            </span>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition"
        >
          Ver proyecto
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M14 3h7v7m0-7L10 14" />
            <path d="M5 5v14h14" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default function Home() {
  const [section, setSection] = useState<
    "hero" | "projects" | "skills" | "contact"
  >("hero");

  const labels = ["Inicio", "Proyectos", "Skills", "Contacto"];
  const targets = ["hero", "projects", "skills", "contact"] as const;

  return (
    <div className="min-h-screen bg-[#090909] text-white font-sans overflow-hidden">

      {/* NAV DOTS */}
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {targets.map((s) => (
          <button key={s} onClick={() => setSection(s)}>
            <NavDot active={section === s} />
          </button>
        ))}
      </nav>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex items-center justify-between border-b border-zinc-900/60 backdrop-blur-md bg-[#090909]/80">
        <span className="text-sm font-bold tracking-[0.2em] text-zinc-300 uppercase">
          Luis Fernando Chávez Boza
        </span>

        <div className="flex items-center gap-8 text-sm">
          {labels.map((label, i) => (
            <button
              key={label}
              onClick={() => setSection(targets[i])}
              className={`transition-colors ${
                section === targets[i]
                  ? "text-amber-400"
                  : "text-zinc-500 hover:text-amber-400"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </header>

      {/* HERO */}
      {section === "hero" && (
        <section className="relative min-h-screen flex items-center px-8 lg:px-20 pt-20">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-amber-400 text-sm font-semibold tracking-[0.3em] uppercase">
                  Data Analyst | Data Automation & BI
                </p>

                <h1 className="text-7xl lg:text-8xl font-black tracking-tight leading-[0.9]">
                  <span className="block text-white whitespace-nowrap">
                    LUIS FERNANDO
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-700 whitespace-nowrap">
                    CHÁVEZ BOZA
                  </span>
                </h1>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                Creo y transformo datos complejos en{" "}
                <span className="text-white font-semibold">
                  dashboards y sistemas automatizados
                </span>{" "}
                que mejoran la toma de decisiones basada en datos.
              </p>

              <div className="flex gap-10">
                {[
                  { value: "2+", label: "Años de experiencia" },
                  { value: "3+", label: "Proyectos entregados" },
                  { value: "5", label: "Herramientas dominadas" },
                ].map(({ value, label }) => (
                  <div key={label}>
                    <p className="text-3xl font-black text-amber-400">
                      {value}
                    </p>
                    <p className="text-xs text-zinc-500 mt-0.5">{label}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 pt-2">
                <button
                  onClick={() => setSection("projects")}
                  className="px-7 py-3 bg-amber-400 text-black rounded-full font-bold text-sm hover:bg-amber-300 transition-colors"
                >
                  Ver Proyectos →
                </button>

                <button
                  onClick={() => setSection("contact")}
                  className="px-7 py-3 border border-zinc-700 text-zinc-300 rounded-full font-bold text-sm hover:border-zinc-500 hover:text-white transition-all"
                >
                  Hablemos
                </button>
              </div>
            </div>

            {/* IMAGEN */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 rounded-[2.5rem] border border-amber-400/20 animate-pulse" />

                <div className="relative w-72 h-80 lg:w-80 lg:h-96 rounded-[2rem] overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
                  <img
                    src="/perfilfoto.jpeg"
                    alt="Luis Fernando Chávez"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-md rounded-xl px-4 py-3 border border-zinc-700/50">
                    <p className="text-xs text-zinc-400">Especialidad</p>
                    <p className="text-sm font-semibold text-amber-300">
                      Data Analytics & BI
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* PROJECTS */}
      {section === "projects" && (
        <section className="min-h-screen pt-28 pb-20 px-8 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <p className="text-amber-400 text-sm font-semibold tracking-[0.3em] uppercase mb-2">
              Portafolio
            </p>
            <h2 className="text-5xl font-black tracking-tight text-white">
              PROYECTOS
            </h2>
            <div className="w-16 h-1 bg-amber-400 mt-4 mb-12 rounded-full" />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((p) => (
                <ProjectCard key={p.title} {...p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SKILLS */}
      {section === "skills" && (
        <section className="min-h-screen pt-28 pb-20 px-8 lg:px-20">
          <div className="max-w-4xl mx-auto">
            <p className="text-amber-400 text-sm font-semibold tracking-[0.3em] uppercase mb-2">
              Tecnologías
            </p>
            <h2 className="text-5xl font-black tracking-tight text-white">
              SKILLS
            </h2>
            <div className="w-16 h-1 bg-amber-400 mt-4 mb-12 rounded-full" />

            <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
              {skills.map((s) => (
                <SkillBar key={s.name} {...s} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CONTACT */}
{section === "contact" && (
  <section className="min-h-screen flex items-center px-8 lg:px-20 pt-20">
    <div className="max-w-2xl mx-auto w-full text-center">

      <p className="text-amber-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4">
        Contacto
      </p>

      <h2 className="text-5xl lg:text-7xl font-black tracking-tight mb-6">
        ¿Trabajamos
        <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
          juntos?
        </span>
      </h2>

      <p className="text-zinc-400 mb-10 text-lg">
        Siempre abierto a nuevos proyectos y oportunidades de colaboración.
      </p>

      {/* TARJETA */}
      <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-8 mb-8 space-y-6 overflow-hidden group hover:border-amber-400/40 transition">

        {/* GLOW */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10 blur-2xl" />
        </div>

        {/* EMAIL */}
        <div className="flex items-center gap-4 border-b border-zinc-800 pb-4 relative z-10">
          <span className="text-xl">✉️</span>
          <div className="text-left">
            <p className="text-xs text-zinc-500 uppercase tracking-widest">Email</p>
            <a
              href="lchavezbocv@gmail.com"
              className="text-zinc-200 font-medium hover:text-amber-400 transition"
            >
              lchavezbocv@gmail.com
            </a>
          </div>
        </div>

        {/* LINKEDIN */}
        <div className="flex items-center gap-4 border-b border-zinc-800 pb-4 relative z-10">
          <span className="text-xl">💼</span>
          <div className="text-left">
            <p className="text-xs text-zinc-500 uppercase tracking-widest">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/lchavezbo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-200 font-medium hover:text-amber-400 transition"
            >
              Ver perfil
            </a>
          </div>
        </div>

        {/* CV */}
        <div className="flex items-center gap-4 relative z-10">
          <span className="text-xl">📄</span>
          <div className="text-left">
            <p className="text-xs text-zinc-500 uppercase tracking-widest">CV</p>
            <a
              href="/CV - Fernando Chávez Boza.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-200 font-medium hover:text-amber-400 transition"
            >
              Ver CV
            </a>
          </div>
        </div>

      </div>

      {/* BOTONES */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">

        {/* EMAIL */}
        <p className="text-zinc-200 font-medium select-all cursor-pointer">
  lchavezbocv@gmail.com
</p>
        {/* WHATSAPP 🔥 */}
        <a
          href="https://wa.me/51920994640"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-green-500 text-black rounded-full font-bold text-sm hover:bg-green-400 transition-colors"
        >
          WhatsApp
        </a>

        {/* CV */}
        <a
          href="/CV - Fernando Chávez Boza.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 border border-zinc-700 text-zinc-300 rounded-full font-bold text-sm hover:border-zinc-500 hover:text-white transition-all"
        >
          Descargar CV
        </a>

      </div>

    </div>
  </section>
)}
</div>
  );
}