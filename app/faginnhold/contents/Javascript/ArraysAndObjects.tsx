"use client";
import React from "react";

export default function ArraysObjects() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">
      

      <h2>1. What is an Array?</h2>
      <p>
        An <strong>array</strong> is a data type that lets you store multiple
        values inside a single variable. This is very useful when you have
        several related items you want to treat together. For example, an array
        can store favorite foods such as pasta, pizza, and Indian food.
      </p>

      <p>
        In JavaScript, arrays are created using square brackets 
        <code>([])</code>. An array can contain strings, numbers, booleans, or
        even a mix of data types.
      </p>
<br />
      <h3>Creating an Array</h3>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
        {`const foodArray = ["pasta", "pizza", "indian"];`}
      </pre>
      <p>
        This creates an array with three strings: <code>"pasta"</code>,{" "}
        <code>"pizza"</code>, and <code>"indian"</code>.
      </p> <br />
      <h3>Indexing</h3>
      <p>
        Array indexing starts at <strong>0</strong>, not 1:
      </p>
      <ul className="list-disc list-inside pl-6">
        <li><code>foodArray[0]</code> → "pasta"</li>
        <li><code>foodArray[1]</code> → "pizza"</li>
        <li><code>foodArray[2]</code> → "indian"</li>
      </ul>
<br />
      <h3>Changing Values</h3>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
        {`foodArray[0] = "burger";
console.log(foodArray);
// ["burger", "pizza", "indian"]`}
      </pre>
<br />
      <h3>Iterating Through an Array</h3>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
        {`for (let i = 0; i < foodArray.length; i++) {
  console.log(foodArray[i]);
}`}
      </pre>
      <p>
        The <code>.length</code> property makes sure the loop runs the correct
        number of times, no matter how many items the array contains.
      </p>

      <h3>Arrays in HTML</h3>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
        {`const foodArray = ["pasta", "pizza", "indian"];
const foodList = document.getElementById("foodList");

for (let i = 0; i < foodArray.length; i++) {
  let listItem = document.createElement("li");
  listItem.textContent = foodArray[i];
  foodList.appendChild(listItem);
}`}
      </pre>
<br />
      <h2>2. What is an Object?</h2>
      <p>
        An <strong>object</strong> stores related data in{" "}
        <em>key-value pairs</em>, inside curly braces <code>{}</code>.
      </p>

      <pre className="bg-gray-800 text-green-300 p-4 rounded">
        {`const dracula = {
  name: "Dracula",
  age: 1000,
  img: "dracula.jpg"
};`}
      </pre>
<br />
      <h3>Arrays of Objects</h3>
      <p>
        Objects can also be stored inside arrays. For example, a list of
        monsters:
      </p>

      <pre className="bg-gray-800 text-green-300 p-4 rounded">
        {`const monsters = [
  { name: "Dracula", age: 1000, img: "dracula.jpg" },
  { name: "Frankenstein", age: 200, img: "frankenstein.jpg" },
  { name: "The Werewolf", age: 500, img: "werewolf.jpg" }
];`}
      </pre>

      <h3>Accessing Properties</h3>
      <ul className="list-disc list-inside pl-6">
        <li><code>dracula.name</code> → Dracula</li>
        <li><code>dracula.age</code> → 1000</li>
        <li><code>dracula.img</code> → dracula.jpg</li>
        <li><code>monsters[0].name</code> → Dracula</li>
      </ul>

      <h3>Using Objects in the DOM</h3>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
        {`const monsterNameElement = document.getElementById("monsterName");
monsterNameElement.innerHTML = dracula.name;

const monsterImageElement = document.getElementById("monsterImage");
monsterImageElement.src = dracula.img;`}
      </pre>

      <h3>Looping Through Arrays of Objects</h3>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
        {`const monsterContainer = document.getElementById("monsterContainer");

for (let i = 0; i < monsters.length; i++) {
  const monster = monsters[i];
  monsterContainer.innerHTML += \`
    <h3>\${monster.name}</h3>
    <img src="\${monster.img}" />
  \`;
}`}
      </pre>

      <h2>Summary</h2>
      <ul className="list-disc list-inside pl-6">
        <li>Arrays store multiple values in one variable.</li>
        <li>Objects store key-value pairs.</li>
        <li>Arrays can contain objects.</li>
        <li>You can loop through arrays to dynamically generate content.</li>
      </ul>
    </div>
  );
}
