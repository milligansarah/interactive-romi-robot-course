import ProgressBarComponent from "./ProgressBarComponent";
import SideNavigationComponent from "./SideNavigationComponent";
import './LessonCompleteComponent.css';

interface LessonCompleteProps {
    'lessonCompleted': number
    'totalParagraphs': number
}

function LessonCompleteComponent(props: LessonCompleteProps) {
    return (
        <div className='screenContainer'>
            <SideNavigationComponent currentLesson={props.lessonCompleted}/>
            <div className='screenContentContainer'>
                <div id='lessonCompleteText' className='textContainer'>
                    <h1>Congrats!</h1>
                    <p>You just finished lesson {props.lessonCompleted}. Onward to lesson {props.lessonCompleted + 1}!</p>
                </div>
                <ProgressBarComponent currentLesson={props.lessonCompleted} paragraphIndex={props.totalParagraphs} totalParagraphs={props.totalParagraphs}/>
            </div>
        </div>
    );
}

export default LessonCompleteComponent;