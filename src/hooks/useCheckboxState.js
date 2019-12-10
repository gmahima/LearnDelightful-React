import { useState } from "react";

export default function useCheckboxState(initial) {
  const [checked, setChecked] = useState(initial);
  // console.log(checked + " checked from hook");
  function onChange(event) {
    //console.log(event.target.value + "event.target.value from hook");

    console.log(event.target.checked + "event.target.checked from hook");
    setChecked(event.target.checked);
  }
  return { checked, onChange };
}
