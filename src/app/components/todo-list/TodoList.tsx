import _ from 'underscore';
import React from 'react';
import { connect } from 'react-redux';
import TodoItem from '../todo-item/TodoItem';
import { IAppState } from '../../models/app.state';
import { ITodoItem } from '../../models/todo-item';
import { ITodoListProps } from './../../models/todo-list.props';
import { IRootState } from '../../models/root.state';


class TodoList extends React.Component<ITodoListProps | any> {

    public renderItems = (): Array<JSX.Element> => {
        return _.map(this.props.todos, (todo: ITodoItem, index: number) => (
            <TodoItem props={ todo } key={ index }/>
        ));
    }

    public render = (): JSX.Element => {
        return (
            <div className="todo-list">
                { this.renderItems() }
            </div>
        );
    }
}

const mapStateToProps = (state: IRootState): IAppState => {
    return state.todoReducer;
}

export default connect(mapStateToProps)(TodoList);