import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "La Diva Pizzeria Aachen",
  description:
    "La Diva Pizzeria in Aachen – Pizza, Angebote, Speisekarte, Öffnungszeiten und Kontakt auf einen Blick.",
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
  "Schinken",
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
  { name: "Bolognese", price: "7,00 €" },
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
      <span className="shrink-0 font-semibold text-[#e6a0a0]">{price}</span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090606] text-[#f7f0e9]">
      {/* TOP INFO BAR */}
      <div className="border-b border-red-500/20 bg-[#8f1717]">
        <div className="mx-auto max-w-7xl px-6 py-3 text-center text-sm font-semibold text-white">
          Lieferung ab 15 Pizzen · Ab 25 Pizzen nur 5,00 € je Pizza ·
          Studenten-Angebot: ab 2 Pizzen je 5,00 €
        </div>
      </div>

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0d0909]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/la-diva/logo.png"
              alt="La Diva Pizzeria Logo"
              width={42}
              height={42}
              className="h-10 w-10 rounded-full object-cover"
              priority
            />

            <div>
              <p className="font-serif text-lg font-bold tracking-wide text-white">
                LA DIVA PIZZERIA
              </p>
              <p className="text-xs text-zinc-500">
                Großkölnstraße 47 · Aachen
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm text-zinc-300 md:flex">
            <a href="#angebote" className="transition hover:text-[#d4a373]">
              Angebote
            </a>

            <a href="#speisekarte" className="transition hover:text-[#d4a373]">
              Speisekarte
            </a>

            <a href="#kontakt" className="transition hover:text-[#d4a373]">
              Kontakt
            </a>

            <a
              href="tel:+4924194305113"
              className="rounded-full border border-[#b3261e]/40 bg-[#b3261e]/10 px-4 py-2 font-semibold text-white transition hover:bg-[#b3261e]/20"
            >
              0241 94305113
            </a>
          </nav>
        </div>
      </header>

      {/* ANGEBOTE */}
      <section
        id="angebote"
        className="border-b border-white/10 bg-gradient-to-r from-[#120808] via-[#210909] to-[#120808]"
      >
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="mb-6">
            <p className="text-xs uppercase tracking-[0.32em] text-[#d4a373]">
              La Diva Specials
            </p>

            <div className="mt-2 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <h2 className="font-serif text-3xl font-bold text-white">
                Unsere aktuellen Angebote
              </h2>

              <p className="text-sm text-zinc-400">
                Für Gruppen, größere Bestellungen und Studierende
              </p>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {/* LIEFERUNG */}
            <div className="group relative overflow-hidden rounded-[1.75rem] border border-[#c9a46a]/20 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-[#c9a46a]/35">
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#c9a46a]/5 blur-2xl" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4a373]">
                Lieferung
              </p>

              <p className="mt-4 font-serif text-3xl font-bold text-white">
                Ab 15 Pizzen
              </p>

              <p className="mt-2 text-xl font-medium text-zinc-200">
                liefern wir auch.
              </p>

              <p className="mt-4 text-sm leading-6 text-zinc-400">
                Ideal für Firmen, Feiern, Veranstaltungen oder größere
                Gruppenbestellungen.
              </p>
            </div>

            {/* 25 PIZZEN */}
            <div className="group relative overflow-hidden rounded-[1.75rem] border border-red-500/30 bg-gradient-to-br from-[#3b1010] via-[#250c0c] to-[#150909] p-6 shadow-[0_20px_50px_rgba(120,0,0,0.15)] transition hover:-translate-y-1 hover:border-red-400/40">
              <div className="absolute right-4 top-4 rounded-full border border-red-400/25 bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-200">
                Vorteilspreis
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-300">
                Großbestellung
              </p>

              <p className="mt-4 font-serif text-3xl font-bold text-white">
                Ab 25 Pizzen
              </p>

              <p className="mt-2 text-xl font-medium text-zinc-200">
                je Pizza nur{" "}
                <span className="whitespace-nowrap text-red-400">5,00 €</span>
              </p>

              <p className="mt-4 text-sm leading-6 text-zinc-400">
                Statt regulär 6,00 € je Pizza gilt bei Bestellungen ab 25
                Pizzen unser Sonderpreis.
              </p>
            </div>

            {/* STUDENTEN */}
            <div className="group relative overflow-hidden rounded-[1.75rem] border border-[#c9a46a]/20 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-[#c9a46a]/35">
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-red-500/5 blur-2xl" />

              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4a373]">
                Studenten-Special
              </p>

              <p className="mt-4 font-serif text-3xl font-bold text-white">
                Ab 2 Pizzen
              </p>

              <p className="mt-2 text-xl font-medium text-zinc-200">
                je Pizza nur{" "}
                <span className="whitespace-nowrap text-red-400">5,00 €</span>
              </p>

              <p className="mt-4 text-sm leading-6 text-zinc-400">
                Unser Angebot für Studierende – bereits ab zwei Pizzen gilt der
                vergünstigte Preis.
              </p>
            </div>
          </div>

          <p className="mt-5 text-xs leading-5 text-zinc-500">
            Bei größeren Bestellungen empfehlen wir eine frühzeitige
            telefonische Anfrage.
          </p>
        </div>
      </section>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-red-900/10 blur-[120px]" />

        <div className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:py-20">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-[#d4a373]">
              La Diva Pizzeria · Aachen
            </p>

            <h1 className="mt-7 max-w-3xl font-serif text-5xl font-bold leading-[1.02] text-white md:text-7xl">
              Pizza.
              <br />
              Einfach.
              <br />
              <span className="text-[#cf3535]">La Diva.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
              Ofenfrische Pizza mit 29 cm und 3 Zutaten nach Wahl – frisch
              zubereitet und schnell zum Mitnehmen.
            </p>

            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-sm text-zinc-400">
              <span>29 cm</span>
              <span className="text-[#d4a373]">•</span>
              <span>3 Zutaten inklusive</span>
              <span className="text-[#d4a373]">•</span>
              <span>6,00 €</span>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+4924194305113"
                className="inline-flex justify-center rounded-full bg-[#b3261e] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#cf3028]"
              >
                Jetzt anrufen
              </a>

              <a
                href="#speisekarte"
                className="inline-flex justify-center rounded-full border border-[#c9a46a]/25 bg-white/[0.035] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.07]"
              >
                Speisekarte ansehen
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[500px]">
              <div className="rounded-[2rem] border border-[#c9a46a]/20 bg-[#110b0b] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
                <div className="overflow-hidden rounded-[1.5rem]">
                  <Image
                    src="/la-diva/hero-poster.png"
                    alt="La Diva Pizzeria Aachen"
                    width={1000}
                    height={1300}
                    className="block h-auto w-full"
                    priority
                  />
                </div>
              </div>

              <div className="mx-6 -mt-5 relative rounded-2xl border border-white/10 bg-[#140d0d]/95 px-5 py-4 shadow-xl backdrop-blur">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                      Zum Mitnehmen
                    </p>
                    <p className="mt-1 text-lg font-semibold text-white">
                      Jede Pizza 6,00 €
                    </p>
                  </div>

                  <p className="text-sm font-medium text-[#d4a373]">
                    29 cm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANGEBOT KURZ */}
      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="border-y border-[#c9a46a]/15 py-10">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#d4a373]">
                Pizza
              </p>
              <p className="mt-3 font-serif text-3xl font-bold text-white">
                6,00 €
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                Regulärer Preis zum Mitnehmen
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#d4a373]">
                Inklusive
              </p>
              <p className="mt-3 font-serif text-3xl font-bold text-white">
                3 Zutaten
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                individuell nach Wahl
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-[#d4a373]">
                Extra
              </p>
              <p className="mt-3 font-serif text-3xl font-bold text-white">
                +1,00 €
              </p>
              <p className="mt-2 text-sm text-zinc-400">
                je weitere Zutat
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SPEISEKARTE */}
      <section id="speisekarte" className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.32em] text-[#d4a373]">
            Speisekarte
          </p>

          <h2 className="mt-4 font-serif text-4xl font-bold text-white md:text-5xl">
            Unsere Auswahl
          </h2>

          <p className="mt-5 text-lg leading-8 text-zinc-400">
            Pizza, Salate, Aufläufe, Baguettes und Pizzabrötchen.
          </p>
        </div>

        <div className="mt-12 grid gap-8">
          {/* PIZZA + SALATE */}
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[#c9a46a]/15 bg-[#120d0d] p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3 className="font-serif text-3xl font-bold text-white">
                  Pizza
                </h3>

                <span className="rounded-full border border-red-500/25 bg-red-500/10 px-4 py-2 text-sm font-semibold text-red-200">
                  29 cm · 6,00 €
                </span>
              </div>

              <p className="mt-5 text-zinc-300">
                3 Zutaten nach Wahl · jede weitere Zutat +1,00 €
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {pizzaZutaten.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#c9a46a]/15 bg-[#120d0d] p-8">
              <h3 className="font-serif text-3xl font-bold text-white">
                Salate
              </h3>

              <p className="mt-3 text-sm text-zinc-500">
                Dressing nach Wahl: Cocktail, Joghurt oder Essig-Öl
              </p>

              <div className="mt-8 space-y-5">
                {salate.map((item) => (
                  <div
                    key={item.name}
                    className="border-b border-dashed border-white/10 pb-4 last:border-none"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-semibold text-white">{item.name}</h4>
                        <p className="mt-1 text-sm leading-6 text-zinc-500">
                          {item.desc}
                        </p>
                      </div>

                      <span className="shrink-0 font-semibold text-[#e6a0a0]">
                        {item.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AUFLÄUFE */}
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[#c9a46a]/15 bg-[#120d0d] p-8">
              <h3 className="font-serif text-3xl font-bold text-white">
                Nudel-Auflauf
              </h3>

              <div className="mt-8 space-y-4">
                {nudelAuflaeufe.map((item) => (
                  <MenuRow
                    key={item.name}
                    name={item.name}
                    price={item.price}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#c9a46a]/15 bg-[#120d0d] p-8">
              <h3 className="font-serif text-3xl font-bold text-white">
                Kartoffel-Auflauf
              </h3>

              <div className="mt-8 space-y-4">
                {kartoffelAuflaeufe.map((item) => (
                  <MenuRow
                    key={item.name}
                    name={item.name}
                    price={item.price}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* BAGUETTES + BRÖTCHEN */}
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[#c9a46a]/15 bg-[#120d0d] p-8">
              <h3 className="font-serif text-3xl font-bold text-white">
                Baguettes
              </h3>

              <p className="mt-3 text-sm text-zinc-500">
                Frisch belegt mit Tomaten, Gurken und Remoulade
              </p>

              <div className="mt-8 space-y-4">
                {baguettes.map((item) => (
                  <MenuRow
                    key={item.name}
                    name={item.name}
                    price={item.price}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#c9a46a]/15 bg-[#120d0d] p-8">
              <h3 className="font-serif text-3xl font-bold text-white">
                Pizzabrötchen
              </h3>

              <p className="mt-3 text-sm text-zinc-500">
                6 Stück gefüllte Pizzabrötchen
              </p>

              <div className="mt-8 space-y-4">
                {pizzabroetchen.map((item) => (
                  <MenuRow
                    key={item.name}
                    name={item.name}
                    price={item.price}
                  />
                ))}

                <div className="pt-2">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-zinc-200">
                      Ungefüllt (5 Stück)
                    </span>
                    <span className="font-semibold text-[#e6a0a0]">
                      3,00 €
                    </span>
                  </div>

                  <div className="mt-2 flex items-center justify-between gap-4">
                    <span className="text-sm text-zinc-500">
                      Kräuterbutter oder Aioli
                    </span>
                    <span className="font-semibold text-[#e6a0a0]">
                      0,50 €
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLYER / IMPRESSIONEN */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.32em] text-[#d4a373]">
            La Diva
          </p>

          <h2 className="mt-4 font-serif text-4xl font-bold text-white md:text-5xl">
            Speisekarte & Eindrücke
          </h2>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] border border-[#c9a46a]/15 bg-[#120d0d] p-3">
            <Image
              src="/la-diva/flyer-aa.png"
              alt="La Diva Speisekarte"
              width={1448}
              height={1086}
              className="h-auto w-full rounded-[1.5rem]"
            />
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#c9a46a]/15 bg-[#120d0d] p-3">
            <Image
              src="/la-diva/flyer-bb.png"
              alt="La Diva Speisekarte"
              width={1448}
              height={1086}
              className="h-auto w-full rounded-[1.5rem]"
            />
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="mx-auto max-w-7xl px-6 pb-24 pt-8">
        <div className="overflow-hidden rounded-[2rem] border border-[#c9a46a]/15 bg-gradient-to-br from-[#170f0f] via-[#100a0a] to-[#090606]">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-8 md:p-12">
              <p className="text-xs uppercase tracking-[0.32em] text-[#d4a373]">
                Kontakt
              </p>

              <h2 className="mt-4 font-serif text-4xl font-bold text-white md:text-5xl">
                Anrufen, bestellen, genießen.
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
                Bestellungen und Anfragen nehmen wir telefonisch entgegen.
                Bei größeren Bestellungen empfehlen wir eine frühzeitige
                Absprache.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Telefon
                  </p>

                  <a
                    href="tel:+4924194305113"
                    className="mt-3 block text-2xl font-semibold text-white transition hover:text-[#d4a373]"
                  >
                    0241 94305113
                  </a>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Adresse
                  </p>

                  <p className="mt-3 text-xl font-semibold text-white">
                    Großkölnstraße 47
                  </p>
                  <p className="mt-1 text-zinc-400">52062 Aachen</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                    Öffnungszeiten
                  </p>

                  <p className="mt-3 text-xl font-semibold text-white">
                    Täglich
                  </p>
                  <p className="mt-1 text-zinc-400">
                    11:30 – 22:00 Uhr
                  </p>
                </div>

                <div className="rounded-2xl border border-red-500/20 bg-red-500/[0.05] p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-red-300">
                    Lieferung
                  </p>

                  <p className="mt-3 text-xl font-semibold text-white">
                    Ab 15 Pizzen
                  </p>
                  <p className="mt-1 text-zinc-400">
                    nach telefonischer Absprache
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:+4924194305113"
                  className="inline-flex justify-center rounded-full bg-[#b3261e] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#cf3028]"
                >
                  Jetzt anrufen
                </a>

                <a
                  href="https://maps.google.com/?q=Grosskoelnstrasse+47+52062+Aachen"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex justify-center rounded-full border border-[#c9a46a]/25 bg-white/[0.035] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.07]"
                >
                  Route öffnen
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 bg-[#100a0a] p-8 md:p-12 lg:border-l lg:border-t-0">
              <p className="text-xs uppercase tracking-[0.3em] text-[#d4a373]">
                Angebote
              </p>

              <h3 className="mt-4 font-serif text-3xl font-bold text-white">
                Noch einmal auf einen Blick
              </h3>

              <div className="mt-8 space-y-5">
                <div className="border-b border-dashed border-white/10 pb-5">
                  <p className="text-sm text-zinc-500">Standard</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-zinc-200">Pizza 29 cm</span>
                    <span className="font-semibold text-white">6,00 €</span>
                  </div>
                </div>

                <div className="border-b border-dashed border-white/10 pb-5">
                  <p className="text-sm text-zinc-500">Studenten</p>
                  <div className="mt-2 flex items-center justify-between gap-5">
                    <span className="text-zinc-200">Ab 2 Pizzen</span>
                    <span className="font-semibold text-red-300">
                      5,00 € / Pizza
                    </span>
                  </div>
                </div>

                <div className="border-b border-dashed border-white/10 pb-5">
                  <p className="text-sm text-zinc-500">Lieferung</p>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-zinc-200">Ab 15 Pizzen</span>
                    <span className="font-semibold text-white">möglich</span>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-zinc-500">Großbestellung</p>
                  <div className="mt-2 flex items-center justify-between gap-5">
                    <span className="text-zinc-200">Ab 25 Pizzen</span>
                    <span className="font-semibold text-red-300">
                      5,00 € / Pizza
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-2xl border border-[#c9a46a]/15 bg-white/[0.025] p-5">
                <p className="text-sm leading-6 text-zinc-400">
                  Größere Bestellungen bitte möglichst frühzeitig telefonisch
                  anmelden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-[#070505]">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-8 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-zinc-300">
              La Diva Pizzeria
            </p>
            <p className="mt-1">
              Großkölnstraße 47 · 52062 Aachen
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <a
              href="/impressum"
              className="transition hover:text-[#d4a373]"
            >
              Impressum
            </a>

            <a
              href="/datenschutz"
              className="transition hover:text-[#d4a373]"
            >
              Datenschutz
            </a>

            <a
              href="tel:+4924194305113"
              className="transition hover:text-[#d4a373]"
            >
              0241 94305113
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}