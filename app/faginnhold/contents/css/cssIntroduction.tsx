"use client";

export default function CSSIntroduction() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">
      <p>
        <strong>CSS (Cascading Style Sheets)</strong> is used to control how
        HTML elements look on a webpage. While HTML provides the structure
        (headings, paragraphs, images), CSS lets you style this structure. For
        example, you can use CSS to change colors, fonts, spacing, and layout.
      </p> <br />

      <h3>Why use CSS?</h3>
      <p>
        Without CSS, websites would all look the same: black text on a white
        background with elements stacked vertically. CSS makes websites both
        attractive and functional, giving you control over the user experience.
      </p><br />

      <h3>How does CSS work?</h3>
      <p>There are three main ways to apply CSS:</p>
      <ul className="list-disc list-inside pl-6">
        <li>
          <strong>Inline CSS</strong> – written directly inside an HTML element.
        </li>
        <li>
          <strong>Embedded CSS</strong> – placed inside a{" "}
          <code>&lt;style&gt;</code> tag in the HTML file.
        </li>
        <li>
          <strong>External CSS</strong> – stored in a separate file (usually{" "}
          <code>style.css</code>) and linked to the HTML. This is the most
          common method.
        </li>
      </ul> <br />

      <h2>CSS Syntax</h2> 
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`selector {
  property: value;
}`}
      </pre>

      <p>For example, to make all paragraphs blue with larger text:</p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`p {
  color: blue;
  font-size: 16px;
}`}
      </pre>

      <h3>Examples</h3> <br />

      <h4>1. Inline CSS</h4>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<h1 style="color: blue;">Welcome to my website!</h1>`}
      </pre><br />

      <h4>2. Embedded CSS</h4>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<head>
  <style>
    h1 {
      color: blue;
    }
  </style>
</head>`}
      </pre> <br />

      <h4>3. External CSS (Recommended)</h4>
      <p>
        Create a file named <code>style.css</code> and add this code:
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`/* style.css */
body {
  background-color: lightblue;
}

h1 {
  color: navy;
  font-family: Arial, sans-serif;
  text-align: center;
}

p {
  color: darkslategray;
  font-size: 18px;
  font-family: Verdana, sans-serif;
  line-height: 1.6;
}`}
      </pre> <br />

      <p>Then link it in your HTML file (<code>index.html</code>):</p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First CSS Page</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Welcome to my website!</h1>
  <p>This is my very first page with CSS styling.</p>
  <p>I’m learning how to link an external CSS file!</p>
</body>
</html>`}
      </pre>
<br />
      <h2>Summary</h2>
      <ul className="list-disc list-inside pl-6">
        <li>HTML builds the structure and content.</li>
        <li>CSS controls the look and feel.</li>
        <li>
          External CSS files are the best way to manage styles, especially for
          larger projects.
        </li>
      </ul>
    </div>
  );
}
