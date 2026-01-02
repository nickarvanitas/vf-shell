"use client";

import * as React from "react";
import { ChevronRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { getMenuForContext, getFooterForContext, type MenuItem } from "@/data/menu";
import { useUserContext } from "@/context/user-context";

function NavItem({ item }: { item: MenuItem }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const Icon = item.icon;
  const isActive = location.pathname === item.href || location.pathname.startsWith(item.href + "/");

  // Check if a child path is active (exact or starts with)
  const isChildActive = React.useCallback(
    (childHref: string) => {
      return location.pathname === childHref || location.pathname.startsWith(childHref + "/");
    },
    [location.pathname]
  );

  // Auto-expand if a child is active
  React.useEffect(() => {
    if (hasChildren && item.children?.some((child) => isChildActive(child.href || ""))) {
      setIsOpen(true);
    }
  }, [location.pathname, hasChildren, item.children, isChildActive]);

  if (hasChildren) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="group/collapsible">
        <SidebarMenuItem>
          <CollapsibleTrigger asChild>
            <SidebarMenuButton isActive={isActive}>
              {Icon && <Icon />}
              <span>{item.label}</span>
              <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
            </SidebarMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              {item.children!.map((child) => (
                <SidebarMenuSubItem key={child.id}>
                  <SidebarMenuSubButton asChild isActive={isChildActive(child.href || "")}>
                    <Link to={child.href || "#"}>
                      <span>{child.label}</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </SidebarMenuItem>
      </Collapsible>
    );
  }

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild isActive={isActive}>
        <Link to={item.href || "#"}>
          {Icon && <Icon />}
          <span>{item.label}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { context } = useUserContext();
  const menuItems = getMenuForContext(context);
  const footerItems = getFooterForContext(context);

  // Group apps together
  const regularItems = menuItems.filter((item) => !item.id.startsWith("apps-"));
  const appItems = menuItems.filter((item) => item.id.startsWith("apps-"));

  return (
    <Sidebar collapsible="none" {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {regularItems.map((item) => (
                <NavItem key={item.id} item={item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {appItems.length > 0 && (
          <SidebarGroup>
            <SidebarGroupLabel>Apps</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {appItems.map((item) => (
                  <NavItem key={item.id} item={item} />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          {footerItems.map((item) => (
            <NavItem key={item.id} item={item} />
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
