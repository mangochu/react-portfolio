import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'
import { AnchorButton } from '../AnchorButtonElements'

import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn } from './NavbarElements'

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>MangoChu</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="about"
                  smooth={true} duration={500} spy={true} exact='true' offset={-80}
                >About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="blog"
                  smooth={true} duration={500} spy={true} exact='true' offset={-80}
                >Blog</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="skills"
                  smooth={true} duration={500} spy={true} exact='true' offset={-80}
                >Skills</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="contact"
                  smooth={true} duration={500} spy={true} exact='true' offset={-80}
                >Contact me</NavLinks>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <AnchorButton primary="false" dark="false" target="_blank" href="https://www.yourator.co/r/b51df029-037d-4ea2-a3f4-e57d2abe9af8">Resume</AnchorButton>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
