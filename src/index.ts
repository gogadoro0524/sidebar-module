// Main Component
export { AppSidebar } from './AppSidebar'

// Sub Components
export { TeamSwitcher } from './components/TeamSwitcher'
export { NavMain } from './components/NavMain'
export { NavProjects } from './components/NavProjects'
export { NavSecondary } from './components/NavSecondary'
export { NavUser } from './components/NavUser'

// UI Components
export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from './components/ui/sidebar'

export { Button } from './components/ui/button'
export { Input } from './components/ui/input'
export { Separator } from './components/ui/separator'
export { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './components/ui/sheet'
export { Skeleton } from './components/ui/skeleton'
export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './components/ui/tooltip'
export { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar'
export {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from './components/ui/dropdown-menu'
export {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './components/ui/collapsible'

// Hooks
export { useIsMobile } from './hooks/use-mobile'

// Utils
export { cn } from './lib/utils'

// Types
export type {
  User,
  Team,
  NavItem,
  Project,
  SidebarData,
  AppSidebarProps,
} from './types'

// Mock Data
export { defaultSidebarData } from './data/mockData'