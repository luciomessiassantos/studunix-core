export type CommomColors =
  | "pastel-red"
  | "pastel-blue"
  | "pastel-pink"
  | "pastel-purple"
  | "pastel-green"
  | "pastel-yellow"
  | "pastel-orange"
  | "pastel-cyan"
  | "pastel-mint"
  | "pastel-peach"
  | "pastel-lavender";

export type Theme = {
    bg: string
    bgSoft: string
    bgSofter: string
    border: string
    text: string
}


const createTheme = (color: CommomColors): Theme => ({
  bg: `bg-${color}`,
  bgSoft: `bg-${color}/50`,
  bgSofter: `bg-${color}/15`,
  border: `border-${color}`,
  text: `text-${color}`,
});

export const colorClasses: Record<CommomColors, Theme> = {
  "pastel-red": createTheme("pastel-red"),
  "pastel-blue": createTheme("pastel-blue"),
  "pastel-pink": createTheme("pastel-pink"),
  "pastel-purple": createTheme("pastel-purple"),
  "pastel-green": createTheme("pastel-green"),
  "pastel-yellow": createTheme("pastel-yellow"),
  "pastel-orange": createTheme("pastel-orange"),
  "pastel-cyan": createTheme("pastel-cyan"),
  "pastel-mint": createTheme("pastel-mint"),
  "pastel-peach": createTheme("pastel-peach"),
  "pastel-lavender": createTheme("pastel-lavender"),
};


export const colorClassesAlt: Record<CommomColors, Theme> = {
  "pastel-red": {
    bg: "bg-pastel-red",
    bgSoft: "bg-pastel-red/18",
    bgSofter: "bg-pastel-red/10",
    border: "border-pastel-red",
    text: "text-pastel-red",
  },
  "pastel-blue": {
    bg: "bg-pastel-blue",
    bgSoft: "bg-pastel-blue/18",
    bgSofter: "bg-pastel-blue/10",
    border: "border-pastel-blue",
    text: "text-pastel-blue",
  },
  "pastel-pink": {
    bg: "bg-pastel-pink",
    bgSoft: "bg-pastel-pink/18",
    bgSofter: "bg-pastel-pink/10",
    border: "border-pastel-pink",
    text: "text-pastel-pink",
  },
  "pastel-purple": {
    bg: "bg-pastel-purple",
    bgSoft: "bg-pastel-purple/18",
    bgSofter: "bg-pastel-purple/10",
    border: "border-pastel-purple",
    text: "text-pastel-purple",
  },
  "pastel-green": {
    bg: "bg-pastel-green",
    bgSoft: "bg-pastel-green/18",
    bgSofter: "bg-pastel-green/10",
    border: "border-pastel-green",
    text: "text-pastel-green",
  },
  "pastel-yellow": {
    bg: "bg-pastel-yellow",
    bgSoft: "bg-pastel-yellow/18",
    bgSofter: "bg-pastel-yellow/10",
    border: "border-pastel-yellow",
    text: "text-pastel-yellow",
  },
  "pastel-orange": {
    bg: "bg-pastel-orange",
    bgSoft: "bg-pastel-orange/18",
    bgSofter: "bg-pastel-orange/10",
    border: "border-pastel-orange",
    text: "text-pastel-orange",
  },
  "pastel-cyan": {
    bg: "bg-pastel-cyan",
    bgSoft: "bg-pastel-cyan/18",
    bgSofter: "bg-pastel-cyan/10",
    border: "border-pastel-cyan",
    text: "text-pastel-cyan",
  },
  "pastel-mint": {
    bg: "bg-pastel-mint",
    bgSoft: "bg-pastel-mint/18",
    bgSofter: "bg-pastel-mint/10",
    border: "border-pastel-mint",
    text: "text-pastel-mint",
  },
  "pastel-peach": {
    bg: "bg-pastel-peach",
    bgSoft: "bg-pastel-peach/18",
    bgSofter: "bg-pastel-peach/10",
    border: "border-pastel-peach",
    text: "text-pastel-peach",
  },
  "pastel-lavender": {
    bg: "bg-pastel-lavender",
    bgSoft: "bg-pastel-lavender/18",
    bgSofter: "bg-pastel-lavender/10",
    border: "border-pastel-lavender",
    text: "text-pastel-lavender",
  },
};