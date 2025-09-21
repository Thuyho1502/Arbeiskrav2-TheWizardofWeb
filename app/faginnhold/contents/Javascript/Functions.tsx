"use client";
import React from "react";

export default function Functions() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">
     
      <section>
        <h2 className="text-2xl font-bold mb-2">1. What is a Function?</h2>
        <p>
          A function in JavaScript is a block of code that can be executed anytime. 
          Functions help organize and reuse code, making programs easier to read and maintain.
        </p>
        <p><strong>Why use functions?</strong></p>
        <ul className="list-disc ml-6">
          <li>Reduce code repetition</li>
          <li>Increase readability</li>
          <li>Make code easier to maintain</li>
        </ul>
      </section>
<br />
      <section>
        <h2 className="text-2xl font-bold mb-2">2. Declaring a Function</h2>
        <p>
          Use the <code>function</code> keyword, followed by the function name, parentheses, and curly braces:
        </p>
        <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`function myFunction() {
  console.log("Hello, world!");
}`}
        </pre>
        <p>
          Explanation:
          <ul className="list-disc ml-6">
            <li><code>function</code> – keyword to declare a function</li>
            <li><code>myFunction</code> – the name of the function</li>
            <li><code>()</code> – parentheses for parameters</li>
            <li><code>{'{}'}</code> – curly braces wrap the code that runs when the function is called</li>
          </ul>
        </p>
      </section> <br />

      <section>
        <h2 className="text-2xl font-bold mb-2">3. Calling a Function</h2>
        <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`myFunction(); // Calls the function and prints "Hello, world!"`}
        </pre>
      </section>
<br />
      <section>
        <h2 className="text-2xl font-bold mb-2">4. Functions with Parameters</h2>
        <p>
          Functions can accept values (parameters) to use inside the function:
        </p>
        <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`function sayHello(name) {
  console.log("Hello, " + name + "!");
}

sayHello("Ola"); // Output: Hello, Ola!
sayHello("Kari"); // Output: Hello, Kari!`}
        </pre>
        <p>
          <strong>Explanation:</strong> <code>name</code> is a parameter that receives the value passed when the function is called.
        </p>
      </section> <br />

      <section>
        <h2 className="text-2xl font-bold mb-2">5. Functions that Return Values</h2>
        <p>
          Functions can also return values using <code>return</code>:
        </p>
        <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`function add(a, b) {
  return a + b;
}

let result = add(3, 4);
console.log(result); // Output: 7`}
        </pre>
        <p>
          <strong>Explanation:</strong> <code>return</code> sends a value back from the function. In this example, <code>add</code> returns the sum of <code>a</code> and <code>b</code>.
        </p>
      </section> <br />

      <section>
        <h2 className="text-2xl font-bold mb-2">6. Anonymous Functions</h2>
        <p>
          An anonymous function has no name. It can be assigned to a variable or passed as an argument.
        </p>
        <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`let sayHelloAnonymous = function(name) {
  console.log("Hello, " + name + "!");
};

sayHelloAnonymous("Maja"); // Output: Hello, Maja!`}
        </pre>
        <p>
          <strong>Explanation:</strong> The function is stored in the variable <code>sayHelloAnonymous</code> and can be called like a normal function.
        </p>
      </section> <br />

      <section>
        <h2 className="text-2xl font-bold mb-2">7. Key Takeaways</h2>
        <ul className="list-disc ml-6">
          <li>Functions help organize and reuse code.</li>
          <li>Functions can accept parameters and return values.</li>
          <li>Anonymous functions are useful when you don’t need a function name.</li>
        </ul>
      </section>
    </div>
  );
}
