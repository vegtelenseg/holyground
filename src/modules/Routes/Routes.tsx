import React from "react";
import { Switch, Route } from "react-router";
import { Menu } from "../Menu/Menu";
import Typography from "@material-ui/core/Typography/Typography";
import { FormControl, Input } from "@material-ui/core";
import { Home } from "../Home/Home";
import { makeStyles, Box } from "@material-ui/core";
import backgroundImage from "../../assets/images/background.png";
import { Footer } from "../Footer/Footer";
import { About } from "../About/About";
import { SelfCareCheckIn } from "../SelfCareCheckIn/SelfCareCheckIn";
import { Contact } from '../Contact/Contact';

const useStyles = makeStyles((theme) => ({
  background: {
    background: `url(${backgroundImage})`,
    position: "absolute" as "absolute",
    top: 0,
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    opacity:0.9
  },
}));

export const Routes = () => {
  const classes = useStyles();
  return (
    <>
      <Menu />
      <Box position="fixed" width="100%" height="100%" top="0">
        <div className={classes.background}></div>
      </Box>
      <Switch>
        <Route path={["/", "/home"]} exact>
          <Home />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/check-in" exact>
          <SelfCareCheckIn />
        </Route>
        <Route path="/contact" exact>
          <Contact/>
        </Route>
      </Switch>
      <Footer />
    </>
  );
};
