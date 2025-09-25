import { Task } from "@/app/Oppgaver/GenericOppgavePage";

export const jsTASKS: Task[] = [
  {
    id: "alert-message",
    title: "1) Alert Message",
    blurb: "Display an alert with the message 'Hello JS!'. Try changing it to greet the user by name.",
    starter: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Alert</title>
  <script>
    // Write JS here
  </script>
</head>
<body>
</body>
</html>`,
    rules: [
      { label: "Use alert()", re: /alert\s*\(/i, must: true },
      { label: "Message 'Hello JS!'", re: /alert\s*\(\s*['"]Hello JS!['"]\s*\)/i, must: true },
    ],
  },
  {
    id: "console-log",
    title: "2) Console Log",
    blurb: "Print 'Hello console!' to the console. Bonus: log multiple types of data (string, number, array).",
    starter: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Console Log</title>
  <script>
    // Write JS here
  </script>
</head>
<body>
</body>
</html>`,
    rules: [
      { label: "Use console.log()", re: /console\.log\s*\(/i, must: true },
      { label: "Message 'Hello console!'", re: /console\.log\s*\(\s*['"]Hello console!['"]\s*\)/i, must: true },
    ],
  },
  {
    id: "change-text",
    title: "3) Change Text",
    blurb: "Change the content of <p id='demo'> to 'JS is awesome!'. Advanced: make it toggle between two messages on click.",
    starter: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Change Text</title>
  <script>
    // Write JS here
  </script>
</head>
<body>
  <p id="demo">Old text</p>
</body>
</html>`,
    rules: [
      { label: "Use getElementById", re: /getElementById\s*\(/i, must: true },
      { label: "Change textContent or innerText", re: /\.text(Content|InnerText)\s*=/i, must: true },
      { label: "Message 'JS is awesome!'", re: /['"]JS is awesome!['"]/i, must: true },
    ],
  },
  {
    id: "click-button",
    title: "4) Button Click",
    blurb: "When clicking the button, show an alert 'Button clicked!'. Challenge: disable the button after first click.",
    starter: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Button Click</title>
  <script>
    // Write JS here
  </script>
</head>
<body>
  <button id="btn">Click me</button>
</body>
</html>`,
    rules: [
      { label: "Use addEventListener", re: /\.addEventListener\s*\(/i, must: true },
      { label: "Event type 'click'", re: /['"]click['"]/i, must: true },
      { label: "Alert 'Button clicked!'", re: /alert\s*\(\s*['"]Button clicked!['"]\s*\)/i, must: true },
    ],
  },
  {
    id: "change-style",
    title: "5) Change Style",
    blurb: "When clicking the button, change the <p> text color to red. Bonus: make it toggle between red and blue.",
    starter: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Change Style</title>
  <script>
    // Write JS here
  </script>
</head>
<body>
  <p id="text">Some text</p>
  <button id="btn">Change color</button>
</body>
</html>`,
    rules: [
      { label: "Use getElementById", re: /getElementById\s*\(/i, must: true },
      { label: "Use addEventListener with 'click'", re: /\.addEventListener\s*\(\s*['"]click['"]/i, must: true },
      { label: "Change style.color to 'red'", re: /\.style\.color\s*=\s*['"]red['"]/i, must: true },
    ],
  },
];
