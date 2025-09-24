import { Task } from "@/app/Oppgaver/GenericOppgavePage";

export const jsTASKS: Task[] = [
  {
    id: "alert-message",
    title: "1) Alert message",
    blurb: "Hiển thị alert với nội dung 'Hello JS!'.",
    starter: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Alert</title>
  <script>
    // Viết JS ở đây
  </script>
</head>
<body>
</body>
</html>`,
    rules: [
      { label: "Sử dụng alert()", re: /alert\s*\(/i, must: true },
      { label: "Nội dung 'Hello JS!'", re: /alert\s*\(\s*['"]Hello JS!['"]\s*\)/i, must: true },
    ],
  },
  {
    id: "console-log",
    title: "2) Console log",
    blurb: "Ghi 'Hello console!' ra console.",
    starter: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Console Log</title>
  <script>
    // Viết JS ở đây
  </script>
</head>
<body>
</body>
</html>`,
    rules: [
      { label: "Sử dụng console.log()", re: /console\.log\s*\(/i, must: true },
      { label: "Nội dung 'Hello console!'", re: /console\.log\s*\(\s*['"]Hello console!['"]\s*\)/i, must: true },
    ],
  },
  {
    id: "change-text",
    title: "3) Change text",
    blurb: "Thay đổi nội dung của <p id='demo'> thành 'JS is awesome!'.",
    starter: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Change Text</title>
  <script>
    // Viết JS ở đây
  </script>
</head>
<body>
  <p id="demo">Old text</p>
</body>
</html>`,
    rules: [
      { label: "Sử dụng getElementById", re: /getElementById\s*\(/i, must: true },
      { label: "Thay đổi textContent hoặc innerText", re: /\.text(Content|InnerText)\s*=/i, must: true },
      { label: "Nội dung 'JS is awesome!'", re: /['"]JS is awesome!['"]/i, must: true },
    ],
  },
  {
    id: "click-button",
    title: "4) Click button",
    blurb: "Khi nhấn nút, alert ra 'Button clicked!'.",
    starter: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Button Click</title>
  <script>
    // Viết JS ở đây
  </script>
</head>
<body>
  <button id="btn">Click me</button>
</body>
</html>`,
    rules: [
      { label: "Sử dụng addEventListener", re: /\.addEventListener\s*\(/i, must: true },
      { label: "Sự kiện 'click'", re: /['"]click['"]/i, must: true },
      { label: "Alert 'Button clicked!'", re: /alert\s*\(\s*['"]Button clicked!['"]\s*\)/i, must: true },
    ],
  },
  {
    id: "change-style",
    title: "5) Change style",
    blurb: "Khi nhấn nút, đổi màu chữ <p> sang red.",
    starter: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Change Style</title>
  <script>
    // Viết JS ở đây
  </script>
</head>
<body>
  <p id="text">Some text</p>
  <button id="btn">Change color</button>
</body>
</html>`,
    rules: [
      { label: "Sử dụng getElementById", re: /getElementById\s*\(/i, must: true },
      { label: "Sử dụng addEventListener với 'click'", re: /\.addEventListener\s*\(\s*['"]click['"]/i, must: true },
      { label: "Đổi style.color thành 'red'", re: /\.style\.color\s*=\s*['"]red['"]/i, must: true },
    ],
  },
];
