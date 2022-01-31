import React from 'react';
import styled from 'styled-components';
import { RiImageEditLine, RiHeartsFill } from 'react-icons/ri';
import { MdPhotoCamera } from 'react-icons/md';
import SectionTitle from '../titles/SectionTitle';
import ServiceItem from './ServiceItem';

const ServicesSectionStyles = styled.div`
  padding: 10rem 0;
  text-align: center;
  .services__title {
    margin-bottom: 3rem;
  }
  .services__items {
    display: flex;
    gap: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .services__items {
      flex-direction: column;
      max-width: 300px;
      margin: 0 auto;
    }
  }
`;

function ServicesSection() {
  return (
    <ServicesSectionStyles id="services">
      <div className="container">
        <SectionTitle className="services__title">My Services</SectionTitle>
        <div className="services__items">
          <ServiceItem
            icon={<RiImageEditLine />}
            title="Professional Editing"
            desc="With every session, I offer professional photo editing and retouching."
          />
          <ServiceItem
            icon={<MdPhotoCamera />}
            title="Mini &amp; Full Photoshoots"
            desc="Indoor & outdoor shoots in the theme of your choosing: Boudoir, fashion, couples, or social media head shots."
          />
          <ServiceItem
            icon={<RiHeartsFill />}
            title="Engagement Photography"
            desc="Indoor & outdoor shoots with you and your fiance. LGBTQI+ friendly."
          />
        </div>
      </div>
    </ServicesSectionStyles>
  );
}

export default ServicesSection;
