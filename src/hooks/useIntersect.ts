import { Dispatch, SetStateAction, useCallback, useEffect, useRef } from 'react';

interface IntersectPropsType {
  loading: boolean;
  setPage: Dispatch<SetStateAction<number>>;
}

function useIntersect({ loading, setPage }: IntersectPropsType) {
  const targetRef = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(() => {
    setPage(prev => prev + 1);
  }, [setPage]);

  useEffect(() => {
    if (!targetRef.current) return;
    let observer: IntersectionObserver;
    if (loading) {
      observer = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting) {
            loadMore();
          }
        },
        { threshold: 1 },
      );

      if (targetRef.current) observer.observe(targetRef.current);
    }

    return () => observer && observer.disconnect();
  }, [loadMore, loading]);

  return { targetRef };
}

export default useIntersect;
