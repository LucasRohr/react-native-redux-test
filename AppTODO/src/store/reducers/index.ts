import { combineReducers } from 'redux'
import { todoListReducer } from './todo-list.reducer';

export const appReducer = combineReducers({
    todoList: todoListReducer
})