import ModeSelect from "@/components/ModeSelect";
import Box from "@mui/material/Box";

function AppBar() {
  return (
    <Box
      sx={{
        backgroundColor: "primary.light",
        height: (theme) => theme.trello.appBarHeight,
        display: "flex",
        alignItems: "items-center",
      }}
    >
      <ModeSelect />
    </Box>
  );
}

export default AppBar;
