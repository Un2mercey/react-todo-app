import { ITodoItem } from './todo-item';
import { IBaseAppAction } from './base-app.action';


export interface ITodoItemProps {
    props: ITodoItem;
    deleteTodoItem: (item: ITodoItem) => IBaseAppAction;
    changeTodoItemCheckbox: (item: ITodoItem, isChecked: boolean) => IBaseAppAction;
}