import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import SophieImg from '../assets/images/sophietree.jpg';
import AmberImg from '../assets/images/amberlaying.jpg';
import MimiImg from '../assets/images/mimi.jpg';
import PrimaryButton from './buttons/PrimaryButton';
import ParagraphText from './paragraphTexts/ParagraphText';
import HeroTitle from './titles/HeroTitle';
import themeList from '../data/themeList';

const HeroSectionStyles = styled.div`
  min-height: 100vh;
  padding-top: calc(var(--header-height) + 30px); // height of header
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${({ theme: { theme } }) =>
    theme === themeList.light ? `url(${SophieImg})` : `url(${AmberImg})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .hero__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1rem;
  }
  .hero__info {
    background-color: ${({ theme: { theme } }) =>
      theme === themeList.light ? 'var(--lightBlue_1)' : 'var(--darkBlue_4)'};
    padding: 5rem 3rem;
    border-radius: 12px;
    max-width: 500px;
  }
  .hero__gap {
    flex: 3;
  }
  .hero__title {
    margin-bottom: 1.5rem;
    max-width: 400px;
    text-shadow: ${({ theme: { theme } }) =>
      theme === themeList.light
        ? `0 0 5px var(--white)`
        : `0 0 5px var(--black)`};
  }
  .hero__desc {
    margin-bottom: 1.5rem;
    max-width: 300px;
    text-shadow: ${({ theme: { theme } }) =>
      theme === themeList.light
        ? `0 0 5px var(--white)`
        : `0 0 5px var(--black)`};
  }
  @media only screen and (max-width: 768px) {
    background-image: ${({ theme: { theme } }) =>
      theme === themeList.light ? `url(${SophieImg})` : `url(${MimiImg})`};
    .hero__wrapper {
      flex-direction: column;
    }
    .hero__info {
      color: var(--lightBlue_1);
      background: none;
    }
  }
`;

function HeroSection() {
  return (
    <HeroSectionStyles id="home">
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__info">
            <HeroTitle className="hero__title">
              Sensual &amp; Conceptual Photographer
            </HeroTitle>
            <ParagraphText className="hero__desc">
              Based in Seattle, WA
            </ParagraphText>
            <PrimaryButton
              buttonType={Link}
              smooth
              to="contact"
              className="hero__cta"
            >
              Get In Touch
            </PrimaryButton>
          </div>
          <div className="hero__gap" />
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;
