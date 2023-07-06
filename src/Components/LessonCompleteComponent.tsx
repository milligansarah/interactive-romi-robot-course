import ProgressBarComponent from "./ProgressBarComponent";
import './LessonCompleteComponent.css';
import SideNavigationComponent from "./SideNavigationComponent";

interface LessonCompleteProps {
    'lessonCompleted': number
    'totalParagraphs': number
}

function LessonCompleteComponent(props: LessonCompleteProps) {
    return (
        <div style={{display: 'flex', flexDirection: 'row', flexGrow: 1}}>
            <SideNavigationComponent currentLesson={props.lessonCompleted}/>
            <div style={{position: 'relative', width: '100%'}}>
                <div id='lessonCompleteComponent'>
                    <div id='lessonCompleteText'>
                        <h1>Congrats!</h1>
                        <p>You just finished lesson {props.lessonCompleted}. Onward to lesson {props.lessonCompleted + 1}!</p>
                    </div>
                    <ProgressBarComponent currentLesson={props.lessonCompleted} paragraphIndex={props.totalParagraphs} totalParagraphs={props.totalParagraphs}/>
                </div>
            </div>
        </div>
    );
}

export default LessonCompleteComponent;