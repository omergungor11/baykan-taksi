import {
  Car,
  Plane,
  Hotel,
  MapPinned,
  Camera,
  KeyRound,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Car,
  Plane,
  Hotel,
  MapPinned,
  Camera,
  KeyRound,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = map[name] ?? Car;
  return <Cmp className={className} aria-hidden />;
}
