"use client";

export default function Headings() {
  return (
    <section className="rounded-xl border border-white/10 bg-black/90 p-6 text-white">
      <h1 className="text-3xl font-bold">HTML Headings</h1>
      <p className="mt-2 text-neutral-300">
        HTML headings là tiêu đề/phụ đề bạn muốn hiển thị trên trang.
      </p>

      <h2 className="mt-8 text-2xl font-semibold">Ví dụ</h2>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-neutral-900/70 p-4">
        <code>{`
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <h5>Heading 5</h5>
                <h6>Heading 6</h6>`
              }</code>
      </pre>

      <div className="mt-4 space-y-2 rounded-lg bg-white p-6 text-neutral-900">
        <h1 className="text-5xl font-bold">Heading 1</h1>
        <h2 className="text-4xl font-bold">Heading 2</h2>
        <h3 className="text-3xl font-bold">Heading 3</h3>
        <h4 className="text-2xl font-semibold">Heading 4</h4>
        <h5 className="text-xl font-semibold">Heading 5</h5>
        <h6 className="text-base font-semibold">Heading 6</h6>
      </div>

      <h2 className="mt-10 text-2xl font-semibold">Vì sao heading quan trọng?</h2>
      <ul className="mt-2 list-disc space-y-1 pl-6 text-neutral-300">
        <li>SEO & trợ năng dùng heading để hiểu cấu trúc trang.</li>
        <li>
          Mỗi trang chỉ nên có <code className="rounded bg-neutral-800/80 px-1">h1</code> cho tiêu đề
          chính.
        </li>
        <li>
          Thứ tự hợp lý: <code>h1</code> → <code>h2</code> → <code>h3</code> …
        </li>
      </ul>

      <h2 className="mt-10 text-2xl font-semibold">Line break</h2>
      <p className="mt-1 text-neutral-300">
        Dùng thẻ tự đóng <code className="rounded bg-neutral-800/80 px-1">&lt;br&gt;</code> để xuống
        dòng trong đoạn văn.
      </p>
      <pre className="mt-3 overflow-x-auto rounded-lg bg-neutral-900/70 p-4">
        <code>{`<p>Florida man robs convenience store with an alligator.<br>Leaves a baby Crocs behind.</p>`}</code>
      </pre>

      <div className="mt-6 rounded-lg bg-white p-6 text-neutral-900">
        <h1 className="text-5xl font-bold">Breaking News</h1>
        <p className="mt-4 text-xl">
          Florida man robs convenience store with a live alligator.<br />
          Leaves a baby Crocs behind.
        </p>
      </div>

      
    </section>
  );
}
