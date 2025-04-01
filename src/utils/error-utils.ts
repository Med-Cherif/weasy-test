import { AxiosError } from "axios";

export const extractResponseError = (error: AxiosError | Error | null) => {
  if (!error) return null;

  return (
    (error as AxiosError)?.response?.data ||
    error?.message ||
    "Something went wrong"
  );
};
