import React from 'react';
import styled from 'styled-components';
import themeList from '../data/themeList';

import '@fontsource/gravitas-one';

const LogoStyles = styled.h1`
  margin: 0;
  color: ${({ theme: { theme } }) =>
    theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
`;

export default function Logo({ ...rest }) {
  return <LogoStyles {...rest}>Sophie Dituri</LogoStyles>;
}
