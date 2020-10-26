import { ITodoItem } from './todo-item';
import { IBaseAppAction } from './base-app.action';


export interface INewTodoFormProps {
    createTodoItem: (item: ITodoItem) => IBaseAppAction;
    fetchTodos: (dispatch: any) => Promise<void>
}
