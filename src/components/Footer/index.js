import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaBehance, FaGithub, FaInstagram, FaTwitter} from 'react-icons/fa'
import { FooterContainer, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              MangoChu
            </SocialLogo>
            <WebsiteRights>MangoChu © {new Date().getFullYear()} All reights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="//github.com/mangochu" target="_blank" aria-label="Github">
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink href="//www.instagram.com/mangochu0806" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="//www.twitter.com/mangochu81806" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="//www.behance.net/mangochu" target="_blank" aria-label="Behance">
                <FaBehance />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
