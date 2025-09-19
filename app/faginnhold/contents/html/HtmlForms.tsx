"use client";
import React from "react";

export default function HtmlForms() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">
      <h1>HTML Forms</h1>

      <h2>What are HTML Forms and Input Fields?</h2>
      <p>
        HTML forms are a way to collect data from users on a website. For example, a contact form allows people to send you a message, or a registration form lets users create an account.
      </p>
      <p>
        Input fields are the parts of a form where users can enter information, like their name, email, or password. Think of forms as electronic documents that people fill out.
      </p>

      <h2>How Does an HTML Form Work?</h2>
      <p>
        An HTML form starts with the <code>&lt;form&gt;</code> tag and ends with <code>&lt;/form&gt;</code>. Everything that should be submitted goes between these tags. Forms contain different types of input fields and buttons that allow users to enter data and send it to a server.
      </p>

      <h2>Example Form</h2>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
        <code>
{`<form action="/send-data" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">

  <label for="email">Email:</label>
  <input type="email" id="email" name="email">

  <label for="message">Message:</label>
  <textarea id="message" name="message"></textarea>

  <button type="submit">Send</button>
</form>`}
        </code>
      </pre>

      <h2>Common HTML Input Fields</h2>
      <ul className="list-disc list-inside pl-6">
        <li><code>&lt;input type="text"&gt;</code>: Single-line text field (e.g., name or address).</li>
        <li><code>&lt;input type="email"&gt;</code>: Email field, validates the entered text.</li>
        <li><code>&lt;input type="password"&gt;</code>: Password field, hides the input.</li>
        <li><code>&lt;textarea&gt;</code>: Multi-line text field for messages or comments.</li>
        <li><code>&lt;input type="checkbox"&gt;</code>: Checkbox for selecting one or more options.</li>
        <li><code>&lt;input type="radio"&gt;</code>: Radio button for selecting one option from multiple.</li>
        <li><code>&lt;input type="submit"&gt;</code>: Button that submits the form.</li>
        <li><code>&lt;button type="reset"&gt;</code>: Button that resets the form to its default values.</li>
      </ul>

      <h2>Form Attributes: action and method</h2>
      <ul className="list-disc list-inside pl-6">
        <li><code>action</code>: Specifies the URL where the form data should be sent.</li>
        <li><code>method</code>: Specifies how the data is sent ("GET" or "POST"). "GET" appends data to the URL, while "POST" sends it in the request body (more secure).</li>
      </ul>

      
    </div>
  );
}
