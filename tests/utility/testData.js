
export const users = [
  {
    username: "standard_user",
    password: "password_incorrect",
    errorMessage: "Epic sadface: Username and password do not match any user in this service",
  },
  {
    username: "username_incorrect",
    password: "secret_sauce",
    errorMessage: "Epic sadface: Username and password do not match any user in this service",
  },
  {
    username: "username_incorrect",
    password: "password_incorrect",
    errorMessage: "Epic sadface: Username and password do not match any user in this service",
  },
  { username: "", password: "secret_sauce", errorMessage: "Epic sadface: Username is required" },
  { username: "standard_user", password: "", errorMessage: "Epic sadface: Password is required" },
  { username: "", password: "", errorMessage: "Epic sadface: Username is required" },
];
