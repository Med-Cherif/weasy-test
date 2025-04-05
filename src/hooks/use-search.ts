"use client";

import { useEffect, useRef, useState } from "react";
// import { useSearchParams } from "react-router-dom";
import useDebounce from "./use-debounce";
import { usePathname } from "next/navigation";
// import cleanObject from "../utils/clean-object";

const delayValue = 300;

export type HandleSearchChange = (
  name: string,
  value: unknown,
  debounced?: boolean
) => void;

type UseSearchArgs = {
  defaultValues?: Record<string, string>;
  handleSearchParams?: (values: Record<string, string>) => string;
};

export default function useSearch(args?: UseSearchArgs) {
  const delay = useRef(delayValue);
  const pathname = usePathname();

  const [values, setValues] = useState(args?.defaultValues || {});
  const searchValues = useDebounce({ values, delay: delay.current }) as {
    [prop: string]: string;
  };

  const handleChange: HandleSearchChange = (name, value, debounced = false) => {
    if (debounced) {
      delay.current = delayValue;
    } else {
      delay.current = 0;
    }
    setValues((current) => {
      return {
        ...current,
        [name]: value as string,
      };
    });
  };

  const reset = () => {
    delay.current = 0;

    const resetedValues: Record<string, string> = {};

    if (args?.defaultValues) {
      Object.keys(args?.defaultValues).forEach((key) => {
        resetedValues[key] = "";
      });
    }

    setValues(resetedValues);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams();

    for (let key in searchValues) {
      const value: string = searchValues[key];
      if (!value) continue;
      searchParams.set(key, value);
    }

    const paramsString = searchParams.toString();

    window.history.pushState(
      {},
      "",
      `${pathname}${paramsString ? `?${paramsString}` : ""}`
    );
  }, [searchValues, pathname]);

  return {
    searchValues,
    values,
    handleChange,
    reset,
  };
}
