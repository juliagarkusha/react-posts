import { useEffect, useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const rawData = localStorage.getItem(key);
  const storedValue = !!rawData
    ? JSON.parse(localStorage.getItem(key) ?? '')
    : initialValue;

  const [value, setValue] = useState(storedValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [JSON.stringify(value)]);

  return [value, setValue];
}

export default useLocalStorage;
