export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[var(--color-text-muted)] text-xs tracking-widest uppercase">
          © 2026 Kwon Saerom. All rights reserved.
        </p>
        <p className="text-[var(--color-text-muted)] text-xs tracking-widest uppercase">
          Frontend Developer
        </p>
      </div>
    </footer>
  );
}
