import { useCallback, useEffect, useState } from 'react';

import { getIssueDetail, getIssues } from 'apis';
import { useLocation } from 'react-router-dom';
import { IssueType } from 'types';

interface FetchPropsType {
  currentNum: number;
}

function useFetch({ currentNum }: FetchPropsType) {
  const { pathname } = useLocation();
  const [issueList, setIssueList] = useState<IssueType[]>([]);
  const [selectedIssue, setSelectedIssue] = useState<IssueType | null>(null);
  const [isShowError, setIsShowError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchIssues = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getIssues(currentNum);
      setIssueList(prev => {
        return [...prev, ...data];
      });
    } catch (e) {
      setIsShowError(true);
    } finally {
      setLoading(false);
    }
  }, [currentNum]);

  const fetchIssue = useCallback(async () => {
    try {
      const data = await getIssueDetail(currentNum);
      setSelectedIssue(data);
    } catch (e) {
      setIsShowError(true);
    }
  }, [currentNum]);

  useEffect(() => {
    pathname === '/' ? fetchIssues() : fetchIssue();
  }, [currentNum, fetchIssue, fetchIssues, pathname]);

  return { issueList, selectedIssue, loading, isShowError };
}

export default useFetch;
