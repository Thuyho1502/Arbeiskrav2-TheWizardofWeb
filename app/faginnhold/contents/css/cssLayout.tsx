"use client";

export default function CSSLayout() {
  return (
    <div className="prose bg-black/50 text-white p-6 rounded-xl">
      <p>
        <strong>CSS Layout</strong> handles how elements are organized and
        structured on a webpage. It ensures that elements appear correctly and
        look good on different screen sizes. Proper layout is essential for
        building responsive and user-friendly websites.
      </p>
      <br />

      <h3>Why CSS Layout is Important?</h3>
      <ul className="list-disc list-inside pl-6">
        <li>
          <strong>Usability:</strong> A well-organized layout makes it easier
          for users to find information and improves overall user experience.
        </li>
        <li>
          <strong>Responsive Design:</strong> Layout adapts to different
          devices like mobile, tablet, or desktop.
        </li>
        <li>
          <strong>Structure & Hierarchy:</strong> Helps guide users through
          content in a clear order, highlighting important elements like
          buttons or headings.
        </li>
        <li>
          <strong>Visual Appeal:</strong> A balanced layout makes the website
          look professional and attractive.
        </li>
        <li>
          <strong>Efficient Use of Space:</strong> Techniques like Flexbox and
          Grid help fill available space without overlapping or empty gaps.
        </li>
        <li>
          <strong>Maintainability:</strong> Easier to update and modify the
          page structure when the layout is well organized.
        </li>
      </ul>
      <br />

      <h3>Common CSS Layout Techniques</h3>
      <ul className="list-disc list-inside pl-6">
        <li>
          <strong>Positioning:</strong> Use <code>relative</code>,{" "}
          <code>absolute</code>, or <code>fixed</code> to place elements
          precisely on the page.
        </li>
        <li>
          <strong>Flexbox:</strong> Arrange elements in one dimension
          (horizontal or vertical). Ideal for menus, buttons, or small
          components.
        </li>
        <li>
          <strong>CSS Grid:</strong> Create two-dimensional layouts (rows and
          columns). Useful for full-page structures that adapt to screen
          sizes.
        </li>
        <li>
          <strong>Float:</strong> Historically used to wrap text around
          elements. Modern Flexbox and Grid are recommended instead.
        </li>
      </ul>
      <br />

      <h3>Example: Flexbox Layout</h3>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<div class="flex justify-between items-center">
  <div>Logo</div>
  <nav>Menu</nav>
</div>`}
      </pre>
      <br />

      <h3>Example: Grid Layout</h3>
      <pre className="bg-gray-800 text-green-300 p-4 rounded">
{`<div class="grid grid-cols-3 gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`}
      </pre>
      <br />

      <h2>Summary</h2>
      <ul className="list-disc list-inside pl-6">
        <li>CSS layout controls element placement and page structure.</li>
        <li>
          Flexbox is great for one-dimensional layouts; Grid is ideal for
          two-dimensional layouts.
        </li>
        <li>
          Proper layout improves usability, responsiveness, and visual appeal
          of websites.
        </li>
      </ul>
    </div>
  );
}
