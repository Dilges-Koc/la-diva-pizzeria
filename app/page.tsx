import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "La Diva Pizzeria Aachen",
  description:
    "La Diva Pizzeria in Aachen – jede Pizza 29 cm mit 3 Zutaten nach Wahl für 6,00 €. Speisekarte, Öffnungszeiten und Kontakt auf einen Blick.",
};

const pizzaZutaten = [
  "Paprika",
  "Jalapeños",
  "Peperoni",
  "Champignons",
  "Spinat",
  "Brokkoli",
  "Zwiebeln",
  "Oliven",
  "Tomaten",
  "Ei",
  "Mais",
  "Ananas",
  "Artischocken",
  "Krabben",
  "Meeresfrüchte",
  "Sardinen",
  "Weichkäse",
  "Mozzarella",
  "Hähnchenbrust",
  "Hackfleisch",
  "Salami",
  "Thunfisch",
  "Sucuk",
  "BBQ-Sauce",
  "Sauce Hollandaise",
];

const salate = [
  {
    name: "Gemischter Salat",
    desc: "Eisbergsalat mit Gurken, Tomaten und Oliven",
    price: "5,00 €",
  },
  {
    name: "Thunfisch Salat",
    desc: "Eisbergsalat mit Gurken, Tomaten, Oliven und Thunfisch",
    price: "5,50 €",
  },
  {
    name: "Artischocken Salat",
    desc: "Eisbergsalat mit Gurken, Tomaten, Oliven und Artischocken",
    price: "5,50 €",
  },
  {
    name: "Hähnchen Salat",
    desc: "Eisbergsalat mit Gurken, Tomaten, Zwiebeln, Oliven und Hähnchenbrust",
    price: "6,00 €",
  },
];

const nudelAuflaeufe = [
  { name: "Bolognese Nudelauflauf", price: "7,00 €" },
  { name: "Quattro Formaggi", price: "7,00 €" },
  { name: "Hähnchenauflauf", price: "7,00 €" },
  { name: "Auflauf Spinaci", price: "7,00 €" },
  { name: "Hähnchen-Brokkoli", price: "7,00 €" },
];

const kartoffelAuflaeufe = [
  { name: "Quattro Formaggi", price: "7,00 €" },
  { name: "Hähnchenauflauf", price: "7,00 €" },
  { name: "Auflauf Spinaci", price: "7,00 €" },
  { name: "Hähnchen-Brokkoli", price: "7,00 €" },
  { name: "Bolognese", price: "7,00 €" },
];

const baguettes = [
  { name: "Käse", price: "4,00 €" },
  { name: "Salami", price: "5,00 €" },
  { name: "Thunfisch", price: "5,00 €" },
  { name: "Hähnchenbrust", price: "5,00 €" },
];

const pizzabroetchen = [
  { name: "Käse", price: "4,00 €" },
  { name: "Salami", price: "4,50 €" },
  { name: "Thunfisch", price: "4,50 €" },
  { name: "Schinken", price: "4,50 €" },
  { name: "Hähnchenbrust", price: "4,50 €" },
  { name: "Spinat & Weichkäse", price: "4,50 €" },
];

function MenuRow({ name, price }: { name: string; price: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-dashed border-white/10 pb-3">
      <span className="text-zinc-200">{name}</span>
      <span className="shrink-0 font-semibold text-[#e7a3a3]">{price}</span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0707] text-[#f6efe8]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(103,16,16,0.26),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(60,10,10,0.22),transparent_35%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d0909]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="overflow-hidden rounded-full border border-[#caa36a]/30 bg-white p-1">
              <Image
                src="/la-diva/logo.png"
                alt="La Diva Pizzeria Logo"
                width={48}
                height={48}
                className="h-11 w-11 rounded-full object-cover"
              />
            </div>

            <div>
              <p className="font-serif text-lg font-bold tracking-wide text-white md:text-xl">
                LA DIVA PIZZERIA
              </p>
              <p className="text-sm text-zinc-400">
                Großkölnstraße 47 · 52062 Aachen
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            <a href="#angebot" className="text-sm text-zinc-300 transition hover:text-[#d4a373]">
              Angebot
            </a>
            <a href="#speisekarte" className="text-sm text-zinc-300 transition hover:text-[#d4a373]">
              Speisekarte
            </a>
            <a href="#kontakt" className="text-sm text-zinc-300 transition hover:text-[#d4a373]">
              Kontakt
            </a>
            <a href="tel:+4924194305113" className="text-sm font-semibold text-white">
              0241 94305113
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-16 md:grid-cols-[1.08fr_0.92fr] md:py-24">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-[#d4a373]">
            La Diva Pizzeria
          </p>
          <p className="mt-3 text-xl text-zinc-300 md:text-2xl">
            Aachen · Pizza zum Mitnehmen
          </p>

          <h1 className="mt-10 font-serif text-5xl font-bold leading-[1.02] text-[#f8f2ea] md:text-7xl">
            Jede Pizza
            <br />
            <span className="inline-block text-[#d62828]">6,00 €</span>
            <br />
            mit <span className="text-[#efb2b2]">3 Zutaten </span>
            nach Wahl.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
            Ofenfrische Pizza mit <strong>29 cm</strong>, klassisch-dunklem
            Pizzeria-Charakter und schneller Abholung direkt in Aachen.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:+4924194305113"
              className="rounded-full border border-[#d62828] bg-[#d62828] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b81f1f]"
            >
              Jetzt anrufen
            </a>

            <a
              href="#speisekarte"
              className="rounded-full border border-[#caa36a]/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Speisekarte ansehen
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.5rem] border border-[#caa36a]/15 bg-[#130d0d] px-5 py-5">
              <p className="text-sm text-zinc-500">Preis</p>
              <p className="mt-2 text-3xl font-bold text-[#d62828]">6,00 €</p>
            </div>

            <div className="rounded-[1.5rem] border border-[#caa36a]/15 bg-[#130d0d] px-5 py-5">
              <p className="text-sm text-zinc-500">Größe</p>
              <p className="mt-2 text-3xl font-bold text-white">29 cm</p>
            </div>

            <div className="rounded-[1.5rem] border border-[#caa36a]/15 bg-[#130d0d] px-5 py-5">
              <p className="text-sm text-zinc-500">Extra Zutat</p>
              <p className="mt-2 text-3xl font-bold text-white">+1,00 €</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-[560px] rounded-[2rem] border border-[#caa36a]/20 bg-[#120d0d] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.55)]">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/5 bg-[#191212]">
              <Image
                src="/la-diva/hero-poster.png"
                alt="La Diva Hero Poster"
                width={900}
                height={1200}
                className="block h-auto w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section id="angebot" className="mx-auto max-w-6xl px-6 pb-10">
        <div className="rounded-[2rem] border border-[#caa36a]/15 bg-gradient-to-r from-[#140d0d] via-[#110b0b] to-[#170d0d] p-8 md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#d4a373]">
                Unser Angebot
              </p>
              <h2 className="mt-4 font-serif text-3xl font-bold text-white md:text-5xl">
                Klassisch. Schnell. Zum Mitnehmen.
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
                Jede Pizza wird frisch zubereitet, hat 29 cm Durchmesser und
                enthält 3 Zutaten nach Wahl. Extra Zutaten sind jederzeit
                zusätzlich möglich.
              </p>
            </div>

            <div className="rounded-3xl border border-[#d62828]/30 bg-[#d62828]/10 px-6 py-5 text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-300">
                Zum Mitnehmen
              </p>
              <p className="mt-2 text-4xl font-bold text-[#ff6b6b]">6,00 €</p>
            </div>
          </div>
        </div>
      </section>

      <section id="speisekarte" className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d4a373]">
            Speisekarte
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold text-white md:text-5xl">
            Alles auf einen Blick
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-300">
            Pizza, Salate, Kartoffel-Auflauf, Nudel-Auflauf, Baguettes und
            Pizzabrötchen – übersichtlich und direkt zugänglich.
          </p>
        </div>

        <div className="mt-12 grid gap-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[#caa36a]/15 bg-[#120d0d] p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3 className="font-serif text-3xl font-bold text-white">Pizza</h3>
                <span className="rounded-full bg-[#d62828] px-4 py-2 text-sm font-semibold text-white">
                  29 cm · 6,00 €
                </span>
              </div>

              <p className="mt-5 text-zinc-300">
                3 Zutaten nach Wahl · extra Zutaten je 1,00 €
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {pizzaZutaten.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#caa36a]/15 bg-[#120d0d] p-8">
              <h3 className="font-serif text-3xl font-bold text-white">Salate</h3>
              <p className="mt-3 text-sm text-zinc-400">
                Dressing nach Wahl: Cocktail, Joghurt oder Essig-Öl
              </p>

              <div className="mt-8 space-y-5">
                {salate.map((item) => (
                  <div
                    key={item.name}
                    className="border-b border-dashed border-white/10 pb-4 last:border-b-0"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white">{item.name}</h4>
                        <p className="mt-1 text-sm leading-6 text-zinc-400">
                          {item.desc}
                        </p>
                      </div>
                      <span className="shrink-0 font-semibold text-[#e58d8d]">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[#caa36a]/15 bg-[#120d0d] p-8">
              <h3 className="font-serif text-3xl font-bold text-white">
                Nudel-Auflauf
              </h3>

              <div className="mt-8 space-y-4">
                {nudelAuflaeufe.map((item) => (
                  <MenuRow key={item.name} name={item.name} price={item.price} />
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#caa36a]/15 bg-[#120d0d] p-8">
              <h3 className="font-serif text-3xl font-bold text-white">
                Kartoffel-Auflauf
              </h3>

              <div className="mt-8 space-y-4">
                {kartoffelAuflaeufe.map((item) => (
                  <MenuRow key={item.name} name={item.name} price={item.price} />
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[#caa36a]/15 bg-[#120d0d] p-8">
              <h3 className="font-serif text-3xl font-bold text-white">Baguettes</h3>
              <p className="mt-3 text-sm text-zinc-400">
                Frisch belegt mit Tomaten, Gurken und Remoulade
              </p>

              <div className="mt-8 space-y-4">
                {baguettes.map((item) => (
                  <MenuRow key={item.name} name={item.name} price={item.price} />
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#caa36a]/15 bg-[#120d0d] p-8">
              <h3 className="font-serif text-3xl font-bold text-white">
                Pizzabrötchen
              </h3>
              <p className="mt-3 text-sm text-zinc-400">
                6 Stück gefüllte Pizzabrötchen
              </p>

              <div className="mt-8 space-y-4">
                {pizzabroetchen.map((item) => (
                  <MenuRow key={item.name} name={item.name} price={item.price} />
                ))}

                <div className="pt-2">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-zinc-200">Ungefüllt (5 Stück)</span>
                    <span className="font-semibold text-[#e58d8d]">3,00 €</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between gap-4">
                    <span className="text-sm text-zinc-400">
                      Kräuterbutter oder Aioli
                    </span>
                    <span className="font-semibold text-[#e58d8d]">0,50 €</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d4a373]">
            Eindrücke
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold text-white md:text-5xl">
            Speisekarte
          </h2>
          
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-[#caa36a]/15 bg-[#120d0d] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            <div className="overflow-hidden rounded-[1.5rem] bg-[#181111]">
              <Image
                src="/la-diva/flyer-aa.png"
                alt="La Diva Flyer A"
                width={1200}
                height={1500}
                className="block h-auto w-full"
              />
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#caa36a]/15 bg-[#120d0d] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            <div className="overflow-hidden rounded-[1.5rem] bg-[#181111]">
              <Image
                src="/la-diva/flyer-bb.png"
                alt="La Diva Flyer B"
                width={1200}
                height={1500}
                className="block h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="mx-auto max-w-6xl px-6 pb-24 pt-8">
  <div className="overflow-hidden rounded-[2rem] border border-[#caa36a]/15 bg-gradient-to-br from-[#181010] via-[#120b0b] to-[#0c0808]">
    <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="p-8 md:p-12">
        <p className="text-sm uppercase tracking-[0.3em] text-[#d4a373]">
          Kontakt
        </p>

        <h2 className="mt-4 font-serif text-4xl font-bold text-white md:text-5xl">
          Anrufen, abholen, genießen.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
          Bestellungen und Anfragen bitte telefonisch. La Diva steht für
          klassische Pizza zum Mitnehmen, schnelle Abholung und einen klaren,
          unkomplizierten Bestellweg.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
              Telefon
            </p>
            <a
              href="tel:+4924194305113"
              className="mt-3 block text-2xl font-semibold text-white transition hover:text-[#d4a373]"
            >
              0241 94305113
            </a>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Für Bestellungen und direkte Rückfragen.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
              Adresse
            </p>
            <p className="mt-3 text-2xl font-semibold text-white">
              Großkölnstr. 47
            </p>
            <p className="mt-2 text-lg text-zinc-300">52062 Aachen</p>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Zentral in Aachen gelegen.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
              Öffnungszeiten
            </p>
            <p className="mt-3 text-xl font-semibold text-white">
              Täglich
            </p>
            <p className="mt-2 text-lg text-zinc-300">11:30 – 22:00 Uhr</p>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Bestellen, abholen und direkt genießen.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
            <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
              Hinweis
            </p>
            <p className="mt-3 text-xl font-semibold text-white">
              Nur Mitnahme
            </p>
            <p className="mt-2 text-lg text-zinc-300">
              Schnell & unkompliziert
            </p>
            <p className="mt-3 text-sm leading-6 text-zinc-400">
              Kein Online-Shop — einfach anrufen und abholen.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="tel:+4924194305113"
            className="inline-flex items-center justify-center rounded-full border border-[#d62828] bg-[#d62828] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b81f1f]"
          >
            Jetzt anrufen
          </a>

          <a
            href="https://maps.google.com/?q=Grosskölnstrasse+47+52062+Aachen"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[#caa36a]/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Route öffnen
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#110b0b] lg:border-l lg:border-t-0">
        <div className="flex h-full flex-col justify-between p-8 md:p-12">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#d4a373]">
              La Diva
            </p>
            <h3 className="mt-4 font-serif text-3xl font-bold text-white md:text-4xl">
              Pizza zum Mitnehmen in Aachen
            </h3>
            <p className="mt-6 leading-8 text-zinc-300">
              Dunkler, klassischer Markenauftritt und eine klare Speisekarte —
              direkt, hochwertig und passend zur Pizzeria.
            </p>
          </div>

          <div className="mt-10 rounded-[1.5rem] border border-[#caa36a]/15 bg-black/20 p-6">
            <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
              Schnellübersicht
            </p>

            <div className="mt-5 space-y-4">
              <div className="flex items-center justify-between gap-4 border-b border-dashed border-white/10 pb-3">
                <span className="text-zinc-300">Jede Pizza</span>
                <span className="font-semibold text-[#e7a3a3]">6,00 €</span>
              </div>

              <div className="flex items-center justify-between gap-4 border-b border-dashed border-white/10 pb-3">
                <span className="text-zinc-300">Durchmesser</span>
                <span className="font-semibold text-white">29 cm</span>
              </div>

              <div className="flex items-center justify-between gap-4 border-b border-dashed border-white/10 pb-3">
                <span className="text-zinc-300">3 Zutaten</span>
                <span className="font-semibold text-white">inklusive</span>
              </div>

              <div className="flex items-center justify-between gap-4">
                <span className="text-zinc-300">Extra Zutaten</span>
                <span className="font-semibold text-white">+1,00 €</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<footer className="border-t border-white/10 bg-[#0d0909]">
  <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 py-8 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
    <div>
      <p className="font-semibold text-zinc-200">La Diva Pizzeria</p>
      <p className="mt-1">Großkölnstraße 47 · 52062 Aachen</p>
    </div>

    <div className="flex flex-wrap items-center gap-5">
      <a href="/impressum" className="transition hover:text-[#d4a373]">
        Impressum
      </a>
      <a href="/datenschutz" className="transition hover:text-[#d4a373]">
        Datenschutz
      </a>
      <a href="tel:+4924194305113" className="transition hover:text-[#d4a373]">
        0241 94305113
      </a>
    </div>
  </div>
</footer>
    </main>
  );
}