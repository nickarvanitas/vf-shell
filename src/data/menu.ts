import {
  Home,
  Settings,
  HelpCircle,
  Building2,
  Users,
  FileText,
  BarChart3,
  GraduationCap,
  Link,
  ClipboardCheck,
  Boxes,
  Cog,
  Network,
  ListChecks,
  type LucideIcon,
} from "lucide-react";

export type UserContext = "internal" | "operator" | "contractor";

export interface MenuItem {
  id: string;
  label: string;
  icon?: LucideIcon;
  href?: string;
  visibleTo: UserContext[];
  children?: Omit<MenuItem, "icon" | "children" | "visibleTo">[];
}

// Internal Employee (Super Admin)
// Operator (Client)
// Contractor

export const menuData: MenuItem[] = [
  // ─────────────────────────────────────────────────────
  // SHARED: Dashboard (all contexts)
  // ─────────────────────────────────────────────────────
  {
    id: "dashboard",
    label: "Dashboard",
    icon: Home,
    href: "/dashboard",
    visibleTo: ["internal", "operator", "contractor"],
  },

  // ─────────────────────────────────────────────────────
  // INTERNAL EMPLOYEE ONLY
  // ─────────────────────────────────────────────────────
  {
    id: "questionnaire-config",
    label: "Questionnaires",
    icon: ClipboardCheck,
    href: "/questionnaire-config",
    visibleTo: ["internal"],
    children: [
      {
        id: "qc-questions",
        label: "Questions",
        href: "/questionnaire-config/questions",
      },
      {
        id: "qc-sections",
        label: "Sections",
        href: "/questionnaire-config/sections",
      },
    ],
  },
  {
    id: "supply-chains",
    label: "Supply Chains",
    icon: Network,
    href: "/supply-chains",
    visibleTo: ["internal"],
  },
  {
    id: "process-automation",
    label: "Process Automation",
    icon: Cog,
    href: "/process-automation",
    visibleTo: ["internal"],
  },
  {
    id: "organizations",
    label: "Organizations",
    icon: Building2,
    href: "/organizations",
    visibleTo: ["internal"],
  },
  {
    id: "organization-features",
    label: "Organization Features",
    icon: Boxes,
    href: "/organization-features",
    visibleTo: ["internal"],
  },
  {
    id: "users-admin",
    label: "Users",
    icon: Users,
    href: "/users",
    visibleTo: ["internal"],
  },
  {
    id: "reports-admin",
    label: "Reports",
    icon: BarChart3,
    href: "/admin/reports",
    visibleTo: ["internal"],
  },

  // ─────────────────────────────────────────────────────
  // OPERATOR (CLIENT) ONLY
  // ─────────────────────────────────────────────────────
  {
    id: "contractors",
    label: "Contractors",
    icon: Users,
    href: "/contractors",
    visibleTo: ["operator"],
    children: [
      {
        id: "contractors-supply-chains",
        label: "Supply Chains",
        href: "/contractors/supply-chains",
      },
      {
        id: "contractors-connections",
        label: "Connections",
        href: "/contractors/connections",
      },
      {
        id: "contractors-scorecards",
        label: "Scorecards",
        href: "/contractors/scorecards",
      },
      {
        id: "contractors-business-units",
        label: "Business Units",
        href: "/contractors/business-units",
      },
      { id: "contractors-tags", label: "Tags", href: "/contractors/tags" },
      {
        id: "contractors-training-standards",
        label: "Training Standards",
        href: "/contractors/training-standards",
      },
    ],
  },

  // ─────────────────────────────────────────────────────
  // CONTRACTOR ONLY
  // ─────────────────────────────────────────────────────
  {
    id: "company",
    label: "Company",
    icon: Building2,
    href: "/company",
    visibleTo: ["contractor"],
  },
  {
    id: "connections",
    label: "Connections",
    icon: Link,
    href: "/connections",
    visibleTo: ["contractor"],
  },
  {
    id: "assessments",
    label: "Assessments",
    icon: ClipboardCheck,
    href: "/assessments",
    visibleTo: ["contractor"],
  },
  {
    id: "subcontractors",
    label: "Subcontractors",
    icon: Users,
    href: "/subcontractors",
    visibleTo: ["contractor"],
  },

  // ─────────────────────────────────────────────────────
  // SHARED: Operator + Contractor
  // ─────────────────────────────────────────────────────
  {
    id: "documents",
    label: "Documents",
    icon: FileText,
    href: "/documents",
    visibleTo: ["operator", "contractor"],
  },
  {
    id: "reports",
    label: "Reports",
    icon: BarChart3,
    href: "/reports",
    visibleTo: ["operator", "contractor"],
    children: [
      {
        id: "reports-compliance",
        label: "Compliance",
        href: "/reports/compliance",
      },
      { id: "reports-custom", label: "Custom", href: "/reports/custom" },
      {
        id: "reports-my-reports",
        label: "My Reports",
        href: "/reports/my-reports",
      },
      {
        id: "reports-standard",
        label: "Standard Reports",
        href: "/reports/standard",
      },
      { id: "reports-osha", label: "OSHA Violations", href: "/reports/osha" },
      {
        id: "reports-flextrack",
        label: "FlexTrack",
        href: "/reports/flextrack",
      },
    ],
  },
  {
    id: "training",
    label: "Training",
    icon: GraduationCap,
    href: "/training",
    visibleTo: ["operator", "contractor"],
    children: [
      {
        id: "training-compliance",
        label: "Compliance",
        href: "/training/compliance",
      },
      { id: "training-tracker", label: "Tracker", href: "/training/tracker" },
      {
        id: "training-management",
        label: "Management",
        href: "/training/management",
      },
      {
        id: "training-assigned",
        label: "Assigned Employees",
        href: "/training/assigned",
      },
    ],
  },

  // ─────────────────────────────────────────────────────
  // APPS (Operator + Contractor)
  // ─────────────────────────────────────────────────────
  {
    id: "apps-verisource",
    label: "Verisource",
    icon: ListChecks,
    href: "/apps/verisource",
    visibleTo: ["operator", "contractor"],
    children: [
      { id: "verisource-coq", label: "COQ", href: "/apps/verisource/coq" },
      { id: "verisource-eoq", label: "EOQ", href: "/apps/verisource/eoq" },
    ],
  },
  {
    id: "apps-workerpass",
    label: "Worker Pass",
    icon: Users,
    href: "/apps/workerpass",
    visibleTo: ["operator", "contractor"],
    children: [
      { id: "workerpass-home", label: "Home", href: "/apps/workerpass/home" },
      {
        id: "workerpass-my-pass",
        label: "My Pass",
        href: "/apps/workerpass/my-pass",
      },
      {
        id: "workerpass-my-access",
        label: "My Access",
        href: "/apps/workerpass/my-access",
      },
      {
        id: "workerpass-my-tasks",
        label: "My Tasks",
        href: "/apps/workerpass/my-tasks",
      },
      {
        id: "workerpass-my-credentials",
        label: "My Credentials",
        href: "/apps/workerpass/my-credentials",
      },
    ],
  },
];

// Footer items (settings, help)
export const footerData: MenuItem[] = [
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
    href: "/settings",
    visibleTo: ["internal", "operator", "contractor"],
    children: [
      { id: "settings-users", label: "Users", href: "/settings/users" },
      {
        id: "settings-notifications",
        label: "Notifications",
        href: "/settings/notifications",
      },
      {
        id: "settings-notifications-legacy",
        label: "Notifications (Legacy)",
        href: "/settings/notifications-legacy",
      },
    ],
  },
  {
    id: "help",
    label: "Help",
    icon: HelpCircle,
    href: "/help",
    visibleTo: ["internal", "operator", "contractor"],
  },
];

// Helper to filter menu by context
export function getMenuForContext(context: UserContext): MenuItem[] {
  return menuData.filter((item) => item.visibleTo.includes(context));
}

export function getFooterForContext(context: UserContext): MenuItem[] {
  return footerData.filter((item) => item.visibleTo.includes(context));
}
