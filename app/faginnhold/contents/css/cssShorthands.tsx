"use client";

export default function CSSShorthand() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">

      <p>
        <strong>CSS Shorthand</strong> is a way to write multiple style properties in a single declaration. 
        This helps reduce code length and keeps your CSS neat and readable.
      </p>

      <h2>Margin and Padding</h2>
      <p>
        Instead of writing individual properties for each side:
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`margin-top: 10px;
margin-right: 20px;
margin-bottom: 15px;
margin-left: 5px;

padding-top: 10px;
padding-right: 20px;
padding-bottom: 10px;
padding-left: 20px;`}
      </pre>
      <p>You can use shorthand:</p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`/* margin: top right bottom left */
margin: 10px 20px 15px 5px;

/* padding: top/bottom right/left */
padding: 10px 20px;

/* All sides same value */
margin: 10px;

/* Top, right/left, bottom */
margin: 10px 20px 15px;`}
      </pre>

      <h2>Font</h2>
      <p>
        The font shorthand combines font-style, font-variant, font-weight, font-size, line-height, and font-family:
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`/* font-style | font-variant | font-weight | font-size/line-height | font-family */
font: italic small-caps bold 16px/1.5 "Arial", sans-serif;`}
      </pre>

      <h2>Background</h2>
      <p>
        Background shorthand sets color, image, position, repeat, and size in one line:
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`background: #ffffff url("image.jpg") no-repeat center center / cover;`}
      </pre>

      <h2>Border</h2>
      <p>
        Border shorthand combines width, style, and color:
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`border: 1px solid #000;

/* Individual sides can also use shorthand */
border-top: 2px dashed red;`}
      </pre>

      <h2>List-style</h2>
      <p>
        Shorthand for lists can define list-type, position, and image:
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`list-style: square inside url("bullet.png");`}
      </pre>

      <p>
        Using CSS shorthand makes your code shorter, cleaner, and easier to maintain.
      </p>

    </div>
  );
}
