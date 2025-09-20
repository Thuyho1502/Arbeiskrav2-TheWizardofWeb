"use client";

export default function CSSPositionGuide() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">
      <p>
        <strong>CSS <code>position</code></strong> controls how elements are placed on a webpage
        relative to other elements or the viewport. There are five main types of positioning in CSS:
        <code>static</code>, <code>relative</code>, <code>absolute</code>, <code>fixed</code>, and <code>sticky</code>.
      </p>
      <br />

      <h3>Important Note</h3>
      <p>
        Do not rely on <code>position</code> to build entire layouts. Use it as a helper for specific
        scenarios, like making a navbar fixed at the top or a footer always at the bottom.
      </p>
      <br />

      <h3>Types of Position</h3>

      <h4>1. Static (Default)</h4>
      <p>
        <code>position: static;</code> is the default. Elements follow normal document flow and
        <code>top</code>, <code>right</code>, <code>bottom</code>, <code>left</code> do not affect it.
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<div style="position: static;">
  This element is statically positioned.
</div>`}
      </pre>
      <br />

      <h4>2. Relative</h4>
      <p>
        <code>position: relative;</code> moves an element relative to its normal position.
        It still occupies space in the document flow.
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<div style="position: relative; top: 20px; left: 10px;">
  I am moved 20px down and 10px left relative to my original position.
</div>`}
      </pre>
      <br />

      <h4>3. Absolute</h4>
      <p>
        <code>position: absolute;</code> removes the element from document flow and positions it
        relative to the nearest positioned ancestor (not static). If none exists, it positions
        relative to the <code>&lt;html&gt;</code> element.
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<div style="position: relative;">
  <div style="position: absolute; top: 30px; left: 50px;">
    I am absolutely positioned within my relative container.
  </div>
</div>`}
      </pre>
      <br />

      <h4>4. Fixed</h4>
      <p>
        <code>position: fixed;</code> removes the element from document flow and positions it
        relative to the viewport. It does not move when scrolling.
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<div style="position: fixed; top: 0; left: 0; width: 100%;">
  I stay at the top of the screen even when scrolling.
</div>`}
      </pre>
      <br />

      <h4>5. Sticky</h4>
      <p>
        <code>position: sticky;</code> behaves like <code>relative</code> until a certain scroll
        threshold is reached, then behaves like <code>fixed</code>.
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<div style="position: sticky; top: 20px;">
  I stick here after scrolling 20px down.
</div>`}
      </pre>
      <br />

      <h2>Summary</h2>
      <ul className="list-disc list-inside pl-6">
        <li><strong>Static:</strong> Default, no positioning applied.</li>
        <li><strong>Relative:</strong> Moves relative to normal position.</li>
        <li><strong>Absolute:</strong> Positioned relative to nearest non-static parent.</li>
        <li><strong>Fixed:</strong> Positioned relative to viewport; stays on screen when scrolling.</li>
        <li><strong>Sticky:</strong> Acts like relative until scrolled past a threshold, then behaves like fixed.</li>
      </ul>
    </div>
  );
}
