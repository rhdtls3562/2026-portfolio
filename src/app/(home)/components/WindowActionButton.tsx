/** 레퍼런스형 창 내부에서 공통으로 쓰는 액션 버튼 컴포넌트. */
import { cn } from "@/utils/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

const BUTTON_CLASS = cn(
  "relative inline-flex h-[54px] min-w-[175px] items-center justify-center border-[3px] border-white",
  "bg-win-surface-mid px-5 font-retro-terminal text-xs uppercase tracking-soft text-white",
  "shadow-[0_0_10px_rgba(0,0,0,0.25)] transition-none hover:bg-win-surface-mid hover:text-white hover:no-underline",
  "before:pointer-events-none before:absolute before:inset-[5px] before:border-2 before:border-dashed before:border-win-accent-deep",
);

export default function WindowActionButton({
  children,
  className,
  href,
  onClick,
  type = "button",
}: Props) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={cn(BUTTON_CLASS, className)}
      >
        {children}
      </a>
    );
  }

  return <button type={type} onClick={onClick} className={cn(BUTTON_CLASS, className)}>{children}</button>;
}
