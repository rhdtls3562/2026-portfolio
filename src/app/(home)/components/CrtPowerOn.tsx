/**
 * CRT TV 전원 켜지는 2-레이어 애니메이션 오버레이.
 *
 * 레이어 1 (crt-bg-fade): 검정 오버레이가 콘텐츠를 완전히 차단한 채 서서히 사라짐.
 *   - animate=false: bg-black 그대로 유지 → 콘텐츠 차단
 *   - fill-mode "both" 덕분에 0% 상태(opacity 1)가 마운트 즉시 적용 → 노출 프레임 없음
 *
 * 레이어 2 (crt-line-expand): 밝은 수평 스캔라인이 얇게 나타났다가 전체로 확장 후 사라짐.
 *   - animate=false: opacity 0 유지 → 보이지 않음
 *   - fill-mode "both" → 0% 상태(scaleY 0.004, opacity 0)가 즉시 적용
 */
type Props = {
  animate: boolean;
};

export default function CrtPowerOn({ animate }: Props) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-50">
      {/* 레이어 1: 검정 오버레이 */}
      <div
        className="absolute inset-0 bg-black"
        style={
          animate
            ? { animation: 'crt-bg-fade 900ms ease-in both' }
            : undefined
        }
      />

      {/* 레이어 2: CRT 수평 스캔라인 */}
      <div
        className="absolute inset-0 origin-center bg-[#d8f4ff]"
        style={
          animate
            ? { animation: 'crt-line-expand 900ms ease-out both' }
            : { opacity: 0 }
        }
      />
    </div>
  );
}
