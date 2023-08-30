import React from 'react';

import { styled } from 'styled-components';

function ErrorPage() {
  return (
    <ErrorWrapper>
      <p>데이터를 불러오는데 실패했습니다. 새로고침 후 이용해주세요.</p>
    </ErrorWrapper>
  );
}

export default ErrorPage;

const ErrorWrapper = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  button {
    border: none;
    background-color: #e2e2e2;
    padding: 10px 16px;
    border-radius: 10px;
    cursor: pointer;
  }
`;
