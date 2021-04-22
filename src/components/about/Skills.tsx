import { ChangeEvent, FC, useRef, useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { Box, Chip, Fade } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import { SkillBar } from "components/about/SkillBar";
import "components/about/Skills.css";
import useInViewport from "hooks/useInViewport";

enum SkillType {
  languages,
  frontend,
  backend,
  devops,
}

export const Skills: FC = () => {
  const [skillType, setSkillType] = useState(SkillType.languages);
  const myRef = useRef(null);
  const inViewport = useInViewport(myRef);

  return (
    <div ref={myRef} className="skill-container">
      <Fade in={inViewport} timeout={1000}>
        <div>
          <div className="text-bold">My skills</div>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            mt={2}
            mb={3}
          >
            <Box mr={1}>
              <span
                onClick={(event: any) => {
                  setSkillType(SkillType.languages);
                }}
              >
                <Chip
                  color={
                    skillType === SkillType.languages ? "primary" : "default"
                  }
                  label="Programming"
                  clickable={true}
                />
              </span>
            </Box>
            <Box mr={1}>
              <span
                onClick={(event: any) => {
                  setSkillType(SkillType.frontend);
                }}
              >
                <Chip
                  color={
                    skillType === SkillType.frontend ? "primary" : "default"
                  }
                  label="Frontend"
                  clickable={true}
                />
              </span>
            </Box>
            <Box mr={1}>
              <span
                onClick={(event: any) => {
                  setSkillType(SkillType.backend);
                }}
              >
                <Chip
                  color={
                    skillType === SkillType.backend ? "primary" : "default"
                  }
                  label="Backend"
                  clickable={true}
                />
              </span>
            </Box>
            <Box>
              <span
                onClick={(event: any) => {
                  setSkillType(SkillType.devops);
                }}
              >
                <Chip
                  color={skillType === SkillType.devops ? "primary" : "default"}
                  label="DevOps"
                  clickable={true}
                />
              </span>
            </Box>
          </Box>
        </div>
      </Fade>
      {skillType === SkillType.languages && (
        <>
          <Box mt={2}>
            <SkillBar skill="Typescript" percent={100}></SkillBar>
          </Box>
          <Box mt={2}>
            <SkillBar skill="Javascript" percent={100}></SkillBar>
          </Box>
          <Box mt={2}>
            <SkillBar skill="Python" percent={100}></SkillBar>
          </Box>
          <Box mt={2}>
            <SkillBar skill="PHP" percent={90}></SkillBar>
          </Box>
          <Box mt={2}>
            <SkillBar skill="C++" percent={80}></SkillBar>
          </Box>
          <Box mt={2}>
            <SkillBar skill="Java" percent={70}></SkillBar>
          </Box>
        </>
      )}
      {skillType === SkillType.frontend && (
        <>
          <Box mt={2}>
            <SkillBar skill="React" percent={90}></SkillBar>
          </Box>
          <Box mt={2}>
            <SkillBar skill="Redux" percent={90}></SkillBar>
          </Box>
          <Box mt={2}>
            <SkillBar skill="Material UI" percent={90}></SkillBar>
          </Box>
          <Box mt={2}>
            <SkillBar skill="Vue" percent={80}></SkillBar>
          </Box>
          <Box mt={2}>
            <SkillBar skill="Vuex" percent={80}></SkillBar>
          </Box>
          <Box mt={2}>
            <SkillBar skill="Vuetify" percent={80}></SkillBar>
          </Box>
          <Box mt={2}>
            <SkillBar skill="Webpack" percent={70}></SkillBar>
          </Box>
        </>
      )}
      {skillType === SkillType.backend && (
        <>
          <Box mt={2}>
            <SkillBar skill="Express" percent={100}></SkillBar>
          </Box>
          <Box mt={2}>
            <SkillBar skill="Nest.js" percent={100}></SkillBar>
          </Box>
          <Box mt={2}>
            <SkillBar skill="Laravel" percent={100}></SkillBar>
          </Box>
          <Box mt={2}>
            <SkillBar skill="Serverless" percent={100}></SkillBar>
          </Box>
          <Box mt={2}>
            <SkillBar skill="Django" percent={80}></SkillBar>
          </Box>
          <Box mt={2}>
            <SkillBar skill="Flask" percent={80}></SkillBar>
          </Box>
        </>
      )}

      {skillType === SkillType.devops && (
        <>
          <Box mt={2}>
            <SkillBar skill="AWS" percent={100}></SkillBar>
          </Box>
          <Box mt={2}>
            <SkillBar skill="Terraform" percent={100}></SkillBar>
          </Box>
          <Box mt={2}>
            <SkillBar skill="Cloudformation" percent={90}></SkillBar>
          </Box>
          <Box mt={2}>
            <SkillBar skill="Docker" percent={90}></SkillBar>
          </Box>
          <Box mt={2}>
            <SkillBar skill="Jenkins" percent={80}></SkillBar>
          </Box>
          <Box mt={2}>
            <SkillBar skill="Bitbucket Pipelines" percent={80}></SkillBar>
          </Box>
          <Box mt={2}>
            <SkillBar skill="Github Actions" percent={70}></SkillBar>
          </Box>
          <Box mt={2}>
            <SkillBar skill="Zabbix" percent={70}></SkillBar>
          </Box>
        </>
      )}
    </div>
  );
};
