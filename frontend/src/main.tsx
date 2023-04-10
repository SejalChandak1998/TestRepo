import { Experimental_CssVarsProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import { store } from "./redux/store";
import Router from "./router";
import { theme } from "./theme";
import { ToastContainer, toast } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Experimental_CssVarsProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          ></ToastContainer>
          <Router />
        </BrowserRouter>
      </Provider>
    </Experimental_CssVarsProvider>
  </React.StrictMode>
);
