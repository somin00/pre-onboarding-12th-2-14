import React from 'react';

import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

function NotFound() {
  return (
    <NotFoundWrapper>
      페이지가 존재하지 않습니다.
      <Link to='/'>메인페이지로 이동하기</Link>
    </NotFoundWrapper>
  );
}

export default NotFound;

const NotFoundWrapper = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  a {
    background-color: #e2e2e2;
    padding: 10px;
    border-radius: 10px;
  }
`;
