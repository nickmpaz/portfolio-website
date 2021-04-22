import React, { FC, useEffect, useRef, useState } from "react";
import "components/about/Hexagon.css";
import useInViewport from "hooks/useInViewport";
import { Box, Fade } from "@material-ui/core";

export interface HexagonProps {
  animationDelay: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const Hexagon: FC<HexagonProps> = ({
  animationDelay,
  icon,
  title,
  description,
}) => {
  const myRef = useRef<HTMLDivElement>(null);
  const inViewport = useInViewport(myRef);
  const [startAnimation, setStartAnimation] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setStartAnimation(true);
    }, animationDelay);
  });

  return (
    <>
      <div
        ref={myRef}
        className={`hexagon-container ${inViewport ? "is-inViewport" : ""}`}
        style={{ animationDelay: `${animationDelay / 1000}s` }}
      >
        <div className="hexagon"></div>
        {icon}
      </div>
      <Box my={1}>
        <Fade in={inViewport && startAnimation}>
          <div className="text-bold">{title}</div>
        </Fade>
      </Box>
      <Fade in={inViewport && startAnimation}>
        <div className="text-normal">{description}</div>
      </Fade>
    </>
  );
};
