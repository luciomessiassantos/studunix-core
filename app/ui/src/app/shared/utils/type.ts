import type { LucideIconData } from 'lucide-angular';

export type CommonColors = "pastel-green" | 
"pastel-blue" | 
"pastel-red" | 
"pastel-purple" | 
"pastel-orange" | 
"pastel-yellow" | 
"pastel-lavender" | 
"pastel-cyan" | 
"pastel-pink" | 
"pastel-peach" |
"transparent"

export type ActionCardProps = {
    id: string
    title: string
    details?: string
    onClickAction: () => void
    Icon: LucideIconData
    color: CommonColors
    transparent?: boolean
}

type PastelTheme = {
  bg: string
  bgSoft: string
  bgLight: string
  bgHover: string
  text: string
  border: string
  borderSoft: string
  ring: string
}

export const pastelClasses: Record<CommonColors, PastelTheme> = {
  "pastel-green": {
    bg: "bg-pastel-green",
    bgSoft: "bg-pastel-green/20",
    bgLight: "bg-pastel-green/10",
    bgHover: "hover:bg-pastel-green/20",
    text: "text-pastel-green",
    border: "border-pastel-green",
    borderSoft: "border-pastel-green/30",
    ring: "ring-pastel-green/30"
  },

  "pastel-blue": {
    bg: "bg-pastel-blue",
    bgSoft: "bg-pastel-blue/20",
    bgLight: "bg-pastel-blue/10",
    bgHover: "hover:bg-pastel-blue/20",
    text: "text-pastel-blue",
    border: "border-pastel-blue",
    borderSoft: "border-pastel-blue/30",
    ring: "ring-pastel-blue/30"
  },

  "pastel-red": {
    bg: "bg-pastel-red",
    bgSoft: "bg-pastel-red/20",
    bgLight: "bg-pastel-red/10",
    bgHover: "hover:bg-pastel-red/20",
    text: "text-pastel-red",
    border: "border-pastel-red",
    borderSoft: "border-pastel-red/30",
    ring: "ring-pastel-red/30"
  },

  "pastel-purple": {
    bg: "bg-pastel-purple",
    bgSoft: "bg-pastel-purple/20",
    bgLight: "bg-pastel-purple/10",
    bgHover: "hover:bg-pastel-purple/20",
    text: "text-pastel-purple",
    border: "border-pastel-purple",
    borderSoft: "border-pastel-purple/30",
    ring: "ring-pastel-purple/30"
  },

  "pastel-orange": {
    bg: "bg-pastel-orange",
    bgSoft: "bg-pastel-orange/20",
    bgLight: "bg-pastel-orange/10",
    bgHover: "hover:bg-pastel-orange/20",
    text: "text-pastel-orange",
    border: "border-pastel-orange",
    borderSoft: "border-pastel-orange/30",
    ring: "ring-pastel-orange/30"
  },

  "pastel-yellow": {
    bg: "bg-pastel-yellow",
    bgSoft: "bg-pastel-yellow/20",
    bgLight: "bg-pastel-yellow/10",
    bgHover: "hover:bg-pastel-yellow/20",
    text: "text-pastel-yellow",
    border: "border-pastel-yellow",
    borderSoft: "border-pastel-yellow/30",
    ring: "ring-pastel-yellow/30"
  },

  "pastel-lavender": {
    bg: "bg-pastel-lavender",
    bgSoft: "bg-pastel-lavender/20",
    bgLight: "bg-pastel-lavender/10",
    bgHover: "hover:bg-pastel-lavender/20",
    text: "text-pastel-lavender",
    border: "border-pastel-lavender",
    borderSoft: "border-pastel-lavender/30",
    ring: "ring-pastel-lavender/30"
  },

  "pastel-cyan": {
    bg: "bg-pastel-cyan",
    bgSoft: "bg-pastel-cyan/20",
    bgLight: "bg-pastel-cyan/10",
    bgHover: "hover:bg-pastel-cyan/20",
    text: "text-pastel-cyan",
    border: "border-pastel-cyan",
    borderSoft: "border-pastel-cyan/30",
    ring: "ring-pastel-cyan/30"
  },

  "pastel-pink": {
    bg: "bg-pastel-pink",
    bgSoft: "bg-pastel-pink/20",
    bgLight: "bg-pastel-pink/10",
    bgHover: "hover:bg-pastel-pink/20",
    text: "text-pastel-pink",
    border: "border-pastel-pink",
    borderSoft: "border-pastel-pink/30",
    ring: "ring-pastel-pink/30"
  },

  "pastel-peach": {
    bg: "bg-pastel-peach",
    bgSoft: "bg-pastel-peach/20",
    bgLight: "bg-pastel-peach/10",
    bgHover: "hover:bg-pastel-peach/20",
    text: "text-pastel-peach",
    border: "border-pastel-peach",
    borderSoft: "border-pastel-peach/30",
    ring: "ring-pastel-peach/30"
  },

  "transparent": {
    bg: "bg-mute/20",
    bgSoft: "bg-mute/20",
    bgLight: "bg-mute/10",
    bgHover: "hover:bg-mute/20",
    text: "text-mute",
    border: "border-mute",
    borderSoft: "border-mute/30",
    ring: "ring-mute/30"
  }
};
