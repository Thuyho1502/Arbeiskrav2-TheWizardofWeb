
import { Task } from "@/app/Oppgaver/GenericOppgavePage";

const STARTER = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>My Page</title>
</head>
<body>
  <h1>Hello!</h1>
  <p>Start writing HTML here…</p>
</body>
</html>`.trim();

export const htmlTASKS: Task[] = [
  {
    id: "basic",
    title: "1) Basic HTML page",
    blurb:
      "Create a full HTML page: doctype, lang, title, a main heading and paragraph, an image (with alt) and a link.",
    starter: STARTER,
    rules: [
      { label: "<!DOCTYPE html>", re: /<!DOCTYPE\s+html>/i, must: true },
      {
        label: "The lang attribute on <html>",
        re: /<html[^>]*\blang=("|')[^"']+\1/i,
        must: true,
      },
      { label: "<title>", re: /<title>[^<]+<\/title>/i, must: true },
      { label: "<h1>", re: /<h1>[\s\S]*?<\/h1>/i, must: true },
      { label: "<p>", re: /<p>[\s\S]*?<\/p>/i, must: true },
      {
        label: "<img> has alt",
        re: /<img[^>]*\bsrc=("|')[^"']+\1[^>]*\balt=("|')[^"']+\2/i,
        must: true,
      },
      {
        label: "<a href>",
        re: /<a[^>]*\bhref=("|')[^"']+\1[^>]*>/i,
        must: true,
      },
    ],
  },
  {
    id: "nav",
    title: "2) Navigation menu",
    blurb:
      "Create a <nav> containing a list of links: use <ul><li><a> with at least 3 links (href='#').",
    starter: STARTER.replace(
      "<h1>Hello!</h1>",
      `<nav>
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
<h1>Hello!</h1>`
    ),
    rules: [
      { label: "<nav>", re: /<nav[\s\S]*<\/nav>/i, must: true },
      {
        label: "<ul> + <li>",
        re: /<ul[\s\S]*<li>[\s\S]*<\/li>[\s\S]*<\/ul>/i,
        must: true,
      },
      { label: "At least 3 <a href='#'>", re: /<a[^>]*href=("|')#/gi },
    ],
  },
  {
    id: "semantics",
    title: "3) Semantic layout",
    blurb:
      "Use semantic tags: <header>, <main>, <section> or <article>, and <footer>.",
    starter: STARTER.replace(
      "<body>",
      `<body>
<header><h1>Site</h1></header>
<main>
  <section>
    <article>
      <h2>Article title</h2>
      <p>Some content…</p>
    </article>
  </section>
</main>
<footer>© Wizard of Web</footer>`
    ),
    rules: [
      { label: "<header>", re: /<header[\s\S]*<\/header>/i, must: true },
      { label: "<main>", re: /<main[\s\S]*<\/main>/i, must: true },
      {
        label: "<section> or <article>",
        re: /<(section|article)[\s\S]*<\/(section|article)>/i,
        must: true,
      },
      { label: "<footer>", re: /<footer[\s\S]*<\/footer>/i, must: true },
    ],
  },
  {
    id: "form",
    title: "4) Accessible form",
    blurb:
      "Create a form with label + input (name), label + input type='email' (email), and a submit button.",
    starter: STARTER.replace(
      "<p>Start writing HTML here…</p>",
      `<form action="#">
  <label for="name">Name</label>
  <input id="name" name="name" type="text" required />
  <label for="email">Email</label>
  <input id="email" name="email" type="email" required />
  <button type="submit">Send</button>
</form>`
    ),
    rules: [
      { label: "<form>", re: /<form[^>]*>/i, must: true },
      {
        label: "<label for> matches input#id",
        re: /<label[^>]*for=("|')(name|email)\1/i,
        must: true,
      },
      {
        label: "input type='email'",
        re: /<input[^>]*type=("|')email\1/i,
        must: true,
      },
      {
        label: "button submit",
        re: /<(button|input)[^>]*(type=("|')submit\3)?[^>]*>/i,
        must: true,
      },
    ],
  },
  {
    id: "media",
    title: "5) Media & meta viewport",
    blurb:
      "Add <meta name='viewport'> in the <head>. Use <figure><img><figcaption> to describe an image.",
    starter: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />
  <title>Media & Meta</title>
</head>
<body>
  <figure>
    <img src="https://picsum.photos/600/300" alt="Random image" />
    <figcaption>A random beautiful photo.</figcaption>
  </figure>
</body>
</html>`.trim(),
    rules: [
      {
        label: "meta viewport",
        re: /<meta[^>]*name=("|')viewport\1[^>]*>/i,
        must: true,
      },
      { label: "<figure>", re: /<figure[\s\S]*<\/figure>/i, must: true },
      { label: "<img alt>", re: /<img[^>]*\balt=("|')[^"']+\1/i, must: true },
      {
        label: "<figcaption>",
        re: /<figcaption>[\s\S]*?<\/figcaption>/i,
        must: true,
      },
    ],
  },
];
