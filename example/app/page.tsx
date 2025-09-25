'use client'

import {
  AppSidebar,
  SidebarProvider,
  SidebarInset,
  SidebarTrigger
} from '@gogadoro/sidebar-module'

export default function Home() {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger />
            <div className="flex flex-1 items-center gap-2">
              <h1 className="text-xl font-semibold">Sidebar Module Demo</h1>
            </div>
          </header>

          <main className="flex-1 p-6">
            <div className="mx-auto max-w-4xl space-y-6">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">Welcome to Sidebar Module!</h2>
                <p className="text-muted-foreground mt-2">
                  A modern, fully customizable sidebar component for React applications.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border bg-card p-6">
                  <h3 className="font-semibold">Fully Responsive</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Works seamlessly on desktop and mobile devices with adaptive behavior.
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-6">
                  <h3 className="font-semibold">Keyboard Shortcuts</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Press <kbd className="px-1 py-0.5 text-xs font-semibold bg-muted rounded">Cmd/Ctrl + B</kbd> to toggle the sidebar.
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-6">
                  <h3 className="font-semibold">Highly Customizable</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Easy theming with CSS variables and Tailwind CSS classes.
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-6">
                  <h3 className="font-semibold">TypeScript Support</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Full type safety with comprehensive TypeScript definitions.
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-6">
                  <h3 className="font-semibold">Accessible</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Built with Radix UI for excellent accessibility out of the box.
                  </p>
                </div>

                <div className="rounded-lg border bg-card p-6">
                  <h3 className="font-semibold">Modern Stack</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    React 18, Tailwind CSS, and Radix UI for modern development.
                  </p>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold mb-4">Try It Out!</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Click the menu button in the header to toggle the sidebar</li>
                  <li>• Use keyboard shortcut <kbd className="px-1 py-0.5 text-xs font-semibold bg-muted rounded">Cmd/Ctrl + B</kbd></li>
                  <li>• Resize your browser to test mobile responsiveness</li>
                  <li>• Hover over the collapsed sidebar to see tooltips</li>
                  <li>• Click on navigation items to expand/collapse them</li>
                  <li>• Try the team switcher dropdown in the header</li>
                  <li>• Explore user menu options in the footer</li>
                </ul>
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}