"use client";

export default function CSSSpecificity() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">
      <p>
        If you have read the file called <strong>"CSS Selector"</strong>, you
        already know the difference between the various selectors you can use in
        CSS. But you might be wondering: when should I use each of them, and how
        do I know which one to pick?
      </p> <br />

      <h2>What is CSS Specificity?</h2>
      <p>
        CSS specificity determines which CSS rule wins when multiple rules try
        to style the same element. The browser decides which rule is “more
        specific” or stronger, based on specificity.
      </p>

      <p>In simple terms:</p> 
      <ul  className="list-disc list-inside pl-6">
        <li>
          If multiple CSS rules target the same element, the one with the
          highest specificity "wins," and its style is applied.
        </li>
        <li>
          Specificity is calculated by assigning different weights to different
          types of selectors. Some selectors are more specific than others, so
          rules using them take precedence.
        </li>
      </ul><br />

      <h2>How Specificity Works</h2>
      <p>Specificity is based on the type of selectors you use. From least to most specific:</p>
      <ul className="list-disc list-inside pl-6">
        <li>Type selectors (element selectors) – e.g., <code>h1</code>, <code>p</code>, <code>div</code>. Lowest specificity.</li>
        <li>Class selectors – e.g., <code>.class-name</code>, pseudo-classes like <code>:hover</code>. Higher specificity than type selectors.</li>
        <li>ID selectors – e.g., <code>#id-name</code>. Highest specificity.</li>
      </ul><br />

      <h2>Example: Specificity in Practice</h2>
      <p>Consider this HTML:</p>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<h1 id="heading" class="large-text">Hello, world!</h1>`}
      </pre> <br />

      <p>And these CSS rules:</p>

      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`h1 {
  color: blue;
}

.stor-tekst {
  color: red;
}

#overskrift {
  color: green;
}
`}
      </pre>

      <br />
      <ul className="list-disc list-inside pl-6">
        <li><code>{`h1 { color: blue; }`}</code> – applies blue to all &lt;h1&gt; elements.</li>
        <li><code>{`.large-text { color: red; }`}</code> – applies red because this element has the <code>large-text</code> class.</li>
        <li><code>{`#heading { color: green; }`}</code> – applies green because this element has the <code>heading</code> ID.</li>
      </ul>

      <p>Result: The text will be <strong>green</strong> because the ID selector has the highest specificity.</p> <br />

      <h2>Combining Selectors and Specificity</h2>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`div p {
  color: blue;
}

p {
  color: red;
}`}
      </pre>
      <p>
        Here, all <code>&lt;p&gt;</code> elements inside a <code>&lt;div&gt;</code> will be blue, because <code>div p</code> is more specific than just <code>p</code>.
      </p> <br />

      <h2>Key Points About Specificity</h2>
      <ul className="list-disc list-inside pl-6">
        <li>Type selectors (like <code>h1</code>, <code>p</code>) have the lowest specificity.</li>
        <li>Class selectors (like <code>.my-class</code>) have higher specificity.</li>
        <li>ID selectors (like <code>#my-id</code>) have the highest specificity.</li>
        <li>If two rules have the same specificity, the last one in the CSS file "wins."</li>
      </ul> <br />

      <h2>Summary</h2>
      <ul className="list-disc list-inside pl-6">
        <li>Selectors choose which HTML elements to style with CSS.</li>
        <li>Specificity determines which rule applies when multiple rules target the same element.</li>
        <li>The more specific a selector is (e.g., an ID is more specific than a class), the more weight it has.</li>
        <li>Understanding specificity helps prevent CSS rules from being ignored due to other rules with higher specificity.</li>
      </ul>
    </div>
  );
}
