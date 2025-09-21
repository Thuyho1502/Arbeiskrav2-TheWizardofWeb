"use client";
import React from "react";

export default function ArrayMethods() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">
      

      <main className="space-y-10">
        {/* map() */}
        <section id="map">
          <h2 className="text-2xl font-semibold mb-2">map()</h2>
          <p>
            The <code>map()</code> method creates a new array by transforming each element of the
            original array. For example:
          </p>
          <pre className="bg-gray-800 text-green-300 p-4 rounded">
            <code>
{`const animals = ["cat", "dog", "bird"];
const bigAnimals = animals.map((animal) => animal.toUpperCase());
console.log(bigAnimals);
// Output: ["CAT", "DOG", "BIRD"]`}
            </code>
          </pre>
          <p>The <code>map()</code> function always returns a new array.</p>
        </section>

        {/* filter() */}
        <section id="filter">
          <h2 className="text-2xl font-semibold mb-2">filter()</h2>
          <p>
            The <code>filter()</code> method creates a new array that only contains elements that
            meet a specific condition:
          </p>
          <pre className="bg-gray-800 text-green-300 p-4 rounded">
            <code>
{`const animals = ["cat", "dog", "horse", "bird"];
const animalsWithH = animals.filter((animal) => animal.includes("h"));
console.log(animalsWithH);
// Output: ["dog", "horse"]`}
            </code>
          </pre>
        </section>

        {/* forEach() */}
        <section id="forEach">
          <h2 className="text-2xl font-semibold mb-2">forEach()</h2>
          <p>
            The <code>forEach()</code> method performs an action on each element in the array but
            does not return a new array:
          </p>
          <pre className="bg-gray-800 text-green-300 p-4 rounded">
            <code>
{`const fruits = ["apple", "banana", "orange"];
fruits.forEach((fruit) => console.log(\`Hello, \${fruit}!\`));
// Output:
// Hello, apple!
// Hello, banana!
// Hello, orange!`}
            </code>
          </pre>
        </section>

        {/* find() */}
        <section id="find">
          <h2 className="text-2xl font-semibold mb-2">find()</h2>
          <p>
            The <code>find()</code> method returns the first element that matches a condition:
          </p>
          <pre className="bg-gray-800 text-green-300 p-4 rounded">
            <code>
{`const fruits = ["apple", "banana", "kiwi", "orange"];
const longFruit = fruits.find((fruit) => fruit.length > 5);
console.log(longFruit);
// Output: "banana"`}
            </code>
          </pre>
        </section>

        {/* push() */}
        <section id="push">
          <h2 className="text-2xl font-semibold mb-2">push()</h2>
          <p>
            The <code>push()</code> method adds new elements to the end of an array:
          </p>
          <pre className="bg-gray-800 text-green-300 p-4 rounded">
            <code>
{`const fruits = ["apple", "banana"];
fruits.push("mango");
console.log(fruits);
// Output: ["apple", "banana", "mango"]`}
            </code>
          </pre>
        </section>
<br />
        {/* Summary */}
        <section id="summary">
          <h2 className="text-2xl font-semibold mb-2">Summary</h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>map:</strong> Returns a new array with transformed values.
            </li>
            <li>
              <strong>filter:</strong> Returns a new array with elements that match a condition.
            </li>
            <li>
              <strong>forEach:</strong> Executes a function on each element (no new array).
            </li>
            <li>
              <strong>find:</strong> Returns the first element that matches a condition.
            </li>
            <li>
              <strong>push:</strong> Adds a new element to the end of an array.
            </li>
          </ul>
        </section>
      </main>

      <footer className="mt-10 text-sm text-gray-500">
        <p>© 2025 JavaScript Learning Guide</p>
      </footer>
    </div>
  );
}
