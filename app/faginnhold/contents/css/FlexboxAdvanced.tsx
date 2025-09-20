"use client";

export default function CSSFlexboxAdvanced() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">
      <p>
        After learning the basic Flexbox properties, there are more advanced
        properties that give you even greater control over your layout. Let's
        go through them one by one.
      </p>
      <br />

      <h3>1. <code>flex-wrap</code></h3>
      <p>
        By default, all items in a flex container are on one line. Use{" "}
        <code>flex-wrap</code> to allow items to break into multiple lines if
        necessary:
      </p>
      <ul className="list-disc list-inside pl-6">
        <li><code>nowrap</code> (default) – all items stay on one line.</li>
        <li><code>wrap</code> – items break into multiple lines.</li>
        <li><code>wrap-reverse</code> – items break into lines, reversed order.</li>
      </ul>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`.container {
  display: flex;
  flex-wrap: wrap;
}`}
      </pre>
      <br />

      <h3>2. <code>align-content</code></h3>
      <p>
        Controls the alignment of multiple lines when using <code>flex-wrap</code>.
        It affects the extra space in the container.
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`.container {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}`}
      </pre>
      <br />

      <h3>3. <code>flex-grow</code></h3>
      <p>
        Determines how much an item should grow relative to others:
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`.item {
  flex-grow: 1;
}`}
      </pre>
      <p>
        Items with higher <code>flex-grow</code> values take more available space.
      </p>
      <br />

      <h3>4. <code>flex-shrink</code></h3>
      <p>
        Controls how much an item can shrink if there is not enough space:
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`.item {
  flex-shrink: 0;
}`}
      </pre>
      <p>This item will not shrink even if space is limited.</p>
      <br />

      <h3>5. <code>flex-basis</code></h3>
      <p>Sets the starting size of an item before flex-grow/shrink applies:</p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`.item {
  flex-basis: 200px;
}`}
      </pre>
      <br />

      <h3>6. <code>order</code></h3>
      <p>Change the display order of flex items:</p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`.item {
  order: 1;
}`}
      </pre>
      <p>Items with lower order appear first, higher order appear later.</p>
      <br />

      <h3>7. Shorthand: <code>flex</code></h3>
      <p>
        Combines <code>flex-grow</code>, <code>flex-shrink</code>, and{" "}
        <code>flex-basis</code>:
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`.item {
  flex: 1 0 100px; /* grow shrink basis */
}`}
      </pre>
      <br />

      <h3>8. <code>align-self</code></h3>
      <p>
        Override <code>align-items</code> for individual items:
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`.item {
  align-self: flex-end;
}`}
      </pre>
      <br />

      <h3>Example with multiple properties</h3>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<div class="container">
  <div class="item" style="flex: 1;">Item 1</div>
  <div class="item" style="flex: 2;">Item 2</div>
  <div class="item" style="flex: 1;">Item 3</div>
</div>

/* CSS */
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 300px;
}

.item {
  background-color: lightblue;
  padding: 20px;
  text-align: center;
}`}
      </pre>
      <br />

      <h3>Summary</h3>
      <ul className="list-disc list-inside pl-6">
        <li><code>flex-wrap</code>: allows items to wrap onto multiple lines.</li>
        <li><code>align-content</code>: aligns multiple lines.</li>
        <li><code>flex-grow, flex-shrink, flex-basis</code>: control how items grow, shrink, and start with a base size.</li>
        <li><code>order</code>: changes the order of items.</li>
        <li><code>align-self</code>: aligns individual items independently.</li>
      </ul>
    </div>
  );
}
