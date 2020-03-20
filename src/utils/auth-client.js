import client from "./api-client";

const localStorageKey = "__estatemanager_token__";

function handleUserResponse(response) {
  const data = response.data;
  const { resource, token } = data;
  const user = { ...resource, token };
  window.localStorage.setItem(localStorageKey, token);
  return user;
}

function getUser() {
  const token = getToken();
  if (!token) {
    return Promise.resolve(null);
  }
  return client("api/v1/auth/user").catch(error => {
    logout();
    return Promise.reject(error);
  });
}

function login({ email, password }) {
  return client("api/v1/auth/login", {
    body: { email, password },
    headers: { modelname: "EstateAdmins" }
  }).then(handleUserResponse);
}

function register({ email, password }) {
  return client("register", { body: { email, password } }).then(
    handleUserResponse
  );
}

function logout() {
  window.localStorage.removeItem(localStorageKey);
  return Promise.resolve();
}

function getToken() {
  return window.localStorage.getItem(localStorageKey);
}

export { login, register, logout, getToken, getUser };
