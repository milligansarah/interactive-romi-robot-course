import './HomeComponent.css';
import SideNavigationComponent from './SideNavigationComponent';

export default function HomeComponent() {
    return (
        <div className='screenContainer'>
            <SideNavigationComponent currentLesson={1}/>
            <div className='screenContentContainer'>
                <div id='homeText' className='textContainer'>
                    <h1>Welcome to FRC Romi Programming Course!</h1>
                    <p>This website is an interactive version of <a href='https://github.com/czbeatty/FRC-Romi-Programming-Course' target='_blank'>this PDF course</a>. Solutions for some lessons can be accessed through the previous link. For more information about the course and the interactive version, keep reading!</p>
                    <h2>Course Description</h2>
                    <p>This course is for learning how to program FRC robots using the WPILib and a Romi robot. It is designed for FRC teams or individual students who have access to <a href='https://www.pololu.com/product/4022'>Romi robots</a> and want to learn how to develop software for robots. This course assumes no prior knowledge of programming, but will also serve students with some prior experience. In addition to covering fundamentals of programming (in Java), this course teaches how to use the WPILib to program robots using the command-based framework. It also demonstrates a number of ways one can use software to increase the competitiveness of a robot, using practical examples that could easily be applied to FRC. Because this course uses the WPILib, projects done for this course could easily be transferred to a full-size FRC robot with only minimal changes. If all the projects in this course were applied to a robot, it would lead to a significant advantage in drivability as compared to default drive code, and provide basic autonomous capabilities, but this course stops short of advanced concepts such as motion profiling.</p>
                    <p>The course can be completed with a few hours a week over the course of a fall pre-season. Students on teams with few or no programming mentors can do this course without any adult help. FRC teams in such a position can use this to develop a few students into programmers and kickstart their programming teams. Teams that already have a number of programming students and/or mentors can use it as a way to train new students or as an introduction to more advanced concepts. Teams that already have software curriculums may find individual lessons, projects, or examples beneficial.</p>
                    <h2>About the Interactive Version</h2>
                    <p>If this is your first time here, click on the menu in the top left to get started. Every lesson is broken down into several screens that each contain about one paragraph of content. You can find any lesson, subheading, or paragraph in the menu. When you're on a paragraph screen, you can navigate through the lesson by clicking the left and right arrows at the bottom of the screen.</p>
                    <p>Each paragraph may have one of four symbols next to it: the "keyboard", "text", "search", or "robot" symbol. The keyboard indicates a step that requires taking any action on your laptop (e.g. typing, running code, opening a link); The text icon means you only need to read the paragraph; the search symbol tells you to find something in your code, but not to make any changes; and the robot indicates any direct interaction with the romi. Use these icons while taking the course to gain a sense of what each paragraph is asking of you before you even begin reading or to find a paragraph that you completed previously. Think you messed up a step earlier in the lesson? You can efficiently backtrack by skipping over all of the "text" and "search" paragraphs—and studying the "keyboard" sections more closely.</p>
                    <p>The goal of this is to make <a href='https://github.com/czbeatty/FRC-Romi-Programming-Course' target='_blank'>the original PDF course</a> easier to absorb and navigate. As someone who took the course myself and is now helping others through it, I can see this reducing the overall time to completion and improving the general experience of those taking the course. Feedback from students in-person is already leading to further developments in this interactive version, but if you discovered this online and have suggestions, please don't hesitate to open an issue on <a href='https://github.com/milligansarah/interactive-romi-robot-course' target='_blank'>this GitHub repository</a></p>
                    <p>Good luck!</p>
                    <p>-Sarah Milligan, Team 1188</p>
                </div>
            </div>
        </div>
    );
}