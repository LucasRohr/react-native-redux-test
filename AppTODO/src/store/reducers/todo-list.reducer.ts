import { TodoModel } from "../../models/todo.model";
import { AddTodoAction, ChangeTodoCheckAction, TodoListActionsTypes } from "../actions/todo-list.actions";

const initialState: TodoModel[] = []

export const todoListReducer = (state: TodoModel[] = initialState, action: AddTodoAction | ChangeTodoCheckAction) => {

    switch (action.type) {
        case TodoListActionsTypes.ADD_TODO:
            return [
                ...state,
                action.payload
            ]
            
        case TodoListActionsTypes.CHANGE_CHECK:

            return state.map(
                (todo) => {
                    if(todo.id === action.payload) {
                        todo.isCheck = !todo.isCheck
                    }

                    return todo
                }
            )
            
        default:
            return state;
    }

}