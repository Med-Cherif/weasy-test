import { useEffect, useState } from "react";

interface UseDebounceArgs {
  delay?: number;
  values: unknown;
}

export default function useDebounce({ values, delay }: UseDebounceArgs) {
  const [debouncedValues, setDebouncedValues] = useState(values);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValues(values);
    }, delay);

    return () => clearTimeout(timeout);
  }, [values, delay]);

  return debouncedValues;
}
