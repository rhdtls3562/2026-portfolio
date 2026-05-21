type Props = {
  isPoweringOff: boolean;
};

export default function CrtPowerOn({ isPoweringOff }: Props) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-50">
      <div
        className="absolute inset-0 bg-white opacity-0"
        style={
          isPoweringOff
            ? {
                animation:
                  "crt-screen-flash 400ms cubic-bezier(0.55, 0.055, 0.675, 0.19) both",
              }
            : undefined
        }
      />

      <div
        className="absolute inset-x-2 inset-y-0 flex items-center"
      >
        <div
          className="h-1.5 w-full origin-center bg-white opacity-0 shadow-[0_0_10px_3px_rgba(255,255,255,0.92)]"
          style={
            isPoweringOff
              ? {
                  animation:
                    "crt-beam-collapse 500ms cubic-bezier(0.215, 0.61, 0.355, 1) 300ms both",
                }
              : undefined
          }
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="size-7 rounded-full bg-white opacity-0 blur-sm"
          style={
            isPoweringOff
              ? {
                  animation:
                    "crt-center-glow 560ms cubic-bezier(0.645, 0.045, 0.355, 1) 250ms both",
                }
              : undefined
          }
        />
      </div>
    </div>
  );
}
