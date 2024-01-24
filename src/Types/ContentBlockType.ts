import { ReactElement } from "react";
import ActionType from "./ActionTypeEnum";

type contentBlock = {
    'actionType': ActionType;
    'content': ReactElement;
    'image'?: ReactElement;
    'more_images'?: ReactElement;
}

export default contentBlock;