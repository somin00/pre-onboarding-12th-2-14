import React from 'react';

import { styled } from 'styled-components';

import Layout from 'components/common/Layout';
import IssueItem from 'components/listItem/IssueItem';

function IssueDetail() {
  return (
    <Layout>
      <IssueDetailWrapper>
        <DetailTitle>
          <div>image</div>
          <div>
            <IssueItem />
          </div>
        </DetailTitle>
        <DetailContent>
          <p>There is currently...</p>
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
    </Layout>
  );
}

export default IssueDetail;

const IssueDetailWrapper = styled.div`
  padding: 20px;
`;

const DetailTitle = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;

  div:first-child {
    margin-right: 20px;
    width: 50px;
    height: 50px;
    border: 1px solid black;
  }

  div:last-child {
    width: 80%;
  }
`;

const DetailContent = styled.div`
  margin-bottom: 16px;
  p {
    margin-bottom: 16px;
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
