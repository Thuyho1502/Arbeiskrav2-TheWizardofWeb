"use client";

export default function CSSSelectors() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">
      <p>
        A <strong>CSS selector</strong> is the part of a CSS rule that tells the browser which HTML elements you want to style. 
        The selector "selects" the elements, and then you can apply CSS properties to change their appearance.
      </p> <br />

      <h3>How does a CSS rule look?</h3>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`h1 {
  color: blue;
  font-size: 24px;
}`}
      </pre>
      <p>
        Here, <code>h1</code> is the selector – it selects all <code>&lt;h1&gt;</code> elements, 
         <code> color</code> and <code>font-size</code> are properties that define how the selected elements are styled.
      </p> <br />

      <h2>Different types of CSS selectors</h2>
      <p>
        CSS offers several types of selectors to target elements in different ways. 
        Let's look at the most common ones.
      </p> <br />

      <h4>1. Type Selector (Element Selector)</h4>
      <p>Selects all elements of a specific type, like <code>h1</code>, <code>p</code>, or <code>div</code>.</p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`h1 {
  color: blue;
}

p {
  font-size: 16px;
}`}
      </pre>
      <p>
        The <code>h1</code> selector makes all headings blue, and the <code>p</code> selector sets all paragraphs to 16px font size.
      </p> <br />

      <h4>2. Class Selector</h4>
      <p>
        A class selector lets you style specific elements with a <code>class</code> attribute in HTML. 
        In CSS, a class selector starts with a period <code>.</code>.
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<p class="important-text">This is important text!</p>
<p>This is regular text.</p>

.important-text {
  color: red;
  font-weight: bold;
}`}
      </pre>
      <p>
        All elements with <code>class="important-text"</code> will be red and bold. 
        You can reuse the same class on multiple elements to apply the same style.
      </p><br />

      <h4>3. ID Selector</h4>
      <p>
        ID selectors target a specific, unique element. Each element can have only one ID. 
        In CSS, use <code>#</code> before the ID name.
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<h1 id="main-heading">Welcome!</h1>

#main-heading {
  color: green;
  font-size: 32px;
}`}
      </pre>
      <p>
        The element with <code>id="main-heading"</code> will have green text and a font size of 32px. 
        Unlike classes, an ID should only be used once per page.
      </p> <br />

      <h2>Summary</h2>
      <ul className="list-disc list-inside pl-6">
        <li>Type selectors target all elements of a certain type.</li>
        <li>Class selectors target all elements with a specific class.</li>
        <li>ID selectors target a single unique element.</li>
      </ul>

    </div>
  );
}
