import axios from 'axios';
import { REPO_INFO, TOKEN } from 'constant';

const { organization, repository } = REPO_INFO;

const BASE_URL = `https://api.github.com/repos/${organization}/${repository}/issues`;

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
