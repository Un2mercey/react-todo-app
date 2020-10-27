import { ITodoItem } from '../models/todo-item';
import { CHANGE_TODO_ITEM_CHECKBOX, CREATE_TODO_ITEM, DELETE_TODO_ITEM, LOADING } from './types';
import { IBaseAppAction } from '../models/base-app.action';
import { Dispatch } from 'redux';
import { IFetchTodosResponseItem } from '../models/fetch-todos-response-item';
import _ from 'underscore';


export function appLoading(isLoading: boolean): IBaseAppAction {
    return {
        type: LOADING,
        payload: isLoading
    };
}

export function createTodoItem(item: ITodoItem): IBaseAppAction {
    return {
        type: CREATE_TODO_ITEM,
        payload: item
    };
}

export function deleteTodoItem(item: ITodoItem): IBaseAppAction {
    return {
        type: DELETE_TODO_ITEM,
        payload: item
    };
}

export function changeTodoItemCheckbox(item: ITodoItem, isChecked: boolean): IBaseAppAction {
    return {
        type: CHANGE_TODO_ITEM_CHECKBOX,
        payload: { item: item, isChecked: isChecked }
    };
}


export const fetchTodos = () => async (dispatch: Dispatch<any>) => {
    dispatch(appLoading(true));
    await setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=50')
            .then((response: Response) => response.json())
            .then((data: Array<IFetchTodosResponseItem>) => {
                _.forEach(_.map(data, (item: IFetchTodosResponseItem): ITodoItem => {
                    return {
                        title: item.title,
                        description: 'Fetched todo from jsonplaceholder',
                        isDone: item.completed
                    };
                }), (newTodo: ITodoItem) => { dispatch(createTodoItem(newTodo)); });
            })
            .catch((error: any) => dispatch(appLoading(false)))
            .finally(() => dispatch(appLoading(false)));
    }, 3000);
};
