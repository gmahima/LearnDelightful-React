import { useEffect } from "react";
export default function useDocumentTitle(text) {
  useEffect(() => {
    document.title = text;
    console.log(document.title + " is title");
  }, [text]);
}
