import { TodoModel } from "../../models/todo.model";
import { Action } from "redux";

export enum TodoListActionsTypes {
    ADD_TODO = 'ADD_TODO',
    CHANGE_CHECK = 'CHANGE_CHECK'
}

export class AddTodoAction implements Action {
    readonly type = TodoListActionsTypes.ADD_TODO
    constructor(readonly payload: TodoModel) {}
}

export class ChangeTodoCheckAction implements Action {
    readonly type = TodoListActionsTypes.CHANGE_CHECK
    constructor(readonly payload: number) {}
}

export default ({
    addTodo(todo: TodoModel) {
        return new AddTodoAction(
            todo
        )
    },
    changeTodoCheck(id: number) {
        return new ChangeTodoCheckAction(
            id
        )
    }
})