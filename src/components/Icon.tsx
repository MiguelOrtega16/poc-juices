import {
  ArrowRight,
  ArrowUpRight,
  Plus,
  Minus,
  X,
  Play,
  Check,
  Leaf,
  Droplet,
  Snowflake,
  Truck,
  Ship,
  Wrench,
  Ruler,
  MapPin,
  Mail,
  CalendarDays,
  Sparkles,
  Star,
  Globe,
  Martini,
  GlassWater,
  Citrus,
  FlaskConical,
  type LucideIcon,
} from 'lucide-react'

/** One consistent icon family (Lucide), used sparingly across the site. */
const ICONS = {
  arrow: ArrowRight,
  arrowUp: ArrowUpRight,
  plus: Plus,
  minus: Minus,
  x: X,
  play: Play,
  check: Check,
  leaf: Leaf,
  drop: Droplet,
  snowflake: Snowflake,
  truck: Truck,
  ship: Ship,
  wrench: Wrench,
  ruler: Ruler,
  pin: MapPin,
  mail: Mail,
  calendar: CalendarDays,
  sparkle: Sparkles,
  star: Star,
  globe: Globe,
  martini: Martini,
  glass: GlassWater,
  citrus: Citrus,
  flask: FlaskConical,
} satisfies Record<string, LucideIcon>

export type IconName = keyof typeof ICONS

type IconProps = { name: IconName; size?: number; className?: string; strokeWidth?: number }

export function Icon({ name, size = 20, className = '', strokeWidth = 1.6 }: IconProps) {
  const C = ICONS[name]
  return <C size={size} className={className} strokeWidth={strokeWidth} absoluteStrokeWidth aria-hidden="true" />
}
