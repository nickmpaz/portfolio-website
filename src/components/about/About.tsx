import {
  LinearProgress,
  Box,
  Container,
  Grid,
  Typography,
  Slide,
} from "@material-ui/core";
import { FC, useEffect, useRef, useState } from "react";
import { Hexagon } from "components/about/Hexagon";
import "components/about/About.css";
import DevicesIcon from "@material-ui/icons/Devices";
import StorageIcon from "@material-ui/icons/Storage";
import CloudIcon from "@material-ui/icons/Cloud";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import { Contact } from "components/about/Contact";
import { Skills } from "components/about/Skills";
import useInViewport from "hooks/useInViewport";

export const About: FC = () => {
  const titleRef = useRef(null);
  const titleInViewport = useInViewport(titleRef);
  const descRef = useRef(null);
  const descInViewport = useInViewport(descRef);
  const [doBarTransition, setDoBarTransition] = useState(false);
  const doTransition = async () => {
    if (titleInViewport) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    setDoBarTransition(titleInViewport);
  };
  useEffect(() => {
    doTransition();
  }, [titleInViewport]);
  // const barRef = useRef<HTMLDivElement>(null);
  return (
    <Box className="about" height="100vh" display="flex" flexDirection="column">
      <div className="top-stripe"></div>
      <Box flexGrow={1} className="about-details">
        <Container maxWidth="lg" className="centered-item">
          <div className="about-title" ref={titleRef}>
            <Typography
              style={{
                position: "relative",
                left: titleInViewport ? "0%" : "-50%",
                opacity: titleInViewport ? 1 : 0,
              }}
              variant="h3"
              className="transition"
            >
              About
            </Typography>
            <div
              style={{
                position: "relative",
                left: doBarTransition ? "0%" : "-50%",
                opacity: doBarTransition ? 1 : 0,
              }}
              className="h-bar transition"
            ></div>
          </div>
          <Grid container spacing={10}>
            <Grid className="centered-item" item md={3} sm={6} xs={12}>
              <Hexagon
                animationDelay={200}
                icon={
                  <DevicesIcon
                    className="hexagon-icon"
                    fontSize="large"
                  ></DevicesIcon>
                }
                title="Frontend"
                description="Responsive frontends for the web."
              />
            </Grid>
            <Grid className="centered-item" item md={3} sm={6} xs={12}>
              <Hexagon
                animationDelay={400}
                icon={
                  <StorageIcon
                    className="hexagon-icon"
                    fontSize="large"
                  ></StorageIcon>
                }
                title="Backend"
                description="Efficient services and data models"
              />
            </Grid>
            <Grid className="centered-item" item md={3} sm={6} xs={12}>
              <Hexagon
                animationDelay={600}
                icon={
                  <CloudIcon
                    className="hexagon-icon"
                    fontSize="large"
                  ></CloudIcon>
                }
                title="DevOps"
                description="Infrastructure as code and CI/CD"
              />
            </Grid>
            <Grid className="centered-item" item md={3} sm={6} xs={12}>
              <Hexagon
                animationDelay={800}
                icon={
                  <AccountTreeIcon
                    className="hexagon-icon"
                    fontSize="large"
                  ></AccountTreeIcon>
                }
                title="Architecture"
                description="Stable and scalable solutions"
              />
            </Grid>
            <Grid
              className="centered-item center-container"
              item
              md={6}
              xs={12}
            >
              <div
                ref={descRef}
                style={{
                  position: "relative",
                  left: descInViewport ? "0%" : "-50%",
                  opacity: descInViewport ? 1 : 0,
                }}
                className="transition"
              >
                <img
                  className="image"
                  src="/headshot-hex.png"
                  alt="A picture of me"
                />
                <div className="text-bold me-title">Who am I?</div>
                <div className="text-normal">
                  I'm a Software Engineer at{" "}
                  <a href="https://treelineinteractive.com/">
                    Treeline Interactive
                  </a>{" "}
                  in San Diego, CA. <br />
                  I'm a developer who specializes in DevOps, Infrastructure, and
                  CI/CD - I love to build beautiful and effective applications
                  that scale.
                </div>
              </div>
            </Grid>

            <Grid
              className="centered-item center-container"
              item
              md={6}
              xs={12}
            >
              <Skills></Skills>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Contact></Contact>
    </Box>
  );
};
