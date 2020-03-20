import React, { createContext } from "react";
import { useAsync } from "react-async";
import { getUser } from "../utils/auth-client";
import * as authClient from "../utils/auth-client";

const AuthContext = createContext();

function AuthProvider(props) {
  const {
    data = { user: null },
    error,
    isRejected,
    isPending,
    isSettled,
    reload
  } = useAsync({
    promiseFn: getUser
  });

// React.useLayoutEffect(() => {
//   if (isSettled) {
//     setFirstAttemptFinished(true)
//   }
// }, [isSettled])

    if (isPending) {
      return <h2>Loading.......</h2>;
      //   return <FullPageSpinner />
    }
    if (isRejected) {
      return (
        <div css={{ color: "red" }}>
          <p>Uh oh... There's a problem. Try refreshing the app.</p>
          <pre>{error.message}</pre>
        </div>
      );
    }

    const login = form => authClient.login(form).then(reload);
    const register = form => authClient.register(form).then(reload);
    const logout = () => authClient.logout().then(reload);

    return (
      <AuthContext.Provider
        value={{ data, login, logout, register }}
        {...props}
      />
    );
//   });
}

function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}

export { AuthProvider, useAuth };
