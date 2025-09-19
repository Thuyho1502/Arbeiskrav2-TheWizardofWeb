"use client";
import Image from "next/image";

export default function HtmlLayouts() {
  return (
 <div className="prose bg-black/50 text-white p-6 rounded-xl">

      <h1>HTML Layout Elements & Techniques</h1>

      <p>
        Websites thường hiển thị nội dung trong nhiều cột (như tạp chí hay báo).  
      </p>

      <h2>Semantic HTML Layout Elements</h2>
      <p>HTML có một số thẻ semantic định nghĩa các phần khác nhau của trang web:</p>
      <ul className="list-disc list-inside pl-6">
        <li><code>&lt;header&gt;</code> — Định nghĩa phần đầu trang hoặc phần đầu của một section.</li>
        <li><code>&lt;nav&gt;</code> — Định nghĩa tập hợp các liên kết điều hướng (navigation).</li>
        <li><code>&lt;section&gt;</code> — Định nghĩa một phần nội dung trong tài liệu.</li>
        <li><code>&lt;article&gt;</code> — Nội dung độc lập, có thể tách ra (ví dụ bài viết, tin tức).</li>
        <li><code>&lt;aside&gt;</code> — Nội dung bên lề, không phải phần nội dung chính (ví dụ sidebar).</li>
        <li><code>&lt;footer&gt;</code> — Định nghĩa phần chân trang hoặc chân section.</li>
        <li><code>&lt;details&gt;</code> — Định nghĩa phần chi tiết mà người dùng có thể mở/đóng tùy ý.</li>
        <li><code>&lt;summary&gt;</code> — Tiêu đề cho phần <code>&lt;details&gt;</code>.</li>
      </ul>

      <h2>Layout Techniques (Kỹ thuật bố cục)</h2>
      <p>Có bốn kỹ thuật thường dùng để tạo layout nhiều cột:</p>
      <ul className="list-disc list-inside pl-6">
        <li>CSS frameworks (ví dụ: W3.CSS, Bootstrap) — nhanh, có sẵn nhiều module. </li>
        <li>CSS float property — dễ học nhưng có hạn chế về tính linh hoạt và quản lý dòng chảy của tài liệu. </li>
        <li>CSS Flexbox — tốt cho layout linh hoạt, hỗ trợ responsive khá tốt. </li>
        <li>CSS Grid — module mạnh mẽ cho grid-based layout, dễ thiết kế hàng và cột mà không cần dùng nhiều float hay positioning phức tạp. </li>
      </ul>

      <h2>Ví dụ minh họa</h2>
      <p>W3Schools có các ví dụ (Try it Yourself) để thực hành với từng kỹ thuật layout như float, flexbox, grid. </p>

    </div>
  )
}
