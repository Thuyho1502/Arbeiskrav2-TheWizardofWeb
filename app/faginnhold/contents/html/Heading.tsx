"use client";

import React from "react";

export default function Heads() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">
      <h2>HTML - The Head Element</h2>
      <p>
        The HTML <code>&lt;head&gt;</code> element is a container for the
        following elements: <code>&lt;title&gt;</code>,{" "}
        <code>&lt;style&gt;</code>, <code>&lt;meta&gt;</code>,{" "}
        <code>&lt;link&gt;</code>, <code>&lt;script&gt;</code>, and{" "}
        <code>&lt;base&gt;</code>.
      </p>

      <h2>The HTML &lt;head&gt; Element</h2>
      <p>
        The <code>&lt;head&gt;</code> element is a container for metadata (data
        about data) and is placed between the <code>&lt;html&gt;</code> tag and
        the <code>&lt;body&gt;</code> tag.
      </p>
      <p>
        Metadata is not displayed on the page but defines things like the
        document title, character set, styles, scripts, and other meta
        information.
      </p>

      <h2>The HTML &lt;title&gt; Element</h2>
      <p>
        The <code>&lt;title&gt;</code> element defines the title of the
        document. It must be text-only, and it is shown in the browser's title
        bar or tab. It is <strong>required</strong> in all HTML documents!
      </p><br />
      <p>The &lt;title&gt; Element: </p> <br />
       <ul className=" text-xl list-disc list-inside pl-6">
            <li>
                <code>{`defines a title in the browser toolbar`}</code>
            </li>
            <li>
                <code>{`provides a title for the page when it is added to favorites`}</code>
            </li>
            <li>
                <code>{`displays a title for the page in search engine-results`}</code>
            </li>
                 
        </ul>  <br />

      <p>
        <strong>Tip:</strong> Make the title accurate and meaningful for SEO.
      </p> <br />

      <h3>Example</h3>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
        {`<!DOCTYPE html>
<html>
<head>
  <title>A Meaningful Page Title</title>
</head>
<body>
The content of the document......
</body>
</html>`}
      </pre>

      <h2>The HTML &lt;style&gt; Element</h2>
      <p>
        The <code>&lt;style&gt;</code> element is used to define style
        information for a single HTML page:
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
        {`<style>
  body {background-color: powderblue;}
  h1 {color: red;}
  p {color: blue;}
</style>`}
      </pre>

      <h2>The HTML &lt;link&gt; Element</h2>
      <p>
        The <code>&lt;link&gt;</code> element defines the relationship between
        the current document and an external resource (most often external style
        sheets).
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">{`<link rel="stylesheet" href="mystyle.css">`}</pre>

      <h2>The HTML &lt;meta&gt; Element</h2>
      <p>
        The <code>&lt;meta&gt;</code> element is used to specify metadata such
        as character set, description, keywords, author, and viewport settings.
      </p>
      <h3>Examples</h3>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
        {`<meta charset="UTF-8">
<meta name="keywords" content="HTML, CSS, JavaScript">
<meta name="description" content="Free Web tutorials">
<meta name="author" content="John Doe">
<meta http-equiv="refresh" content="30">
<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
      </pre>

      <h2>Setting the Viewport</h2>
      <p>
        The viewport is the visible area of a web page. It varies with the
        device (small on mobile, larger on desktop). Use this tag:
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
        {`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
      </pre>

      <h2>The HTML &lt;script&gt; Element</h2>
      <p>
        The <code>&lt;script&gt;</code> element is used to define client-side
        JavaScripts.
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
        {`<script>
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello JavaScript!";
}
</script>`}
      </pre>

      <h2>The HTML &lt;base&gt; Element</h2>
      <p>
        The <code>&lt;base&gt;</code> element specifies a base URL and/or target
        for all relative URLs in a page. Only one <code>&lt;base&gt;</code>{" "}
        element is allowed in a document.
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
        {`<head>
  <base href="https://www.w3schools.com/" target="_blank">
</head>
<body>
  <img src="images/stickman.gif" width="24" height="39" alt="Stickman">
  <a href="tags/tag_base.asp">HTML base Tag</a>
</body>`}
      </pre>

      <h2>Chapter Summary</h2>
      <ul className=" text-xl list-disc list-inside pl-6">
        <li>
          <code>&lt;head&gt;</code> is a container for metadata between{" "}
          <code>&lt;html&gt;</code> and <code>&lt;body&gt;</code>
        </li>
        <li>
          <code>&lt;title&gt;</code> is required and defines the document title
        </li>
        <li>
          <code>&lt;style&gt;</code> defines style information for the document
        </li>
        <li>
          <code>&lt;link&gt;</code> links to external resources (CSS)
        </li>
        <li>
          <code>&lt;meta&gt;</code> defines metadata like charset, description,
          viewport
        </li>
        <li>
          <code>&lt;script&gt;</code> defines client-side JavaScript
        </li>
        <li>
          <code>&lt;base&gt;</code> specifies base URL/target for all relative
          URLs
        </li>
      </ul>


      <h2>HTML head Elements</h2>
      <table className="table-auto border border-collapse border-gray-700">
        <thead>
          <tr>
            <th className="border px-2 py-1">Tag</th>
            <th className="border px-2 py-1">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2 py-1">&lt;head&gt;</td>
            <td className="border px-2 py-1">Defines information about the document</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">&lt;title&gt;</td>
            <td className="border px-2 py-1">Defines the title of a document</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">&lt;base&gt;</td>
            <td className="border px-2 py-1">
              Defines a default address or target for all links
            </td>
          </tr>
          <tr>
            <td className="border px-2 py-1">&lt;link&gt;</td>
            <td className="border px-2 py-1">
              Defines the relationship to an external resource
            </td>
          </tr>
          <tr>
            <td className="border px-2 py-1">&lt;meta&gt;</td>
            <td className="border px-2 py-1">Defines metadata about a document</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">&lt;script&gt;</td>
            <td className="border px-2 py-1">Defines a client-side script</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">&lt;style&gt;</td>
            <td className="border px-2 py-1">
              Defines style information for a document
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
