import { ReactElement } from "react";
import ActionType from "./ActionTypeEnum";

type contentBlock = {
    'actionType': ActionType;
    'content': ReactElement;
    'image'?: ReactElement;
}

export default contentBlock;