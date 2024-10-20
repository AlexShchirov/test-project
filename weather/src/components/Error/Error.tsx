import React from "react";

interface ErrorProps {
  message: string;
}

export const Error = ({ message }: ErrorProps) => (
  <div className="flex justify-center items-center">
    <p className="text-red-500">{message}</p>
  </div>
);
