import TrelloIcon from "@/assets/trello.svg?react";
import AppDrawer from "@/components/AppBar/Drawer/AppDrawer";

import Profiles from "@/components/AppBar/Menus/Profiles";
import Recent from "@/components/AppBar/Menus/Recent";
import Starred from "@/components/AppBar/Menus/Starred";
import Templates from "@/components/AppBar/Menus/Templates";
import Workspaces from "@/components/AppBar/Menus/Workspaces";
import ModeSelect from "@/components/ModeSelect";
import AppsIcon from "@mui/icons-material/Apps";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useState } from "react";

function AppBar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  return (
    <Box
      px={2}
      sx={{
        height: (theme) => theme.trello.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
      }}
    >
      <AppDrawer open={open} toggleDrawer={toggleDrawer} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={toggleDrawer(!open)}
        >
          <AppsIcon
            sx={{
              color: "primary.main",
            }}
          />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          <SvgIcon
            component={TrelloIcon}
            inheritViewBox
            sx={{
              color: "primary.main",
            }}
          />
          <Typography
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "primary.main",
            }}
          >
            Trello
          </Typography>
        </Box>

        <Box
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
            gap: 1,
          }}
        >
          <Workspaces />
          <Recent />
          <Starred />
          <Templates />
          <Button variant="outlined">Create</Button>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <TextField
          id="outlined-search"
          label="Search..."
          type="search"
          size="small"
          sx={{
            minWidth: "120px",
          }}
        />

        <ModeSelect />
        <Badge color="secondary" variant="dot" sx={{ cursor: "pointer" }}>
          <NotificationsNoneOutlinedIcon
            sx={{
              color: "primary.main",
            }}
          />
        </Badge>
        <Badge color="secondary" sx={{ cursor: "pointer" }}>
          <HelpOutlineOutlinedIcon
            sx={{
              color: "primary.main",
            }}
          />
        </Badge>
        <Profiles />
      </Box>
    </Box>
  );
}

export default AppBar;
