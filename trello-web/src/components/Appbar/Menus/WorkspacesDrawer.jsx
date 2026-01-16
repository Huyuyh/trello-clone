import { useDropDown } from "@/hooks/useDropDown";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

function WorkspacesDrawer() {
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
          <WorkspacesIcon />
        </ListItemIcon>
        <ListItemText primary="Workspaces" />
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
            <ListItemText primary="Workspace 1" />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}

export default WorkspacesDrawer;
