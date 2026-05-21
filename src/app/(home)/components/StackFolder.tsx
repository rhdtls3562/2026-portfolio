import { STACKS } from "./retro-constants";

export default function StackFolder() {
  return (
    <div className="grid h-full grid-cols-2 content-start gap-1.5 overflow-y-auto p-2">
      {STACKS.map(({ category, items }) => (
        <div
          key={category}
          className="border border-d-border bg-white/55 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]"
        >
          <p className="font-retro-display text-2xs uppercase tracking-wider text-d-warm">
            {category}
          </p>
          <div className="mt-1.5 flex flex-col gap-1">
            {items.map((item) => (
              <div key={item} className="flex items-center gap-1">
                <span className="size-1 shrink-0 rounded-full bg-d-warm" />
                <span className="font-retro-terminal text-2xs text-d-text">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
