import { useDropDown } from "@/hooks/useDropDown";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarIcon from "@mui/icons-material/Star";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

function StarredDrawer() {
  const { open, toggle, close } = useDropDown();
  return (
    <>
      <ListItemButton
        onClick={toggle}
        sx={{
          color: "primary.main",
        }}
      >
        <ListItemIcon
          sx={{
            color: "primary.main",
          }}
        >
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="Starred" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
        sx={{
          color: "primary.main",
        }}
      >
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Starred 1" />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}

export default StarredDrawer;
