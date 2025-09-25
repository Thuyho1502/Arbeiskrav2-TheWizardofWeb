import { Task } from "@/app/Oppgaver/GenericOppgavePage";

export const cssTASKS: Task[] = [
  {
    id: "background",
    title: "1) Background color",
    blurb: "Change the background color of the body to lightblue using CSS.",
    starter: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Background</title>
  <style>
    body {
      background-color: lightblue;
    }
  </style>
</head>
<body>
  <h1>Hello CSS!</h1>
</body>
</html>`,
    rules: [
      { label: "body { background-color }", re: /body\s*{[^}]*background-color\s*:/i, must: true },
      { label: "background-color: lightblue;", re: /background-color\s*:\s*lightblue/i, must: true },
    ],
  },
  {
    id: "text-style",
    title: "2) Text style",
    blurb: "Change the heading color to red and center-align it (text-align: center).",
    starter: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Text style</title>
  <style>
    h1 {
      color: red;
      text-align: center;
    }
  </style>
</head>
<body>
  <h1>Hello CSS!</h1>
</body>
</html>`,
    rules: [
      { label: "color: red;", re: /color\s*:\s*red/i, must: true },
      { label: "text-align: center;", re: /text-align\s*:\s*center/i, must: true },
    ],
  },
  {
    id: "class-selector",
    title: "3) Class selector",
    blurb: "Create a class .highlight that changes text color to blue and apply it to a <p> element.",
    starter: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Class selector</title>
  <style>
    .highlight {
      color: blue;
    }
  </style>
</head>
<body>
  <p class="highlight">This is important</p>
</body>
</html>`,
    rules: [
      { label: ".highlight { color }", re: /\.highlight\s*{[^}]*color\s*:/i, must: true },
      { label: "color: blue;", re: /color\s*:\s*blue/i, must: true },
    ],
  },
  {
    id: "box-model",
    title: "4) Box model",
    blurb: "Apply width, height, padding, and border to a div.",
    starter: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Box model</title>
  <style>
    .box {
      width: 200px;
      height: 100px;
      padding: 10px;
      border: 2px solid black;
    }
  </style>
</head>
<body>
  <div class="box">Box</div>
</body>
</html>`,
    rules: [
      { label: "width", re: /width\s*:\s*\d+(px|em|rem|%)/i, must: true },
      { label: "height", re: /height\s*:\s*\d+(px|em|rem|%)/i, must: true },
      { label: "padding", re: /padding\s*:\s*\d+(px|em|rem|%)/i, must: true },
      { label: "border", re: /border\s*:\s*\d+(px)\s+\w+/i, must: true },
    ],
  },
  {
    id: "flexbox",
    title: "5) Flexbox layout",
    blurb: "Use Flexbox to align 3 divs: left, center, right.",
    starter: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Flexbox</title>
  <style>
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <div>Left</div>
    <div>Center</div>
    <div>Right</div>
  </div>
</body>
</html>`,
    rules: [
      { label: "display: flex;", re: /display\s*:\s*flex/i, must: true },
      { label: "justify-content", re: /justify-content\s*:\s*(space-between|center|flex-start|flex-end)/i, must: true },
      { label: "align-items", re: /align-items\s*:\s*(center|flex-start|flex-end|stretch|baseline)/i, must: true },
    ],
  },
];
