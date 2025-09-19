"use client";
import React from "react";

export default function HtmlNavigation() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">
      <h2>Introduction to HTML Navigation</h2>

      <p>
        When visiting a website, you may notice a menu or set of links that allow you to jump between different pages. This is called navigation, and it's an important part of any website.
      </p>

      <h2>What is HTML Navigation?</h2>
      <p>
        Navigation in HTML is about creating a structure that helps users move around your site. This is done with links, often organized into a menu. In HTML, we use the <code>&lt;nav&gt;</code> element to create a navigation menu.
      </p>

      <h2>Creating a Simple Navigation Menu</h2>
      <p>Example of a simple menu with three pages: Home, About, and Contact:</p>

      <pre className="bg-gray-800 text-green-300 p-4 rounded ">
        <code>
{`<nav>
  <ul>
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</nav>`}
        </code>
      </pre>

      <h2>Explanation of the Code</h2>
      <ul className="list-disc list-inside pl-6">
        <li><code>&lt;nav&gt;</code>: Defines the navigation area of the page.</li>
        <li><code>&lt;ul&gt;</code>: Creates an unordered list for the menu items.</li>
        <li><code>&lt;li&gt;</code>: Represents a list item (each link in the menu).</li>
        <li><code>&lt;a&gt;</code>: Creates a hyperlink. The <code>href</code> attribute points to the destination page.</li>
      </ul>

      <h2>How Navigation Works</h2>
      <p>
        Clicking a link in the menu sends the user to another page or section. Make sure the menu is simple and clear, so users know where they will go.
      </p>

      <strong>Tips for Better Navigation</strong>
      <ul className="list-disc list-inside pl-6">
        <li>Place the menu inside a <code>&lt;header&gt;</code> element for semantic clarity.</li>
        <li>Use consistent link names so users know what to expect.</li>
        <li>Ensure the menu appears on all pages for easy navigation.</li>
      </ul>

      <h2>Summary</h2>
      <p>
        HTML navigation is a simple but crucial part of a website. Using elements like <code>&lt;nav&gt;</code>, <code>&lt;ul&gt;</code>, <code>&lt;li&gt;</code>, and <code>&lt;a&gt;</code>, you can build a functional, user-friendly menu.
      </p>

      
    </div>
  );
}
