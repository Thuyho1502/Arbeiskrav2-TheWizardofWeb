"use client";
import GenericOppgaverPage from "@/app/Oppgaver/GenericOppgavePage";
import { jsTASKS } from "../tasks/jsTask";

export default function Page() {
  return (
    <GenericOppgaverPage
      tasks={jsTASKS}
      storageKey="oppgaver_js_code"
      courseTitle="JavaScript — Oppgaver"
    />
  );
}
