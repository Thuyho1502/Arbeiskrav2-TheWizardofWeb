"use client";
import GenericOppgaverPage from "@/app/Oppgaver/GenericOppgavePage";
import { htmlTASKS } from "../tasks/htmlTask";
export default function Page() {
  return (
    <GenericOppgaverPage
      tasks={htmlTASKS}
      storageKey="oppgaver_html_code"
      courseTitle="HTML — Oppgaver"
    />
  );
}
