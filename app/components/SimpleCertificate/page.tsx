"use client";

import { useMemo, useState } from "react";
import { Press_Start_2P } from "next/font/google";

const pixel = Press_Start_2P({ subsets: ["latin"], weight: "400" });

function BrandMark({
  className = "",
  size = "sm",
}: {
  className?: string;
  size?: "sm" | "md";
}) {
  const box =
    size === "md" ? "h-12 w-12 text-xl" : "h-9 w-9 text-base";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span
        aria-hidden="true"
        className={`${pixel.className} inline-flex ${box} items-center justify-center rounded-md
                    bg-gradient-to-br from-indigo-500 to-emerald-500 text-white font-black`}
      >
        W
      </span>
      <span
        className={`${pixel.className} text-lg md:text-xl font-extrabold tracking-wider
                    bg-gradient-to-r from-indigo-500 to-emerald-500 bg-clip-text text-transparent`}
      >
        WIZARD
      </span>
    </div>
  );
}

export default function SimpleCertificate({
  courseTitle,
  studentName: initialName = "",
  onChangeName,
  onClose,
  goHome,
  goFaginnhold,
  goOppgaver,
}: {
  courseTitle: string;
  studentName?: string;
  onChangeName?: (v: string) => void;
  onClose?: () => void;
  goHome?: () => void;
  goFaginnhold?: () => void;
  goOppgaver?: () => void;
}) {
  const [editing, setEditing] = useState(!initialName);
  const [localName, setLocalName] = useState(initialName);
  const dateStr = useMemo(
    () => new Date().toLocaleDateString("no-NO"),
    []
  );

  const name = (localName || "").trim() || "Student";

  const saveName = () => {
    setEditing(false);
    onChangeName?.(localName);
  };

  return (
    <div className="w-full max-w-3xl rounded-2xl border border-white/10 bg-neutral-900/95 p-6 md:p-8 text-white shadow-2xl">
      {/* header */}
      <div className="flex items-start justify-between">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight">
          <span className="mr-2">🎉</span> Certificate of Completion
        </h1>
        <button
          onClick={onClose}
          aria-label="Close"
          className="rounded-full p-2 hover:bg-white/10"
        >
          ✕
        </button>
      </div>

      {/* body center */}
      <div className="mt-8 text-center">
        <div className="text-xs tracking-widest text-white/50">
          PRESENTED TO
        </div>

        {!editing ? (
          <div className="mt-2 flex items-center justify-center gap-3">
            <div className="text-2xl md:text-3xl font-semibold">{name}</div>
            <button
              onClick={() => setEditing(true)}
              className="rounded px-2 py-1 text-sm text-white/70 hover:bg-white/10"
              aria-label="Edit name"
              title="Edit name"
            >
              ✎
            </button>
          </div>
        ) : (
          <div className="mt-3 mx-auto max-w-md flex items-center gap-2">
            <input
              value={localName}
              onChange={(e) => setLocalName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full rounded-lg bg-white/5 px-4 py-3 outline-none ring-1 ring-white/10 focus:ring-indigo-500"
            />
            <button
              onClick={saveName}
              className="rounded-lg bg-indigo-600 px-3 py-3 font-semibold hover:bg-indigo-500"
            >
              Save
            </button>
          </div>
        )}

        <div className="mt-7 text-sm tracking-widest text-white/50">
          FOR SUCCESSFULLY COMPLETING THE COURSE
        </div>
        <div
          className={`${pixel.className} mt-3 text-3xl md:text-4xl tracking-widest`}
        >
          {courseTitle}
        </div>
      </div>

      
      <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* footer info: date + instructor  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div>
          <div className="text-xs tracking-widest text-white/50">DATE</div>
          <div className="mt-2 text-lg font-medium">{dateStr}</div>
        </div>

        <div className="md:text-right">
          <div className="text-xs tracking-widest text-white/50">
            INSTRUCTOR / WIZARD OF WEB
          </div>
          <div className="mt-2 inline-flex items-center justify-end">
            <BrandMark size="sm" />
          </div>
        </div>
      </div>

      {/* buttons */}
      <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <button
          onClick={goOppgaver}
          className="rounded-lg bg-emerald-600 px-4 py-3 font-semibold hover:bg-emerald-500"
        >
          Challenge
        </button>
        <button
          onClick={goHome}
          className="rounded-lg bg-indigo-600 px-4 py-3 font-semibold hover:bg-indigo-500"
        >
          Home
        </button>
        <button
          onClick={goFaginnhold}
          className="rounded-lg bg-amber-500 px-4 py-3 font-semibold text-black hover:bg-amber-400"
        >
          Courses
        </button>
      </div>
    </div>
  );
}
