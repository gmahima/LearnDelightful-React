import React, { useState } from "react";
export default function SelectInput() {
  const [showOptions, setShowOptions] = useState(false);
  function toggleOptions() {
    setShowOptions(!showOptions);
  }
}
