import { EMAIL } from "./retro-constants";
import { cn } from "@/utils/cn";

function EmailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="font-retro-display w-8 shrink-0 text-3xs uppercase tracking-widest text-d-warm">
        {label}
      </span>
      <span className="font-retro-terminal text-2xs text-d-text">{value}</span>
    </div>
  );
}

export default function EmailsWindow() {
  return (
    <div className="flex h-full flex-col gap-2 p-2.5">
      {/* 헤더 필드 */}
      <div className="shrink-0 border border-d-border bg-white/60 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
        <div className="flex flex-col gap-1.5">
          <EmailRow label="FROM" value="kwon saerom" />
          <div className="h-px bg-d-border" />
          <EmailRow label="TO"   value={EMAIL} />
          <div className="h-px bg-d-border" />
          <EmailRow label="SUBJ" value="Let's build something together" />
        </div>
      </div>

      {/* 본문 */}
      <div className="min-h-0 flex-1 overflow-y-auto border border-d-border bg-white/65 p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
        <p className="font-retro-terminal text-2xs leading-relaxed text-d-text">
          새로운 기회나 협업 제안, 혹은 가벼운 인사도 언제든 환영합니다.
          <br /><br />
          디자인 감성과 기술 구현력을 함께 가진 프론트엔드 개발자가
          필요하다면 편하게 연락 주세요.
        </p>
      </div>

      {/* 전송 버튼 */}
      <a
        href={`mailto:${EMAIL}`}
        className={cn(
          "group shrink-0 flex items-center justify-center gap-2",
          "border border-d-warm bg-d-warm/10 px-3 py-2",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]",
          "transition-colors hover:bg-d-warm/20",
        )}
      >
        <span className="font-retro-display text-2xs uppercase tracking-wider text-d-warm-deep">
          Send Mail
        </span>
        <span className="font-retro-terminal text-xs text-d-warm transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </a>
    </div>
  );
}
