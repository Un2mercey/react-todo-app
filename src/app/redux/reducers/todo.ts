import _ from 'underscore';
import { todos } from '../../data/todos';
import { IAppState } from '../../models/app.state';
import { CREATE_TODO_ITEM, DELETE_TODO_ITEM, CHANGE_TODO_ITEM_CHECKBOX, LOADING } from '../types';
import { ITodoItem } from '../../models/todo-item';
import { IBaseAppAction } from '../../models/base-app.action';
import { ICheckboxActionPayload } from '../../models/checkbox.action.payload';


const initialState: IAppState = { todos: todos, isLoading: false };

export const todoReducer = (state: IAppState = initialState, action: IBaseAppAction): IAppState => {
    switch (action.type) {
        case LOADING:
            return loading(state, action.payload as boolean);
        case CREATE_TODO_ITEM:
            return createTodoItem(state, action.payload as ITodoItem);
        case DELETE_TODO_ITEM:
            return deleteTodoItem(state, action.payload as ITodoItem);
        case CHANGE_TODO_ITEM_CHECKBOX:
            return changeTodoItemCheckbox(state, action.payload as ICheckboxActionPayload);
        default: return state;
    }
}

const loading = (state: IAppState, payload: boolean): IAppState => {
    return {...state, isLoading: payload };
}

const createTodoItem = (state: IAppState, payload: ITodoItem): IAppState => {
    return {...state, todos: [...state.todos, payload] };
}

const deleteTodoItem = (state: IAppState, payload: ITodoItem): IAppState => {
    let item = _.find(state.todos, payload);
    let newTodo: Array<ITodoItem> = _.filter(state.todos, (todo: ITodoItem) => todo !== item);
    return { ...state, todos: newTodo };
}

const changeTodoItemCheckbox = (state: IAppState, payload: ICheckboxActionPayload): IAppState => {
    let idx: number = _.findIndex(state.todos, payload.item);
    let newTodo: Array<ITodoItem> = _.map(state.todos, (todo: ITodoItem, index: number) => {
        if (index === idx) todo.isDone = payload.isChecked;
        return todo;
    });
    return { ...state, todos: newTodo };
}
