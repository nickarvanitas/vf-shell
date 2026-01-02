import { ChevronsUpDown, Check, Plus, Bell } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import vfLogo from "@/assets/vf-logo.svg";
import { useUserContext } from "@/context/user-context";
import { Link, useNavigate } from "react-router-dom";

// Dummy notifications
const notifications = [
  { id: "1", message: "New task assigned: Complete safety assessment", time: "5m ago" },
  { id: "2", message: "Document expiring: Insurance Certificate", time: "1h ago" },
  { id: "3", message: "Compliance alert: Training overdue", time: "2h ago" },
];

const contextLabels = {
  internal: "Internal",
  operator: "Client",
  contractor: "Contractor",
};

export function AppHeader() {
  const { currentAccount, accounts, setCurrentAccount } = useUserContext();
  const navigate = useNavigate();

  const handleAccountSwitch = (account: typeof currentAccount) => {
    if (account.id !== currentAccount.id) {
      setCurrentAccount(account);
      navigate("/dashboard");
    }
  };

  return (
    <header className="flex h-14 shrink-0 items-center gap-4 border-b px-4 justify-between bg-[#05263A]">
      <Link to="/">
        <img src={vfLogo} alt="Veriforce" className="h-6" />
      </Link>

      <div className="flex items-center gap-2">
        {/* Notifications Bell */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative text-white hover:bg-white/10">
              <Bell className="size-5" />
              <span className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
                {notifications.length}
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {notifications.map((notification) => (
              <DropdownMenuItem key={notification.id} className="flex flex-col items-start gap-1 py-3">
                <span className="text-sm">{notification.message}</span>
                <span className="text-xs text-muted-foreground">{notification.time}</span>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link to="/settings/notifications" className="justify-center text-primary">
                Manage Notifications
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Account Switcher (also switches context) */}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex max-w-52 min-w-52 w-full items-center gap-3 rounded-md px-2 py-1.5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring text-white">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-white/20 text-white">
              <span className="text-lg font-bold">
                {currentAccount.name.charAt(0)}
              </span>
            </div>
            <div className="flex flex-col gap-0.5 leading-none text-left truncate w-full">
              <span className="font-semibold truncate">{currentAccount.name}</span>
              <span className="text-xs text-white/60">
                {contextLabels[currentAccount.type]}
              </span>
            </div>
            <ChevronsUpDown className="ml-2 size-4 text-white/60 shrink-0" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64">
            <DropdownMenuLabel>Switch Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {accounts.map((account) => (
              <DropdownMenuItem
                key={account.id}
                className="gap-2 cursor-pointer"
                onClick={() => handleAccountSwitch(account)}
              >
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-muted text-sm font-medium">
                  {account.name.charAt(0)}
                </div>
                <div className="flex flex-1 flex-col">
                  <span className="text-sm font-medium">{account.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {contextLabels[account.type]}
                  </span>
                </div>
                {account.id === currentAccount.id && (
                  <Check className="size-4 text-primary" />
                )}
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2">
              <Plus className="size-4" />
              <span>Add Account</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
