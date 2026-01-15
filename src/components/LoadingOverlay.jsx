import { createPortal } from "react-dom";

export default function LoadingOverlay({ text = "Loading…" }) {
  return createPortal(
    <div
      className="fixed inset-0 z-[100000] flex items-center justify-center bg-[#fff0b3]"
      role="status"
      aria-live="polite"
      aria-label={text}
    >
      <div className="flex flex-col items-center gap-4 px-6">
        <div className="h-14 w-14 rounded-full border-4 border-[#8B6B00]/30 border-t-[#8B6B00] animate-spin" />
        <div className="text-[#8B6B00] font-semibold tracking-wide text-center">
          {text}
        </div>
      </div>
    </div>,
    document.body
  );
}
