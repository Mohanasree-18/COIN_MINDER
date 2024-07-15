import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./redux/store/store.js"; //for redux
import { Provider } from "react-redux"; //for redux
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; //for react-query
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
//!QUERY CLIENT
const client = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <App />
        <ReactQueryDevtools intialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
