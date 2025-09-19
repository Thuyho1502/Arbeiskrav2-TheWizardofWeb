"use client";
import Image from "next/image";

export default function Elemental() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-">
       
      <p>
       To understand how HTML works, we need to start with elements – 
       the smallest building blocks of the language.
       An element usually consists of an opening tag, the content, 
       and a closing tag. A tag is enclosed in angle brackets.</p>  <br />

       
        <pre>
            <code className="text-xl list-disc list-inside pl-6">
                {`<p>Hello World!</p>`}
            </code>
        </pre><br />

        <p>So this is one HTML element where:</p> <br />

        <ul className=" text-xl list-disc list-inside pl-6">
            <li>
                <code>{`<p> is the opening tag.`}</code>
            </li>
            <li>
                Hello World! is the content.
            </li>
            <li>
                <code>{`</p> is the closing tag.`}</code>
            </li>     
        </ul>  <br />
          <p>
            The <code>{`</p>`}</code> paragraph element tells the browser that the content inside is "paragraph" text.
            </p>  <br /> 
            <p>
                Let's take a look at a basic HTML program that displays a message in the browser:</p>
            <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<p <body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body></p>`}
            </pre>

            <p>
                The <code>{`<body>`}</code>element defines an HTML document's "body" and 
                it's where any content that we want to display to the user will be held:

            </p>
            <ul className=" text-xl list-disc list-inside pl-6">
            <li>
                <code>{`<body> opening tag begins the "body".`}</code>
            </li>
            <li>
                <code>{`<h1>My First Heading.</h1> is some text in a heading element.`}</code>
            </li>
            <li>
                <code>{`<p>My first paragraph.</p> is some text in a paragraph element.`}</code>
            </li>
            <li>
                <code>{`</body> closing tag ends the "body".`}</code>
            </li>     
        </ul>  <br />

        <h5 >Note:There can only be one <code>{`<body>`}</code> element in a file.</h5>
          
    </div>
  )
}
