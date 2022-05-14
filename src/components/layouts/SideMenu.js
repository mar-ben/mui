import React from "react";
import { makeStyles } from "@mui/styles";
import { SliderMark } from "@mui/material";
const useStyles = makeStyles({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    width: "320px",
    height: "100%",
    backgroundColor: "#253052",
  },
});
const SideMenu = () => {
  const classes = useStyles();
  return <div className={classes.sideMenu}></div>;
};
export default SideMenu;
