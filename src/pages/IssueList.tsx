import React from 'react';

import styled from 'styled-components';

import Layout from 'components/common/Layout';
import IssueItem from 'components/listItem/IssueItem';

function IssueList() {
  return (
    <Layout>
      <IssueListWrapper>
        <IssueItem />
      </IssueListWrapper>
    </Layout>
  );
}

export default IssueList;

const IssueListWrapper = styled.ul`
  padding: 20px;
`;
