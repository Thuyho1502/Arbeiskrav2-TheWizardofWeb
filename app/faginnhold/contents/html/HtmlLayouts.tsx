"use client";
import React from "react";

export default function HtmlLayout() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">
      <h1>HTML Layout Elements & Techniques</h1>

      <p>
        Websites often display content in multiple columns (like a magazine or a
        newspaper).
      </p>

      <h2>HTML Layout Elements</h2>
      <p>HTML has several semantic elements that define the different parts of a web page:</p>
      <ul className="list-disc list-inside pl-6">
        <li><code>&lt;header&gt;</code> — Defines a header for a document or a section.</li>
        <li><code>&lt;nav&gt;</code> — Defines a set of navigation links.</li>
        <li><code>&lt;section&gt;</code> — Defines a section in a document.</li>
        <li><code>&lt;article&gt;</code> — Defines independent, self-contained content.</li>
        <li><code>&lt;aside&gt;</code> — Defines content aside from the content (like a sidebar).</li>
        <li><code>&lt;footer&gt;</code> — Defines a footer for a document or a section.</li>
        <li><code>&lt;details&gt;</code> — Defines additional details that the user can open or close on demand.</li>
        <li><code>&lt;summary&gt;</code> — Defines a heading for the <code>&lt;details&gt;</code> element.</li>
      </ul>

      <h2>HTML Layout Techniques</h2>
      <p>
        There are four different techniques to create multicolumn layouts. Each technique has its pros and cons:
      </p>
      <ul className="list-disc list-inside pl-6">
        <li>CSS frameworks</li>
        <li>CSS float property</li>
        <li>CSS flexbox</li>
        <li>CSS grid</li>
      </ul>

      <h2>CSS Float Layout</h2>
      <p>
        It is common to do entire web layouts using the CSS <code>float</code> property. Float is easy to learn — you just need to remember how the <code>float</code> and <code>clear</code> properties work. Disadvantages: Floating elements are tied to the document flow, which may harm flexibility.
      </p>

      <h2>CSS Flexbox Layout</h2>
      <p>
        Use of flexbox ensures that elements behave predictably when the page layout must accommodate different screen sizes and different display devices.
      </p>

      <h2>CSS Grid Layout</h2>
      <p>
        The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning manually.
      </p>

      <h2>Chapter Summary</h2>
      <ul className="list-disc list-inside pl-6">
        <li>Semantic layout elements help structure a page (header, nav, section, article, aside, footer, details, summary).</li>
        <li>CSS frameworks can speed up creation of layouts.</li>
        <li>Float-based layouts are simple but less flexible.</li>
        <li>Flexbox works well for responsive, single-dimensional layouts (row/column).</li>
        <li>Grid is powerful for multi-dimensional layouts (rows & columns) and complex page design.</li>
      </ul>
    </div>
  );
}
