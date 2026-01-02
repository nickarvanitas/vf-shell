import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";

export function Layout() {
  return (
    <div className="flex h-svh flex-col overflow-hidden">
      <AppHeader />
      <SidebarProvider className="flex-1 min-h-0!">
        <AppSidebar />
        <SidebarInset className="overflow-auto">
          <main className="flex-1 p-6">
            <Outlet />
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}

