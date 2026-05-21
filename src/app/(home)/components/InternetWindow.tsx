/** 외부 링크를 작은 브라우저 창 스타일로 노출하는 컴포넌트. */
import { cn } from "@/utils/cn";
import { LINKS } from "@/app/(home)/components/retro-constants";

export default function InternetWindow() {
  return (
    <div className="flex h-full flex-col gap-2.5 p-3">
      <div className="text-center">
        <p className="font-retro-terminal text-2xs uppercase tracking-widest text-d-warm">
          &gt; kwonsaerom.network
        </p>
        <h2 className="font-retro-display mt-1 text-xs uppercase tracking-wider text-d-ink">
          Links
        </h2>
        <div className="mt-2 h-px bg-d-border" />
      </div>

      <div className="flex flex-1 flex-col justify-center gap-1.5">
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={
              link.href.startsWith("mailto:")
                ? undefined
                : "noopener noreferrer"
            }
            className={cn(
              "group flex items-center justify-between",
              "border border-d-border bg-white/60 px-2.5 py-2",
              "shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]",
              "transition-colors hover:border-d-warm hover:bg-white/85",
            )}
          >
            <div>
              <p className="font-retro-display text-2xs uppercase tracking-wider text-d-ink transition-colors group-hover:text-d-warm">
                {link.label}
              </p>
              <p className="font-retro-terminal mt-0.5 text-3xs text-d-muted">
                {link.note}
              </p>
            </div>
            <span className="font-retro-terminal text-xs text-d-warm transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        ))}
      </div>

      <p className="shrink-0 text-center font-retro-terminal text-3xs text-d-muted">
        &copy; 2026 Kwon Saerom
      </p>
    </div>
  );
}
