import React, { createContext } from "react";
import { useAsync } from "react-async";
import { getUser } from "../utils/auth-client";
import * as entityClient from "../utils/entity-client";
import { useAuth } from "./auth-context";

const AdminContext = createContext();

function AdminProvider(props) {
  const { data: user } = useAuth();

  const getAllAdminTenants = () =>
    entityClient
      .getAllEntityDocuments("estate-tenants", { adminId: user.id })
      .then(result => result);
  const getAdminTenantById = id =>
    entityClient.getSingleEntityById("tenants", id, { adminId: user.id });

  return (
    <AdminContext.Provider
      value={{ user, getAllAdminTenants, getAdminTenantById }}
      {...props}
    />
  );
}

function useAdmin() {
  const context = React.useContext(AdminContext);
  if (context === undefined) {
    throw new Error(`adminAuth must be used within an AdminProvider`);
  }
  return context;
}

export { AdminProvider, useAdmin };
