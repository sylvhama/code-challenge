import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { App } from "./App";
import { OctokitProvider } from "contexts/OctokitContext";
import "./styles.css";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement!);

const queryClient = new QueryClient();

root.render(
  <StrictMode>
    <OctokitProvider>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryClientProvider>
    </OctokitProvider>
  </StrictMode>
);
