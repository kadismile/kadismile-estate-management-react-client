import React from "react";
import { AuthProvider } from "./auth-context";
import { UserProvider } from "./user-context";
import { AdminProvider } from "./admin-context";

function AppProviders({ children }) {
  return (
    <AuthProvider>
      <UserProvider>
        <AdminProvider>{children}</AdminProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default AppProviders;
