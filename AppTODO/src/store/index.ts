import { createStore } from 'redux'
import { appReducer } from './reducers';
import { TodoModel } from '../models/todo.model';

export interface Store {
    todoList: TodoModel[]
}

export const STORE = createStore(appReducer)