import { create } from "zustand";
import { persist } from "zustand/middleware";
import { COURSE_CONTENT } from "@/app/faginnhold/coursecontent";

type CourseKey = string; 
type ChapterIndex = number;
type LessonKey = string;

type CourseFlowState = {
  // current state
  unlocked: Record<CourseKey, ChapterIndex>;
  doneLessons: Record<LessonKey, boolean>;

  // state quiz + oppgave
  quizResults: Record<string, { score: number; completedAt: number }>;
  oppgaveResults: Record<string, { score: number; completedAt: number }>;

  // getters
  isChapterUnlocked: (slug: string, chapterIndex: number) => boolean;
  isLessonDone: (slug: string, chapterId: string, lessonId: string) => boolean;
  hasPassedQuiz: (slug: string, chapterId: string) => boolean;
  canTakeOppgave: (slug: string, chapterId: string) => boolean;
  hasCompletedOppgave: (slug: string, chapterId: string) => boolean;
  hasPassedCourse: (slug: string) => boolean;
  isCourseUnlocked: (slug: string) => boolean;

  // actions
  ensureCourse: (slug: string) => void;
  markLessonDone: (slug: string, chapterId: string, lessonId: string) => void;
  unlockNextChapter: (slug: string, nextChapterIndex: number) => void;
  unlockChapterIfNeeded: (slug: string, chapterIndex: number) => void;

  // quiz
  markQuizDone: (slug: string, chapterId: string, score: number) => void;

  // oppgave
  markOppgaveDone: (slug: string, chapterId: string, score: number) => void;
};

const keyOfLesson = (slug: string, c: string, l: string) => `${slug}:${c}:${l}`;

export const useCourseFlow = create<CourseFlowState>()(
  persist(
    (set, get) => ({
      // ========== STATE ==========
      unlocked: {},
      doneLessons: {},
      quizResults: {},
      oppgaveResults: {},

      // ========== LESSONS ==========
      ensureCourse: (slug) => {
        if (get().unlocked[slug] == null) {
          set({ unlocked: { ...get().unlocked, [slug]: 0 } });
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

      unlockChapterIfNeeded: (slug, chapterIndex) => {
        const current = get().unlocked[slug] ?? 0;
        if (chapterIndex > current) {
          get().unlockNextChapter(slug, chapterIndex);
        }
      },

      // ========== QUIZ ==========
      markQuizDone: (slug, chapterId, score) => {
        const key = `${slug}:${chapterId}`;
        set((s) => ({
          quizResults: {
            ...s.quizResults,
            [key]: { score, completedAt: Date.now() },
          },
        }));
      },

      hasPassedQuiz: (slug, chapterId) => {
        const key = `${slug}:${chapterId}`;
        const r = get().quizResults[key];
        return r?.score >= 80;
      },

      // ========== OPPGAVE ==========
      markOppgaveDone: (slug, chapterId, score) => {
        const key = `${slug}:${chapterId}`;
        set((s) => ({
          oppgaveResults: {
            ...s.oppgaveResults,
            [key]: { score, completedAt: Date.now() },
          },
        }));
      },

      hasCompletedOppgave: (slug, chapterId) => {
        const key = `${slug}:${chapterId}`;
        return !!get().oppgaveResults[key];
      },

      canTakeOppgave: (slug, chapterId) => {
        const chapter = COURSE_CONTENT[slug]?.chapters.find(c => c.id === chapterId);
        if (!chapter) return false;
        const lessonsDone = chapter.lessons?.every(l => get().isLessonDone(slug, chapterId, l.id));
        const quizPassed = get().hasPassedQuiz(slug, chapterId);
        return !!lessonsDone && !!quizPassed;
      },

      // ========== COURSE LEVEL ==========
      hasPassedCourse: (slug) => {
        const course = COURSE_CONTENT[slug];
        if (!course) return false;
        return course.chapters.every(ch => get().hasCompletedOppgave(slug, ch.id));
      },

      isCourseUnlocked: (slug) => {
        return !!get().unlocked[slug];
      },
    }),
    { name: "course-flow" }
  )
);
