import React from "react";
import Avatar from "@mui/material/Avatar";

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: "#FFF",
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export default function BackgroundLetterAvatars({ name }) {
  return <Avatar {...stringAvatar(name)} />;
}
