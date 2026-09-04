import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz | La Diva Pizzeria Aachen",
  description: "Datenschutzerklärung von La Diva Pizzeria Aachen.",
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[#0a0707] text-[#f6efe8]">
      <section className="border-b border-white/10 bg-[#0d0909]">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <p className="text-sm uppercase tracking-[0.3em] text-[#d4a373]">
            Rechtliches
          </p>
          <h1 className="mt-4 font-serif text-4xl font-bold text-white md:text-5xl">
            Datenschutzerklärung
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <div className="rounded-[2rem] border border-[#caa36a]/15 bg-[#120d0d] p-8 md:p-10">
          <div className="space-y-10 leading-8 text-zinc-300">
            <section>
              <h2 className="font-serif text-2xl font-bold text-white">
                1. Verantwortlicher
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
                <br />
                E-Mail: la.diva.pizzeria.aachen@gmail.com
                <br />
                Telefon: 0241 94305113
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-white">
                2. Allgemeine Hinweise
              </h2>
              <p className="mt-4">
                Der Schutz personenbezogener Daten ist wichtig. Personenbezogene
                Daten werden auf dieser Website nur im erforderlichen Umfang
                verarbeitet.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-white">
                3. Hosting
              </h2>
              <p className="mt-4">
                Diese Website wird bei Vercel gehostet. Beim Aufruf der Website
                können technisch erforderliche Daten wie IP-Adresse,
                Browserinformationen, Uhrzeit des Zugriffs und Logdaten
                verarbeitet werden.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-white">
                4. Kontaktaufnahme
              </h2>
              <p className="mt-4">
                Wenn du telefonisch oder per E-Mail Kontakt aufnimmst, werden
                die dabei übermittelten Daten zur Bearbeitung der Anfrage
                verarbeitet.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-white">
                5. Cookies und technisch notwendige Funktionen
              </h2>
              <p className="mt-4">
                Diese Website verwendet derzeit keine Marketing- oder
                Analyse-Cookies. Es können technisch notwendige Funktionen
                eingesetzt werden, die für den Betrieb der Website erforderlich
                sind.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-white">
                6. Rechte betroffener Personen
              </h2>
              <p className="mt-4">
                Betroffene Personen haben im Rahmen der gesetzlichen Vorgaben
                insbesondere das Recht auf Auskunft, Berichtigung, Löschung,
                Einschränkung der Verarbeitung sowie Widerspruch.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-bold text-white">
                7. Kontakt zum Datenschutz
              </h2>
              <p className="mt-4">
                Bei Fragen zum Datenschutz kann Kontakt aufgenommen werden über:
                <br />
                la.diva.pizzeria.aachen@gmail.com
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