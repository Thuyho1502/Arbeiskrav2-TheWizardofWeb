"use client";

export default function CSSFlexbox() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">
      <p>
        <strong>Flexbox</strong> (Flexible Box Layout) is a CSS layout method that makes it easy
        to align and organize elements in one dimension (either horizontally or vertically). It
        is especially useful for responsive designs.
      </p>
      <br />

      <h3>Basic Concepts</h3>
      <ul className="list-disc list-inside pl-6">
        <li>
          <strong>Flex Container:</strong> An element with <code>display: flex;</code>. It holds
          <strong>flex items</strong>.
        </li>
        <li>
          <strong>Flex Items:</strong> Elements inside a flex container. Flexbox controls how
          these elements are arranged and resized.
        </li>
      </ul>
      <br />

      <h3>Getting Started</h3>
      <p>Start with a container and some items:</p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<div class="container">
  <div class="flex-item">1</div>
  <div class="flex-item">2</div>
  <div class="flex-item">3</div>
  <div class="flex-item">4</div>
</div>

.container {
  display: flex;
}`}
      </pre>
      <br />

      <h3>Important Properties</h3>

      <h4>1. <code>flex-direction</code></h4>
      <p>Determines the main axis direction:</p>
      <ul className="list-disc list-inside pl-6">
        <li><code>row</code> (default) – elements in a horizontal row.</li>
        <li><code>column</code> – elements stacked vertically.</li>
      </ul>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`.container {
  display: flex;
  flex-direction: row; /* or column */
}`}
      </pre>
      <br />

      <h4>2. <code>justify-content</code></h4>
      <p>Controls spacing along the main axis:</p>
      <ul className="list-disc list-inside pl-6">
        <li><code>flex-start</code> – items at the start.</li>
        <li><code>center</code> – items centered.</li>
        <li><code>space-between</code> – equal space between items.</li>
      </ul>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`.container {
  display: flex;
  justify-content: center;
}`}
      </pre>
      <br />

      <h4>3. <code>align-items</code></h4>
      <p>Controls alignment along the cross axis (perpendicular to main axis):</p>
      <ul className="list-disc list-inside pl-6">
        <li><code>stretch</code> (default) – items stretch to fill container height/width.</li>
        <li><code>center</code> – items centered along the cross axis.</li>
      </ul>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`.container {
  display: flex;
  align-items: center;
}`}
      </pre>
      <br />

      <h3>Example: Simple Flexbox Layout</h3>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<div class="container">
  <div class="flex-item">1</div>
  <div class="flex-item">2</div>
  <div class="flex-item">3</div>
</div>

/* CSS */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 200px;
  border: 2px solid black;
}

.flex-item {
  width: 50px;
  height: 50px;
  background-color: lightblue;
  text-align: center;
}`}
      </pre>
      <br />

      <h3>Key Points to Remember</h3>
      <ul className="list-disc list-inside pl-6">
        <li>Flexbox is a <strong>one-dimensional layout</strong> (row or column).</li>
        <li>It provides <strong>flexibility</strong> without complex floats or positioning.</li>
        <li>Perfect for <strong>responsive layouts</strong> that adapt to different screen sizes.</li>
      </ul>
    </div>
  );
}
