"use client";

export default function rammeverk() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">
      <h2>CSS-rammeverk - Bootstrap</h2>
      <p>
        <strong>Merk:</strong> Dette er kun for å lære om hva Bootstrap er. Ikke bruk dette på arbeidskrav eller eksamen i HTML og CSS.
      </p>

      <h3>Hva er Bootstrap?</h3>
      <p>
        Bootstrap er et populært, åpen kildekode-rammeverk som brukes til å lage responsive, mobilvennlige nettsider raskt. Det gir ferdigdefinerte komponenter og stilklasser, slik at du kan lage moderne design uten å kode alt fra bunnen.
      </p>

      <h3>Hvorfor er Bootstrap nyttig?</h3>
      <ul className="list-disc list-inside pl-6">
        <li>
          <strong>Responsivt design:</strong> Bygget med et 12-kolonne rutenettsystem for enkel tilpasning til alle skjermstørrelser.
        </li>
        <li>
          <strong>Ferdige komponenter:</strong> Knapper, kort, navigasjonslinjer, modale vinduer og mye mer.
        </li>
        <li>
          <strong>Krysskompatibel:</strong> Fungerer på tvers av nettlesere uten mye ekstra testing.
        </li>
        <li>
          <strong>Rask oppstart:</strong> Få profesjonelt utseende med minimal oppsettstid.
        </li>
        <li>
          <strong>Tilpassbar:</strong> Overstyr standard CSS eller bruk SASS-variabler for unikt design.
        </li>
      </ul>

      <h3>Slik starter du med Bootstrap</h3>
      <p>Legg til følgende i <code>&lt;head&gt;</code>:</p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>`}
      </pre>

      <p>Eksempel på Bootstrap-knapper:</p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>`}
      </pre>

      <p>Legg til dette under <code>&lt;/body&gt;</code> for JS-komponenter:</p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>`}
      </pre>

      <h3>Mer info</h3>
      <p>
        Du kan utforske alle eksemplene og dokumentasjonen her:{" "}
        <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" className="text-blue-400 underline" target="_blank">
          Bootstrap Docs
        </a>
      </p>

      <p>
        Bootstrap er et fantastisk verktøy for utviklere, spesielt nybegynnere, og gjør det enkelt å lage responsive, profesjonelle nettsider raskt.
      </p>
    </div>
  );
}
