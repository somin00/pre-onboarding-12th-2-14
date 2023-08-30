import React from 'react';

import { styled } from 'styled-components';

export const REPO_INFO = {
  organization: 'facebook',
  repository: 'react',
};

function Header() {
  return <HeaderWrapper>{`${REPO_INFO.organization}/ ${REPO_INFO.repository}`}</HeaderWrapper>;
}

export default Header;

const HeaderWrapper = styled.header`
  width: 500px;
  text-align: center;
  padding: 30px 0;
  font-size: 1.6rem;
`;
