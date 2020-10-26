import React from 'react';
import { Checkbox, Fab } from '@material-ui/core';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import { connect } from 'react-redux';
import { deleteTodoItem, changeTodoItemCheckbox } from '../../redux/actions';
import { ITodoItemProps } from '../../models/todo-item.props';


class TodoItem extends React.Component<ITodoItemProps> {

    public btnDeleteHandler = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        this.props.deleteTodoItem(this.props.props);
    }

    public checkboxHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.props.changeTodoItemCheckbox(this.props.props, event.target.checked);
    }

    public render = (): JSX.Element => {
        return (
            <div className="todo-item">
                <div className="container">
                    <div className="title">
                        <Checkbox
                          defaultChecked={ this.props.props.isDone }
                          onChange={ this.checkboxHandler } />
                        <span className="label">
                            { this.props.props.title }
                        </span>
                    </div>
                    <div className="description">{ this.props.props.description }</div>
                </div>
                <Fab
                  color="secondary"
                  size="small"
                  className="btn-delete"
                  onClick={ this.btnDeleteHandler }>
                    <DeleteSweepIcon className="icon icon-delete-item" />
                </Fab>
            </div>
        );
    }
}

const mapDispatchToProps = {
    deleteTodoItem,
    changeTodoItemCheckbox
}

export default connect(null, mapDispatchToProps)(TodoItem)
