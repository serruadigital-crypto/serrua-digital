import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/258834928034"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white pl-4 pr-5 py-3 shadow-elegant hover:scale-105 transition-transform"
    >
      <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping" aria-hidden />
      <MessageCircle className="size-5 relative" />
      <span className="text-sm font-bold relative hidden sm:inline">WhatsApp</span>
    </a>
  );
}
