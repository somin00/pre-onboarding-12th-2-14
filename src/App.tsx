import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyles } from 'style/global';

import IssueDetail from 'pages/IssueDetail';
import IssueList from 'pages/IssueList';
import NotFound from 'pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<IssueList />} />
        <Route path='/detail/:issueNumber' element={<IssueDetail />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
