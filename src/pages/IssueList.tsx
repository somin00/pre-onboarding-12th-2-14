import React, { useEffect, useRef, useState, useMemo } from 'react';

import styled from 'styled-components';

import Layout from 'components/common/Layout';
import Loading from 'components/common/Loading';
import IssueItem from 'components/listItem/IssueItem';
import WantedAds from 'components/listItem/WantedAds';
import useFetch from 'hooks/useFetch';

import ErrorPage from './ErrorPage';

interface IntersectionObserverType {
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
}

function IssueList() {
  const containerRef = useRef<HTMLUListElement | null>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState<number>(1);
  const { issueList, loading, isShowError } = useFetch({ currentNum: page });

  const intersctionOptions: IntersectionObserverType = useMemo(
    () => ({
      root: containerRef.current,
      threshold: 1,
    }),
    [],
  );

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    if (!targetRef.current) return;
    let observer: IntersectionObserver;
    if (loading) {
      observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      }, intersctionOptions);

      if (targetRef.current) observer.observe(targetRef.current);
    }

    return () => observer && observer.disconnect();
  }, [intersctionOptions, loading]);

  if (isShowError) {
    return <ErrorPage />;
  }

  return (
    <Layout>
      {issueList.length !== 0 ? (
        <IssueListWrapper ref={containerRef}>
          {issueList.map((issue, idx) => {
            if ((idx + 1) % 4 === 0) {
              return (
                <React.Fragment key={`${issue.id + idx}`}>
                  <IssueItem key={issue.id} issue={issue} />
                  <WantedAds key={idx + 1} />
                </React.Fragment>
              );
            } else {
              return <IssueItem key={issue.id} issue={issue} />;
            }
          })}
          <div ref={targetRef}></div>
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
