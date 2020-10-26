import { AnyAction, Dispatch } from 'redux';
import { ITodoItem } from './todo-item';


export interface ITodoListProps {
    todos: Array<ITodoItem>,
    dispatch: Dispatch<AnyAction>
}
