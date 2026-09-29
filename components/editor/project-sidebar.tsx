"use client";

import { Plus, X } from "lucide-react";
import { useId } from "react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface ProjectSidebarProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  onNewProject?: () => void;
}

export function ProjectSidebar({
  id,
  isOpen,
  onClose,
  onNewProject,
}: ProjectSidebarProps) {
  const titleId = useId();

  return (
    <aside
      id={id}
      aria-labelledby={titleId}
      aria-hidden={!isOpen}
      inert={!isOpen}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          event.stopPropagation();
          onClose();
        }
      }}
      className={cn(
        "absolute inset-y-4 left-4 z-20 flex w-80 max-w-[calc(100%-2rem)] flex-col overflow-hidden rounded-2xl border border-surface-border bg-surface/95 shadow-xl backdrop-blur-sm transition-transform duration-200 ease-out motion-reduce:transition-none",
        isOpen ? "translate-x-0" : "pointer-events-none -translate-x-[calc(100%+1rem)]",
      )}
    >
      <div className="flex shrink-0 items-center justify-between border-b border-surface-border p-4">
        <h2 id={titleId} className="text-sm font-semibold text-copy-primary">
          Projects
        </h2>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-xl"
          aria-label="Close project sidebar"
          onClick={onClose}
        >
          <X className="size-5" aria-hidden="true" />
        </Button>
      </div>
      <Tabs defaultValue="my-projects" className="min-h-0 flex-1 overflow-y-auto p-4">
        <TabsList className="w-full shrink-0 rounded-xl" aria-label="Project groups">
          <TabsTrigger value="my-projects" className="rounded-xl">My Projects</TabsTrigger>
          <TabsTrigger value="shared" className="rounded-xl">Shared</TabsTrigger>
        </TabsList>
        <TabsContent value="my-projects" className="content-center py-8 text-center text-copy-muted">
          No projects yet.
        </TabsContent>
        <TabsContent value="shared" className="content-center py-8 text-center text-copy-muted">
          No shared projects yet.
        </TabsContent>
      </Tabs>
      <div className="shrink-0 border-t border-surface-border p-4">
        <Button className="w-full rounded-xl" onClick={onNewProject} disabled={!onNewProject}>
          <Plus className="size-4" aria-hidden="true" />
          New Project
        </Button>
      </div>
    </aside>
  );
}
