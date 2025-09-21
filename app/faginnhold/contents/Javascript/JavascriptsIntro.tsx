"use client";
import React from "react";
export default function JavascriptsIntro() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">
      <section>
        <h2 className="text-2xl font-bold mb-2">1.1 What is Programming?</h2>
        <p>
          Programming is the process of designing a computer program that
          defines how a computer, mobile phone, robot, washing machine, or
          another electronic device should behave while running. It involves
          writing a series of instructions that control the machine and decide
          how it reacts to different types of input, such as keystrokes, mouse
          movements, or other interactions.
        </p> <br />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">1.2 Programming Languages</h2>
        <p>
          Programming languages are constructed languages created for writing
          programs that a computer can understand and execute. They are
          human-readable representations of instructions that make coding easier
          compared to using binary numbers (0 and 1). Examples include:
        </p>
        <ul className="list-disc ml-6">
          <li>Java</li>
          <li>C, C++</li>
          <li>C#</li>
          <li>Python</li>
          <li>.NET</li>
          <li>PHP</li>
          <li>
            JavaScript <span className="italic">(focus of this course)</span>
          </li>
        </ul>
        <p className="mt-2 font-semibold">
          Note: Java and JavaScript are completely different languages — don’t
          confuse them.
        </p> <br />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">1.3 HTML and CSS vs. Programming</h2>
        <p>
          HTML (HyperText Markup Language) and CSS (Cascading Style Sheets) are
          not programming languages. Instead, they define structure and style.
          HTML provides the structure of a webpage, while CSS handles its
          visual appearance. They lack logical flow, which is at the core of
          programming. Real programming involves logic and functionality, such
          as with JavaScript.
        </p> <br />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">1.4 Frameworks</h2>
        <p>
          Frameworks simplify development by providing ready-made structures to
          build upon. Think of them as “dialects” of a programming language,
          where the basics stay the same but methods and approaches differ.
          Examples of JavaScript frameworks include:
        </p>
        <ul className="list-disc ml-6">
          <li>Vue.js</li>
          <li>React</li>
          <li>Angular</li>
          <li>Ember.js</li>
        </ul>
        <p>
          Once you learn one framework, it’s easier to pick up others since they
          share similar principles, though syntax and approaches vary.
        </p> <br />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">1.5 Why Use JavaScript?</h2>
        <p>
          JavaScript adds interactivity and dynamics to webpages. Without it, a
          site is static — made only of HTML (the skeleton) and CSS (the skin
          and appearance). JavaScript acts as the “muscles,” bringing a site to
          life by enabling interaction with buttons, forms, images, and more.
        </p>
        <p className="mt-2">Examples of what JavaScript can do:</p>
        <ul className="list-disc ml-6">
          <li>Create buttons that change color when clicked</li>
          <li>Build login systems</li>
          <li>Display image carousels</li>
          <li>Run conditional actions with <code>if-else</code> statements</li>
        </ul> <br />

      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">1.6 Debugging and Bugs</h2>
        <p>
          Debugging is a key part of programming. Bugs are errors in code that
          prevent a program from working as intended. They may be caused by
          typos, logical mistakes, or syntax errors. Learning to find and fix
          these errors is an essential developer skill.
        </p> <br />
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">Summary</h2>
        <p>
          In this course, you’ll learn JavaScript — an essential language for
          building interactive websites. You’ll also be introduced to frameworks
          built on JavaScript that are widely used in professional development.
          Along the way, you’ll practice writing code and debugging, both of
          which are crucial to becoming a developer.
        </p>
      </section> <br />

      <section>
        <h2 className="text-2xl font-bold mb-2">Creating a JavaScript Project 🤖</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>
            <strong>Start the Project:</strong> Create a folder for your project
            on your computer. Avoid special characters like æ, ø, and å in names
            to prevent issues.
          </li>
          <li>
            <strong>Open in Visual Studio Code:</strong> Use{" "}
            <code>File → Open Folder</code> to open your project folder. Create
            a file called <code>test.html</code>.
          </li>
          <li>
            <strong>HTML Template:</strong> Type <code>!</code> and press Enter
            to quickly generate a basic HTML structure.
          </li>
          <li>
            <strong>Create Simple HTML:</strong> Add an{" "}
            <code>&lt;h1&gt;</code> tag with some text. Use the “Go Live”
            extension in VS Code to preview it.
          </li>
          <li>
            <strong>Add JavaScript Inline:</strong> Insert code directly in your
            HTML with a <code>&lt;script&gt;</code> tag at the end of{" "}
            <code>&lt;body&gt;</code>.
            <pre className="bg-gray-800 text-green-300 p-4 rounded ">
              {`<script>
  console.log('Hello there!');
</script>`}
            </pre>
          </li>
          <li>
            <strong>What is console.log?</strong> It prints messages or data to
            the console, helping you debug and monitor your code.
          </li>
          <li>
            <strong>External JavaScript File:</strong> Create a{" "}
            <code>testscript.js</code> file and link it in your HTML:
            <pre className="bg-gray-800 text-green-300 p-4 rounded ">
              {`<script src="testscript.js"></script>`}
            </pre>
            Inside <code>testscript.js</code>, you could write:
            <pre className="bg-gray-800 text-green-300 p-4 rounded ">
              {`console.log('Hello from external JS file');`}
            </pre>
          </li>
          <li>
            <strong>Recap:</strong> You’ve learned to create an HTML file,
            include JavaScript inline and externally, and use{" "}
            <code>console.log</code> for debugging.
          </li>
        </ol>
      </section>
    </div>
  );
}
