import React from "react";
import { Spinner } from "flowbite-react";

export const Loader = () => (
  <div className="h-screen flex justify-center items-center">
    <Spinner aria-label="Loading" />
  </div>
);
