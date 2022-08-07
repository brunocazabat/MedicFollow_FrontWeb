export const userService = {
  login,
  logout,
};

function login(email, password) {
  const requestOptions = {
    method: "PUT",
    headers: { accept: "*/*", "Content-Type": "application/json" },
    body: JSON.stringify({ email: email, password: password }),
    redirect: "follow",
  };

  return null;
}

function logout() {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
}
