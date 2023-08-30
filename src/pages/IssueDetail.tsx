import React, { useEffect, useState } from 'react';

import { getIssueDetail } from 'apis';
import { useLocation } from 'react-router';
import { styled } from 'styled-components';
import { IssueType } from 'types';

import Layout from 'components/common/Layout';
import Loading from 'components/common/Loading';
import IssueItem from 'components/listItem/IssueItem';

function IssueDetail() {
  const location = useLocation();
  const number = location.state.number;

  const [issue, setIssue] = useState<IssueType | null>(null);

  useEffect(() => {
    getIssueDetail(number).then(response => setIssue(response));
  }, [number]);

  return (
    <Layout>
      {issue ? (
        <IssueDetailWrapper>
          <DetailTitle>
            <div>
              <img src={`${issue.user.avatar_url}`} alt={`${issue.user.login} 이미지`} />
            </div>
            <div>{<IssueItem issue={issue} />}</div>
          </DetailTitle>
          <DetailContent>
            <p>{issue.body}</p>
            <span>ATTN: johnpapa / fillpesilva </span>
          </DetailContent>
          <DetailMotivation>
            <strong>Motivation</strong>
            <ul>
              <li>Consistency</li>
              <li>Debugging</li>
            </ul>
          </DetailMotivation>
        </IssueDetailWrapper>
      ) : (
        <Loading />
      )}
    </Layout>
  );
}

export default IssueDetail;

const IssueDetailWrapper = styled.div`
  height: 600px;
  overflow-y: auto;
  margin: 20px;
`;

const DetailTitle = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;

  div:first-child {
    margin-right: 20px;
    width: 50px;
    height: 50px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  div:last-child {
    width: 80%;
  }
`;

const DetailContent = styled.div`
  margin-bottom: 16px;
  p {
    width: 445px;
    margin-bottom: 16px;
    word-break: break-all;
    line-height: 1.5;
  }
`;

const DetailMotivation = styled.div`
  ul {
    margin-top: 10px;
    padding-left: 30px;
  }
  li {
    list-style: disc;
    margin-bottom: 10px;
  }
`;
