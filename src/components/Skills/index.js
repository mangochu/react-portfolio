import React from 'react'
import { FaLaptop, FaProjectDiagram, FaRegGem } from 'react-icons/fa'
import { SkillsCard, SkillsContainer, SkillsH1, SkillsH2, SkillsIcon, SkillsP, SkillsWrapper } from './SkillsElements'


const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SkillsH1>Skills</SkillsH1>
      <SkillsWrapper>
        <SkillsCard>
          <SkillsIcon >
            <FaLaptop size={120} />
          </SkillsIcon>
          <SkillsH2>Website Design</SkillsH2>
          <SkillsH2>網頁設計</SkillsH2>
          <SkillsP>
            HTML, CSS, Bootstrap, jQuery,
            RWD
          </SkillsP>
        </SkillsCard>
        <SkillsCard>
          <SkillsIcon >
            <FaProjectDiagram size={110} />
          </SkillsIcon>
          <SkillsH2>Front-end Develop</SkillsH2>
          <SkillsH2>前端開發</SkillsH2>
          <SkillsP>
            Javascript, React.js, Next.js,
            npm, git, webpack
          </SkillsP>
        </SkillsCard>
        <SkillsCard>
          <SkillsIcon >
            <FaRegGem size={110} />
          </SkillsIcon>
          <SkillsH2>Graphic Design/ Illustration</SkillsH2>
          <SkillsH2>平面設計/ 插畫</SkillsH2>
          <SkillsP>
            Photoshop, Illustrator, Indesign,
            Premiere (Basic)
          </SkillsP>
        </SkillsCard>
      </SkillsWrapper>
    </SkillsContainer>
  )
}

export default Skills
