/**
 * 태블릿 이하(lg 미만, 1024px 미만) 환경에서 포트폴리오 접근을 안내하는 오버레이 컴포넌트.
 * 실제 콘텐츠는 데스크탑에서만 표시된다.
 */
import Image from "next/image";

export default function UnsupportedScreenNotice({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* 데스크탑(lg 이상)에서만 실제 콘텐츠 표시 */}
      <div className="hidden lg:contents">{children}</div>

      {/* 태블릿 이하에서만 안내 화면 표시 */}
      <div className="lg:hidden fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 px-8 text-center">
        {/* 배경 이미지 */}
        <Image
          src="/asset/img/img_desktop.png"
          alt=""
          fill
          className="object-cover object-center"
        />

        {/* 배경 어둠 오버레이 */}
        <div
          className="pointer-events-none absolute inset-0 bg-black/60"
          aria-hidden="true"
        />

        {/* 배경 그라디언트 */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(circle at top, rgba(255,93,167,0.14), transparent 40%), radial-gradient(circle at bottom left, rgba(78,112,255,0.16), transparent 40%)",
          }}
        />

        {/* 모니터 아이콘 */}
        <div className="relative z-10 flex items-center justify-center">
          <span className="text-6xl select-none" aria-hidden="true">
            🖥️
          </span>
        </div>

        {/* 제목 */}
        <h1 className="relative z-10 font-retro-display text-2xl font-extrabold tracking-widest text-white">
          DESKTOP ONLY
        </h1>

        {/* 설명 */}
        <p className="relative z-10 max-w-xs font-retro-terminal text-sm leading-relaxed text-white">
          이 포트폴리오는
          <br />
          데스크탑 환경에서만 관람 가능합니다.
          <br />더 넓은 화면으로 접속해 주세요.
        </p>

        {/* 터미널 스타일 힌트 */}
        <div className="relative z-10 flex h-8 w-55 items-center justify-center rounded border border-[rgba(255,93,167,0.3)] bg-[rgba(255,93,167,0.06)] text-center">
          <p className="font-retro-terminal text-sm text-[#ff8ac0] ">
            {"> "}recommended: 1024px↑
          </p>
        </div>
      </div>
    </>
  );
}
