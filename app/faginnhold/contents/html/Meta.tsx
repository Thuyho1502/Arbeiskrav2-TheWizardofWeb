"use client";
import React from "react";

export default function HtmlMeta() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">
      <h1>HTML Meta Data</h1>

      <p>
        Meta tags are invisible tags placed in the <code>&lt;head&gt;</code> of a webpage (the part that is not directly visible on the page, but important for how it works). They provide information to search engines, browsers, and other systems.
      </p>

      <p>
        Think of meta tags as little notes about the website that help different systems understand what the page is about, how it should be displayed, and how it should function.
      </p>

      <h2>Common HTML Meta Tags</h2>
      <ul className="list-disc list-inside pl-6">
        <li>
          <code>&lt;meta charset="UTF-8"&gt;</code> — Sets the character encoding for the page. UTF-8 supports almost all languages and symbols, ensuring text displays correctly.
        </li>
        <li>
          <code>&lt;meta name="description" content="..."&gt;</code> — Provides a short description of the page. Often shown below search results in Google.
        </li>
        <li>
          <code>&lt;meta name="keywords" content="..."&gt;</code> — A list of keywords describing the page content. Some search engines may use it.
        </li>
        <li>
          <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code> — Makes the webpage mobile-friendly by adapting to the screen size.
        </li>
        <li>
          <code>&lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;</code> — Ensures proper display in older versions of Internet Explorer.
        </li>
      </ul>

      <h2>Where to Place Meta Tags?</h2>
      <p>
        Meta tags are not visible to users and only provide information to the browser. They are always placed inside the <code>&lt;head&gt;</code> section of an HTML document:
      </p>

      <pre className="bg-gray-800 text-green-300 p-4 rounded">
        <code>
{`<head>
  <meta charset="UTF-8">
  <meta name="description" content="This is a description of the webpage">
  <meta name="keywords" content="HTML, meta, tags, webpage">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>My Website</title>
</head>`}
        </code>
      </pre>

      <h2>Why Meta Tags Are Important?</h2>
      <ul className="list-disc list-inside pl-6">
        <li>
          <strong>For search engines:</strong> Helps them understand the page content and display it correctly in search results.
        </li>
        <li>
          <strong>For browsers:</strong> Ensures the page renders properly on different devices and browsers.
        </li>
        <li>
          <strong>For visitors:</strong> Even though meta tags are not visible directly, they can affect how the page appears in search results and influence whether people click the link.
        </li>
      </ul>
    </div>
  );
}
