import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
const Users = React.lazy(() => import("users/UsersApp"));
const Weather = React.lazy(() => import("weather/WeatherApp"));
import "./index.scss";
import { TRANSLATION } from "./constants/translations";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Suspense fallback={<span>{TRANSLATION.LOADING_USERS}</span>}>
      <Users />
    </Suspense>
    <Suspense fallback={<span>{TRANSLATION.LOADING_WEATHER}</span>}>
      <Weather />
    </Suspense>
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
