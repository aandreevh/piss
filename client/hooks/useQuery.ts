import React, { useEffect, useState } from "react";
import httpService from "../src/service/http-service";
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser, setCurrentUserError } from "../src/redux/actions/user-actions";
import { User } from "../src/model/user";


export function useQuery(path: string, queryParams: object | null, initialValue: any) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<User | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    let isCanceled = false;
    (async () => {
      setIsLoading(true);
      try {
        const result = await httpService.get<User>(path, {
          params: queryParams,
          withCredentials: true,
        });
        setErrorMessage('');
        if (!isCanceled) {
          dispatch(setCurrentUser(result as User))
        }
      } catch (error) {
        dispatch(setCurrentUserError('some error'));
        console.error(error);
        if (error.response) {
          
        } dispatch(setCurrentUserError('some error'));
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