import contentBlock from './ContentBlockType';
import subHeading from './SubHeadingType';

type LessonData = {
    [indexOrSubHeadingOrParagraphCount: string]: contentBlock | subHeading | number;
}

export default LessonData;