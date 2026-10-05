import { FileText, Ghost, Share2, Sparkles } from "lucide-react";
import type { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

const features = [
  {
    icon: Sparkles,
    title: "AI Architecture Generation",
    description: "Describe your system. AI maps it to nodes and edges on a live canvas.",
  },
  {
    icon: Share2,
    title: "Real-time Collaboration",
    description: "Live cursors, presence indicators, and shared node editing across your team.",
  },
  {
    icon: FileText,
    title: "Instant Spec Generation",
    description: "Export a complete Markdown technical spec directly from the canvas graph.",
  },
];

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="grid min-h-dvh w-full flex-1 grid-cols-1 bg-base lg:grid-cols-2">
      <section className="hidden min-w-0 flex-col border-r border-surface-border bg-auth-panel px-10 py-8 lg:flex xl:px-14 xl:py-10">
        <div className="flex items-center gap-3 text-lg font-semibold tracking-tight text-copy-primary">
          <span className="flex size-9 items-center justify-center rounded-xl border border-brand/25 bg-accent-dim">
            <Ghost className="size-6 text-brand" aria-hidden="true" />
          </span>
          <span>Ghost AI</span>
        </div>
        <div className="my-auto w-full max-w-xl py-12">
          <h1 className="max-w-md text-3xl font-semibold leading-tight tracking-tight text-copy-primary xl:text-4xl">
            Design systems at the<br />speed of thought.
          </h1>
          <p className="mt-5 text-base leading-7 text-copy-muted">
            Describe your architecture in plain English. Ghost AI maps it to a shared
            canvas your whole team can refine in real time.
          </p>
          <ul className="mt-10 space-y-7">
            {features.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex items-start gap-4">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-xl border border-brand/25 bg-accent-dim text-brand">
                  <Icon className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-base font-medium text-copy-secondary">{title}</h2>
                  <p className="mt-1 text-sm leading-6 text-copy-muted">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-xs text-copy-faint">© {new Date().getFullYear()} Ghost AI. All rights reserved.</p>
      </section>
      <section aria-label="Account access" className="flex min-w-0 items-center justify-center px-4 py-8 sm:px-8 lg:px-10">
        {children}
      </section>
    </main>
  );
}
