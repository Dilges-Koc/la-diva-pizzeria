import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum | La Diva Pizzeria Aachen",
  description: "Impressum von La Diva Pizzeria Aachen.",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#0a0707] text-[#f6efe8]">
      <section className="border-b border-white/10 bg-[#0d0909]">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d4a373]">
            Rechtliches
          </p>
          <h1 className="mt-4 font-serif text-4xl font-bold text-white md:text-5xl">
            Impressum
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="rounded-[2rem] border border-[#caa36a]/15 bg-[#120d0d] p-8 md:p-10">
          <div className="space-y-10 leading-8 text-zinc-300">
            <section>
              <h2 className="font-serif text-2xl font-bold text-white">
                Angaben gemäß § 5 DDG
              </h2>
              <p className="mt-4">
                La Diva Pizzeria
                <br />
                Dilges Koc
                <br />
                Großkölnstraße 47
                <br />
                52062 Aachen
                <br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-white">
                Kontakt
              </h2>
              <p className="mt-4">
                Telefon: 0241 94305113
                <br />
                E-Mail: la.diva.pizzeria.aachen@gmail.com
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-white">
                Vertreten durch
              </h2>
              <p className="mt-4">Berivan Koc</p>
            </section>


            <section>
              <h2 className="font-serif text-2xl font-bold text-white">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p className="mt-4">
                Berivan Koc
                <br />
                Großkölnstraße 47
                <br />
                52062 Aachen
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-white">
                Haftung für Inhalte
              </h2>
              <p className="mt-4">
                Trotz sorgfältiger inhaltlicher Kontrolle wird keine Gewähr für
                die Aktualität, Vollständigkeit und Richtigkeit der
                bereitgestellten Inhalte übernommen.
              </p>
            </section>
          </div>

          <div className="mt-10">
            <Link
              href="/"
              className="inline-flex rounded-full border border-[#d62828] bg-[#d62828] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#b81f1f]"
            >
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}