import { readFileSync, writeFile } from 'fs'
import ActionType from './Types/ActionTypeEnum'
import contentBlock from './Types/ContentBlockType'
import CourseData from './Types/CourseDataType'
import raw_data_processed from './raw_data.json'

type RawDataProcessed = {
    [lesson: string]: LessonDataRaw
}

type LessonDataRaw = {
    [subHeading: string]: SubheadingDataRaw | number
}

type SubheadingDataRaw = {
    [index: string]: ContentDataRaw
}

type ContentDataRaw = {
    actionType: string,
    content: string,
    image: string | undefined,
    more_images: string | undefined
}

function format_raw_processed_data_to_course_data() {
    const course_data : CourseData = {}
    for (const lessonKey in raw_data_processed) {
        const lesson_raw_data : LessonDataRaw = (raw_data_processed as any)[lessonKey];
        course_data[lessonKey] = {}
        for (const subheadingKey in lesson_raw_data) {
            course_data[lessonKey][subheadingKey] = {}
            const subheading_raw_data : SubheadingDataRaw = (raw_data_processed as any)[lessonKey][subheadingKey];
            for (const index in subheading_raw_data) {
                const content : string = subheading_raw_data[index]["content"]
                const image : string | undefined = subheading_raw_data[index]["image"]
                const more_images : string | undefined = subheading_raw_data[index]["more_images"];
                (course_data[lessonKey][subheadingKey] as any)[index] = {
                    actionType: ActionType.Code,
                    content: require('html-react-parser')(content)
                } as contentBlock
                if (typeof(image) == 'string') {
                    (course_data[lessonKey][subheadingKey] as any)[index]['image'] = require('html-react-parser')(image);
                }
                if (typeof(more_images) == 'string') {
                    (course_data[lessonKey][subheadingKey] as any)[index]['more_images'] = require('html-react-parser')(more_images);
                }
                console.log((course_data[lessonKey][subheadingKey] as any)[index]['content'])
            }
        }
        const totalParagraphs : number = Number((lesson_raw_data as LessonDataRaw)['totalParagraphs'])
        course_data[lessonKey]['totalParagraphs'] = totalParagraphs;
    }
    console.log(course_data)
    return course_data;
}

export default format_raw_processed_data_to_course_data