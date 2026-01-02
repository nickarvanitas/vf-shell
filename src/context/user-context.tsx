import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import type { UserContext } from "@/data/menu";

const STORAGE_KEY = "vf-shell-user-context";

interface Account {
  id: string;
  name: string;
  type: UserContext;
}

interface UserContextValue {
  context: UserContext;
  currentAccount: Account;
  accounts: Account[];
  setCurrentAccount: (account: Account) => void;
}

// Accounts with their context type
const accounts: Account[] = [
  { id: "1", name: "Veriforce Admin", type: "internal" },
  { id: "2", name: "Acme Corp", type: "operator" },
  { id: "3", name: "BuildRight Inc", type: "contractor" },
];

const UserContextContext = createContext<UserContextValue | null>(null);

function getStoredAccountId(): string {
  if (typeof window === "undefined") return accounts[1].id; // Default to Acme Corp
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && accounts.find((a) => a.id === stored)) {
    return stored;
  }
  return accounts[1].id; // Default to Acme Corp
}

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [currentAccountId, setCurrentAccountId] = useState<string>(getStoredAccountId);

  const currentAccount = accounts.find((a) => a.id === currentAccountId) || accounts[1];

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, currentAccountId);
  }, [currentAccountId]);

  const setCurrentAccount = (account: Account) => {
    setCurrentAccountId(account.id);
  };

  return (
    <UserContextContext.Provider
      value={{
        context: currentAccount.type,
        currentAccount,
        accounts,
        setCurrentAccount,
      }}
    >
      {children}
    </UserContextContext.Provider>
  );
}

export function useUserContext() {
  const ctx = useContext(UserContextContext);
  if (!ctx) {
    throw new Error("useUserContext must be used within UserContextProvider");
  }
  return ctx;
}
