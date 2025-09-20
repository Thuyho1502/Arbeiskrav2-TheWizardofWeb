"use client";

export default function CssStructure() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">

      <p>
        When you start learning CSS, the code structure—how you write and format
        your code—might feel a bit abstract. But it’s very important for making
        your CSS readable, maintainable, and easy to understand, both for
        yourself and for others.
      </p> <br />

      <h2>Comments</h2>
      <p>
        Comments help you and other developers understand what a part of your
        code does, without affecting the code itself. Comments start with <code>/*</code> 
        and end with <code>*/</code>.
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`/* This rule makes the text blue */
p { 
  color: blue; 
}`}
      </pre> <br />

      <h2>Consistency in Style</h2>
      <p>
        Keep the same style throughout your CSS file. For example, if you use
        lowercase for properties (<code>color</code> instead of <code>Color</code>),
        continue doing so everywhere. Always add spaces around colons and between rules.
        Tools like Prettier can help maintain this consistency automatically.
      </p> <br />

      <h2>New Line After Each Rule</h2>
      <p>
        For better readability, add a line break after each CSS rule. This makes
        it easier to distinguish different style rules.
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`body {
  font-family: Arial, sans-serif;
}

h1 {
  color: red;
}`}
      </pre> <br />

      <h2>Using Prettier</h2>
      <p>
        Prettier can automatically format your CSS code, taking care of indentation,
        missing semicolons, and consistent spacing and line breaks. Following these
        principles and using Prettier makes your code cleaner, more professional, and
        easier to maintain, whether you’re working alone or in a team.
      </p> <br />

      <h2>Structuring Your CSS</h2>
      <p>
        Organize your CSS rules in a way that makes your code clear and maintainable. 
        Here are some tips:
      </p><br />
      
      <li className="list-disc list-inside pl-6" >Organize by Components or Sections</li>

      
      <p>
        Split your CSS file into logical sections representing different parts
        of the website (e.g., header, main content, footer). Add comments to
        separate sections.
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`/* -- Header Styles --- */
header {
  background-color: #333;
  color: white;
}

/* --- Main Content Styles --- */
.main-content {
  padding: 20px;
}

/* --- Footer Styles --- */
footer {
  text-align: center;
  padding: 10px;
}`}
      </pre> <br />

      <li className="list-disc list-inside pl-6" >Prioritization and Specificity</li>

     
      <p>
        CSS follows specificity rules to determine which style is applied when multiple rules target the same element.
        To avoid confusion, structure your code from general to specific rules.
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`/* General rules */
body {
  font-family: Arial, sans-serif;
}

/* Specific rules */
.hero-title {
  font-size: 2rem;
  color: blue;
}`}
      </pre> <br />

      <li className="list-disc list-inside pl-6" >Avoid Too Many IDs</li>

      
      <p>
        Avoid overusing ID selectors (<code>#id-name</code>), as they are very specific and hard to override. 
        Use classes (<code>.class-name</code>) instead for more flexible and reusable styling.
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`.button-primary {
  background-color: blue;
  color: white;
}`}
      </pre> <br />

      <li className="list-disc list-inside pl-6" >Reusable Classes</li>

  
      <p>
        Use reusable classes for elements that share the same styles, instead of creating unique classes for each. 
        This keeps your code efficient and maintainable.
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`.text-center {
  text-align: center;
}

.margin-top {
  margin-top: 20px;
}`}
      </pre> <br />
        <li className="list-disc list-inside pl-6" >Avoid Duplication</li>
      
      <p>
        Keep your CSS DRY (Don’t Repeat Yourself). If multiple elements share the same styles, combine selectors:
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`h1, h2, h3 {
  font-family: Arial, sans-serif;
  color: #333;
}`}
      </pre> <br />

      <li className="list-disc list-inside pl-6" >Media Queries at the Bottom</li>

     
      <p>
        For responsive design, place media queries either at the end of the CSS file or right after the rules they affect. This keeps the layout clear and easier to manage.
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`/* Desktop styles */
.container {
  width: 80%;
}

/* Mobile layout */
@media (max-width: 768px) {
  .container {
    width: 100%;
  }
}`}
      </pre> <br />

      <p>
        By structuring and organizing your CSS this way from the start, you’ll make
        developing larger projects much easier over time. Using Prettier helps
        maintain consistent formatting and structure throughout.
      </p> <br />

    </div> 
  );
}
