"use client";
import React from "react";

export default function IfElseAndStringMethods() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">
      

      <section>
        <h2 className="text-2xl font-bold mb-2">1. What is if/else?</h2>
        <p>
          The <code>if/else</code> structure is a basic tool to control program
          flow based on conditions:
        </p>
        <ul className="list-disc ml-6">
          <li><strong>if block:</strong> runs code only if the condition is true.</li>
          <li><strong>else block:</strong> runs code if the if condition is false.</li>
          <li>
            <strong>else if block:</strong> allows multiple conditions before reaching else.
          </li>
        </ul>
        <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`let age = 20; 
if (age >= 18) {
  console.log("You can drive!");
} else {
  console.log("You are not old enough to drive.");
}`}
        </pre> <br />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">2. Operators in if/else</h2>
        <p>Comparison operators:</p>
        <ul className="list-disc ml-6">
          <li><code>==</code> : equal (ignores type)</li>
          <li><code>===</code> : strictly equal (checks type)</li>
          <li><code>!=</code> : not equal</li>
          <li><code>!==</code> : strictly not equal</li>
          <li><code>&gt;</code>: Greater than</li>
          <li><code>&lt;</code>: Less than</li>
          <li> <code>&gt;=</code>: Greater than or equal to</li>
          <li><code>&lt;=</code>: Less than or equal to</li>
        </ul> <br />
        <p>Logical operators:</p>
        <ul className="list-disc ml-6">
          <li><code>&&</code> : AND</li>
          <li><code>||</code> : OR</li>
          <li><code>!</code> : NOT</li>
        </ul><br />
        <p>Ternary operator (short if/else):</p>
        <ul className="list-disc ml-6">
          <li>An operator that allows you to write a simple if/else on one line.</li>
          <li>Syntax: condition ? expressionIfTrue : expressionIfFalse;</li>
        </ul>
        <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`let message = (age >= 18) ? "Adult" : "Child";`}
        </pre>
      </section> <br />

      <section>
        <h2 className="text-2xl font-bold mb-2">3. Example of Multiple Conditions</h2>
        <pre  className="bg-gray-800 text-green-300 p-4 rounded">
{`let userAge = 20;
let hasLicense = true;

if (userAge >= 18 && hasLicense) {
  console.log("You can drive!");
} else if (userAge === 18) {
  console.log("You are just old enough to drive.");
} else {
  console.log("You are not old enough to drive.");
}`}
        </pre>
      </section> <br />

      <section>
        <h2 className="text-2xl font-bold mb-2">4. String Methods</h2>

        <h3 className="text-xl font-semibold mb-1">a. toUpperCase()</h3>
        <p>Converts all letters in a string to uppercase:</p>
        <pre  className="bg-gray-800 text-green-300 p-4 rounded">
{`let favoriteMovie = "Lord of the Rings";
console.log(favoriteMovie.toUpperCase());
// Output: "LORD OF THE RINGS"`}
        </pre>

        <h3 className="text-xl font-semibold mb-1">b. toLowerCase()</h3>
        <p>Converts all letters in a string to lowercase:</p>
        <pre  className="bg-gray-800 text-green-300 p-4 rounded">
{`let favoriteMovie = "Lord of the Rings";
console.log(favoriteMovie.toLowerCase());
// Output: "lord of the rings"`}
        </pre>

        <h3 className="text-xl font-semibold mb-1">c. includes()</h3>
        <p>Checks if a string contains a substring:</p>
        <pre  className="bg-gray-800 text-green-300 p-4 rounded">
{`let myPoem = "Roses are red, violets are blue";
console.log(myPoem.includes("blue")); // true
console.log(myPoem.includes("green")); // false`}
        </pre>

        <h3 className="text-xl font-semibold mb-1">d. length</h3>
        <p>Returns the number of characters in a string, including spaces:</p>
        <pre  className="bg-gray-800 text-green-300 p-4 rounded">
{`let myPoem = "Roses are red, violets are blue";
console.log(myPoem.length); // 27`}
        </pre>
      </section> <br />

      <section>
        <h2 className="text-2xl font-bold mb-2">5. Key Takeaways</h2>
        <ul className="list-disc ml-6">
          <li><code>if</code> checks a condition.</li>
          <li><code>else</code> handles all other cases.</li>
          <li><code>else if</code> adds extra conditions between if and else.</li>
          <li>Logical and comparison operators make complex conditions possible.</li>
          <li>
            String methods like <code>toUpperCase()</code>, <code>toLowerCase()</code>, <code>includes()</code>, and <code>length</code> help process and validate text.
          </li>
        </ul>
      </section>
    </div>
  );
}
