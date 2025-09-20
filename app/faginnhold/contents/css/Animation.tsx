"use client";

export default function CSSAnimation() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">
      <h2>Hva er CSS-animasjoner?</h2>
      <p>
        Med CSS-animasjoner kan du gjøre elementer på nettsiden levende ved å endre
        deres stil over tid, som størrelse, farge eller posisjon.
      </p>
      <br />

      <h3>To typer CSS-animasjoner</h3>
      <ul className="list-disc list-inside pl-6">
        <li><strong>Transitions</strong> – animasjon ved tilstandsendring (f.eks. hover).</li>
        <li><strong>Keyframes</strong> – komplekse, kontinuerlige animasjoner som skjer over tid.</li>
      </ul>
      <br />

      <h3>Transitions</h3>
      <p>Animere egenskaper som endres når brukeren interagerer:</p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<div class="box"></div>

<style>
  .box {
    width: 100px;
    height: 100px;
    background-color: lightblue;
    transition: background-color 0.5s, width 0.5s;
  }

  .box:hover {
    background-color: coral;
    width: 150px;
  }
</style>`}
      </pre>
      <p>Forklaring: Når du svever over boksen, endres fargen og bredden over 0.5 sekunder.</p>
      <br />

      <h3>Keyframes</h3>
      <p>Mer kontroll og flere trinn, kan animere uten brukerinteraksjon:</p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<div class="circle"></div>

<style>
  .circle {
    width: 100px;
    height: 100px;
    background-color: coral;
    border-radius: 50%;
    animation: moveAndGrow 3s infinite;
  }

  @keyframes moveAndGrow {
    0% {
      transform: translateX(0) scale(1);
      background-color: coral;
    }
    50% {
      transform: translateX(200px) scale(1.5);
      background-color: lightblue;
    }
    100% {
      transform: translateX(0) scale(1);
      background-color: coral;
    }
  }
</style>`}
      </pre>
      <p>
        Forklaring: Elementet beveger seg og vokser fra 0% til 50% og tilbake til 100%.
      </p>
      <br />

      <h3>Viktige animasjonsegenskaper</h3>
      <ul className="list-disc list-inside pl-6">
        <li><code>animation-name</code>: Navnet på animasjonen.</li>
        <li><code>animation-duration</code>: Hvor lang tid animasjonen varer.</li>
        <li><code>animation-timing-function</code>: Hastighetskurve (ease, linear, ease-in, ease-out).</li>
        <li><code>animation-delay</code>: Forsinkelse før animasjonen starter.</li>
        <li><code>animation-iteration-count</code>: Antall repetisjoner (eller <code>infinite</code>).</li>
        <li><code>animation-direction</code>: normal, reverse, alternate.</li>
      </ul>
      <br />

      <h3>Eksempel på en komplett animasjon</h3>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<div class="box"></div>

<style>
  .box {
    width: 100px;
    height: 100px;
    background-color: coral;
    animation: bounce 2s ease-in-out infinite;
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-100px);
    }
  }
</style>`}
      </pre>
      <p>Forklaring: Elementet hopper opp og ned kontinuerlig.</p>
      <br />

      <h3>Oppsummering</h3>
      <ul className="list-disc list-inside pl-6">
        <li>Transitions: enkle animasjoner på tilstandsendring.</li>
        <li>Keyframes: avanserte animasjoner som kan repeteres eller ha flere trinn.</li>
        <li>Animation-egenskaper gir full kontroll over animasjonen.</li>
      </ul>
    </div>
  );
}
