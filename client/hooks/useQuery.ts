import React, { useEffect, useState } from "react";
import httpService from "../src/service/http-service";

export function useQuery<T>(path: string, queryParams: object | null, initialValue: T) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T>(initialValue);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    let isCanceled = false;
    (async () => {
      setIsLoading(true);
      try {
        const result = await httpService.get<T>(path, {
          params: queryParams,
          withCredentials: true,
        });
        setErrorMessage('');
        if (!isCanceled) {
          setData(result);
          setIsLoading(false);
        }
      } catch (error) {
        console.error(error);
        if (error.response) {
          setErrorMessage(error.response.data);
        } else setErrorMessage('Internal server error');
      } finally {
        setIsLoading(false);
      }
    })();
    return () => {
      isCanceled = true;
    };
  }, []);

  return [data, isLoading, errorMessage] as const;
}