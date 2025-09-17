// store/courseFlow.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CourseKey = string; // ví dụ: "html"
type ChapterIndex = number;
type LessonKey = string; // ví dụ: "html:intro:what-is-html"

type CourseFlowState = {
  // slug -> chương cao nhất đã mở (mặc định 0)
  unlocked: Record<CourseKey, ChapterIndex>;
  // các bài đã done
  doneLessons: Record<LessonKey, boolean>;

  // getters
  isChapterUnlocked: (slug: string, chapterIndex: number) => boolean;
  isLessonDone: (slug: string, chapterId: string, lessonId: string) => boolean;

  // actions
  ensureCourse: (slug: string) => void;
  markLessonDone: (slug: string, chapterId: string, lessonId: string) => void;
  unlockNextChapter: (slug: string, nextChapterIndex: number) => void;
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
        // Nếu chưa từng mở khoá -> coi như mở chapter 0
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
    }),
    { name: "course-flow" }
  )
);
