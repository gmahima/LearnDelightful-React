import { useEffect, useRef } from "react";

export default function useOutsideClickRef(callback, when) {
  const ref = useRef();
  const savedCallback = useRef(callback);
  console.log(savedCallback);
  useEffect(() => {
    savedCallback.current = callback;
    console.log(savedCallback);
  });
  useEffect(() => {
    if (when) {
      function handler(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          savedCallback.current();
        }
      }
      document.addEventListener("click", handler);
      return () => {
        document.removeEventListener("click", handler);
      };
    }
  }, [when]);
  return ref;
}
