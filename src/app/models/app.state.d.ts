import { ITodoItem } from './todo-item';


export interface IAppState {
    todos: Array<ITodoItem>;
    isLoading: boolean;
}
