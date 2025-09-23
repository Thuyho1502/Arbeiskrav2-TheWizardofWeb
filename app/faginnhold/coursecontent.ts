// app/faginnhold/coursecontent.ts

import Attributes from "./contents/html/Attributes";
import BasicHTML from "./contents/html/BasicHTML";
import Elemental from "./contents/html/Elemental";
import WhatIsHTML from "./contents/html/WhatIsHTML";
import HtmlLayouts from "./contents/html/HtmlLayouts";
import Headings from "./contents/html/Heading";
import Symbols from "./contents/html/Meta";
import HtmlNavigation from "./contents/html/HtmlNavigation";
import HtmlForms from "./contents/html/HtmlForms";
import HtmlSemantics from "./contents/html/HtmlSemantic";
import HtmlStyle from "./contents/html/HtmlStyle";
import cssIntroduction from "./contents/css/cssIntroduction";
import CssSelectors from "./contents/css/cssSelectors";
import CssSpecificity from "./contents/css/cssSpecificity";
import CssStructure from "./contents/css/cssStructure";
import CssUnits from "./contents/css/cssUnits";
import CSSHierarchy from "./contents/css/cssHierarchy";
import CSSBoxModel from "./contents/css/BoxModel";
import CSSShorthand from "./contents/css/cssShorthands";
import CSSLayout from "./contents/css/cssLayout";
import CSSPositionGuide from "./contents/css/cssPosition";
import CSSFlexbox from "./contents/css/Flexbox";
import CSSFlexboxAdvanced from "./contents/css/FlexboxAdvanced";
import CSSAnimation from "./contents/css/Animation";
import CSSPseudoClasses from "./contents/css/PseudoKlasser";
import CSSGrid from "./contents/css/Grid";
import LocalhostMobile from "./contents/css/Localhost";
import ARIA from "./contents/css/ARIA";
import rammeverk from "./contents/css/cssRammeverk";
import JavascriptsIntro from "./contents/Javascript/JavascriptsIntro";
import VariablesAndDataTypes from "./contents/Javascript/VariableAndDatatype";
import AlertsAndPrompts from "./contents/Javascript/alert()Andpromt()";
import IfElseAndStringMethods from "./contents/Javascript/conditions";
import Functions from "./contents/Javascript/Functions";
import OnClickTutorial from "./contents/Javascript/Onclick";
import Counters from "./contents/Javascript/Counter";
import AddEventListenerGuide from "./contents/Javascript/addEventListener";
import Loops from "./contents/Javascript/Loops";
import ArraysObjects from "./contents/Javascript/ArraysAndObjects";
import ArrayMethods from "./contents/Javascript/Arraymethod";

export type Lesson = {
  id: string;
  title: string;
  content?: string;
  /** Component hiển thị nội dung bài học (tùy chọn) */
  component?: React.ComponentType;
};

export type QuizOption = {
  id: string;
  text: string;
  correct?: boolean; // mỗi câu chỉ 1 đáp án đúng
};

export type QuizQuestion = {
  id: string;
  question: string;
  options: QuizOption[];
};

export type Chapter = {
  /** dùng trong URL: /[slug]/[chapter]/... */
  id: string;
  title: string;
  description?: string;
  /** dùng trong URL: /[slug]/[chapter]/[lesson] */
  lessons: Lesson[];
  quiz: {
    /** % phải đúng để pass, ví dụ 80 */
    passPercent: number;
    questions: QuizQuestion[];
  };
};

export type CourseDetail = {
  /** phải khớp với COURSES.slug */
  slug: string;
  title: string;
  description?: string;
  chapters: Chapter[];
};

/** Dữ liệu mẫu để test flow lesson/quiz */
export const COURSE_CONTENT: Record<string, CourseDetail> = {
  html: {
    slug: "html",
    title: "HTML",
    description: "Learn the building blocks of the web: tags, elements, and structure.",
    chapters: [
      {
        id: "Elements",
        title: "Getting Started with HTML",
        description: "Setup, basic tags and structure.",
        lessons: [
          { id: "1",
             title: "What is HTML?",
            component: WhatIsHTML,}
          , 
          { id: "2", 
            title: "Basic HTML" ,
            component:BasicHTML,
          },
           
          { id: "3", 
            title: "Elements",
            component:Elemental,

          },
          
          { id: "4", 
            title: "Attributes" ,
            component:Attributes,
          },
           { id: "5", title: "Headings", component: Headings },
          
        ],
        quiz: {
          passPercent: 80,
          questions: [
            {
              id: "q1",
              question: "What does HTML stand for?",
              options: [
                { id: "a", text:"HyperText Markup Language", correct: true  },
                { id: "b", text: "Hyperlinks and Text Marking Language" },
                { id: "c", text: "Home Tool Markup Language" },
                { id: "d", text: "High Transfer Markup Language"  },
              ],
            },
            {
              id: "q2",
              question: "Which tag defines a paragraph in HTML?",
              options: [
                { id: "a", text:  "<para>" },
                { id: "b", text: "<p>", correct: true  },
                { id: "c", text: "<paragraph>" },
                { id: "d", text: "<text>"  },
              ],
            },
            {
              id: "q3",
              question: "Which declaration must be at the very top of every HTML5 document?",
              options: [
                { id: "a", text: "<doctype>"},
                { id: "b", text: "<!DOCTYPE html>", correct: true },
                { id: "c", text: "<document type='html5'>"},
                { id: "d", text: "<html doctype='html5'>"},
              ],
            },
            {
              id: "q4",
              question: "Which element contains all the *visible* content of a web page?",
              options: [
                { id: "a", text: "<html>" },
                { id: "b", text: "<head>" },
                { id: "c", text: "<body>", correct: true },
                { id: "d", text: "<main>" },
              ],
            },
            {
              id: "q5",
              question: "Which heading element is the MOST important?",
              options: [
                { id: "a", text: "<h6>" },
                { id: "b", text: "<h4>" },
                { id: "c", text: "<h1>", correct: true },
                { id: "d", text: "<h2>" },
              ],
            },
            {
              id: "q6",
              question: "Which tag is used to create a hyperlink?",
              options: [
                { id: "a", text: "<link>" },
                { id: "b", text: "<href>" },
                { id: "c", text: "<a>", correct:true },
                { id: "d", text: "<url>" },
              ],
            },
            {
              id: "q7",
              question: "Which attributes are commonly used on the <img> tag?",
              options: [
                { id: "a", text:"src, alt, width, height", correct: true },
                { id: "b", text: "href, alt, width, height"},
                { id: "c", text: "src, title, href" },
                { id: "d", text: "url, alt, ratio" },
              ],
            },
            {
              id: "q8",
              question: "What does the alt attribute provide on an image?",
              options: [
                { id: "a", text:"A caption below the image" },
                { id: "b", text: "Alternative text if the image cannot be displayed", correct: true },
                { id: "c", text: "The source path to the image"},
                { id: "d", text: "The tooltip on hover"  },
              ],
            },
            {
              id: "q9",
              question: "Where should the document language be declared?",
              options: [
                { id: "a", text: "In the <title> element" },
                { id: "b", text: "As a comment before <!DOCTYPE>" },
                { id: "c", text: "In the <html> tag using the lang attribute", correct: true },
                { id: "d", text: "In the <body> tag using the lang attribute" },
              ],
            },
            {
              id: "q10",
              question: "Which statement about attributes is TRUE?",
              options: [
                { id: "a", text: "They must always be written in uppercase" },
                { id: "b", text: "They are written inside the opening tag and usually as name=\"value\"", correct: true },
                { id: "c", text: "They can only be used on <a> and <img> tags" },
                { id: "d", text: "They must always be single-quoted" },
              ],
            },
          ],

        },
      },
      {
        id: "structure-semantics",
        title: "Layout & Semantics",
        description: "Semantic elements and document outline.",
        lessons: [
          { id: "6", title: "Navigation", component: HtmlNavigation,
           },
          { id: "7",
             title: "Layout",
             component: HtmlLayouts, },
          { id:"8",
            title:"Style",
            component:HtmlStyle,

          },

          { id: "9", title: "Meta", component:Symbols, },
          { id: "10", title: "Forms", component:HtmlForms },
          { id: "11", title: "Semantic", component:HtmlSemantics, },
          

        ],
        quiz: {
          passPercent: 80,
          questions: [
            {
              id: "q1",
              question: "Which HTML element semantically wraps a site’s navigation menu?",
              options: [
                { id: "a", text: "<nav>", correct: true },
                { id: "b", text: "<menu>" },
                { id: "c", text: "<header>" },
                { id: "d", text: "<aside>" },
              ],
            },
            {
              id: "q2",
              question: "A typical navigation list is built with…",
              options: [
                { id: "a", text: "<ul> with <li> and <a> links", correct: true },
                { id: "b", text: "<ol> with <p> tags" },
                { id: "c", text: "<div> with <span> tags only" },
                { id: "d", text: "<section> with <h1> links" },
              ],
            },
            
            {
              id: "q3",
              question: "Which layout technique is best suited for two-dimensional, row-and-column page layouts?",
              options: [
                { id: "a", text: "CSS Grid", correct: true },
                { id: "b", text: "Floats" },
                { id: "c", text: "Flexbox" },
                { id: "d", text: "Position: absolute everywhere" },
              ],
            },
            {
              id: "q4",
              question: "Flexbox is primarily designed for…",
              options: [
                { id: "a", text: "One-dimensional layouts (a row OR a column)", correct: true },
                { id: "b", text: "Two-dimensional grids with rows AND columns" },
                { id: "c", text: "Table-based page layouts" },
                { id: "d", text: "Resetting browser styles" },
              ],
            },
            {
              id: "q5",
              question: "Which inline style syntax is correct?",
              options: [
                { id: "a", text: 'style="property:value;"', correct: true },
                { id: "b", text: "style=property:value" },
                { id: "c", text: "style:{property:value}" },
                { id: "d", text: "style(property=value)" },
              ],
            },
            {
              id: "q6",
              question: "What CSS property sets an element’s background color?",
              options: [
                { id: "a", text: "color" },
                { id: "b", text: "background" },
                { id: "c", text: "background-color", correct: true },
                { id: "d", text: "font-background" },
              ],
            },
            {
              id: "q7",
              question: "Where should meta tags be placed in an HTML document?",
              options: [
                { id: "a", text: "Inside <footer>" },
                { id: "b", text: "Inside <head>", correct: true },
                { id: "c", text: "Inside <body>" },
                { id: "d", text: "Anywhere in the document" },
              ],
            },
            {
              id: "q8",
              question: "What is the main purpose of the meta viewport tag?",
              options: [
                { id: "a", text: "Enable dark mode" },
                { id: "b", text: "Control caching behavior" },
                { id: "c", text: "Make the page responsive on mobile devices", correct: true },
                { id: "d", text: "Load external fonts" },
              ],
            },
            {
              id: "q9",
              question: "Which <form> attributes define where and how the form is submitted?",
              options: [
                { id: "a", text: "target and enctype" },
                { id: "b", text: "action and method", correct: true },
                { id: "c", text: "name and id" },
                { id: "d", text: "for and type" },
              ],
            },
            {
              id: "q10",
              question: "Which semantic element represents self-contained content like a blog post or news entry?",
              options: [
                { id: "a", text: "<section>" },
                { id: "b", text: "<article>", correct: true },
                { id: "c", text: "<main>" },
                { id: "d", text: "<summary>" },
              ],
            },

          ],
        },
      },
    ],
  },

  css: {
    slug: "css",
    title: "CSS",
    chapters: [
      {
        id: "basics",
        title: "Introduction to basic CSS and finding/fixing syntax errors",
        lessons: [
          { id: "1", title: "Introduction", component:cssIntroduction },
          { id: "2", title: "Selectors", component: CssSelectors },
          { id: "3", title: "Specificity ", component: CssSpecificity },
          { id: "4", title: "Structure", component:CssStructure  },
          { id: "6", title: "Units", component: CssUnits },  

        ],
        quiz: {
          passPercent: 80,
          questions: [
            {
              id: "q1",
              question: "What does CSS primarily control on a webpage?",
              options: [
              { id: "a", text: "Structure and semantics" },
              { id: "b", text: "Interactivity and data fetching" },
              { id: "c", text: "Presentation (colors, fonts, layout)", correct: true },
              { id: "d", text: "Server-side rendering" },
            ],
          },
          {
            id: "q2",
            question: "Which is the recommended way to apply CSS for larger projects?",
            options: [
              { id: "a", text: "Inline CSS on every element" },
              { id: "b", text: "Embedded CSS in <style> for each page" },
              { id: "c", text: "External stylesheet linked with <link>", correct: true },
              { id: "d", text: "Inside HTML comments" },
            ],
          },
          {
            id: "q3",
            question: "Which line shows correct CSS rule syntax?",
            options: [
              { id: "a", text: "selector: { property value; }" },
              { id: "b", text: "selector { property: value; }", correct: true },
              { id: "c", text: "{ selector: property: value }" },
              { id: "d", text: "selector (property=value);" },
            ],
          },
          {
            id: "q4",
            question: "What does the selector h1 in CSS select?",
            options: [
              { id: "a", text: "Only the first <h1> on the page" },
              { id: "b", text: "All <h1> elements", correct: true },
              { id: "c", text: "Only <h1> with a class" },
              { id: "d", text: "No elements unless an ID is provided" },
            ],
          },
          {
            id: "q5",
            question: "Which selector targets elements by class?",
            options: [
              { id: "a", text: "#title" },
              { id: "b", text: ".important", correct: true },
              { id: "c", text: "h1" },
              { id: "d", text: "*important*" },
            ],
          },
          {
            id: "q6",
            question: "Which selector has the highest specificity?",
            options: [
              { id: "a", text: "Type selector (e.g., p)" },
              { id: "b", text: "Class selector (e.g., .note)" },
              { id: "c", text: "ID selector (e.g., #main)", correct: true },
              { id: "d", text: "Universal selector (*)" },
            ],
          },
          {
            id: "q7",
            question: "If two rules have the same specificity, which one is applied?",
            options: [
              { id: "a", text: "The one declared first" },
              { id: "b", text: "The one declared last", correct: true },
              { id: "c", text: "Neither is applied" },
              { id: "d", text: "The browser picks randomly" },
            ],
          },
          {
            id: "q8",
            question: "Which comment syntax is correct in CSS?",
            options: [
              { id: "a", text: "// Comment" },
              { id: "b", text: "<!-- Comment -->" },
              { id: "c", text: "/* Comment */", correct: true },
              { id: "d", text: "# Comment" },
            ],
          },
          {
            id: "q9",
            question: "Which unit is relative to the root (<html>) font size?",
            options: [
              { id: "a", text: "em" },
              { id: "b", text: "rem", correct: true },
              { id: "c", text: "px" },
              { id: "d", text: "%" },
            ],
          },
          {
            id: "q10",
            question: "Which set best matches its description?",
            options: [
              { id: "a", text: "px: relative, rem: absolute" },
              { id: "b", text: "%: absolute, vw: absolute" },
              { id: "c", text: "em/rem: relative; vw/vh: viewport-relative", correct: true },
              { id: "d", text: "px/em: viewport-relative" },
            ],
          },
          ],
        },
      },
      {
        id: "layout",
        title: "Hierarchy, the box model, layout and position",
        lessons: [
          
          { id: "7", title: "Hierarchy", component: CSSHierarchy },
          { id: "8", title: "Box Model", component:CSSBoxModel },
          { id: "9", title: "Css Shorthands", component:CSSShorthand },
          { id: "10", title: "Css Layout", component:CSSLayout  },
          { id: "11", title: "Css Position", component: CSSPositionGuide },
        ],
        quiz: {
          passPercent: 80,
          questions: [
            {
              id: "q1",
              question: "Which has the highest specificity among these?",
              options: [
                { id: "a", text: "Element selector (e.g., p)" },
                { id: "b", text: "Class selector (e.g., .note)" },
                { id: "c", text: "ID selector (e.g., #main)" },
                { id: "d", text: "Inline style (style=\"...\")", correct: true },
              ],
            },
            {
              id: "q2",
              question: "If two rules target the same element and have equal specificity, which one applies?",
              options: [
                { id: "a", text: "The one written first" },
                { id: "b", text: "The one written last", correct: true },
                { id: "c", text: "The one with more properties" },
                { id: "d", text: "Neither, both are ignored" },
              ],
            },
            {
              id: "q3",
              question: "Which property is typically inherited by child elements?",
              options: [
                { id: "a", text: "padding" },
                { id: "b", text: "border" },
                { id: "c", text: "color", correct: true },
                { id: "d", text: "margin" },
              ],
            },
            {
              id: "q4",
              question: "In the CSS Box Model, which layer adds space OUTSIDE the border?",
              options: [
                { id: "a", text: "Content" },
                { id: "b", text: "Padding" },
                { id: "c", text: "Border" },
                { id: "d", text: "Margin", correct: true },
              ],
            },
            {
              id: "q5",
              question: "Given: div { width: 200px; padding: 20px; border: 5px solid; } What is the total horizontal space used (excluding margin) with the default box model?",
              options: [
                { id: "a", text: "200px" },
                { id: "b", text: "210px" },
                { id: "c", text: "250px" },
                { id: "d", text: "250px (200 + 20*2 + 5*2)", correct: true },
              ],
            },
            {
              id: "q6",
              question: "For shorthand 'margin: 10px 20px 15px 5px;', what is the order of sides?",
              options: [
                { id: "a", text: "left top right bottom" },
                { id: "b", text: "top right bottom left", correct: true },
                { id: "c", text: "top left bottom right" },
                { id: "d", text: "right top left bottom" },
              ],
            },
            {
              id: "q7",
              question: "Which of the following is a valid font shorthand?",
              options: [
                { id: "a", text: "font: 16px Arial;" },
                { id: "b", text: "font: bold 16px/1.5 'Arial', sans-serif;", correct: true },
                { id: "c", text: "font: 1.5 Arial bold 16px;" },
                { id: "d", text: "font: family Arial size 16px;" },
              ],
            },
            {
              id: "q8",
              question: "When should you prefer CSS Grid over Flexbox?",
              options: [
                { id: "a", text: "For one-dimensional layouts (only row or only column)" },
                { id: "b", text: "For two-dimensional layouts (rows AND columns)", correct: true },
                { id: "c", text: "For text wrapping only" },
                { id: "d", text: "When you need floats" },
              ],
            },
            {
              id: "q9",
              question: "An absolutely positioned element is positioned relative to…",
              options: [
                { id: "a", text: "The nearest ancestor with position NOT static", correct: true },
                { id: "b", text: "Always the viewport" },
                { id: "c", text: "The nearest <section> element" },
                { id: "d", text: "The next sibling element" },
              ],
            },
            {
              id: "q10",
              question: "How does position: sticky behave?",
              options: [
                { id: "a", text: "Always fixed to the viewport" },
                { id: "b", text: "Behaves like absolute after scrolling starts" },
                { id: "c", text: "Acts like relative until a threshold, then sticks like fixed", correct: true },
                { id: "d", text: "Removes element from document flow permanently" },
              ],
            },
          ],
        },
      },
      {
        id: "Flexbox",
        title: " Flexbox, animasjon og pseudo klasser",
        lessons: [
          { id: "12", title: "Flexbox", component: CSSFlexbox},
          { id: "13", title: "Flexbox Advanced", component: CSSFlexboxAdvanced },
          { id: "14", title: "Animation", component: CSSAnimation },
          { id: "15", title: "Pseudo", component: CSSPseudoClasses },

        ],
        quiz: {
          passPercent: 80,
          questions: [
            {
              id: "q1",
              question: "What does `display: flex;` do to an element?",
              options: [
                { id: "a", text: "Makes the element two-dimensional (rows and columns)" },
                { id: "b", text: "Turns it into a flex container controlling its children", correct: true },
                { id: "c", text: "Centers the element on the page" },
                { id: "d", text: "Fixes the element to the viewport" },
              ],
            },
            {
              id: "q2",
              question: "Which property sets the **main axis direction** in Flexbox?",
              options: [
                { id: "a", text: "justify-content" },
                { id: "b", text: "align-items" },
                { id: "c", text: "flex-direction", correct: true },
                { id: "d", text: "flex-flow" },
              ],
            },
            {
              id: "q3",
              question: "Which Flexbox property **distributes free space along the main axis**?",
              options: [
                { id: "a", text: "align-content" },
                { id: "b", text: "justify-content", correct: true },
                { id: "c", text: "align-items" },
                { id: "d", text: "order" },
              ],
            },
            {
              id: "q4",
              question: "What does `flex-wrap: wrap;` allow a flex container to do?",
              options: [
                { id: "a", text: "Reverse the item order" },
                { id: "b", text: "Allow items to move to multiple lines when needed", correct: true },
                { id: "c", text: "Center items vertically" },
                { id: "d", text: "Prevent items from shrinking" },
              ],
            },
            {
              id: "q5",
              question: "In Flexbox, which **shorthand** sets grow, shrink, and basis in one line?",
              options: [
                { id: "a", text: "flex", correct: true },
                { id: "b", text: "flex-flow" },
                { id: "c", text: "place-items" },
                { id: "d", text: "gap" },
              ],
            },
            {
              id: "q6",
              question: "Which is a correct **CSS animation** using keyframes?",
              options: [
                { id: "a", text: "@keyframes spin { 0% {rotate:0} 100% {rotate:360} } .box{ animation:spin 2s; }" },
                { id: "b", text: "@keyframes spin { 0% { transform: rotate(0deg) } 100% { transform: rotate(360deg) } } .box{ animation: spin 2s linear infinite; }", correct: true },
                { id: "c", text: ".box { transition: keyframes 2s; }" },
                { id: "d", text: "animation: keyframes spin 2s;" },
              ],
            },
            {
              id: "q7",
              question: "Which pseudo-class targets a link **on mouse hover**?",
              options: [
                { id: "a", text: ":focus" },
                { id: "b", text: ":visited" },
                { id: "c", text: ":hover", correct: true },
                { id: "d", text: ":active" },
              ],
            },
            {
              id: "q8",
              question: "CSS Grid: which property defines **columns** for the grid container?",
              options: [
                { id: "a", text: "grid-template-rows" },
                { id: "b", text: "grid-template-columns", correct: true },
                { id: "c", text: "grid-column" },
                { id: "d", text: "grid-auto-flow" },
              ],
            },
            {
              id: "q9",
              question: "To open your local dev site on a phone in the same Wi-Fi, what URL pattern is correct?",
              options: [
                { id: "a", text: "http://localhost:3000" },
                { id: "b", text: "http://127.0.0.1:3000" },
                { id: "c", text: "http://<your-computer-LAN-IP>:<port> (e.g., http://192.168.1.10:3000)", correct: true },
                { id: "d", text: "https://mobile-localhost:3000" },
              ],
            },
            {
              id: "q10",
              question: "Which ARIA attribute tells assistive tech whether a collapsible menu is open?",
              options: [
                { id: "a", text: "aria-label" },
                { id: "b", text: "aria-hidden" },
                { id: "c", text: "aria-expanded", correct: true },
                { id: "d", text: "aria-role" },
              ],
            },
          ],
        },
      },
      {
        id: "Grid",
        title: "  Grid, responsiv layout, ARIA og CSS rammeverk",
        lessons: [
          { id: "16", title: "Grid", component: CSSGrid },
          { id: "17", title: "LocalhostMobile ", component:LocalhostMobile},
          { id: "18", title: "ARIA", component: ARIA },
          { id: "19", title: "Rammeverk", component: rammeverk },


        ],
        quiz: {
          passPercent: 80,
          questions: [
            {
              id: "q1",
              question: "Which property creates columns in a CSS Grid container?",
              options: [
                { id: "a", text: "grid-columns" },
                { id: "b", text: "grid-template-columns", correct: true },
                { id: "c", text: "grid-auto-columns" },
                { id: "d", text: "grid-column" },
              ],
            },
            {
              id: "q2",
              question: "What does the unit `1fr` represent in CSS Grid?",
              options: [
                { id: "a", text: "1 fixed pixel" },
                { id: "b", text: "1% of the container width" },
                { id: "c", text: "One fraction of the available free space", correct: true },
                { id: "d", text: "Viewport fraction" },
              ],
            },
            {
              id: "q3",
              question: "Which declaration makes a simple 3-column grid with equal columns and 20px gaps?",
              options: [
                { id: "a", text: "display:grid; grid-columns: 1fr 1fr 1fr; gap:20px;" },
                { id: "b", text: "display:grid; grid-template-columns: repeat(3, 1fr); gap:20px;", correct: true },
                { id: "c", text: "display:flex; grid-template-columns: 1fr 1fr 1fr; gap:20px;" },
                { id: "d", text: "display:grid; columns:3; gap:20px;" },
              ],
            },
            {
              id: "q4",
              question: "How do you make an item span **two columns** in CSS Grid?",
              options: [
                { id: "a", text: "grid-span: 2;" },
                { id: "b", text: "grid-column: 1-2;" },
                { id: "c", text: "grid-column: 1 / 3;", correct: true },
                { id: "d", text: "grid-template-columns: span 2;" },
              ],
            },
            {
              id: "q5",
              question: "What is the difference between `gap` and `margin` in Grid layouts?",
              options: [
                { id: "a", text: "`gap` adds space between grid tracks; `margin` adds space outside an item.", correct: true },
                { id: "b", text: "They are identical in behavior." },
                { id: "c", text: "`gap` affects only rows; `margin` only columns." },
                { id: "d", text: "`gap` works only with Flexbox." },
              ],
            },
            {
              id: "q6",
              question: "To open your dev site on a phone in the same Wi-Fi, which URL pattern is correct?",
              options: [
                { id: "a", text: "http://localhost:3000" },
                { id: "b", text: "http://127.0.0.1:3000" },
                { id: "c", text: "http://<your-computer-LAN-IP>:<port>  (e.g., http://192.168.1.10:3000)", correct: true },
                { id: "d", text: "http://mobile-localhost:3000" },
              ],
            },
            {
              id: "q7",
              question: "Which ARIA attribute indicates whether a collapsible menu is open?",
              options: [
                { id: "a", text: "aria-hidden" },
                { id: "b", text: "aria-controls" },
                { id: "c", text: "aria-expanded", correct: true },
                { id: "d", text: "role" },
              ],
            },
            {
              id: "q8",
              question: "What does `aria-label` provide?",
              options: [
                { id: "a", text: "Keyboard focus order" },
                { id: "b", text: "A text alternative/description for an element", correct: true },
                { id: "c", text: "Visibility toggle for screen readers" },
                { id: "d", text: "Landmark role for navigation" },
              ],
            },
            {
              id: "q9",
              question: "Which tag/link correctly includes **Bootstrap CSS** from a CDN in the `<head>`?",
              options: [
                { id: "a", text: "<script src='bootstrap.css'></script>" },
                { id: "b", text: "<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap/dist/css/bootstrap.min.css'>", correct: true },
                { id: "c", text: "<style src='bootstrap.min.css'></style>" },
                { id: "d", text: "<import href='bootstrap.min.css' />" },
              ],
            },
            {
              id: "q10",
              question: "Which statement about **Grid vs Flexbox** is most accurate?",
              options: [
                { id: "a", text: "Flexbox is for two-dimensional layouts; Grid is one-dimensional." },
                { id: "b", text: "Both are only for vertical layout." },
                { id: "c", text: "Grid is ideal for two-dimensional rows & columns; Flexbox is one-dimensional.", correct: true },
                { id: "d", text: "You cannot combine Grid and Flexbox on the same page." },
              ],
            },
          ],
        },
      },
    ],
  },

  javascript: {
    slug: "javascript",
    title: "JavaScript",
    chapters: [
      {
        id: "language-basics",
        title: "Basics",
        lessons: [
          { id: "1", title: "What is JavaScripts",component:JavascriptsIntro },
          { id: "2", title: "Variable and Data Type", component: VariablesAndDataTypes },
          { id: "3", title: "alert() and prompt()", component:AlertsAndPrompts},
          ],
        quiz: {
          passPercent: 80,
           questions : [
  {
    id: "q1",
    question: "What is programming?",
    options: [
      { id: "a", text: "Writing documents for computers" },
      { id: "b", text: "Designing a computer program with instructions", correct: true },
      { id: "c", text: "Drawing website layouts" },
      { id: "d", text: "Styling web pages with CSS" },
    ],
  },
  {
    
  id: "q2",
  question: "Which of the following IS a programming language?",
  options: [
    { id: "a", text: "HTML" },
    { id: "b", text: "CSS" },
    { id: "c", text: "JavaScript", correct: true },
    { id: "d", text: "Photoshop" },
  ],


  },
  {
    id: "q3",
    question: "Why are HTML and CSS NOT programming languages?",
    options: [
      { id: "a", text: "They only handle structure and style, not logic", correct: true },
      { id: "b", text: "They use special symbols like < and >" },
      { id: "c", text: "They were created before JavaScript" },
      { id: "d", text: "They are harder to learn" },
    ],
  },
  {
    id: "q4",
    question: "Which of these is a JavaScript framework?",
    options: [
      { id: "a", text: "React", correct: true },
      { id: "b", text: "HTML" },
      { id: "c", text: "CSS" },
      { id: "d", text: "Photoshop" },
    ],
  },
  {
    id: "q5",
    question: "What is the role of JavaScript on a webpage?",
    options: [
      { id: "a", text: "Defines the skeleton of the page" },
      { id: "b", text: "Adds styling and colors" },
      { id: "c", text: "Adds interactivity and dynamic behavior", correct: true },
      { id: "d", text: "Stores user data permanently" },
    ],
  },
  {
    id: "q6",
    question: "What is debugging?",
    options: [
      { id: "a", text: "Writing new code" },
      { id: "b", text: "Removing viruses" },
      { id: "c", text: "Finding and fixing errors (bugs) in code", correct: true },
      { id: "d", text: "Installing frameworks" },
    ],
  },
  {
    id: "q7",
    question: "Which keyword is used for a variable that cannot be reassigned?",
    options: [
      { id: "a", text: "var" },
      { id: "b", text: "let" },
      { id: "c", text: "const", correct: true },
      { id: "d", text: "static" },
    ],
  },
  {
    id: "q8",
    question: "What is the output of typeof 'Hello'?",
    options: [
      { id: "a", text: "number" },
      { id: "b", text: "string", correct: true },
      { id: "c", text: "boolean" },
      { id: "d", text: "undefined" },
    ],
  },
  {
    id: "q9",
    question: "Which JavaScript method asks the user for input?",
    options: [
      { id: "a", text: "alert()" },
      { id: "b", text: "prompt()", correct: true },
      { id: "c", text: "console.log()" },
      { id: "d", text: "confirm()" },
    ],
  },
  {
    id: "q10",
    question: "What does parseInt() do in JavaScript?",
    options: [
      { id: "a", text: "Converts text to uppercase" },
      { id: "b", text: "Converts a string to a number", correct: true },
      { id: "c", text: "Displays a popup box" },
      { id: "d", text: "Joins two strings together" },
    ],
  },
],

        },
      },
      {
        id: "conditions",
        title: "Conditions in programming",
        lessons: [
          { id: "4", title: "Condition in programing", component:IfElseAndStringMethods}, 
        ],
        quiz: {
          passPercent: 80,
          questions :[
  {
    id: "q1",
    question: "What does an if/else structure do in programming?",
    options: [
      { id: "a", text: "Repeats code multiple times" },
      { id: "b", text: "Controls the flow based on conditions", correct: true },
      { id: "c", text: "Stores data in variables" },
      { id: "d", text: "Formats text in uppercase" },
    ],
  },
  {
    id: "q2",
    question: "Which operator checks both value and data type?",
    options: [
      { id: "a", text: "==" },
      { id: "b", text: "===" , correct: true },
      { id: "c", text: "!=" },
      { id: "d", text: "||" },
    ],
  },
  {
    id: "q3",
    question: "What does the logical operator && mean?",
    options: [
      { id: "a", text: "Or – at least one condition must be true" },
      { id: "b", text: "Not – inverts a condition" },
      { id: "c", text: "And – both conditions must be true", correct: true },
      { id: "d", text: "Compares string lengths" },
    ],
  },
  {
    id: "q4",
    question: "What does toUpperCase() do to a string?",
    options: [
      { id: "a", text: "Converts all letters to lowercase" },
      { id: "b", text: "Converts all letters to uppercase", correct: true },
      { id: "c", text: "Removes spaces" },
      { id: "d", text: "Checks if the string contains a substring" },
    ],
  },
  {
    id: "q5",
    question: "Which method checks if a string contains a specific word?",
    options: [
      { id: "a", text: "toUpperCase()" },
      { id: "b", text: "length" },
      { id: "c", text: "includes()", correct: true },
      { id: "d", text: "toLowerCase()" },
    ],
  },
  {
    id: "q6",
    question: "What does 'Roses are red'.length return?",
    options: [
      { id: "a", text: "3" },
      { id: "b", text: "27" },
      { id: "c", text: "14", correct: true },
      { id: "d", text: "false" },
    ],
  },
  {
    id: "q7",
    question: "Which operator checks if two values are not equal regardless of data type?",
    options: [
      { id: "a", text: "===" },
      { id: "b", text: "!==" },
      { id: "c", text: "!=", correct: true },
      { id: "d", text: "&&" },
    ],
  },
  {
    id: "q8",
    question: "What does the logical operator || (OR) do?",
    options: [
      { id: "a", text: "Both conditions must be true" },
      { id: "b", text: "At least one condition must be true", correct: true },
      { id: "c", text: "No conditions can be true" },
      { id: "d", text: "Compares string lengths" },
    ],
  },
  {
    id: "q9",
    question: "How can you write a simple if/else on one line?",
    options: [
      { id: "a", text: "Using the && operator" },
      { id: "b", text: "Using the || operator" },
      { id: "c", text: "Using the ternary operator ( ? : )", correct: true },
      { id: "d", text: "Using toUpperCase()" },
    ],
  },
  {
    id: "q10",
    question: "What does toLowerCase() do?",
    options: [
      { id: "a", text: "Capitalizes the first letter of the text" },
      { id: "b", text: "Converts the entire text to lowercase", correct: true },
      { id: "c", text: "Checks if the text is long enough" },
      { id: "d", text: "Adds new characters to the text" },
    ],
  },
]


},
  },
  {
  id: "Functions and onclick",
  title: "Functions and onclick",
  lessons: [
    { id: "5", title: "Functions", component: Functions },
    { id: "6", title: "Onclick", component: OnClickTutorial },
    { id: "7", title: "Counter", component: Counters },
    { id: "8", title: "addEventListener", component: AddEventListenerGuide },
  ],
  quiz: {
    passPercent: 80,
    // Quiz about functions, onclick, counter, and addEventListener
    questions: [
      {
        id: "q1",
        question: "What is a function in JavaScript?",
        options: [
          { id: "a", text: "A variable that stores text" },
          { id: "b", text: "A block of code that can be executed anytime", correct: true },
          { id: "c", text: "A button on the webpage" },
          { id: "d", text: "A CSS style rule" },
        ],
      },
      {
        id: "q2",
        question: "Which keyword is used to declare a function?",
        options: [
          { id: "a", text: "method" },
          { id: "b", text: "function", correct: true },
          { id: "c", text: "fun" },
          { id: "d", text: "func" },
        ],
      },
      {
        id: "q3",
        question: "What happens when we call myFunction(); after it is declared?",
        options: [
          { id: "a", text: "The function runs", correct: true },
          { id: "b", text: "Nothing happens" },
          { id: "c", text: "An error occurs" },
          { id: "d", text: "The variable is deleted" },
        ],
      },
      {
        id: "q4",
        question: "What do we call the values we pass into a function?",
        options: [
          { id: "a", text: "Variables" },
          { id: "b", text: "Parameters", correct: true },
          { id: "c", text: "Objects" },
          { id: "d", text: "Events" },
        ],
      },
      {
        id: "q5",
        question: "What is the purpose of 'return' in a function?",
        options: [
          { id: "a", text: "To stop the entire program" },
          { id: "b", text: "To send back a value from the function", correct: true },
          { id: "c", text: "To print text in the console" },
          { id: "d", text: "To define parameters" },
        ],
      },
      {
        id: "q6",
        question: "What does the onclick attribute do in HTML?",
        options: [
          { id: "a", text: "Stores data in a variable" },
          { id: "b", text: "Responds to a click and runs a function", correct: true },
          { id: "c", text: "Changes the page color automatically" },
          { id: "d", text: "Adds CSS style rules" },
        ],
      },
      {
        id: "q7",
        question: "What is a counter in JavaScript?",
        options: [
          { id: "a", text: "A button that counts the number of users" },
          { id: "b", text: "A variable that keeps track of a number that increases or decreases", correct: true },
          { id: "c", text: "A function that always returns 0" },
          { id: "d", text: "A built-in HTML method" },
        ],
      },
      {
        id: "q8",
        question: "What does addEventListener do?",
        options: [
          { id: "a", text: "Adds a CSS style" },
          { id: "b", text: "Removes an HTML element" },
          { id: "c", text: "Attaches an event to an HTML element", correct: true },
          { id: "d", text: "Starts the program automatically" },
        ],
      },
      {
        id: "q9",
        question: "What is the difference between bubbling and capturing?",
        options: [
          { id: "a", text: "Bubbling starts from the top of the DOM tree, capturing starts from the target" },
          { id: "b", text: "Capturing starts from the top of the DOM tree, bubbling starts from the target", correct: true },
          { id: "c", text: "They are exactly the same" },
          { id: "d", text: "They are only used in CSS" },
        ],
      },
      {
        id: "q10",
        question: "What does removeEventListener do?",
        options: [
          { id: "a", text: "Removes an event previously added with addEventListener", correct: true },
          { id: "b", text: "Deletes an HTML element" },
          { id: "c", text: "Stops all JavaScript code" },
          { id: "d", text: "Changes the text of an element" },
        ],
      },
],

        },
      },
       {
        id: "Loops ",
        title: "Loops, Arrays, Object and Array meth",
        lessons: [
          { id: "9", title: "Loops", component:Loops},
          { id: "10", title: "Arrays and Objects", component:ArraysObjects},
          {id:"11", title:"Array Methods", component:ArrayMethods},
          ],
        quiz: {
          passPercent: 80,
          questions: [
      {
        "id": "q1",
        "question": "What is an array in JavaScript?",
        "options": [
          { "id": "a", "text": "A type that stores a single value" },
          { "id": "b", "text": "A type that stores multiple values in one variable", "correct": true },
          { "id": "c", "text": "A special kind of function" },
          { "id": "d", "text": "A CSS property" }
        ]
      },
      {
        "id": "q2",
        "question": "How do you access the first element of an array `foodArray`?",
        "options": [
          { "id": "a", "text": "foodArray[1]" },
          { "id": "b", "text": "foodArray[0]", "correct": true },
          { "id": "c", "text": "foodArray.first()" },
          { "id": "d", "text": "foodArray.get(0)" }
        ]
      },
      {
        "id": "q3",
        "question": "What happens if you declare an array with `const` and then modify an element?",
        "options": [
          { "id": "a", "text": "The array cannot be changed at all" },
          { "id": "b", "text": "Only elements can be changed, not the array itself", "correct": true },
          { "id": "c", "text": "The program crashes" },
          { "id": "d", "text": "All elements are deleted" }
        ]
      },
      {
        "id": "q4",
        "question": "How do you find out the number of elements in an array `foodArray`?",
        "options": [
          { "id": "a", "text": "foodArray.size" },
          { "id": "b", "text": "foodArray.length", "correct": true },
          { "id": "c", "text": "foodArray.count()" },
          { "id": "d", "text": "length(foodArray)" }
        ]
      },
      {
        "id": "q5",
        "question": "Which method creates a new array with transformed elements?",
        "options": [
          { "id": "a", "text": "forEach()" },
          { "id": "b", "text": "map()", "correct": true },
          { "id": "c", "text": "filter()" },
          { "id": "d", "text": "push()" }
        ]
      },
      {
        "id": "q6",
        "question": "Which array method returns a new array containing only elements that match a condition?",
        "options": [
          { "id": "a", "text": "map()" },
          { "id": "b", "text": "filter()", "correct": true },
          { "id": "c", "text": "find()" },
          { "id": "d", "text": "forEach()" }
        ]
      },
      {
        "id": "q7",
        "question": "Which method executes a function on each array element but does NOT return a new array?",
        "options": [
          { "id": "a", "text": "forEach()", "correct": true },
          { "id": "b", "text": "map()" },
          { "id": "c", "text": "filter()" },
          { "id": "d", "text": "find()" }
        ]
      },
      {
        "id": "q8",
        "question": "Which method finds the first element in an array that satisfies a condition?",
        "options": [
          { "id": "a", "text": "map()" },
          { "id": "b", "text": "filter()" },
          { "id": "c", "text": "find()", "correct": true },
          { "id": "d", "text": "push()" }
        ]
      },
      {
        "id": "q9",
        "question": "How do you add a new element to the end of an array `fruits`?",
        "options": [
          { "id": "a", "text": "fruits.add('mango')" },
          { "id": "b", "text": "fruits.push('mango')", "correct": true },
          { "id": "c", "text": "fruits.insert('mango')" },
          { "id": "d", "text": "fruits[fruits.length + 1] = 'mango'" }
        ]
      },
      {
        "id": "q10",
        "question": "How can you access a property `name` from an object inside an array `monsters`?",
        "options": [
          { "id": "a", "text": "monsters.name" },
          { "id": "b", "text": "monsters[0].name", "correct": true },
          { "id": "c", "text": "monsters(0).name" },
          { "id": "d", "text": "monsters[0]['name']" }
        ]
      }
          ],
        },
      },
      
    ],
  },

/*   "command-line": {
    slug: "command-line",
    title: "Command Line",
    chapters: [
      {
        id: "navigation",
        title: "Navigation & Files",
        lessons: [
          { id: "ls-pwd", title: "ls & pwd" },
          { id: "cd-mkdir", title: "cd & mkdir" },
          { id: "rm-mv", title: "rm & mv" },
        ],
        quiz: {
          passPercent: 80,
          questions: [
            {
              id: "q1",
              question: "Which command lists files in the current directory?",
              options: [
                { id: "a", text: "pwd" },
                { id: "b", text: "ls", correct: true },
                { id: "c", text: "cd" },
                { id: "d", text: "cat" },
              ],
            },
            {
              id: "q2",
              question: "Which command creates a new directory?",
              options: [
                { id: "a", text: "mkdir", correct: true },
                { id: "b", text: "touch" },
                { id: "c", text: "rm" },
                { id: "d", text: "open" },
              ],
            },
          ],
        },
      },
    ],
  }, */

  /* git: {
    slug: "git",
    title: "Git & GitHub",
    chapters: [
      {
        id: "basics",
        title: "Git Basics",
        lessons: [
          { id: "init", title: "git init" },
          { id: "commit", title: "git add & git commit" },
          { id: "remote", title: "git remote & git push" },
        ],
        quiz: {
          passPercent: 80,
          questions: [
            {
              id: "q1",
              question: "Which command stages changes?",
              options: [
                { id: "a", text: "git add", correct: true },
                { id: "b", text: "git commit" },
                { id: "c", text: "git push" },
                { id: "d", text: "git status" },
              ],
            },
            {
              id: "q2",
              question: "Which command creates a new repo in the current folder?",
              options: [
                { id: "a", text: "git init", correct: true },
                { id: "b", text: "git clone" },
                { id: "c", text: "git create" },
                { id: "d", text: "git new" },
              ],
            },
          ],
        },
      },
    ],
  },

  react: {
    slug: "react",
    title: "React",
    chapters: [
      {
        id: "components-state",
        title: "Components & State",
        lessons: [
          { id: "components", title: "Function Components" },
          { id: "props", title: "Props" },
          { id: "state", title: "useState" },
        ],
        quiz: {
          passPercent: 80,
          questions: [
            {
              id: "q1",
              question: "Which hook is used to manage local component state?",
              options: [
                { id: "a", text: "useEffect" },
                { id: "b", text: "useState", correct: true },
                { id: "c", text: "useMemo" },
                { id: "d", text: "useRef" },
              ],
            },
            {
              id: "q2",
              question: "Props in React are…",
              options: [
                { id: "a", text: "mutable state" },
                { id: "b", text: "immutable inputs", correct: true },
                { id: "c", text: "global variables" },
                { id: "d", text: "lifecycle events" },
              ],
            },
          ],
        },
      },
      {
        id: "effects-routing",
        title: "Effects & Routing",
        lessons: [
          { id: "effect", title: "useEffect Basics" },
          { id: "next-routing", title: "Next.js App Router Basics" },
        ],
        quiz: {
          passPercent: 80,
          questions: [
            {
              id: "q1",
              question: "useEffect runs after…",
              options: [
                { id: "a", text: "every render by default", correct: true },
                { id: "b", text: "only once" },
                { id: "c", text: "on server only" },
                { id: "d", text: "never" },
              ],
            },
            {
              id: "q2",
              question: "Which folder defines routes in Next.js (App Router)?",
              options: [
                { id: "a", text: "src/routes" },
                { id: "b", text: "pages" },
                { id: "c", text: "app", correct: true },
                { id: "d", text: "public" },
              ],
            },
          ],
        },
      },
    ],
  },  */
};
