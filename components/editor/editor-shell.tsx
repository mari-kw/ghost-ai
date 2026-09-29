"use client";

import { useId, useRef, useState, type ReactNode } from "react";

import { EditorNavbar } from "@/components/editor/editor-navbar";
import { ProjectSidebar } from "@/components/editor/project-sidebar";

interface EditorShellProps {
  children?: ReactNode;
}

export function EditorShell({ children }: EditorShellProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  function closeSidebar() {
    setIsSidebarOpen(false);
    toggleRef.current?.focus();
  }

  return (
    <div className="flex h-dvh flex-col overflow-hidden bg-base text-copy-primary">
      <EditorNavbar
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen((open) => !open)}
        sidebarId={sidebarId}
        toggleRef={toggleRef}
      />
      <div className="relative min-h-0 flex-1 overflow-hidden">
        <main aria-label="Editor canvas" className="h-full w-full">{children}</main>
        <ProjectSidebar id={sidebarId} isOpen={isSidebarOpen} onClose={closeSidebar} />
      </div>
    </div>
  );
}
