import type { LucideIcon } from "lucide-react"

export interface User {
  name: string
  email: string
  avatar: string
}

export interface Team {
  name: string
  logo: LucideIcon
  plan: string
}

export interface NavItem {
  title: string
  url: string
  icon?: LucideIcon
  isActive?: boolean
  items?: {
    title: string
    url: string
  }[]
}

export interface Project {
  name: string
  url: string
  icon: LucideIcon
}

export interface SidebarData {
  user: User
  teams: Team[]
  navMain: NavItem[]
  navSecondary: NavItem[]
  projects: Project[]
}

export interface AppSidebarProps extends React.ComponentProps<"aside"> {
  data?: SidebarData
}