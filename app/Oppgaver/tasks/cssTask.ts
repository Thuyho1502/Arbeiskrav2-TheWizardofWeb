import { Task } from "@/app/Oppgaver/GenericOppgavePage";

export const cssTASKS: Task[] = [
  {
    id: "background",
    title: "1) Background color",
    blurb: "Đổi màu nền body thành lightblue bằng CSS.",
    starter: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Background</title>
  <style>
    body {
      /* Viết CSS ở đây */
    }
  </style>
</head>
<body>
  <h1>Hello CSS!</h1>
</body>
</html>`,
    rules: [
      {
        label: "body { background-color }",
        re: /body\s*{[^}]*background-color\s*:/i,
        must: true,
      },
      {
        label: "background-color: lightblue;",
        re: /background-color\s*:\s*lightblue/i,
        must: true,
      },
    ],
  },
  {
    id: "text-style",
    title: "2) Text style",
    blurb: "Đổi màu chữ tiêu đề thành red và căn giữa (text-align: center).",
    starter: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Text style</title>
  <style>
    h1 {
      /* Viết CSS ở đây */
    }
  </style>
</head>
<body>
  <h1>Hello CSS!</h1>
</body>
</html>`,
    rules: [
      { label: "color: red;", re: /color\s*:\s*red/i, must: true },
      {
        label: "text-align: center;",
        re: /text-align\s*:\s*center/i,
        must: true,
      },
    ],
  },
  {
    id: "class-selector",
    title: "3) Class selector",
    blurb: "Tạo class .highlight đổi màu chữ thành blue và áp dụng cho <p>.",
    starter: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Class selector</title>
  <style>
    .highlight {
      /* Viết CSS ở đây */
    }
  </style>
</head>
<body>
  <p class="highlight">This is important</p>
</body>
</html>`,
    rules: [
      {
        label: ".highlight { color }",
        re: /\.highlight\s*{[^}]*color\s*:/i,
        must: true,
      },
      { label: "color: blue;", re: /color\s*:\s*blue/i, must: true },
    ],
  },
  {
    id: "box-model",
    title: "4) Box model",
    blurb: "Áp dụng width, height, padding, border cho một div.",
    starter: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Box model</title>
  <style>
    .box {
      /* Viết CSS ở đây */
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
    blurb: "Dùng Flexbox để căn 3 div: trái, giữa, phải.",
    starter: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Flexbox</title>
  <style>
    .container {
      /* Viết CSS ở đây */
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
      {
        label: "justify-content",
        re: /justify-content\s*:\s*(space-between|center|flex-start|flex-end)/i,
        must: true,
      },
      {
        label: "align-items",
        re: /align-items\s*:\s*(center|flex-start|flex-end|stretch|baseline)/i,
        must: true,
      },
    ],
  },
];
