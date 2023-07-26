import { ReactElement } from "react";
import { Route, Routes } from "react-router-dom";
// Data types used to represent course data in `course-data.tsx`
import CourseDataType from "./Types/CourseDataType";
import contentBlock from "./Types/ContentBlockType";
import subHeading from "./Types/SubHeadingType";
// Components
import ContentBlockComponent from "./Components/ContentBlockComponent";
import HomeComponent from "./Components/HomeComponent";
import LessonCompleteComponent from "./Components/LessonCompleteComponent";

export default function generateRoutes(data: CourseDataType) : ReactElement {
    let lessonRoutesList : ReactElement[] = [];
    // Iterate through each lesson key in the course
    for (const lessonKey in data) {
      const currentLessonObject = data[lessonKey];
      const currentLessonBlockRoutesList : ReactElement[] = [];
      let totalParagraphs : number = data[lessonKey]['totalParagraphs'] as number;
      const lessonNumber : number = Number(lessonKey.split(' ')[1]);
      const lessonTitle : string = lessonKey.split(' - ')[1];
      for (const key in currentLessonObject) {
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
      currentLessonBlockRoutesList.push(<Route path='complete' element={<LessonCompleteComponent totalParagraphs={totalParagraphs} lessonCompleted={lessonNumber}/>}></Route>)
      const lessonPath : string = lessonKey.split(' -')[0].split(' ').join('-');
      lessonRoutesList.push(<Route path={lessonPath}>{currentLessonBlockRoutesList.map((item) => item)}</Route>);
    }
    return <Routes>
      <Route path='/' element={<HomeComponent />}></Route>
      {lessonRoutesList.map((item) => item)}
    </Routes>
  }