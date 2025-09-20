"use client";

export default function CSSBoxModel() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">

      <p>
        The <strong>CSS Box Model</strong> is a fundamental concept in web development. 
        It describes how HTML elements behave on a webpage when styled with CSS. Every element can be thought of as a box, and understanding this model helps you control layout and spacing.
      </p>

      <h2>Components of the Box Model</h2>
      <ul className="list-disc list-inside pl-6">
        <li><strong>Content:</strong> The actual content of the element, like text or images.</li>
        <li><strong>Padding:</strong> Space between the content and the border. Padding is transparent but adds "breathing room" inside the box.</li>
        <li><strong>Border:</strong> The line around the box. You can control thickness, style (solid, dashed, etc.), and color.</li>
        <li><strong>Margin:</strong> Space outside the border, determining the distance between this box and other elements.</li>
      </ul>

      <h3>Example in CSS</h3>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`div {
  width: 200px;          /* Content width */
  padding: 20px;         /* Space between content and border */
  border: 5px solid black; /* Border thickness */
  margin: 15px;          /* Space between element and others */
}`}
      </pre>

      <p>
        Visually, this means:
      </p>
      <ul className="list-disc list-inside pl-6">
        <li>Content is 200px wide.</li>
        <li>Padding of 20px surrounds the content.</li>
        <li>Border is 5px thick.</li>
        <li>Margin of 15px separates the box from other elements.</li>
      </ul>

      <h2>Why Understanding the Box Model Matters</h2>
      <ul className="list-disc list-inside pl-6">
        <li><strong>Layout adjustments:</strong> Helps position elements precisely by understanding content, padding, border, and margin.</li>
        <li><strong>Centering and alignment:</strong> Use margin and padding to control spacing and alignment of buttons, text boxes, and other elements.</li>
        <li><strong>Responsive design:</strong> Manage how elements scale on different screen sizes with flexible margins, padding, and widths.</li>
        <li><strong>Size calculations:</strong> Know that padding, border, and margin affect the total space an element occupies.</li>
        <li><strong>Debugging layouts:</strong> Helps identify overlapping or misaligned elements caused by margin or padding.</li>
        <li><strong>Visual improvements:</strong> Padding adds breathing room inside boxes, and margin creates spacing between elements for cleaner design.</li>
      </ul>

      <p>
        In short, mastering the CSS Box Model is essential for creating functional, well-spaced, and visually appealing web layouts.
      </p>

    </div>
  );
}
