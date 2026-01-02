import { useUserContext } from "@/context/user-context";

export default function DashboardPage() {
  const { currentAccount } = useUserContext();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="text-muted-foreground">
        Welcome back, {currentAccount.name}!
      </p>
      <div className="rounded-xl border bg-card p-6 text-card-foreground shadow-sm">
        <p className="text-muted-foreground">
          Select an item from the sidebar to get started.
        </p>
      </div>
    </div>
  );
}
