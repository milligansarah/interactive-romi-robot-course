import './HomeComponent.css';
import SideNavigationComponent from './SideNavigationComponent';

export default function HomeComponent() {
    return (
        <div style={{display: 'flex', flexDirection: 'row', flexGrow: 1}}>
            <SideNavigationComponent currentLesson={1}/>
            <div id='home-component' style={{position: 'relative', width: '100%'}}>
                <div id='text-container'>
                    <h1>Welcome to the course!</h1>
                    <p>As of 7/7/23, only lessons 2-4 are available on this website. For the full, original PDF course, you can head over <a href='https://github.com/czbeatty/FRC-Romi-Programming-Course' target='_blank'>here</a>. The remaining lessons will be added to this interactive version over the next few weeks. In the meantime, click on the menu in the upper left of the screen to check out all available lessons</p>
                </div>
            </div>
        </div>
    );
}