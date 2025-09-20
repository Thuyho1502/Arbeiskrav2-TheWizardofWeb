"use client";
import Image from "next/image";

export default function HtmlStyle() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">
      <h2>HTML Styles</h2>
      <p>
        The HTML <code>style</code> attribute is used to add styles to an
        element, such as color, font, size, and more.
      </p>

      <h3>Example</h3>
      <div className="space-y-2 bg-gray-800 text-green-300 p-4 rounded" >
        <p style={{ color: "red" }}>I am Red</p>
        <p style={{ color: "blue" }}>I am Blue</p>
        <p style={{ fontSize: "2rem" }}>I am Big</p>
      </div> <br />

      <h2>The HTML Style Attribute</h2>
      <p>
        Setting the style of an HTML element can be done with the{" "}
        <code>style</code> attribute. It has the following syntax:
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
        {`<tagname style="property:value;">`}
      </pre>
      <p>
        The <em>property</em> is a CSS property. The <em>value</em> is a CSS
        value.
      </p>

      <h2>Background Color</h2>
      <p>
        The CSS <code>background-color</code> property defines the background
        color for an HTML element.
      </p>

      <h3>Example: Page background</h3>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">{`<body style="background-color:powderblue;">
  <h1>This is a heading</h1>
  <p>This is a paragraph.</p>
</body>`}</pre>

      <h3>Example: Element background</h3>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">{`<h1 style="background-color:powderblue;">This is a heading</h1>
<p style="background-color:tomato;">This is a paragraph.</p>`}</pre>

      <h2>Text Color</h2>
      <p>
        The CSS <code>color</code> property defines the text color for an HTML
        element:
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">{`<h1 style="color:blue;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>`}</pre>

      <h2>Fonts</h2>
      <p>
        The CSS <code>font-family</code> property defines the font to be used
        for an HTML element:
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
        {`<h1 style="font-family:verdana;">This is a heading</h1>
<p style="font-family:courier;">This is a paragraph.</p>`}</pre>

      <h2>Text Size</h2>
      <p>
        The CSS <code>font-size</code> property defines the text size for an
        HTML element:
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
        {`<h1 style="font-size:300%;">This is a heading</h1>
<p style="font-size:160%;">This is a paragraph.</p>`}</pre>

      <h2>Text Alignment</h2>
      <p>
        The CSS <code>text-align</code> property defines the horizontal text
        alignment for an HTML element:
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">{`<h1 style="text-align:center;">Centered Heading</h1>
<p style="text-align:center;">Centered paragraph.</p>`}</pre>

      <h2>Chapter Summary</h2>
      <ul className=" text-xl list-disc list-inside pl-6">
        <li>Use the <code>style</code> attribute for styling HTML elements</li>
        <li>
          Use <code>background-color</code> for background color
        </li>
        <li>
          Use <code>color</code> for text colors
        </li>
        <li>
          Use <code>font-family</code> for text fonts
        </li>
        <li>
          Use <code>font-size</code> for text sizes
        </li>
        <li>
          Use <code>text-align</code> for text alignment
        </li>
      </ul>
    </div>
  );
}
