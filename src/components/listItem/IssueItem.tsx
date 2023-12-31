import React, { memo } from 'react';

import { Link, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import { IssueType } from 'types';
import { changeDateFormat } from 'utils/changeDateFormat';

interface IssueItemPropsType {
  issue: IssueType;
}
function IssueItem({ issue }: IssueItemPropsType) {
  const { pathname } = useLocation();
  return (
    <IssueItemWrapper $pathname={pathname}>
      {pathname === '/' ? (
        <Link to={`/detail/${issue.number}`} state={{ number: issue.number }}>
          &#35;{`${issue.number} ${issue.title}`}
        </Link>
      ) : (
        <p> &#35;{`${issue.number} ${issue.title}`}</p>
      )}
      <div>
        <span>작성자: {`${issue.user.login}`}, </span>
        <span>작성일: {`${changeDateFormat(issue.created_at)}`}</span>
      </div>
      <span className='comment'>코멘트: {`${issue.comments}`}</span>
    </IssueItemWrapper>
  );
}

export default memo(IssueItem);

const IssueItemWrapper = styled.li<{ $pathname: string }>`
  border-bottom: 1px solid black;
  padding-bottom: 10px;
  margin-bottom: 10px;
  position: relative;
  font-weight: bold;

  a {
    display: inline-block;
    margin-bottom: 4px;
    width: 340px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 1.1rem;
  }

  p {
    width: 300px;
    font-size: 1rem;
  }

  span {
    font-size: 0.9rem;
  }

  .comment {
    position: absolute;
    right: 0;
    top: 16px;
  }
`;
