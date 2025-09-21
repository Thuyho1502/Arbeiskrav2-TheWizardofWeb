"use client";
import React from "react";

export default function Counters() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">
     

      <section>
        <h2>1. What is a Counter?</h2>
        <p>
          A counter is a number that starts at a certain value (like 0) and increases or decreases 
          each time an event occurs. Think of it as a tally that keeps track of how many times 
          something happens. A counter is just a variable—it doesn’t have to be named <code>counter</code>; 
          you could call it <code>myFunnyCounter</code> or anything you like.
        </p>
      </section> <br />

      <section>
        <h2>2. How to Create a Simple Counter</h2>
        <p>To create a counter in JavaScript, you need:</p>
        <ul className="list-disc list-inside pl-6">
          <li>A variable to store the counter value.</li>
          <li>A function that changes the counter value.</li>
          <li>A way to display the value on the webpage.</li>
        </ul>

        <p>Example of a simple counter:</p>
        <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`let counter = 0;

function increaseCounter() {
  counter += 1;
  console.log(counter);
}`}
        </pre>
        <p>
          Explanation: </p>
          <ul className="list-disc list-inside pl-6">
            <li><code>counter</code> stores the counter's value, starting at 0.</li>
            <li><code>increaseCounter()</code> adds 1 to the counter each time it is called and logs it in the console.</li>
          </ul>
        
      </section>
<br />
      <section>
        <h2>3. Using a Counter on a Webpage</h2>
        <p>
          You can display a counter in an HTML element like a <code>&lt;div&gt;</code> or <code>&lt;p&gt;</code> and update it when events occur.
        </p>

        <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<button onclick="increaseCounter()">Click Me!</button>
<p id="display">0</p>

<script>
let counter = 0;

function increaseCounter() {
  counter += 1;
  document.getElementById("display").innerText = counter;
}
</script>`}
        </pre>
        <p>
          Explanation:
          <ul className="list-disc list-inside pl-6">
            <li>The button triggers the <code>increaseCounter()</code> function when clicked.</li>
            <li>The function increments the counter and updates the text inside the paragraph with ID <code>display</code>.</li>
          </ul>
        </p>
      </section>
<br />
      <section>
        <h2>4. Summary</h2>
        <ul className="list-disc list-inside pl-6">
          <li>A counter keeps track of a number that can increase or decrease.</li>
          <li>You can create a counter with a variable and update it with a function.</li>
          <li>Events like button clicks can change the counter and display it on the page.</li>
          <li>Counters are useful for interactive applications, like counting how many times a user clicks a button!</li>
        </ul>
      </section>
    </div>
  );
}
