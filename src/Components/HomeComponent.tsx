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
                    <p>In the meantime, click on the menu in the top left to see what's available! Every lesson is broken down into several screens that each contain one paragraph. You can find any lesson, subheading, or paragraph in the menu. When you're on a paragraph screen, you can navigate through the lesson by clicking the left and right arrows at the bottom of the screen.</p>
                    <p>Each paragraph may have one of four symbols next to it: the "keyboard", "text", "search", or "robot" symbol. The keyboard indicates a step that requires taking any action on your laptop (e.g. typing, running code, opening a link); The text icon means you only need to read the paragraph; the search symbol tells you to find something in your code, but not to make any changes; and the robot indicates any direct interaction with the romi. Use these icons while taking the course to gain a sense of what each paragraph is asking of you before you even begin reading or to find a paragraph that you completed previously. Think you messed up a step earlier in the lesson? You can efficiently backtrack by skipping over all of the "text" and "search" paragraphs—and studying the "keyboard" sections more closely.</p>
                    <p>The goal of this is to make <a href='https://github.com/czbeatty/FRC-Romi-Programming-Course' target='_blank'>the original PDF course</a> easier to absorb and navigate. As someone who took the course myself and is now helping others through it, I can see this reducing the overall time to completion and improving the general experience of those taking the course. Feedback from students in-person is already leading to further developments in this interactive version, but if you discovered this online and have suggestions, please don't hesitate to open an issue on <a href='https://github.com/milligansarah/interactive-romi-robot-course' target='_blank'>this GitHub repository</a></p>
                    <p>Good luck!</p>
                    <p>-Sarah Milligan, Team 1188</p>
                </div>
            </div>
        </div>
    );
}