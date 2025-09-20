"use client";

export default function CSSPseudoClasses() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">
      <h2>Hva er pseudo-klasser?</h2>
      <p>
        En pseudo-klasse er en spesiell tilstand eller posisjon et element kan være i.
        Den legges til CSS-selektoren med et kolon (:) foran navnet på pseudo-klassen.
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`button:hover { background-color: lightblue; }`}
      </pre>
      <p>Eksempel: Bakgrunnsfargen endres når brukeren svever over knappen.</p>
      <br />

      <h3>Vanlige pseudo-klasser</h3>
      <ul className="list-disc list-inside pl-6">
        <li>
          <strong>:hover</strong> – Når musen svever over et element.
          <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`a:hover { color: red; }`}
          </pre>
        </li>

        <li>
          <strong>:focus</strong> – Når elementet får fokus (f.eks. input-felt).
          <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`input:focus { border-color: blue; }`}
          </pre>
        </li>

        <li>
          <strong>:active</strong> – Når et element er aktivt (trykket ned).
          <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`button:active { background-color: darkgreen; }`}
          </pre>
        </li>

        <li>
          <strong>:first-child</strong> – Velger første barnet i en container.
          <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`p:first-child { font-weight: bold; }`}
          </pre>
        </li>

        <li>
          <strong>:last-child</strong> – Velger siste barnet.
          <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`p:last-child { color: blue; }`}
          </pre>
        </li>

        <li>
          <strong>:nth-child()</strong> – Velger barn basert på posisjon.
          <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`li:nth-child(2n) { background-color: lightgray; }
li:nth-child(3) { color: red; }`}
          </pre>
        </li>

        <li>
          <strong>:nth-of-type()</strong> – Som :nth-child, men bare for en bestemt type.
          <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`p:nth-of-type(2) { font-style: italic; }`}
          </pre>
        </li>

        <li>
          <strong>:not()</strong> – Ekskluderer elementer som matcher en selektor.
          <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`button:not(.disabled) { background-color: green; }`}
          </pre>
        </li>

        <li>
          <strong>:first-of-type</strong> – Velger første element av en bestemt type.
          <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`h2:first-of-type { color: darkblue; }`}
          </pre>
        </li>

        <li>
          <strong>:checked</strong> – For avkryssingsbokser eller radio-knapper.
          <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`input[type="checkbox"]:checked { background-color: lightgreen; }`}
          </pre>
        </li>

        <li>
          <strong>:disabled</strong> – For deaktivert input-element.
          <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`button:disabled { background-color: gray; cursor: not-allowed; }`}
          </pre>
        </li>

        <li>
          <strong>:empty</strong> – Velger elementer uten innhold.
          <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`div:empty { display: none; }`}
          </pre>
        </li>
      </ul>

      <p>
        For mer dybde og praktiske eksempler, se videoene og artiklene om pseudo-klasser.
      </p>
    </div>
  );
}
