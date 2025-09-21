"use client";
import React from "react";

export default function Loops() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">
      
      <p>
        Loops allow us to execute a block of code multiple times without repeating the same lines. This is especially useful when performing a task a specific number of times, like counting or printing a message multiple times.
      </p>
      <br />

      <h2>1. What is a For Loop?</h2>
      <p>
        A <strong>for loop</strong> has three main parts:
      </p>
      <ul className="list-disc list-inside pl-6">
        <li>Start: Set an initial value for the loop variable, e.g., <code>let i = 1</code>.</li>
        <li>Condition: Determines when the loop should stop, e.g., <code>i &lt;= 5</code>.</li>
        <li>Increment: Changes the variable each iteration, e.g., <code>i++</code>.</li>
      </ul>

      <h3>Example: Print Numbers 1 to 5</h3>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
        {`for (let i = 1; i <= 5; i++) {
  console.log(i);
}`}
      </pre>
      <p>
        The loop starts at 1, runs while i ≤ 5, and increases i by 1 each time.
      </p>

      <h3>Example: Print a Message Multiple Times</h3>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
        {`for (let i = 0; i < 3; i++) {
  console.log("Hello, world!");
}`}
      </pre>

      <h3>Example: Countdown from 5 to 1</h3>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
        {`for (let i = 5; i > 0; i--) {
  console.log(i);
}`}
      </pre>
<br />
      <h2>2. What is a While Loop?</h2>
      <p>
        A <strong>while loop</strong> runs as long as a specified condition is true. Unlike for loops, while loops are useful when you don't know in advance how many times the loop will run.
      </p>

      <h3>Example: Print Numbers 1 to 5</h3>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
        {`let counter = 1;
while (counter <= 5) {
  console.log(counter);
  counter++;
}`}
      </pre>

      <h3>Example: Generate Random Numbers Until a Condition</h3>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
        {`let randomNumber = 0;
while (randomNumber < 8) {
  randomNumber = Math.floor(Math.random() * 10);
  console.log("Generated number:", randomNumber);
}`}
      </pre>
<br />
      <h3>Beware of Infinite Loops</h3>
      <p>An eternal loop occurs when the condition never becomes false, and the code thus runs infinitely. 
        This can happen if we forget to update the variable inside the loop.</p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
        {`let secondCounter = 1;
while (secondCounter < 5) {
  console.log(secondCounter);
  // secondCounter++;
  // Without incrementing, the loop never ends
}`}
      </pre>
      <p>Here, secondCounter will always be 1, since we are not updating the value, and the loop runs infinitely. 
        Avoid eternal loops by making sure that the condition will become false at some point.</p> <br />

      <h2>Summary</h2>
      <ul className="list-disc list-inside pl-6">
        <li>For loops are used when the number of repetitions is known.</li>
        <li>While loops are used when the number of repetitions depends on a condition.</li>
        <li>Always update your variables inside the loop to prevent infinite loops.</li>
      </ul>
    </div>
  );
}
