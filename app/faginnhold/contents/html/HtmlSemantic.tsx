"use client";
import React from "react";

export default function HtmlSemantics() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">
      <h1>HTML Semantics</h1>

      <p>
        HTML semantics refers to using HTML tags that describe the <strong>meaning</strong> of content on a web page, instead of just describing its appearance.
      </p>

      <p>
        Think of a website like a book. In a book, you have different parts like the cover, chapters, headings, and paragraphs. Semantic HTML tags act like these parts, helping both humans and computers understand the content.
      </p>

      <h2>Examples of Semantic Tags</h2>
      <ul className="list-disc list-inside pl-6">
        <li>
          <code>&lt;header&gt;</code> — Defines the top of a webpage or a section, often containing logos, headings, or menus.
        </li>
        <li>
          <code>&lt;main&gt;</code> — Defines the main content of a webpage. Should be unique per page and not include header, navigation, or footer.
        </li>
        <li>
          <code>&lt;nav&gt;</code> — Contains navigation links to help users move around the website.
        </li>
        <li>
          <code>&lt;article&gt;</code> — Defines a self-contained piece of content, like a blog post or news article.
        </li>
        <li>
          <code>&lt;footer&gt;</code> — Usually found at the bottom, containing contact info, copyright, or other details.
        </li>
      </ul>

      <h2>Why It’s Important</h2>
      <ul className="list-disc list-inside pl-6">
        <li>Improves accessibility for screen reader users.</li>
        <li>Enhances SEO by helping search engines understand content.</li>
        <li>Makes code clearer and easier to maintain.</li>
      </ul>

      <h2>Example HTML Structure</h2>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
        {`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Gokstad Online Studies</title>
  </head>
  <body>
    <header>
      <h1>Welcome to Gokstad Online Studies!</h1>
    </header>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    <main>
      <h2>This is the main content of the page</h2>
    </main>
    <footer>
      <p>&copy; 2024 Gokstad Online Studies</p>
    </footer>
  </body>
</html>`}
      </pre>

      <h2>Summary</h2>
      <p>
        Semantic HTML uses the right tags to describe the meaning of content. It helps users and technology understand and navigate a page while keeping code organized and readable.
      </p>
    </div>
  );
}
