import React from 'react';

import { styled } from 'styled-components';

function Header() {
  return <HeaderWrapper>header</HeaderWrapper>;
}

export default Header;

const HeaderWrapper = styled.header`
  width: 500px;
  text-align: center;
  padding: 30px 0;
  font-size: 1.6rem;
`;
