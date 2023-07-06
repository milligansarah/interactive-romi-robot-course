import LessonData from './LessonDataType';

type CourseData = {
    [lesson: string]: LessonData;
}
  
export default CourseData;