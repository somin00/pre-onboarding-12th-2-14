import React, { useState } from 'react';

import styled from 'styled-components';

import Layout from 'components/common/Layout';
import Loading from 'components/common/Loading';
import Advertisement from 'components/listItem/Advertisement';
import IssueItem from 'components/listItem/IssueItem';
import useFetch from 'hooks/useFetch';
import useIntersect from 'hooks/useIntersect';

import ErrorPage from './ErrorPage';

function IssueList() {
  const [page, setPage] = useState<number>(1);
  const { issueList, loading, isShowError } = useFetch({ currentNum: page });
  const { targetRef } = useIntersect({ loading, setPage });

  if (isShowError) {
    return <ErrorPage />;
  }

  return (
    <Layout>
      {issueList.length !== 0 ? (
        <IssueListWrapper>
          {issueList.map((issue, idx) => {
            const isLastIssue = idx === issueList.length - 1;
            return (
              <li key={issue.id} ref={isLastIssue ? targetRef : null}>
                {(idx + 1) % 4 === 0 ? (
                  <>
                    <IssueItem issue={issue} />
                    <Advertisement />
                  </>
                ) : (
                  <IssueItem issue={issue} />
                )}
              </li>
            );
          })}
          {loading && <Loading />}
        </IssueListWrapper>
      ) : (
        <Loading />
      )}
    </Layout>
  );
}

export default IssueList;

const IssueListWrapper = styled.ul`
  height: 600px;
  margin: 0 10px;
  padding: 20px;
  overflow-y: auto;
`;
