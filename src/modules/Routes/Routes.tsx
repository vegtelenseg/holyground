import React from "react";
import { Switch, Route } from "react-router";

import { makeStyles, Box } from "@material-ui/core";
import backgroundImage from "../../assets/images/background.png";

const Menu = React.lazy(() => import("../Menu/Menu"));
const Home = React.lazy(() => import("../Home/Home"));
const About = React.lazy(() => import("../About/About"));
const SelfCareCheckIn = React.lazy(() => import("../SelfCareCheckIn/SelfCareCheckIn"));
const Contact = React.lazy(() => import("../Contact/Contact"));
const Footer = React.lazy(() => import("../Footer/Footer"));
const useStyles = makeStyles((_theme) => ({
  background: {
    background: `url(${backgroundImage})`,
    position: "absolute" as "absolute",
    top: 0,
    width: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    opacity: 0.9
  },
}));

export const Routes = () => {
  const classes = useStyles();
  const Background = () => {
    return <Box position="fixed" width="100%" height="100%" top="0">
      <div className={classes.background}></div>
    </Box>
  }
  return (
    <React.Suspense fallback={<Background />}>
      <Menu />
      <Background />
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
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </React.Suspense>
  );
};
