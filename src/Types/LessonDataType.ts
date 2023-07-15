import subHeading from './SubHeadingType';

type LessonData = {
    // TODO: define required keys more clearly
    [subheadingOrTotalParagraphs: string]: subHeading | number;
}

export default LessonData;