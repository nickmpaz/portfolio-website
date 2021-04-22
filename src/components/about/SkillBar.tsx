import { FC, useRef } from "react";
import "components/about/SkillBar.css";
import useInViewport from "hooks/useInViewport";

import { LinearProgress, Box, Collapse } from "@material-ui/core";

export interface SkillBarProps {
  skill: string;
  percent: number;
}

export const SkillBar: FC<SkillBarProps> = ({ skill, percent }) => {
  const myRef = useRef<HTMLSpanElement>(null);
  const inViewport = useInViewport(myRef);
  return (
    <Box display="flex" alignItems="center">
      <span ref={myRef} className="skill-name text-normal">
        {inViewport}
        {skill}
      </span>
      <Box flexGrow={1}>
        <LinearProgress
          className={inViewport ? "grow" : ""}
          variant="determinate"
          value={percent}
          style={{ height: "30px", width: inViewport ? "100%" : "0%" }}
        ></LinearProgress>
      </Box>
    </Box>
  );
};
