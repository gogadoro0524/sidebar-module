# Sidebar Module

A highly customizable, production-ready sidebar component for React applications. Built with Radix UI and Tailwind CSS.

## Features

- **Fully Responsive** - Works seamlessly on desktop and mobile devices
- **Collapsible** - Icon-only mode for space-saving navigation
- **Keyboard Shortcuts** - `Cmd/Ctrl + B` to toggle sidebar
- **Customizable** - Easy to theme and modify
- **TypeScript Support** - Full type safety
- **Accessible** - Built with Radix UI for accessibility
- **Modern Stack** - React 18, Tailwind CSS, Radix UI

## Preview

![Sidebar Module Demo](https://raw.githubusercontent.com/gogadoro0524/sidebar-module/main/.github/assets/team-switcher-modal.png)

## Installation

```bash
npm install @gogadoro/sidebar-module
# or
yarn add @gogadoro/sidebar-module
# or
pnpm add @gogadoro/sidebar-module
```

## Quick Start

```tsx
import { AppSidebar, SidebarProvider, SidebarInset, SidebarTrigger } from '@gogadoro/sidebar-module'
import '@gogadoro/sidebar-module/dist/index.css'

function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 items-center gap-2 px-4">
          <SidebarTrigger />
          <h1>Your App Content</h1>
        </header>
        <main className="flex-1 p-4">
          {/* Your main content */}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
```

## Custom Data

You can provide your own data structure:

```tsx
import { AppSidebar } from '@gogadoro/sidebar-module'
import { Home, Settings, Users } from 'lucide-react'

const customData = {
  user: {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/avatar.jpg"
  },
  teams: [
    {
      name: "My Team",
      logo: Home,
      plan: "Pro"
    }
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Home,
      isActive: true,
      items: [
        { title: "Overview", url: "/dashboard/overview" },
        { title: "Analytics", url: "/dashboard/analytics" }
      ]
    },
    {
      title: "Users",
      url: "/users",
      icon: Users,
      items: [
        { title: "All Users", url: "/users/all" },
        { title: "Roles", url: "/users/roles" }
      ]
    }
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/settings",
      icon: Settings
    }
  ],
  projects: [
    {
      name: "Project Alpha",
      url: "/projects/alpha",
      icon: Home
    }
  ]
}

<AppSidebar data={customData} />
```

## Advanced Customization

### 🎨 CSS Variables Theming

Customize colors by overriding CSS variables in your global stylesheet:

```css
/* Light theme */
:root {
  --sidebar-background: 0 0% 98%;
  --sidebar-foreground: 240 5.3% 26.1%;
  --sidebar-primary: 240 5.9% 10%;
  --sidebar-primary-foreground: 0 0% 98%;
  --sidebar-accent: 240 4.8% 95.9%;
  --sidebar-accent-foreground: 240 5.9% 10%;
  --sidebar-border: 220 13% 91%;
  --sidebar-ring: 217.2 91.2% 59.8%;
}

/* Dark theme */
.dark {
  --sidebar-background: 240 5.9% 10%;
  --sidebar-foreground: 240 4.8% 95.9%;
  --sidebar-primary: 0 0% 98%;
  --sidebar-primary-foreground: 240 5.9% 10%;
  --sidebar-accent: 240 3.7% 15.9%;
  --sidebar-accent-foreground: 240 4.8% 95.9%;
  --sidebar-border: 240 3.7% 15.9%;
  --sidebar-ring: 217.2 91.2% 59.8%;
}
```

### 🧩 Individual Components

Use individual components for maximum flexibility:

```tsx
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  NavMain,
  TeamSwitcher,
  NavUser
} from '@gogadoro/sidebar-module'

function CustomSidebar() {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <TeamSwitcher teams={myTeams} />
          {/* Add your custom header components */}
        </SidebarHeader>

        <SidebarContent>
          <NavMain items={myNavItems} />
          {/* Add your custom navigation sections */}
          <MyCustomSection />
        </SidebarContent>

        <SidebarFooter>
          <NavUser user={myUser} />
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  )
}
```

### 🎯 Tailwind CSS Classes

Override styles with Tailwind classes:

```tsx
<AppSidebar
  className="bg-slate-900 border-slate-700"
  data={customData}
/>
```

## Theming

Add these CSS variables to your global styles:

```css
:root {
  --sidebar-background: 0 0% 98%;
  --sidebar-foreground: 240 5.3% 26.1%;
  --sidebar-primary: 240 5.9% 10%;
  --sidebar-primary-foreground: 0 0% 98%;
  --sidebar-accent: 240 4.8% 95.9%;
  --sidebar-accent-foreground: 240 5.9% 10%;
  --sidebar-border: 220 13% 91%;
  --sidebar-ring: 217.2 91.2% 59.8%;
}

.dark {
  --sidebar-background: 240 5.9% 10%;
  --sidebar-foreground: 240 4.8% 95.9%;
  --sidebar-primary: 0 0% 98%;
  --sidebar-primary-foreground: 240 5.9% 10%;
  --sidebar-accent: 240 3.7% 15.9%;
  --sidebar-accent-foreground: 240 4.8% 95.9%;
  --sidebar-border: 240 3.7% 15.9%;
  --sidebar-ring: 217.2 91.2% 59.8%;
}
```

## Components

### Core Components

- `AppSidebar` - Main sidebar component with all features
- `SidebarProvider` - Context provider for sidebar state
- `SidebarTrigger` - Button to toggle sidebar
- `SidebarInset` - Content area next to sidebar

### Sub Components

- `TeamSwitcher` - Team/workspace switcher
- `NavMain` - Main navigation items
- `NavProjects` - Project list
- `NavSecondary` - Secondary navigation
- `NavUser` - User profile section

### UI Components

All Radix UI components are exported for custom implementations:
- `Button`, `Input`, `Separator`
- `Sheet`, `Tooltip`, `Avatar`
- `DropdownMenu`, `Collapsible`
- And more...

## Hooks

- `useSidebar()` - Access sidebar state and controls
- `useIsMobile()` - Detect mobile viewport

## TypeScript

Full TypeScript support with exported types:

```tsx
import type { SidebarData, User, Team, NavItem, Project } from '@gogadoro/sidebar-module'
```

## Example App

Check out the `/example` folder for a complete Next.js application demonstrating all features.

```bash
cd example
npm install
npm run dev
```

## Development

```bash
# Install dependencies
npm install

# Development mode with watch
npm run dev

# Build for production
npm run build

# Type checking
npm run type-check

# Linting
npm run lint

# Format code
npm run format
```

## API Reference

### SidebarData Interface

```tsx
interface SidebarData {
  user: {
    name: string
    email: string
    avatar: string
  }
  teams: Array<{
    name: string
    logo: LucideIcon
    plan: string
  }>
  navMain: Array<{
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: Array<{
      title: string
      url: string
    }>
  }>
  navSecondary: Array<{
    title: string
    url: string
    icon: LucideIcon
  }>
  projects: Array<{
    name: string
    url: string
    icon: LucideIcon
  }>
}
```

### AppSidebar Props

```tsx
interface AppSidebarProps {
  data?: SidebarData  // Custom data (optional)
  className?: string  // Additional CSS classes
  // ...all standard HTML aside element props
}
```

## Live Demo

🌐 **Try it live:** [https://gogadoro-sidebar-demo.vercel.app](https://gogadoro-sidebar-demo.vercel.app)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome)

## License

MIT

## Contributing

Pull requests are welcome! Please check out our contributing guidelines.

## Support

- [Documentation](https://github.com/your-org/sidebar-module)
- [Issues](https://github.com/your-org/sidebar-module/issues)
- [Discussions](https://github.com/your-org/sidebar-module/discussions)