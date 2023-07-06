import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ContentBlockComponent from './Components/ContentBlockComponent';
import {Route, Routes, BrowserRouter, HashRouter, createHashRouter, RouterProvider} from 'react-router-dom';
import { ReactElement } from 'react';
import LessonCompleteComponent from './Components/LessonCompleteComponent';
import contentBlock from './Types/ContentBlockType';
import subHeading from './Types/SubHeadingType';
import CourseDataType from './Types/CourseDataType';
import CourseData from './course-data';
import SideNavigationComponent from './Components/SideNavigationComponent';

function generateRoutes(data: CourseDataType) : ReactElement {
  let lessonRoutesList : ReactElement[] = [];
  // Iterate through each lesson key in the course
  for (const lessonKey in data) {
    const currentLessonObject = data[lessonKey];
    const currentLessonBlockRoutesList : ReactElement[] = [];
    let totalParagraphs : number = data[lessonKey]['totalParagraphs'] as number;
    const lessonNumber : number = Number(lessonKey.split(' ')[1]);
    const lessonTitle : string = lessonKey.split(' - ')[1];
    for (const key in currentLessonObject) {
      // Check if the key is numeric, which would indicate a content block
      if (!isNaN(Number(key))) {
        const thisContentBlock = currentLessonObject[key] as contentBlock;
        currentLessonBlockRoutesList.push(
          <Route path={key} element=
            {
              <ContentBlockComponent lessonTitle={lessonTitle} lesson={lessonNumber} totalParagraphs={totalParagraphs} paragraphIndex={Number(key)} actionType={thisContentBlock['actionType']} content={
                <div>
                  {thisContentBlock['content']},
                  {thisContentBlock['image']}
                </div>
              } />
            }>
          </Route>
        );
      }
      // In this case, the object is a subheading
      else {
        // Iterate through each content block in the subheading
        const currentSubheadingObject = currentLessonObject[key] as subHeading;
        for (const contentBlockKey in currentSubheadingObject) {
          const thisContentBlock = currentSubheadingObject[contentBlockKey] as contentBlock;
          currentLessonBlockRoutesList.push(
            <Route path={contentBlockKey} element=
              {
                <ContentBlockComponent lessonTitle={lessonTitle} subHeading={key} lesson={lessonNumber} totalParagraphs={totalParagraphs} paragraphIndex={Number(contentBlockKey)} actionType={thisContentBlock['actionType']} content={
                  <div>
                    {thisContentBlock['content']}
                    {thisContentBlock['image']!}
                  </div>
                } />
              }>
            </Route>
          );
        }
      }
    }
    currentLessonBlockRoutesList.push(<Route path='complete' element={<LessonCompleteComponent totalParagraphs={totalParagraphs} lessonCompleted={lessonNumber}/>}></Route>)
    const lessonPath : string = lessonKey.split(' -')[0].split(' ').join('-');
    lessonRoutesList.push(<Route path={lessonPath}>{currentLessonBlockRoutesList.map((item) => item)}</Route>);
  }
  console.log(lessonRoutesList)
  return <Routes>{lessonRoutesList.map((item) => item)}</Routes>
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// const router = createHashRouter([
//   {
//     path: "/*",
//     element: generateRoutes(CourseData),
//   }
// ]);

root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router}></RouterProvider> */}
    <HashRouter basename='/'>
      {generateRoutes(CourseData)}
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
