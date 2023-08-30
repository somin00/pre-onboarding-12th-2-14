import React, { useEffect, useRef, useState, useMemo } from 'react';

import { getIssues } from 'apis';
import styled from 'styled-components';
import { IssueType } from 'types';

import Layout from 'components/common/Layout';
import Loading from 'components/common/Loading';
import IssueItem from 'components/listItem/IssueItem';
import WantedAds from 'components/listItem/WantedAds';

interface IntersectionObserverType {
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
}

function IssueList() {
  const containerRef = useRef<HTMLUListElement | null>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const [issueList, setIssueList] = useState<IssueType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

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
    getIssues(page).then(response => {
      setIssueList(prev => {
        return [...prev, ...response];
      });
      setLoading(true);
    });
  }, [page]);

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
