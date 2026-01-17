import Check from "@mui/icons-material/Check";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { useAnchor } from "@/hooks/useAnchor";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function Templates() {
  const { open, anchorEl, openMenu, closeMenu } = useAnchor();

  return (
    <Box>
      <Button
        sx={{
          color: "white",
        }}
        id="basic-button-templates"
        aria-controls={open ? "basic-menu-templates" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={openMenu}
        endIcon={<ExpandMoreIcon />}
      >
        Templates
      </Button>
      <Menu
        id="basic-menu-templates"
        anchorEl={anchorEl}
        open={open}
        onClose={closeMenu}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button-templates",
          },
        }}
      >
        <MenuItem>
          <ListItemText inset>Single</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>1.15</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset>Double</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Check />
          </ListItemIcon>
          Custom: 1.2
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Add space before paragraph</ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText>Add space after paragraph</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemText>Custom spacing...</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default Templates;
