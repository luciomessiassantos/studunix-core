import type { LucideIconData } from 'lucide-angular';
import { CommomColors } from './colorUtils'

export type ActionCardProps = {
    id: string
    title: string
    details?: string
    onClickAction: () => void
    Icon: LucideIconData
    color: CommomColors
    transparent?: boolean
}

export type NotificationInlineCard = {
  label: string
  color: CommomColors
  details: string
  icon: LucideIconData
}

export type TabData = {
  label: string
  icon: LucideIconData
  path: string
}

