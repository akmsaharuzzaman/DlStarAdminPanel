import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store } from "./redux/store.ts";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router.tsx";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import { RoleProvider } from "./provider/role-provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster position="top-center" richColors />
      <RoleProvider>
        <RouterProvider router={router} />
      </RoleProvider>
    </Provider>
  </React.StrictMode>
);
