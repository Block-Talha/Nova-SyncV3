"use client";

type DemoContactPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function DemoContactPopup({ isOpen, onClose }: DemoContactPopupProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-2xl border border-outline-variant/20 bg-surface-container-highest p-5 shadow-2xl sm:p-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-headline text-lg font-bold text-white">
            Book Your Demo
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-outline-variant/30 px-3 py-1.5 font-headline text-xs font-bold uppercase tracking-wide text-on-surface-variant transition-colors hover:text-white"
          >
            Close
          </button>
        </div>

        <div className="space-y-3">
          <a
            href="tel:+923105939786"
            className="block rounded-xl bg-white px-4 py-3 text-center font-headline text-sm font-bold text-black transition-colors hover:bg-zinc-100"
          >
             Phone Call
          </a>
          <a
            href="wa.me/923283696394"
            target="_blank"
            rel="noreferrer"
            className="block rounded-xl border border-outline-variant/30 px-4 py-3 text-center font-headline text-sm font-bold text-white transition-all hover:bg-white hover:text-black"
          >
             WhatsApp
          </a>
          <a
            href="novasyncs.services@gmail.com"
            className="block rounded-xl border border-outline-variant/30 px-4 py-3 text-center font-headline text-sm font-bold text-white transition-all hover:bg-white hover:text-black"
          >
             Gmail
          </a>
        </div>
      </div>
    </div>
  );
}
