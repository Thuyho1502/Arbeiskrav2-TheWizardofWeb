"use client";
import Image from "next/image";

export default function WhatIsHTML() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">
       
      <p>
       The language we are learning is HTML, or HyperText Markup Language.
       It was created by a developer named Tim Berners-Lee in 1991.</p> <br />
       <p>Today, every website in the world uses HTML!</p><br />
        <p>As the name suggests, HTML is a markup language; 
        it marks up every piece of content on a web page and defines its type.
         Pretty simple and perfect for beginners!</p> <br />
        <p>However, HTML is just one piece used to build a web page. Most web pages use: </p><br />

        <ul className=" text-xl list-disc list-inside pl-6">
            <li>
                HTML: Create the website skeleton.
            </li>
            <li>
                CSS: Modify the website appearance.
            </li>
            <li>
                JavaScript: Make it interactive.
            </li>     
        </ul>  <br />
          <p>
            This course will focus on HTML to build a strong foundation. The programs we write will be files with the extension .html.
            Ah one more thing, you need a code editor! A code editor is a text editor that can write and run code.
            And we have one example. Let's test it out!
            </p>  <br /> 
            <pre className="bg-gray-800 text-green-300 p-4 rounded ">
{`<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>`}
            </pre>
            
    

           
    </div>
  )
}
