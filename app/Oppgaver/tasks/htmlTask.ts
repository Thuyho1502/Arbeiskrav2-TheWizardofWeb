import { useEffect, useMemo, useState } from "react";
import { Rule } from "@/app/Oppgaver/GenericOppgavePage";

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
      "Tạo trang HTML đầy đủ: doctype, lang, title, một tiêu đề chính và đoạn văn, một ảnh (có alt) và một liên kết.",
    starter: STARTER,
    rules: [
      { label: "<!DOCTYPE html>", re: /<!DOCTYPE\s+html>/i, must: true },
      {
        label: "Thuộc tính lang trên <html>",
        re: /<html[^>]*\blang=("|')[^"']+\1/i,
        must: true,
      },
      { label: "<title>", re: /<title>[^<]+<\/title>/i, must: true },
      { label: "<h1>", re: /<h1>[\s\S]*?<\/h1>/i, must: true },
      { label: "<p>", re: /<p>[\s\S]*?<\/p>/i, must: true },
      {
        label: "<img> có alt",
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
      "Tạo <nav> chứa danh sách liên kết: dùng <ul><li><a> với ít nhất 3 liên kết (href='#').",
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
      { label: "Ít nhất 3 <a href='#'>", re: /<a[^>]*href=("|')#/gi },
    ],
  },
  {
    id: "semantics",
    title: "3) Semantic layout",
    blurb:
      "Dùng semantic tags: <header>, <main>, <section> hoặc <article>, và <footer>.",
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
        label: "<section> hoặc <article>",
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
      "Tạo form với label + input (tên), label + input type='email' (email), và nút submit.",
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
        label: "<label for> khớp với input#id",
        re: /<label[^>]*for=("|')(name|email)\1/i,
        must: true,
      },
      {
        label: "input type='email'",
        re: /<input[^>]*type=("|')email\1/i,
        must: true,
      },
      {
        label: "nút submit",
        re: /<(button|input)[^>]*(type=("|')submit\3)?[^>]*>/i,
        must: true,
      },
    ],
  },
  {
    id: "media",
    title: "5) Media & meta viewport",
    blurb:
      "Thêm <meta name='viewport'> trong <head>. Dùng <figure><img><figcaption> để mô tả một ảnh.",
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
