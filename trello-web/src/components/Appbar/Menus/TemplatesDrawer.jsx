import { useDropDown } from "@/hooks/useDropDown";
import ArticleIcon from "@mui/icons-material/Article";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

function TemplatesDrawer() {
  const { open, toggle, close } = useDropDown();
  return (
    <>
      <ListItemButton
        onClick={toggle}
        sx={{
          color: "white",
        }}
      >
        <ListItemIcon
          sx={{
            color: "white",
          }}
        >
          <ArticleIcon />
        </ListItemIcon>
        <ListItemText primary="Templates" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse
        in={open}
        timeout="auto"
        unmountOnExit
        sx={{
          color: "white",
        }}
      >
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Templates 1" />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}

export default TemplatesDrawer;
