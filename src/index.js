import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

const containerroot = document.getElementById("root");
const root = createRoot(containerroot);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-h850w9cl.us.auth0.com"
      clientId="2DVstJEhr9Urcr2rSu9RX5c9LxATuMHy"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
