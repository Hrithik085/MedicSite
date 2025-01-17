import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-500 text-black p-8" style={{ height: "400px" }}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="mb-4">
          <h2 className="font-bold mb-2 leading-tight">
            Kundenservice-Hotline
          </h2>
          <p className="leading-relaxed">
            Für Unterstützung und Beratung wenden Sie sich bitte an:
          </p>
          <p className="font-bold my-2 leading-relaxed">+49-(0)8206 9624-0</p>
          <p className="leading-relaxed">Mo-Do, 7 Uhr - 17 Uhr</p>
          <p className="leading-relaxed">Fr, 7 Uhr - 13 Uhr</p>
          <p className="leading-relaxed">Oder über unser Kontaktformular.</p>
        </div>
        <div className="mb-4">
          <h2 className="font-bold mb-2 leading-tight">
            Dr. Wilfried Müller GmbH
          </h2>
          <ul>
            <li className="my-1">
              <a
                href="#"
                className="hover:underline leading-relaxed text-black"
              >
                Kontakt
              </a>
            </li>
            <li className="my-1">
              <a
                href="#"
                className="hover:underline leading-relaxed text-black"
              >
                Allgemeine Geschäftsbedingungen
              </a>
            </li>
            <li className="my-1">
              <a
                href="#"
                className="hover:underline leading-relaxed text-black"
              >
                Datenschutzrichtlinie
              </a>
            </li>
            <li className="my-1">
              <a
                href="#"
                className="hover:underline leading-relaxed text-black"
              >
                Impressum
              </a>
            </li>
            <li className="my-1">
              <a
                href="#"
                className="hover:underline leading-relaxed text-black"
              >
                Lieferbedingungen
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="font-bold mb-2 leading-tight">Service</h2>
          <ul>
            <li className="my-1">
              <a
                href="#"
                className="hover:underline leading-relaxed text-black"
              >
                Über uns
              </a>
            </li>
            <li className="my-1">
              <a
                href="#"
                className="hover:underline leading-relaxed text-black"
              >
                Newsletter abonnieren
              </a>
            </li>
            <li className="my-1">
              <a
                href="#"
                className="hover:underline leading-relaxed text-black"
              >
                Garantie
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-8 text-sm text-center leading-relaxed">
        * Alle Preise zzgl. MwSt. zuzüglich{" "}
        <a href="#" className="hover:underline">
          Versandkosten
        </a>{" "}
        und eventueller Liefergebühren, sofern nicht anders angegeben.
      </p>
    </footer>
  );
};

export default Footer;
