import React from 'react';

import { styled } from 'styled-components';

function IssueItem() {
  return (
    <IssueItemWrapper>
      <a href='/detail'>&#35;111 issue title</a>
      <div>
        <span>작성자: name, </span>
        <span>작성일: 2023년 8월 29일 </span>
      </div>
      <span className='comment'>코멘트: 67</span>
    </IssueItemWrapper>
  );
}

export default IssueItem;

const IssueItemWrapper = styled.li`
  border-bottom: 1px solid black;
  padding-bottom: 10px;
  margin-bottom: 10px;
  position: relative;

  a {
    display: inline-block;
    font-size: 1.2rem;
    margin-bottom: 4px;
  }

  .comment {
    position: absolute;
    right: 0;
    top: 16px;
  }
`;
