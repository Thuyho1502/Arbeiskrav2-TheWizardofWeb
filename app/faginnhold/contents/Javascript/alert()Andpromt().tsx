"use client";
import React from "react";

export default function AlertsAndPrompts() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">
           <section>
        <h2 className="text-2xl font-bold mb-2">1. alert()</h2>
        <p>
          The <code>alert()</code> method is used to show messages in a popup
          box. The user cannot respond, only dismiss it.
        </p>
        <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`alert("This is a message."); 
// Shows a popup with text`}
        </pre> <br />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">2. Numbers and Text in Alerts</h2>
        <p>You can display both numbers and text:</p>
        <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`alert(28); 
// Shows 28

alert("Hello, this is a text message!"); 
// Shows a text popup`}
        </pre> <br />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">
          3. Using Variables in Alerts
        </h2>
        <p>
          Variables can be inserted into alerts. Template literals (backticks
          <code>`</code>) make it easy to combine text and variables.
        </p>
        <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`const myName = "Amina"; 
const myAge = 28; 

alert(\`My name is \${myName} and I am \${myAge} years old.\`);`}
        </pre> <br />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">
          4. Synchronous Execution
        </h2>
        <p>
          JavaScript runs top to bottom. Multiple alerts will appear one after
          the other, in order. Refresh the page to reload updated code.
        </p>  <br />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">5. prompt()</h2>
        <p>
          The <code>prompt()</code> method asks the user for input and returns
          it as a string:
        </p>
        <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`const userAge = prompt("How old are you?"); 
// Opens a dialog with input field`}
        </pre> <br />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">
          6. Storing and Using Prompt Data
        </h2>
        <p>
          Prompt values can be stored and used to update HTML content.
        </p>
        <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<body>
  <p id="age-txt">Your age will appear here</p>
  <script>
    const ageTxt = document.getElementById("age-txt");
    const userAge = prompt("How old are you?");
    ageTxt.innerHTML = \`Your age is: \${userAge}\`;
  </script>
</body>`}
        </pre> <br />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">
          7. Prompt Always Returns a String
        </h2>
        <p>
          Even if you type a number, prompt saves it as a string. This can cause
          unexpected results when doing math.
        </p>
        <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`const userAge = prompt("How old are you?"); 
const favNumber = prompt("Your favorite number?"); 
alert(userAge + favNumber); 
// If 28 and 13 → shows "2813" not 41`}
        </pre> <br />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">8. parseInt()</h2>
        <p>
          <code>parseInt()</code> converts a string into a number, so math works
          correctly:
        </p>
        <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`const chocolates = parseInt(prompt("How many chocolates?")); 
const randomNum = parseInt(prompt("Enter a random number")); 
alert(chocolates + randomNum); 
// 5 + 2 = 7`}
        </pre> <br />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">9. typeof</h2>
        <p>
          <code>typeof</code> checks the datatype of a variable.
        </p>
        <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`const chocolates = prompt("How many chocolates?"); 
console.log(typeof chocolates); 
// string

const numChocolates = parseInt(chocolates); 
console.log(typeof numChocolates); 
// number`}
        </pre> <br />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">10. Key Takeaways</h2>
        <ul className="list-disc ml-6">
          <li><code>alert()</code> shows simple messages.</li>
          <li><code>prompt()</code> gets user input as a string.</li>
          <li>
            Use <code>parseInt()</code> to convert strings to numbers for math.
          </li>
          <li>
            Use <code>typeof</code> to check the type of a variable.
          </li>
        </ul>
      </section>
    </div>
  );
}
