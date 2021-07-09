import React from "react";
import { makeStyles } from "@material-ui/core";
import { Droplet } from "../../assets/svg/droplet";
import Typography from "@material-ui/core/Typography/Typography";
import { IamEry } from "../../assets/svg/iamery";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    background: theme.palette.common.white,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    borderTop: "1px solid black",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  footerContent: {
    color: "#CCAE93",
    display: "flex",
    flexDirection: "column" as "column",
    margin: "25px 100px 16px 100px",
    borderTop: "1px solid",
    paddingTop: 0,
    width: "calc(100% - 30rem)",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      margin: "25px 50px 15px 50px",
    },
  },
  copywriteContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  copyWrite: {
    margin: theme.spacing(0, 4),
    textAlign: "center" as "center",
  },
  colorSecondary: {
    color: "#CCAE93",
  },
  colorSecondaryWithLove: {
    color: "#CCAE93",
    textAlign: "center" as "center",
    marginTop: theme.spacing(1.5),
    marginBottom: theme.spacing(-1),
  },
  droplet: {
    fill: "#CCAE93",
    transform: "rotate(90deg)",
    width: "15px",
    height: "15px",
  },
  iameryContainer: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(0.5, 0, 2, 0),
  },
  transform: {
    transform: "rotate(-90deg)",
  },
  iamery: {},
}));
export const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footerContainer}>
      <div className={classes.footerContent}>
        <div className={classes.iameryContainer}>
          <IamEry className={classes.iamery} />
        </div>
        <div className={classes.copywriteContainer}>
          <Droplet className={classes.droplet} />
          <Typography
            variant='body1'
            color='secondary'
            classes={{
              colorSecondary: classes.colorSecondary,
            }}
            className={classes.copyWrite}
          >
            © BuntuZen, {new Date().getFullYear()}
          </Typography>

          <Droplet className={clsx(classes.droplet, classes.transform)} />
        </div>
        {/* <Typography
          variant="body1"
          color="secondary"
          classes={{
            colorSecondary: classes.colorSecondaryWithLove,
          }}
          className={classes.copyWrite}
        >
          Made with ♥
        </Typography> */}
      </div>
    </div>
  );
};

export default Footer;
