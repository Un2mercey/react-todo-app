import { ITodoItem } from './todo-item';


export interface ICheckboxActionPayload {
    item: ITodoItem; 
    isChecked: boolean;
}
