import React from "react";
import { Spinner } from "flowbite-react";

export const Loader = () => (
  <div className="flex justify-center items-center">
    <Spinner aria-label="Loading" />
  </div>
);
