import { useState } from "react";

export function useAnchor() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const openMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorEl(null);
  };

  return {
    open,
    anchorEl,
    openMenu,
    closeMenu,
  };
}
