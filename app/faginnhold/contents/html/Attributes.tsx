"use client";
import Image from "next/image";

export default function HTMLAttributes() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">


      <p>
        HTML attributes provide additional information about HTML elements. <br />
        Attributes are always specified in the start tag. <br />
        Attributes usually come in name/value pairs like: <code>name="value"</code>.
      </p>

      <h2>The <code>href</code> Attribute</h2>
      <p>
        The <code>&lt;a&gt;</code> tag defines a hyperlink. The <code>href</code> attribute specifies the URL 
        of the page the link goes to.
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<a href="https://www.w3schools.com">Visit W3Schools</a>`}
      </pre>

      <h2>The <code>src</code> Attribute</h2>
      <p>
        The <code>&lt;img&gt;</code> tag is used to embed an image in an HTML page. The <code>src</code> attribute 
        specifies the path to the image to be displayed.
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<img src="img_girl.jpg">`}
      </pre>
      <p>There are two ways to specify the URL in the src attribute:</p>
      <ul className="list-disc list-inside pl-6">
        <li>Absolute URL: <code>src="https://www.w3schools.com/images/img_girl.jpg"</code></li>
        <li>Relative URL: <code>src="img_girl.jpg"</code> or <code>src="/images/img_girl.jpg"</code></li>
      </ul>

      <h2>The <code>width</code> and <code>height</code> Attributes</h2>
      <p>
        Used with <code>&lt;img&gt;</code> to specify the image dimensions (in pixels).
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<img src="img_girl.jpg" width="500" height="600">`}
      </pre>

      <h2>The <code>alt</code> Attribute</h2>
      <p>
        The <code>alt</code> attribute for <code>&lt;img&gt;</code> specifies alternate text for an image, 
        if the image cannot be displayed (due to slow connection, error in src, or for screen readers).
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<img src="img_girl.jpg" alt="Girl with a jacket">`}
      </pre>

      <h2>The <code>style</code> Attribute</h2>
      <p>
        The <code>style</code> attribute is used to add inline styles to an element, such as color, font, size, etc.
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<p style="color:red;">This is a red paragraph.</p>`}
      </pre>

      <h2>The <code>lang</code> Attribute</h2>
      <p>
        You should always include the <code>lang</code> attribute inside the <code>&lt;html&gt;</code> tag, to declare 
        the language of the Web page. Useful for search engines and browsers.
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<!DOCTYPE html>
<html lang="en">
  <body>
    ...
  </body>
</html>`}
      </pre>

      <h2>The <code>title</code> Attribute</h2>
      <p>
        The <code>title</code> attribute defines some extra information about an element. The value will be displayed 
        as a tooltip when the user hovers over the element.
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<p title="I'm a tooltip">This is a paragraph.</p>`}
      </pre>

      <h2>Good Practices</h2>
      <ul className="list-disc list-inside pl-6">
        <li>Always use lowercase for attribute names. (Recommended by W3C; required in stricter doctypes like XHTML). </li>
        <li>Always quote attribute values. Especially if they contain spaces. </li>
        <li>You can use single or double quotes. Choose based on whether the value contains the other type of quote. </li>
      </ul>

      <h2>Chapter Summary</h2>
      <ul className="list-disc list-inside pl-6">
        <li>All HTML elements can have attributes. </li>
        <li><code>href</code> of <code>&lt;a&gt;</code> sets link URL. </li>
        <li><code>src</code>, <code>width</code>, <code>height</code>, <code>alt</code> for <code>&lt;img&gt;</code>. </li>
        <li><code>style</code> for inline styling. </li>
        <li><code>lang</code> for language of document. </li>
        <li><code>title</code> provides extra info as tooltip. </li>
      </ul>

    </div>
  );
}
