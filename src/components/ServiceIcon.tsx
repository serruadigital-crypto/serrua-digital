import type { LucideIcon } from "lucide-react";
import {
  Share2, Megaphone, Globe, Search, MapPin, Bot, QrCode, ShieldCheck, Lightbulb,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Share2, Megaphone, Globe, Search, MapPin, Bot, QrCode, ShieldCheck, Lightbulb,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = map[name] ?? Share2;
  return <Icon className={className} />;
}
