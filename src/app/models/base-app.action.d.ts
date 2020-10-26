import { Action } from "redux";
import { ITodoItem } from './todo-item';
import { ICheckboxActionPayload } from './checkbox.action.payload';


export interface IBaseAppAction extends Action {
    type: string;
    payload?: ITodoItem | ICheckboxActionPayload | boolean;
}
