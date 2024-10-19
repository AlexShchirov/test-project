import React from "react";
import "./index.scss";
import { WeatherWidget } from "./components/WeatherWidget/WeatherWidget";

const App = () => (
  <div className="container mx-auto p-4">
    <h2 className="text-xl font-bold">Module 2</h2>
    <WeatherWidget />
  </div>
);

export default App;
