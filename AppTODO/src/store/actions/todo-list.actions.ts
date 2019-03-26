import { TodoModel } from "../../models/todo.model";
import { Action } from "redux";

export enum TodoListActionsTypes {
    ADD_TODO = 'ADD_TODO',
    CHANGE_CHECK = 'CHANGE_CHECK'
}

export interface AddTodoAction extends Action {
    type: TodoListActionsTypes.ADD_TODO
    payload: TodoModel
}

export interface ChangeTodoCheckAction extends Action {
    type: TodoListActionsTypes.CHANGE_CHECK
    payload: number 
}

export function addTodo(todo: TodoModel): AddTodoAction {
    return {
        type: TodoListActionsTypes.ADD_TODO,
        payload: todo
    }
}

export function changeTodoCheck(id:number): ChangeTodoCheckAction {
    return {
        type: TodoListActionsTypes.CHANGE_CHECK,
        payload: id
    }
}

