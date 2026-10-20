"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Coffee, Citrus, GlassWater, Droplet, Cookie, Wheat } from "lucide-react";
import { menu, ui, CURRENCY, type Category } from "@/data/menu";

type Lang = "fr" | "ar";
const icons = { coffee: Coffee, citrus: Citrus, glass: GlassWater, droplet: Droplet, cookie: Cookie, wheat: Wheat };
const nf = (n: number, lang: Lang) => (lang === "ar" ? n.toLocaleString("ar-MA", { useGrouping: false }) : String(n));

function Price({ value, lang }: { value: number; lang: Lang }) {
  return (
    <span className="whitespace-nowrap font-semibold text-caramel" dir="ltr">
      {nf(value, lang)} {lang === "ar" ? "د.م" : CURRENCY}
    </span>
  );
}

function Section({ cat, lang }: { cat: Category; lang: Lang }) {
  const Icon = icons[cat.icon];
  return (
    <section id={cat.id} aria-labelledby={`h-${cat.id}`} className="rise mb-10">
      <div className="mb-4 flex items-center gap-3">
        <Icon className="h-5 w-5 text-caramel" aria-hidden />
        <h2 id={`h-${cat.id}`} className="font-display text-2xl font-semibold text-coffee">{cat[lang]}</h2>
        <span className="h-px flex-1 bg-beige" aria-hidden />
        {cat.categoryPrice && <span className="rounded-full bg-coffee px-3 py-1 text-sm text-cream"><Price value={cat.categoryPrice} lang={lang} /></span>}
      </div>
      {cat.categoryPrice && <p className="mb-3 text-sm text-coffee/70">{ui[lang].same}</p>}
      <ul className="grid gap-3 sm:grid-cols-2">
        {cat.items.map((it) => (
          <li key={it.fr} className="flex items-center justify-between gap-3 rounded-2xl border border-beige bg-ivory px-4 py-3 shadow-sm transition hover:border-caramel">
            <span className="text-base font-medium">{lang === "fr" ? it.fr : it.ar}</span>
            {it.price !== undefined && <Price value={it.price} lang={lang} />}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function MenuApp() {
  const [lang, setLang] = useState<Lang>("fr");
  const [active, setActive] = useState(menu[0].id);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);
  useEffect(() => {
    const obs = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-30% 0px -60% 0px" });
    menu.forEach((c) => { const el = document.getElementById(c.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);
  const t = ui[lang];
  return (
    <div className={lang === "ar" ? "font-arabic" : "font-body"}>
      <header className="sticky top-0 z-20 border-b border-beige bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-2">
          <div className="flex items-center gap-3">
            <Image src="/logo.jpeg" alt="Café Chez Jad" width={48} height={48} priority className="h-12 w-12 rounded-full border border-beige object-cover" />
            <span className="font-display text-xl font-semibold text-coffee">Café Chez Jad</span>
          </div>
          <div role="group" aria-label="Langue / اللغة" className="flex overflow-hidden rounded-full border border-coffee text-sm">
            <button onClick={() => setLang("fr")} lang="fr" aria-pressed={lang === "fr"} className={`px-3 py-1.5 transition ${lang === "fr" ? "bg-coffee text-cream" : "text-coffee"}`}>FR</button>
            <button onClick={() => setLang("ar")} lang="ar" aria-pressed={lang === "ar"} className={`px-3 py-1.5 font-arabic transition ${lang === "ar" ? "bg-coffee text-cream" : "text-coffee"}`}>العربية</button>
          </div>
        </div>
        <nav aria-label={t.cats} className="mx-auto max-w-3xl overflow-x-auto px-4 pb-2">
          <ul className="flex gap-2">
            {menu.map((c) => (
              <li key={c.id}>
                <a href={`#${c.id}`} aria-current={active === c.id ? "true" : undefined}
                  className={`block whitespace-nowrap rounded-full border px-4 py-1.5 text-sm transition ${active === c.id ? "border-coffee bg-coffee text-cream" : "border-beige bg-ivory text-coffee hover:border-caramel"}`}>{c[lang]}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="mx-auto max-w-3xl px-4">
        <div className="rise flex flex-col items-center py-8 text-center">
          <Image src="/logo.jpeg" alt="" width={120} height={120} className="mb-4 h-28 w-28 rounded-full border border-beige object-cover shadow-sm" />
          <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">{t.title}</h1>
          <p className="mt-2 max-w-md text-coffee/80">{t.sub}</p>
        </div>
        {menu.map((c) => <Section key={c.id} cat={c} lang={lang} />)}
      </main>
      <footer className="border-t border-beige py-8 text-center">
        <p className="font-display text-lg text-coffee">Café Chez Jad</p>
        <p className="mt-1 text-sm text-coffee/70">{t.thanks}</p>
      </footer>
    </div>
  );
}
