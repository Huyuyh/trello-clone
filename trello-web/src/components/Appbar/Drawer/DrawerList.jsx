import RecentDrawer from "@/components/AppBar/Menus/RecentDrawer";
import StarredDrawer from "@/components/AppBar/Menus/StarredDrawer";
import TemplatesDrawer from "@/components/AppBar/Menus/TemplatesDrawer";
import WorkspacesDrawer from "@/components/AppBar/Menus/WorkspacesDrawer";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

function DrawerList({ toggleDrawer }) {
  return (
    <Box
      sx={{
        width: 250,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#2c3e50" : "#1565c0",
      }}
      role="presentation"
    >
      <List>
        <WorkspacesDrawer />

        <Divider />

        <RecentDrawer />

        <Divider />

        <StarredDrawer />

        <Divider />

        <TemplatesDrawer />

        <Divider />

        <ListItemButton
          sx={{
            color: "white",
          }}
        >
          <ListItemIcon
            sx={{
              color: "white",
            }}
          >
            <AddIcon />
          </ListItemIcon>
          <ListItemText primary="Create" />
        </ListItemButton>
      </List>
    </Box>
  );
}

export default DrawerList;
