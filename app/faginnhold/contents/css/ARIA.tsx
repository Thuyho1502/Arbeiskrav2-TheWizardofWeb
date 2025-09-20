"use client";

export default function ARIA() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">
      <h2>ARIA (Accessible Rich Internet Applications)</h2>
      <p>
        ARIA er en samling attributter laget for å gjøre nettsider mer tilgjengelige for personer som bruker hjelpemidler, som skjermlesere. Disse attributtene hjelper teknologien med å forstå og navigere nettsider bedre.
      </p>

      <h3>Hvorfor bruke ARIA-attributter?</h3>
      <p>
        ARIA-attributter gir ekstra informasjon om hvordan elementer på nettsiden fungerer, slik at brukere med funksjonsnedsettelser kan bruke dem uten problemer. For eksempel kan en knapp med en spesiell funksjon beskrives tydeligere for skjermlesere.
      </p>

      <h3>Vanlige ARIA-attributter og eksempler</h3>
      <ul className="list-disc list-inside pl-6">
        <li>
          <strong>aria-label</strong>: Gir et element en tekstbeskrivelse, nyttig for knapper uten synlig tekst.  
          <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<button aria-label="Lukk meny">✖</button>`}
          </pre>
        </li>
        <li>
          <strong>aria-labelledby</strong>: Beskriver et element ved å knytte det til en annen etikett.  
          <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<h2 id="heading1">Om oss</h2>
<div aria-labelledby="heading1">Informasjon om vår bedrift...</div>`}
          </pre>
        </li>
        <li>
          <strong>aria-hidden</strong>: Skjuler elementer fra skjermlesere.  
          <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<div aria-hidden="true">Bare visuelt innhold</div>`}
          </pre>
        </li>
        <li>
          <strong>role</strong>: Spesifiserer hvilken type element det er.  
          <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<div role="button" tabindex="0">Klikk her</div>`}
          </pre>
        </li>
        <li>
          <strong>aria-expanded</strong>: Indikerer om et element som kan ekspanderes (f.eks. en meny) er åpen eller lukket.  
          <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<button aria-expanded="false">Vis meny</button>`}
          </pre>
        </li>
      </ul>

      <h3>Eksempel på ARIA-attributter i bruk</h3>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<button aria-controls="submenu" aria-expanded="false" aria-label="Vis eller skjul meny">Meny</button>
<div id="submenu" aria-hidden="true">
  <p>Innhold i menyen</p>
</div>`}
      </pre>
      <p>
        Forklaring:
      </p>
      <ul className="list-disc list-inside pl-6">
        <li><code>aria-controls="submenu"</code> forteller skjermleseren at knappen styrer elementet med ID "submenu".</li>
        <li><code>aria-expanded="false"</code> indikerer at menyen er lukket.</li>
        <li><code>aria-hidden="true"</code> skjuler menyen fra skjermlesere når den ikke er synlig.</li>
      </ul>

      <h3>Fordeler med ARIA</h3>
      <p>
        ARIA-attributter gjør det mulig å bygge nettsteder som både ser bra ut og er tilgjengelige for alle. Dette øker brukervennligheten for mange besøkende, uavhengig av hvilke hjelpemidler de bruker.
      </p>
    </div>
  );
}
