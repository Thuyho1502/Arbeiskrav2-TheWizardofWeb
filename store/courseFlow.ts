import { create } from "zustand";
import { persist } from "zustand/middleware";

type CourseKey = string; // ví dụ: "html"
type ChapterIndex = number;
type LessonKey = string; // ví dụ: "html:intro:what-is-html"

type CourseFlowState = {
  // slug -> chapter cao nhất đã unlock
  unlocked: Record<CourseKey, ChapterIndex>;
  // các lesson đã done
  doneLessons: Record<LessonKey, boolean>;

  // getters
  isChapterUnlocked: (slug: string, chapterIndex: number) => boolean;
  isLessonDone: (slug: string, chapterId: string, lessonId: string) => boolean;

  // actions
  ensureCourse: (slug: string) => void;
  markLessonDone: (slug: string, chapterId: string, lessonId: string) => void;
  unlockNextChapter: (slug: string, nextChapterIndex: number) => void;
  unlockChapterIfNeeded: (slug: string, chapterIndex: number) => void; // ✅ helper mới
};

const keyOfLesson = (slug: string, c: string, l: string) => `${slug}:${c}:${l}`;

export const useCourseFlow = create<CourseFlowState>()(
  persist(
    (set, get) => ({
      unlocked: {},
      doneLessons: {},

      ensureCourse: (slug) => {
        const { unlocked } = get();
        if (unlocked[slug] == null) {
          set({ unlocked: { ...unlocked, [slug]: 0 } });
        }
      },

      isChapterUnlocked: (slug, chapterIndex) => {
        const u = get().unlocked[slug];
        return (u ?? 0) >= chapterIndex;
      },

      isLessonDone: (slug, chapterId, lessonId) => {
        return !!get().doneLessons[keyOfLesson(slug, chapterId, lessonId)];
      },

      markLessonDone: (slug, chapterId, lessonId) => {
        const k = keyOfLesson(slug, chapterId, lessonId);
        set((s) => ({ doneLessons: { ...s.doneLessons, [k]: true } }));
      },

      unlockNextChapter: (slug, nextChapterIndex) => {
        set((s) => {
          const current = s.unlocked[slug] ?? 0;
          if (nextChapterIndex > current) {
            return { unlocked: { ...s.unlocked, [slug]: nextChapterIndex } };
          }
          return s;
        });
      },

      // Helper: đảm bảo chapter được unlock nếu vượt quá chapter hiện tại
      unlockChapterIfNeeded: (slug, chapterIndex) => {
        const current = get().unlocked[slug] ?? 0;
        if (chapterIndex > current) {
          get().unlockNextChapter(slug, chapterIndex);
        }
      },
    }),
    { name: "course-flow" }
  )
);
