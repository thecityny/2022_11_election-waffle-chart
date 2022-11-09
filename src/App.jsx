import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { WaffleChart } from "./components/Waffle";

import "./styles/app.scss";

export const App = () => {
  return (
    <HelmetProvider>
      <div className="app">
        <WaffleChart />
      </div>
    </HelmetProvider>
  );
};
