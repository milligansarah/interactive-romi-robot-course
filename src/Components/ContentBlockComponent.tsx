import React, { ReactElement } from 'react';
import './ContentBlockComponent.css';
import { QuestionMark, Search, Notes, Keyboard, SmartToy } from '@mui/icons-material';
import ProgressBarComponent from './ProgressBarComponent';
import SideNavigationComponent from './SideNavigationComponent';
import ActionType from '../Types/ActionTypeEnum';

interface ContentBlockProps {
  'actionType': ActionType,
  'content': ReactElement,
  'lesson': number,
  'paragraphIndex': number,
  'totalParagraphs': number,
  'lessonTitle': string,
  'subHeading'?: string
}

function ContentBlockComponent(props: ContentBlockProps) {
  function getIcon() : ReactElement {
    switch(props.actionType) {
      case ActionType.Search:
        return <Search/>
      case ActionType.Read:
        return <Notes/>
      case ActionType.Code:
        return <Keyboard/>
      case ActionType.Robot:
        return <SmartToy/>
      default:
        return <QuestionMark/>
    }
  }

  return (
    <div style={{display: 'flex', flexDirection: 'row', flexGrow: 1}}>
      <SideNavigationComponent currentLesson={props.lesson}/>
      <div style={{position: 'relative', width: '100%'}}>
        <div id='lessonAndSubheading'>
          <h1>Lesson {props.lesson} - {props.lessonTitle}</h1>
          <h2>{props.subHeading ? props.subHeading : null}</h2>
        </div>
        <div id='contentBlockComponent'>
          <div id='contentBlock'>
            {getIcon()}
            {props.content}
          </div>
          <ProgressBarComponent currentLesson={props.lesson} totalParagraphs={props.totalParagraphs} paragraphIndex={props.paragraphIndex}/>
        </div>
      </div>
    </div>
  );
}

export default ContentBlockComponent;
