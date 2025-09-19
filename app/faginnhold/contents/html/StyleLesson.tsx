// app/faginnhold/contents/html/StyleLesson.tsx
"use client";

export default function StyleLesson() {
  return (
    <div className="bg-black/90 text-white rounded-xl p-6">
      <h2 className="text-2xl font-bold">HTML Styles</h2>
      <p className="mt-2 text-neutral-200">
        Thuộc tính <code>style</code> cho phép bạn áp CSS trực tiếp vào phần tử HTML.
        Cú pháp: <code>style="property: value;"</code>
      </p>

      <hr className="my-6 border-white/10" />

      <h3 className="text-xl font-semibold">Ví dụ nhanh</h3>
      <pre className="mt-3 rounded bg-black/60 p-4 overflow-x-auto">
        {`<p style="color: red;">Dòng chữ màu đỏ</p>
<p style="font-size: 24px;">Cỡ chữ 24px</p>
<p style="background-color: #222; color: #0ff; padding: 8px;">
  Nền tối, chữ xanh ngọc, có padding
</p>`}
      </pre>

      <div className="mt-4 rounded bg-white text-black p-4 space-y-2">
        <p style={{ color: "red" }}>Dòng chữ màu đỏ</p>
        <p style={{ fontSize: 24 }}>Cỡ chữ 24px</p>
        <p style={{ backgroundColor: "#222", color: "#0ff", padding: 8 }}>
          Nền tối, chữ xanh ngọc, có padding
        </p>
      </div>

      <hr className="my-6 border-white/10" />

      <h3 className="text-xl font-semibold">Một số thuộc tính hay dùng</h3>
      <ul className="list-disc pl-6 space-y-1 text-neutral-200">
        <li><code>color</code> – màu chữ</li>
        <li><code>background-color</code> – màu nền</li>
        <li><code>font-size</code>, <code>font-family</code> – kiểu/chữ</li>
        <li><code>text-align</code> – canh lề: left / center / right</li>
        <li><code>padding</code>, <code>margin</code>, <code>border</code></li>
      </ul>

      <pre className="mt-3 rounded bg-black/60 p-4 overflow-x-auto">
        {`<h1 style="text-align:center; color:#4f46e5;">Tiêu đề căn giữa màu chàm</h1>
<p style="background-color:#111; color:#ddd; padding:12px;">
  Đoạn văn có nền tối, chữ xám, padding 12px
</p>`}
      </pre>

      <hr className="my-6 border-white/10" />

      <div className="text-sm text-neutral-300">
        <strong>Lưu ý:</strong> dùng inline style thích hợp cho ví dụ nhỏ.
        Trong dự án thật, hãy đặt CSS vào class hoặc file CSS để dễ tái sử dụng.
      </div>
    </div>
  );
}
