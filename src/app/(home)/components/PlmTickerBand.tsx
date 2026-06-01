/** 컬러풀 PLM 스타일 창 하단/중간 마퀴 밴드. */
import { cn } from "@/utils/cn";

const BAND_TONES = {
  blue: "border-[#cfe3fb] bg-[#e3f2fd] text-[#1565c0]",
  butter: "border-[#f3e5b4] bg-[#fff8e1] text-[#f57f17]",
  lavender: "border-[#ddd0f4] bg-[#ede7f6] text-[#5e35b1]",
  mint: "border-[#cfe9d2] bg-[#e8f5e9] text-[#2e7d32]",
  pink: "border-[#f6d2df] bg-[#fce4ec] text-[#e91e8c]",
} as const;

type Props = {
  items: string[];
  tone: keyof typeof BAND_TONES;
  trackClassName?: string;
};

export default function PlmTickerBand({ items, tone, trackClassName }: Props) {
  const duplicatedItems = [...items, ...items];

  return (
    <div className={cn("overflow-hidden border-y py-[0.83vw]", BAND_TONES[tone])}>
      <div className={cn("marquee-track", trackClassName)}>
        {duplicatedItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="mx-[2.2vw] whitespace-nowrap text-[0.72vw] font-black uppercase tracking-[0.22em]"
          >
            {item}
            <span className="mx-[1.7vw] opacity-30">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
