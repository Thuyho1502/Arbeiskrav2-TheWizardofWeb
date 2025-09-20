"use client";

export default function CSSGrid() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">
      <h2>CSS Grid</h2>
      <p>
        CSS Grid er som å lage et rutemønster for nettsiden din – litt som et rutenett på et ark eller et sjakkbrett.
        Du kan dele nettsiden opp i "bokser" eller "celler", og hver boks kan inneholde ulike ting som bilder, tekst, eller menyer.
      </p>
      <p>
        Med CSS Grid kan du lage rader (vannrett) og kolonner (loddrett) samtidig, og bestemme hvor stor hver boks skal være.
      </p>

      <h3>1. Grid Container og Grid Items</h3>
      <p>
        Først må du lage en grid container – altså en overordnet "boks" som holder hele rutenettet. 
        Inni denne grid containeren legger du elementene dine, kalt grid items.
      </p>

      <h3>Eksempel 1: Enkel Grid</h3>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
</div>

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px 100px;
  gap: 10px;
}

.grid-item {
  background-color: lightblue;
  border: 1px solid darkblue;
  display: flex;
  align-items: center;
  justify-content: center;
}`}
      </pre>

      <h3>2. Spesifisere plassering for elementene</h3>
      <p>Du kan få et element til å dekke flere kolonner eller rader:</p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<div class="grid-container">
  <div class="grid-item grid-item-1">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>
  <div class="grid-item">4</div>
</div>

.grid-item-1 {
  grid-column: 1 / 3; /* Dekker kolonne 1 og 2 */
  grid-row: 1;         /* Første rad */
}`}
      </pre>

      <h3>3. Grid-gap</h3>
      <p>
        grid-gap bestemmer avstanden mellom rader og kolonner. 
        Du kan også bruke column-gap og row-gap separat.
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`.grid-container {
  display: grid;
  grid-template-columns: 2fr 1fr 3fr;
  grid-template-rows: 100px 100px;
  gap: 20px; /* Mellom alle elementene */
}`}
      </pre>

      <h3>4. Flytte elementer i grid</h3>
      <p>
        Du kan flytte et spesifikt element til en bestemt rad eller kolonne.
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`.grid-container {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px 200px;
}

.box6 {
  grid-column: 2; /* Kolonne 2 */
  grid-row: 1;    /* Første rad */
}`}
      </pre>

      <p>
        Med disse verktøyene kan du lage fleksible og komplekse layouts, kombinere med Flexbox, og gi hvert element plass og struktur på siden.
      </p>

      <h3>Tips</h3>
      <ul className="list-disc list-inside pl-6">
        <li>Bruk <code>repeat()</code> for å lage repeterende kolonner eller rader.</li>
        <li>Gap gir deg enkel kontroll over avstand uten margin på hvert element.</li>
        <li>Grid lar deg kombinere rader og kolonner samtidig for mer komplekse layout.</li>
      </ul>
    </div>
  );
}
