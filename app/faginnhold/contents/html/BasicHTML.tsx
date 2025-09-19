"use client";
import Image from "next/image";

export default function BasicHTML() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">
      
      <h2>HTML Documents</h2>
      <p>
        All HTML documents must start with a document type declaration:{" "}
        <code>{`<!DOCTYPE html>`}</code>.<br />
        The HTML document itself begins with{" "}
        <code>{`<html>`}</code> and ends with{" "}
        <code>{`</html>`}</code>.<br />
        The visible part of the HTML document is between{" "}
        <code>{`<body>`}</code> and{" "}
        <code>{`</body>`}</code>.
      </p>

      <h3>Example</h3>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<!DOCTYPE html>
<html>
  <body>

    <h1>My First Heading</h1>
    <p>My first paragraph.</p>

  </body>
</html>`}
      </pre>

      <h2>The <code>{`<!DOCTYPE>`}</code> Declaration</h2>
      <p>
        The <code>{`<!DOCTYPE>`}</code> declaration represents the document type,
        and helps browsers to display web pages correctly.
      </p>
      <p>It must only appear once, at the top of the page (before any HTML tags).</p>
      <p>The <code>{`<!DOCTYPE>`}</code> declaration is not case sensitive.</p>
      <p>The <code>{`<!DOCTYPE>`}</code> declaration for HTML5 is:</p>

      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<!DOCTYPE html>`}
      </pre>

      <h2>HTML Headings</h2>
      <p>
        HTML headings are defined with the <code>{`<h1>`}</code> to{" "}
        <code>{`<h6>`}</code> tags. <code>{`<h1>`}</code> defines the most
        important heading. <code>{`<h6>`}</code> defines the least important
        heading.
      </p>
      <p>Example:</p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>`}
      </pre>

      <h2>HTML Paragraphs</h2>
      <p>
        HTML paragraphs are defined with the <code>{`<p>`}</code> tag.
      </p>
      

      <p>Example:</p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<p>This is a paragraph.</p>
<p>This is another paragraph.</p>`}
      </pre>

      <h2>HTML Links</h2>
      <p>
        HTML links are defined with the <code>{`<a>`}</code> tag. Example:
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<a href="https://www.w3schools.com">This is a link</a>`}
      </pre>
      <p>The link's destination is specified in the href attribute. 

Attributes are used to provide additional information about HTML elements.</p>

      <h2>HTML Images</h2>
      <p>
        HTML images are defined with the <code>{`<img>`}</code> tag. The source
        file (src), alternative text (alt), width, and height are provided as
        attributes. Example:
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<img src="w3schools.jpg" alt="W3Schools.com" width="104" height="142">`}
      </pre>

      <h2>How to View HTML Source</h2>
      <p>
        Click <code>CTRL + U</code> in an HTML page, or right-click on the page
        and select “View Page Source” to view HTML source.<br />
        You can also right-click an element and choose “Inspect” to see the
        HTML and CSS behind it.
      </p>
    </div>
  );
}
