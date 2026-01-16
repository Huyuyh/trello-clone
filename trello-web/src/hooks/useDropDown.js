import { useState } from "react";

export function useDropDown() {
  const [open, setOpen] = useState(false);

  return {
    open,
    toggle: () => setOpen((o) => !o),
    close: () => setOpen(false),
  };
}
