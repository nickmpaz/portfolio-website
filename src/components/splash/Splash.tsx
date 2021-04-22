import { FC, useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import Box from "@material-ui/core/Box";
import Grow from "@material-ui/core/Grow";
import startSplashEffect from "components/splash/splash";
import "components/splash/Splash.css";

const transitionTime = 1000;

export const Splash: FC = () => {
  const [transition1, setTransition1] = useState(false);
  const [transition2, setTransition2] = useState(false);
  const [transition3, setTransition3] = useState(false);

  const doTransitions = async () => {
    setTransition1(true);
    await new Promise((resolve) => setTimeout(resolve, transitionTime));
    setTransition2(true);
    await new Promise((resolve) => setTimeout(resolve, transitionTime));
    setTransition3(true);
  };

  const scrollToAbout = () => {
    var about = document.getElementsByClassName("about")[0];
    about.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    startSplashEffect();
    doTransitions();
  }, []);

  return (
    <div className="splash-container">
      <canvas></canvas>
      <div className="splash-text">
        <Grow in={transition1} timeout={transitionTime}>
          <Typography variant="h3">
            Hi, my name is{" "}
            <Typography variant="h3" color="primary" display="inline">
              Nicholas Paz
            </Typography>
            .
          </Typography>
        </Grow>
        <Grow in={transition2} timeout={transitionTime}>
          <Typography variant="h3">I am a Software Engineer.</Typography>
        </Grow>
        <Box mt={2}>
          <Grow in={transition3} timeout={transitionTime}>
            <Button
              className="splash-button"
              variant="outlined"
              color="primary"
              size="large"
              endIcon={<KeyboardArrowRightIcon className="button-icon" />}
              onClick={scrollToAbout}
            >
              Get to know me
            </Button>
          </Grow>
        </Box>
      </div>
    </div>
  );
};
