import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Tooltip from "@mui/material/Tooltip";

function InviteBoardUser() {
  return (
    <AvatarGroup
      max={4}
      sx={{
        gap: "10px",

        "& .MuiAvatar-root": {
          width: 34,
          height: 34,
          fontSize: 16,
          border: "none",
        },
      }}
    >
      <Tooltip title="huy">
        <Avatar alt="huy" src="/static/images/avatar/1.jpg" />
      </Tooltip>
      <Tooltip title="huy">
        <Avatar alt="huy" src="/static/images/avatar/1.jpg" />
      </Tooltip>{" "}
      <Tooltip title="huy">
        <Avatar alt="huy" src="/static/images/avatar/1.jpg" />
      </Tooltip>{" "}
      <Tooltip title="huy">
        <Avatar alt="huy" src="/static/images/avatar/1.jpg" />
      </Tooltip>{" "}
      <Tooltip title="huy">
        <Avatar alt="huy" src="/static/images/avatar/1.jpg" />
      </Tooltip>{" "}
      <Tooltip title="huy">
        <Avatar alt="huy" src="/static/images/avatar/1.jpg" />
      </Tooltip>
      <Tooltip title="huy">
        <Avatar alt="huy" src="/static/images/avatar/1.jpg" />
      </Tooltip>
    </AvatarGroup>
  );
}

export default InviteBoardUser;
