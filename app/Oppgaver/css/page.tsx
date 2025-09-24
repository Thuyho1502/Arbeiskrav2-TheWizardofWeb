"use client";
import GenericOppgaverPage from "@/app/Oppgaver/GenericOppgavePage";
import { cssTASKS } from "../tasks/cssTask";

export default function Page() {
  return (
    <GenericOppgaverPage
      tasks={cssTASKS}
      storageKey="oppgaver_css_code"
      courseTitle="CSS — Oppgaver"
    />
  );
}
