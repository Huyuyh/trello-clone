import DrawerList from "@/components/AppBar/Drawer/DrawerList";
import Drawer from "@mui/material/Drawer";

function AppDrawer({ open, toggleDrawer }) {
  return (
    <Drawer open={open} onClose={toggleDrawer(false)}>
      <DrawerList toggleDrawer={toggleDrawer} />
    </Drawer>
  );
}

export default AppDrawer;
