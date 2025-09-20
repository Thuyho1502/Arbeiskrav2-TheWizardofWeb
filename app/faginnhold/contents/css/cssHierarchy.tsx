"use client";

export default function CSSHierarchy() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">

      <p>
        <strong>CSS hierarchy</strong> explains how style rules are prioritized and applied to elements on a webpage. 
        When multiple rules target the same element, we need to know which one "wins"—meaning which style will actually be applied.
      </p>

      <h2>Why CSS hierarchy matters</h2>
      <ul className="list-disc list-inside pl-6">
        <li><strong>Predictability:</strong> Understanding the hierarchy helps you anticipate which styles will apply, avoiding confusion.</li>
        <li><strong>Debugging:</strong> If something looks wrong, you can quickly check if it’s due to specificity, cascade, or inheritance.</li>
        <li><strong>Optimization:</strong> Write efficient CSS without unnecessary overrides or <code>!important</code> rules.</li>
        <li><strong>Maintainability:</strong> Organize your styles for easier updates, especially in large projects or teams.</li>
      </ul>

      <h2>Key Principles</h2>
      <h3>1. Specificity</h3>
      <p>
        Each CSS rule has a specificity score that determines its strength. Higher specificity overrides lower specificity.
      </p>
      <ul className="list-disc list-inside pl-6">
        <li>Element/tag selectors (e.g., <code>p</code>, <code>div</code>) – lowest specificity</li>
        <li>Class selectors (e.g., <code>.className</code>) – stronger than element selectors</li>
        <li>ID selectors (e.g., <code>#idName</code>) – stronger than class selectors</li>
        <li>Inline styles (e.g., <code>&lt;p style="color:red;"&gt;</code>) – highest specificity</li>
        <li><code>!important</code> overrides all other rules, but should be used sparingly</li>
      </ul>

      <h3>Example of specificity</h3>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`/* Universal selector */
* {
  color: black;
}

/* Class selector */
.text {
  color: blue;
}

/* ID selector */
#important-text {
  color: red;
}

/* !important overrides all */
.text {
  color: orange !important;
}`}
      </pre>

      <h3>2. Cascading</h3>
      <p>
        "Cascading" means that if multiple rules apply to the same element, the last rule in the CSS will take precedence 
        unless a previous rule has higher specificity.
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`p {
  color: blue;
}

p {
  color: orange;  /* This will apply */
}`}
      </pre>

      <h3>3. Inheritance</h3>
      <p>
        Some CSS properties are inherited from parent elements. For example, if you set a text color on a <code>div</code>, 
        child elements will inherit it unless they have their own color specified.
      </p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`body {
  font-family: Arial, sans-serif;
  color: purple;  /* inherited by child elements */
}

div {
  padding: 20px;   /* not inherited */
  border: 2px solid black;
}

p {
  color: green;    /* overrides inherited color */
}`}
      </pre>

      <h3>4. Important</h3>
      <p>
        Adding <code>!important</code> to a rule will override all other rules, even those with higher specificity. 
        Use it only for debugging, not in production code.
      </p>

      <p>
        Understanding these principles—<strong>specificity, cascading, inheritance</strong>, and <strong>!important</strong>—gives you full control over your CSS and avoids unexpected styling issues.
      </p>

    </div>
  );
}
