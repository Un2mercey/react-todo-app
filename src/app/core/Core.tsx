import React from 'react';
import TodoList from '../components/todo-list/TodoList';
import NewTodoForm from '../components/new-todo-form/NewTodoForm';
import Loader from './../components/loader/Loader';


export class Core extends React.Component {
	public render = (): JSX.Element => {
		return (<>
            <Loader />
            <h1>TODO React Application</h1>
            <NewTodoForm />
            <TodoList />
        </>);
	};
}
