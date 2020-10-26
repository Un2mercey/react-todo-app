import React from 'react';
import Button from '@material-ui/core/Button/Button';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Input from '@material-ui/core/Input';
import { INewTodoFormState } from '../../models/new-todo-form.state';
import { connect } from 'react-redux';
import { createTodoItem, fetchTodos } from '../../redux/actions';
import { INewTodoFormProps } from '../../models/new-todo-form.props';


class NewTodoForm extends React.Component<INewTodoFormProps | any> {

    public state: INewTodoFormState = { title: '' };

    public btnSaveHandler = (event: React.SyntheticEvent<EventTarget>) => {
        console.log(this);
        event.preventDefault();
        this.props.createTodoItem({
            title: this.state.title,
            description: 'without descr',
            isDone: false
        });
        this.setState({title: ''});
    }

    public btnFetchHandler = (event: React.MouseEvent<HTMLElement>) => {
        this.props.fetchTodos();
    }

    public iputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState((prev: INewTodoFormState) => ({
            ...prev,
            ...{ title: event.target.value }
        }));
    }

    public render = (): JSX.Element => {
        return (
            <form className="new-todo-form" onSubmit={ this.btnSaveHandler } >
                <Input
                  className="new-todo-form-input"
                  type="text"
                  placeholder="Enter a name of new todo item..."
                  onChange={ this.iputChangeHandler }
                  value={ this.state.title }
                />
                <div className="button-block">
                    <Button
                      variant="contained"
                      className="btn-save"
                      onClick={ this.btnSaveHandler }>
                        Save
                        <PostAddIcon className="icon post-add-icon" />
                    </Button>
                    <Button variant="contained" className="btn-fetch" onClick={ this.btnFetchHandler }>
                        Fetch
                        <CloudDownloadIcon className="icon cloud-download-icon" />
                    </Button>
                </div>
            </form>
        );
    }
}


const mapDispatchToProps = {
    createTodoItem,
    fetchTodos
}

export default connect(null, mapDispatchToProps)(NewTodoForm);