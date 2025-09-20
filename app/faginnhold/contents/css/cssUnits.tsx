"use client";

export default function CSSUnits() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">

      <p>
        In CSS, <strong>units</strong> are used to define sizes such as width, height, spacing, font size, margins, etc. 
        For new developers, this can feel overwhelming, but we can simplify it by dividing units into two main categories: 
        <strong>absolute</strong> and <strong>relative</strong> units.
      </p>
<br />
      <h2>1. Absolute Units</h2>
      <p>
        Absolute units have fixed sizes and do not change based on screen size or context. 
        They are less commonly used in modern responsive design but can still be useful in specific cases.
      </p>

      <li className="list-disc list-inside pl-6">
        px (pixels):Pixels are the most commonly used unit. A pixel is the smallest element on a screen, so <code>px</code> is a fixed size. 
        Use it when you want precise control over an element's size.
      </li>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`h1 {
  font-size: 24px;  /* Text will always be 24px regardless of screen size */
}`}
      </pre> <br />

      <h2>2. Relative Units</h2>
      <p>
        Relative units scale based on other elements, like the parent element's font size or the viewport size. 
        These are crucial for responsive design.
      </p>

<li className="list-disc list-inside pl-6">
       % (percent):  Percentages are relative to the size of the parent element
      </li>
      
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`.box {
  width: 50%;  /* Element takes up 50% of its parent container */
}`}
      </pre>
<br />
      <li className="list-disc list-inside pl-6">
       <code>em</code> is based on the font size of the current element or its parent. 
        1em equals 100% of the current font size.
      </li>
      
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`body {
  font-size: 16px;  /* 1em = 16px */
}

h1 {
  font-size: 2em;  /* h1 will be 32px */
}`}
      </pre> <br />

      <li className="list-disc list-inside pl-6">
       <code>rem</code> is always relative to the root element's font size (<code>&lt;html&gt;</code>). 
        This makes it easier to manage consistent sizing across the site.
      </li>
      
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`html {
  font-size: 16px;  /* Root font size */
}

p {
  font-size: 1.5rem;  /* 1.5 times root size = 24px */
}`}
      </pre> <br />

      <h3>Viewport units (vw, vh, vmin, vmax)</h3>
      <p>
        Viewport units depend on the browser window size:
      </p>
      <ul className="list-disc list-inside pl-6">
        <li><code>vw</code>: 1% of viewport width</li>
        <li><code>vh</code>: 1% of viewport height</li>
        <li><code>vmin</code>: 1% of the smaller side of the viewport</li>
        <li><code>vmax</code>: 1% of the larger side of the viewport</li>
      </ul>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`.hero {
  width: 100vw;  /* Full width of the viewport */
  height: 50vh;  /* Half of the viewport height */
}

.box {
  width: 50vmin;  /* 50% of the smaller side of the viewport */
}`}
      </pre> <br />

      <h2>3. Tips for Choosing Units</h2>
      <ul className="list-disc list-inside pl-6">
        <li><strong>px:</strong> Use for exact sizes that should not change with screen size.</li>
        <li><strong>%:</strong> Use for flexible elements relative to the parent container.</li>
        <li><strong>em / rem:</strong> Use for scalable, responsive layouts. <code>rem</code> is preferred for predictability.</li>
        <li><strong>vw / vh:</strong> Use for elements that adapt to the viewport size.</li>
      </ul>

      <h3>Example combining units</h3>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`html {
  font-size: 16px;
}

body {
  font-size: 1rem;  /* 16px */
  margin: 0;
  padding: 0;
}

.container {
  width: 80%;       /* 80% of screen width */
  padding: 20px;
}

.hero {
  height: 50vh;     /* 50% of viewport height */
  background-color: lightblue;
}

h1 {
  font-size: 2rem;  /* 32px */
}`}
      </pre>

      <p>
        By understanding and using the right units, you can create flexible, responsive layouts that adapt to different screen sizes and devices.
      </p>

    </div>
  );
}
