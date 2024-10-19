import { useState } from "react";

export const useLoader = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | Error>(null);

  return {
    isLoading,
    setLoading,
    error,
    setError,
  };
};
