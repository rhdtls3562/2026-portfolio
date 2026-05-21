/** 하단 저작권과 역할 정보를 표시하는 푸터 컴포넌트. */
export default function Footer() {
  return (
    <footer className="border-t border-(--color-border) px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-(--color-text-muted) text-xs tracking-widest uppercase">
          © 2026 Kwon Saerom. All rights reserved.
        </p>
        <p className="text-(--color-text-muted) text-xs tracking-widest uppercase">
          Frontend Developer
        </p>
      </div>
    </footer>
  );
}
