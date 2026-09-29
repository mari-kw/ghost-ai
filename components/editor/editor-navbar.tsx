"use client";

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import type { Ref } from "react";

import { Button } from "@/components/ui/button";

interface EditorNavbarProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
  sidebarId: string;
  toggleRef?: Ref<HTMLButtonElement>;
}

export function EditorNavbar({
  isSidebarOpen,
  onToggleSidebar,
  sidebarId,
  toggleRef,
}: EditorNavbarProps) {
  const ToggleIcon = isSidebarOpen ? PanelLeftClose : PanelLeftOpen;

  return (
    <header className="grid h-14 shrink-0 grid-cols-[1fr_auto_1fr] items-center border-b border-surface-border bg-surface px-4">
      <div className="flex items-center justify-start">
        <Button
          ref={toggleRef}
          variant="ghost"
          size="icon"
          className="rounded-xl"
          aria-label={isSidebarOpen ? "Close project sidebar" : "Open project sidebar"}
          aria-expanded={isSidebarOpen}
          aria-controls={sidebarId}
          onClick={onToggleSidebar}
        >
          <ToggleIcon className="size-5" aria-hidden="true" />
        </Button>
      </div>
      <div />
      <div />
    </header>
  );
}
