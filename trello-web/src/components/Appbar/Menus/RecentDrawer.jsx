import { useDropDown } from "@/hooks/useDropDown";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

function RecentDrawer() {
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
          <AccessTimeIcon />
        </ListItemIcon>
        <ListItemText primary="Recent" />
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
            <ListItemText primary="Recent 1" />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}

export default RecentDrawer;
