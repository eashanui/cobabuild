import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/94112698867"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid place-items-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-xl hover:scale-105 transition-transform"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute -top-1 -right-1 h-3 w-3 bg-accent rounded-full ring-2 ring-background animate-pulse" />
    </a>
  );
}
