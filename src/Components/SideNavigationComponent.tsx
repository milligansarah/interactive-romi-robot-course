import './SideNavigationComponent.css';
import { Close, Menu, ExpandMore, ExpandLess} from '@mui/icons-material';
import { ReactElement, useState } from 'react';
import CourseData from '../course-data';
// Data types used to represent course data in `course-data.tsx`
import CourseDataType from '../Types/CourseDataType';
import contentBlock from '../Types/ContentBlockType';
import subHeading from '../Types/SubHeadingType';
import Collapsible from 'react-collapsible';

interface SideNavigationProps {
    currentLesson: number
}

function SideNavigationComponent(props: SideNavigationProps) {
    function generateMenuItems(data: CourseDataType) : ReactElement[] {
        const menuItems : ReactElement[] = [];
        for (const lessonKey in data) {
            const lessonNumber : number = Number(lessonKey.split(' ')[1]);
            const currentLessonObject = data[lessonKey];
            const currentLessonContent : ReactElement[] = [];
            for (const key in currentLessonObject) {
                if (key !== 'totalParagraphs') {
                    const thisSubHeading = currentLessonObject[key] as subHeading;
                    currentLessonContent.push(<p style={{color: 'cadetblue', fontSize: 18, marginLeft: 20, marginTop: 0, marginBottom: 0}}>{key}</p>);
                    for (const contentBlockKey in thisSubHeading) {
                        const thisContentBlock = thisSubHeading[contentBlockKey] as contentBlock;
                        currentLessonContent.push(<a style={{display: 'inline-block', textOverflow: 'ellipsis', width: 'calc(100% - 60px)', marginLeft: 40, marginTop: 0, marginBottom: 0, overflow: 'hidden', whiteSpace: 'nowrap', color: 'black', maxHeight: 50}} href={'#/lesson-' + lessonNumber + '/' + contentBlockKey}><p>{thisContentBlock['content']}</p></a>);
                    }
                }
            }
            menuItems.push(<Collapsible onOpening={() => {}} trigger={<p>{lessonKey} <ExpandMore style={{position: 'relative', transform: 'translateY(25%)'}}/></p>}>{currentLessonContent.map((item) => item)}</Collapsible>)
        }
        return menuItems;
    }
    
    const [closed, setclosed] = useState(true);

    const toggleClosed = () => {
        setclosed(!closed);
        // The sidenav open/closed classes must be updated here, because otherwise the scroll function below will not work properly
        const sidenavElement : Element | null = document.getElementById('sidenavMenu');
        if (closed) {
            sidenavElement?.classList.add('sidenavClosed');
            sidenavElement?.classList.remove('sidenav');
        }
        else {
            sidenavElement?.classList.remove('sidenavClosed');
            sidenavElement?.classList.add('sidenav');
        }
    }

    return (
        <div className={closed ? 'sidenavClosed' : 'sidenavContainer'}>
            <button className='menuBtn' onClick={toggleClosed}>{closed ? <Menu style={{margin: 30}}/> : <Close style={{margin: 30}}/>}</button>
            <div id='sidenavMenu' className={closed ? 'sidenavClosed' : 'sidenav'}>
                <div className={closed ? 'linkTextClosed' : 'linkText'}>
                    {generateMenuItems(CourseData).map((item) => item)}
                </div>
            </div>
        </div>
    );
}

export default SideNavigationComponent;