import axios from 'axios';

const BASE_URL = 'https://api.github.com/repos/facebook/react/issues';

const TOKEN = process.env.REACT_APP_GIT_TOKEN;

const axiosIstance = axios.create({
  baseURL: BASE_URL,
});

axiosIstance.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${TOKEN}`;
  return config;
});

export const getIssues = async (page: number) => {
  const data = await axiosIstance.get(
    `${BASE_URL}?state=open&sort=comments&direction=desc&page=${page}&per_page=10`,
  );
  return data.data;
};

export const getIssueDetail = async (issueNumber: number) => {
  const data = await axiosIstance(`${BASE_URL}/${issueNumber}`);
  return data.data;
};
