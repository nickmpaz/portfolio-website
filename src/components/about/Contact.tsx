import { FC, useRef } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import MailIcon from "@material-ui/icons/Mail";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import "components/about/Contact.css";
import { Box, Collapse } from "@material-ui/core";
import useInViewport from "hooks/useInViewport";

export const Contact: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inViewport = useInViewport(ref);
  return (
    <div ref={ref}>
      <Collapse in={inViewport}>
        <Box
          className="contact"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box mr={12}>
            <a className="contact-link" href="mailto:nicholasmpaz@gmail.com">
              <AlternateEmailIcon
                style={{ fontSize: "50px" }}
              ></AlternateEmailIcon>
            </a>
          </Box>
          <Box mr={12}>
            <a className="contact-link" href="https://linkedin.com/in/nickmpaz">
              <LinkedInIcon style={{ fontSize: "50px" }}></LinkedInIcon>
            </a>
          </Box>
          <a className="contact-link" href="https://github.com/nickmpaz">
            <GitHubIcon style={{ fontSize: "45px" }}></GitHubIcon>
          </a>
        </Box>
      </Collapse>
    </div>
  );
};
