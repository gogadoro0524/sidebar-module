import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "./components/ui/sidebar"
import { TeamSwitcher } from "./components/TeamSwitcher"
import { NavMain } from "./components/NavMain"
import { NavProjects } from "./components/NavProjects"
import { NavSecondary } from "./components/NavSecondary"
import { NavUser } from "./components/NavUser"
import { defaultSidebarData } from "./data/mockData"
import type { AppSidebarProps } from "./types"

export function AppSidebar({ data = defaultSidebarData, ...props }: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" {...(props as any)}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}