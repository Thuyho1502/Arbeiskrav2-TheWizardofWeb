"use client";
import React from "react";

export default function OnclickGuide() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">
    
      <section>
        <h2>1. What is onclick?</h2>
        <p>
          <code>onclick</code> is an event handler used to detect and respond to clicks on HTML elements. 
          When a user clicks an element that has an <code>onclick</code> event, the specified JavaScript code will execute.
        </p>
        <p><strong>Why use onclick?</strong></p>
        <ul className="list-disc list-inside pl-6">
          <li>It allows interaction with users.</li>
          <li>You can change content, show hidden elements, or perform actions based on user clicks.</li>
          <li>It is one of the most common ways to make web pages interactive.</li>
        </ul>
      </section>
<br />
      <section>
        <h2>2. How to use onclick</h2>
        <p>
          You can attach <code>onclick</code> directly in HTML by using the <code>onclick</code> attribute and specifying the function to run when clicked.
        </p>
        <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<button onclick="changeText()">Click Me</button>`}
        </pre>
        <p>
          In this example, when the button is clicked, the <code>changeText()</code> function is called.
        </p>
      </section><br />

      <section>
        <h2>3. Example function reacting to a click</h2>
        <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<button onclick="changeText()">Click Me!</button>
<p id="demo">Here comes the content...</p>

<script>
function changeText() {
  alert("We are changing the text! :O");
  document.getElementById("demo").innerHTML = "The text has been changed!";
}
</script>`}
        </pre>
        <p>
          Explanation:
          When the button is clicked, the <code>changeText()</code> function runs. 
          It uses <code>document.getElementById("demo")</code> to select the paragraph and changes its content using <code>innerHTML</code>.
        </p>
      </section>
      <br />

      <section>
        <h2>4. Multiple elements with onclick</h2>
        <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<button onclick="changeText()">Click Me!</button>
<img id="img" src="image.jpg" onclick="changeImage()">
<p id="demo">Here comes the content...</p>

<script>
function changeText() {
  document.getElementById("demo").innerHTML = "The text has been changed :O";
}

function changeImage() {
  document.getElementById("img").src = "new-image.jpg";
}
</script>`}
        </pre>
        <p>
          Explanation:
          A button and an image both have onclick events. Clicking the button changes the paragraph text, and clicking the image changes the image source.
        </p>
      </section>
<br />
      <section>
        <h2>5. Attaching onclick via JavaScript</h2>
        <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<button id="my-button">Click Me!</button>
<p id="demo-txt">Here comes the content...</p>

<script>
const myButton = document.getElementById("my-button");
const demoTxt = document.getElementById("demo-txt");

myButton.onclick = myFunction;

function myFunction() {
  demoTxt.innerHTML = "The text has been changed from JavaScript!";
}
</script>`}
        </pre>
        <p>
          Explanation:
          Here we attach the onclick event directly via JavaScript instead of using the HTML attribute. 
          The function updates the paragraph text when the button is clicked.
        </p>
      </section>
<br />
      <section>
        <h2>Summary</h2>
        <ul className="list-disc list-inside pl-6">
          <li><code>onclick</code> responds to clicks on HTML elements.</li>
          <li>It can be used to change text, images, or other content dynamically.</li>
          <li>You can attach onclick events directly in HTML or via JavaScript.</li>
          <li>Multiple elements can have their own click handlers for interactivity.</li>
        </ul>
      </section>
    </div>
  );
}
