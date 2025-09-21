"use client";
import React from "react";

export default function VariablesAndDataTypes() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">
      
      <section>
        <h2 className="text-2xl font-bold mb-2">1. What is a Variable?</h2>
        <p>
          A variable is like a <span className="italic">container</span> (or
          “bucket”) used to store data. The stored data can later be accessed
          and reused. For example, we can store a user’s name in a variable and
          display it across multiple places on a webpage.
        </p>
      </section> <br />

      <section>
        <h2 className="text-2xl font-bold mb-2">2. Data Types</h2>
        <p>
          It’s important to know what type of data a variable contains, since
          the application needs to handle it correctly. The main data types we
          focus on here are:
        </p>
        <ul className="list-disc ml-6">
          <li>
            <strong>Number:</strong> Represents numbers.
          </li>
          <li>
            <strong>String:</strong> Represents text (e.g.{" "}
            <code>"Amina"</code>). Text must be wrapped in quotes.
          </li>
          <li>
            <strong>Boolean:</strong> Represents truth values:{" "}
            <code>true</code> or <code>false</code>.
          </li>
        </ul>
      </section> <br />

      <section>
        <h2 className="text-2xl font-bold mb-2">3. Creating a Variable</h2>
        <p>
          In JavaScript, we use <code>const</code> or <code>let</code>:
        </p>
        <ul className="list-disc ml-6">
          <li>
            <code>const</code>: Used for values that will not change.
          </li>
          <li>
            <code>let</code>: Used when the value may change.
          </li>
        </ul>
        <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`const birthYear = 1996; 
// Use const because a birth year never changes

let age = 28; 
// Use let because age will change`}
        </pre>
      </section> <br />

      <section>
        <h2 className="text-2xl font-bold mb-2">4. Naming Variables</h2>
        <ul className="list-disc ml-6">
          <li>Must begin with a letter, underscore (_) or dollar sign ($).</li>
          <li>Cannot use reserved words (e.g. <code>if</code>).</li>
          <li>
            Case-sensitive: <code>myVar</code> and <code>MyVar</code> are
            different.
          </li>
        </ul>
      </section> <br />

      <section>
        <h2 className="text-2xl font-bold mb-2">
          5. Difference Between <code>const</code> and <code>let</code>
        </h2>
        <ul className="list-disc ml-6">
          <li>
            <code>const:</code> Cannot be reassigned.
          </li>
          <li>
            <code>let:</code> Can be reassigned.
          </li>
        </ul>
        <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`const birthYear = 1996; 
// Error if trying to change this later

let age = 28; 
// Can be updated over time`}
        </pre>
      </section> <br />

      <section>
        <h2 className="text-2xl font-bold mb-2">6. Code Quality Rules</h2>
        <ul className="list-disc ml-6">
          <li>
            <strong>Write code in English:</strong> Avoid special characters
            like æ, ø, å.
          </li>
          <li>
            <strong>Semicolons:</strong> Best practice to end lines with{" "}
            <code>;</code>.
          </li>
          <li>
            <strong>Formatting:</strong> Use proper indentation and spacing.
          </li>
          <li>
            <strong>CamelCase:</strong> Use <code>camelCase</code> for variable
            names (e.g. <code>myVariableName</code>).
          </li>
        </ul>
      </section> <br />

      <section>
        <h2 className="text-2xl font-bold mb-2">
          7. Template Literals (Backticks)
        </h2>
        <p>
          Use backticks (<code>`</code>) instead of quotes to embed variables in
          strings with <code>${"{variable}"}</code>.
        </p>
        <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`const name = "Amina";
console.log(\`Hello, my name is \${name}\`);
// Output: Hello, my name is Amina`}
        </pre>
        <p className="mt-2">
          On most keyboards, type backticks using{" "}
          <code>Shift</code> + the key next to <code>1</code>.
        </p>
      </section> <br />

      <section>
        <h2 className="text-2xl font-bold mb-2">8. Comments in JavaScript</h2>
        <p>
          Comments are notes in code that are ignored by the program, used to
          explain or document. They don’t show up in the browser or console.
        </p>
        <ul className="list-disc ml-6">
          <li>
            <strong>Single-line:</strong> Use <code>//</code>.
          </li>
          <li>
            <strong>Multi-line:</strong> Wrap in <code>/* */</code>.
          </li>
        </ul>
        <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`// This is a single-line comment

/* 
 This is a 
 multi-line comment 
*/`}
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">
          9. Connecting JavaScript with HTML
        </h2>
        <h3 className="text-xl font-semibold mb-1">
          a. Accessing HTML Elements
        </h3>
        <p>
          Use <code>document.getElementById</code> to fetch an element by its ID
          from HTML:
        </p>
        <pre className="bg-gray-800 text-green-300 p-4 rounded2">
{`<body>
  <p id="dog-text">My dog's name is Minnie</p> 
  <script>
    const dogText = document.getElementById("dog-text");
  </script>
</body>`}
        </pre>

        <h3 className="text-xl font-semibold mt-4 mb-1">b. Console Output</h3>
        <p>
          Use <code>console.log()</code> to check if the element was fetched
          correctly:
        </p>
        <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`console.log(dogText); 
// Prints the <p> tag in the console`}
        </pre>

        <h3 className="text-xl font-semibold mt-4 mb-1">
          c. Manipulating HTML with <code>innerHTML</code>
        </h3>
        <p>
          Change the content of an element by modifying its{" "}
          <code>innerHTML</code>:
        </p>
        <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`dogText.innerHTML = "My dog's name is Balder"; 
// Replaces Minnie with Balder`}
        </pre>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">10. Key Takeaways</h2>
        <ul className="list-disc ml-6">
          <li>
            Use <code>getElementById()</code> to fetch specific HTML elements.
          </li>
          <li>
            Use <code>console.log()</code> to test your references.
          </li>
          <li>
            Use <code>innerHTML</code> to change text inside elements.
          </li>
          <li>
            Use backticks (<code>`</code>) and <code>${"{ }"}</code> for dynamic
            strings.
          </li>
        </ul>
      </section>
    </div>
  );
}
