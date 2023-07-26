import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import generateRoutes from './route-generator';
import CourseData from './course-data';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <HashRouter basename='/'>
      {generateRoutes(CourseData)}
    </HashRouter>
  </React.StrictMode>
);