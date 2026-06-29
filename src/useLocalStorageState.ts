import { useState, useEffect } from "react";
import type { WatchedDataType } from "./Types/Types";

export function useLocalStorageState(
  initialState: WatchedDataType[],
  key: string,
) {
  const [value, setValue] = useState<WatchedDataType[]>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue
      ? (JSON.parse(storedValue) as WatchedDataType[])
      : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as const;
}
