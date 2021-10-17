import React from 'react'
import { AnchorButton } from '../AnchorButtonElements'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="blog" onClick={toggle}>
            Blog
          </SidebarLink>
          <SidebarLink to="skills" onClick={toggle}>
            Skills
          </SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>
            Contact me
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
        <AnchorButton primary="false" dark="false" target="_blank" href="https://www.yourator.co/r/b51df029-037d-4ea2-a3f4-e57d2abe9af8">Resume</AnchorButton>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
