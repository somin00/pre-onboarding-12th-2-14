import axios from 'axios';

const BASE_URL = 'https://api.github.com/repos/facebook/react/issues';

export const getIssues = async (page: number) => {
  const data = await axios.get(
    `${BASE_URL}?state=open&sort=comments&direction=desc&page=${page}&per_page=10`,
    {
      headers: {
        Authorization: 'Bearer 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',
      },
    },
  );
  return data.data;
};
