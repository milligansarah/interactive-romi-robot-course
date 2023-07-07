import './HomeComponent.css';
import SideNavigationComponent from './SideNavigationComponent';

export default function HomeComponent() {
    return (
        <div style={{display: 'flex', flexDirection: 'row', flexGrow: 1}}>
            <SideNavigationComponent currentLesson={1}/>
            <div id='home-component' style={{position: 'relative', width: '100%'}}>
                <div id='text-container'>
                    <h1>Welcome to the course!</h1>
                    <p>As of 7/7/23, only lessons 2-4 are available on this website. For the full, original PDF course, you can head over <a href='https://github.com/czbeatty/FRC-Romi-Programming-Course' target='_blank'>here</a>. The remaining lessons will be added to this interactive version over the next few weeks.</p>
                    <p>In the meantime, click on the menu in the top left to see what's available! Every lesson is broken down into several screens that each contain one paragraph. You can find any paragraph in the menu. When you're on a paragraph screen, you can navigate through the lesson by clicking the left and right arrows at the bottom of the screen.</p>
                    <p>Each paragraph may have one of three symbols next to it; the "keyboard", "text", and "search" symbols. Use these while taking the course to gain a sense of what each paragraph is asking of you before you even begin reading. Think you messed up a step in your code? You could scroll through each paragraph to quickly identify a "keyboard" paragraph that you may need to read again</p>
                    <p>The goal of this is to make the original PDF course easier to take in and navigate, as well as to reduce the likelihood that a student misses a step.</p>
                </div>
            </div>
        </div>
    );
}