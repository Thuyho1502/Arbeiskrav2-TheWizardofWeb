"use client";
import React from "react";

export default function AddEventListenerGuide() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">
      

      <section>
        <h2>1. What is addEventListener?</h2>
        <p>
          <code>addEventListener</code> is a JavaScript method that lets you attach an event listener to an HTML element.
          This allows you to respond to events that occur on the element, such as clicks, key presses, mouse movements, and more.
        </p>
        <p><strong>Why use addEventListener?</strong></p>
        <ul className="list-disc list-inside pl-6">
          <li><strong>Multiple events:</strong> You can attach multiple events to the same element without overwriting existing ones.</li>
          <li><strong>Better control:</strong> You gain control over how events are handled, like preventing them from bubbling up to parent elements.</li>
          <li><strong>More flexibility:</strong> It’s easier to handle multiple types of events in one script.</li>
        </ul>
      </section>
<br />
      <section>
        <h2>2. How to Use addEventListener</h2>
        <p>The syntax is:</p>
        <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`element.addEventListener(event, function, useCapture);
`}        </pre>
<ul className="list-disc ml-6">
          <li>element: The HTML element to attach the event to.</li>
          <li>event: The name of the event (e.g., 'click', 'mouseover', 'keydown').</li>
          <li>function: The function to run when the event occurs.</li>
          <li>useCapture (optional): Boolean value to handle the event in the capturing phase or bubbling phase (default is false).</li>
        </ul>

      </section>
      <br />

      <section>
        <h2>3. Example: Adding a Click Event to a Button</h2>
        <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<button id="my-button">Click me!</button>
<p id="demo-txt">This is a paragraph.</p>

<script>
const demoTxt = document.getElementById("demo-txt");
const myButton = document.getElementById("my-button");

myButton.addEventListener("click", function() {
  demoTxt.innerHTML = "The text has been changed!";
});
</script>`}
        </pre>
        <p>Explanation: We select the button and paragraph elements, then attach a click event to the button that changes the paragraph’s text.</p>
      </section> <br />

      <section>
        <h2>4. Multiple Events on the Same Element</h2>
        <p>You can attach multiple events to the same element without overwriting existing ones:</p>
        <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<button id="my-button">Trykk på meg!</button> 
<p id="demo-txt">Her kommer det innhold..</p> 

<script> 
// Første hendelse: Endrer teksten når knappen klikkes 
const myButton = document.getElementById("my-button");

myButton.addEventListener("click", function() { 
document.getElementById("demo-txt").innerHTML = "Teksten har plutselig forandret seg etter vi trykket på knappen!"; 
}); 

// Andre hendelse: Endrer bakgrunnsfargen på knappen når musen er over den 
myButton.addEventListener("mouseover", function() { 
myButton.style.backgroundColor = "lightblue"; }); 

// Tredje hendelse: Gjenoppretter bakgrunnsfargen når musen går ut 
myButton.addEventListener("mouseout", function() { 
document.getElementById("myButton").style.backgroundColor = ""; 
}); </script>`}
        </pre>
        <p>Explanation:</p>
        <ul className="list-disc ml-6">
          <li>click: When the button is clicked, the text in<code>&lt;p id="demo-txt"&gt;</code> changes.</li>
          <li>mouseover: When the mouse is over the button, the background color of the button changes to light blue.</li>
          <li>mouseout: When the mouse leaves the button, the background color is restored.</li>
        </ul>
      </section>
<br />
      <section>
        <h2>5. Bubbling, Capturing, and useCapture</h2>
        <p>
          Events in JavaScript go through <strong>event propagation</strong>, meaning they pass through several phases before being handled.
        </p>
        <ul className="list-disc list-inside pl-6">
          <li><strong>Bubbling:</strong> Event starts at the target element and bubbles up to parent elements.</li>
          <li><strong>Capturing:</strong> Event starts at the top (document or window) and moves down to the target element.</li>
        </ul>
        <p><strong>useCapture:</strong> Determines whether the event is handled in capturing phase (<code>true</code>) or bubbling phase (<code>false</code>, default).</p>
        <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<div id="parent">
  <button id="child">Click me!</button>
</div>

<script>
document.getElementById("parent").addEventListener("click", function() {
  alert("Parent clicked during capturing phase!");
}, true);

document.getElementById("child").addEventListener("click", function() {
  alert("Child clicked during bubbling phase!");
});
</script>`}
        </pre>
      </section>
<br />
      <section>
        <h2>6. Removing an Event with removeEventListener</h2>
        <p>
          You can remove an event listener using <code>removeEventListener</code>. You must reference the exact function you used when adding the event.
        </p>
        <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`const myButton = document.getElementById("my-button");

function handleClick() {
  alert("Button clicked!");
}

myButton.addEventListener("click", handleClick);

setTimeout(function() {
  myButton.removeEventListener("click", handleClick);
  alert("Click event removed!");
}, 3000);`}
        </pre>
      </section>
<br />
      <section>
        <h2>Summary</h2>
        <ul className="list-disc list-inside pl-6">
          <li><code>addEventListener</code> allows you to attach event handlers to HTML elements.</li>
          <li>It supports different types of events, like <code>click</code>, <code>mouseover</code>, <code>keydown</code>, etc.</li>
          <li>You can attach multiple events to the same element without overwriting existing handlers.</li>
          <li>You can control event propagation using <code>stopPropagation()</code> and <code>preventDefault()</code>.</li>
          <li>Using <code>addEventListener</code> gives you more flexibility and control over interactive web pages.</li>
        </ul>
      </section>
    </div>
  );
}
