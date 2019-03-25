import { TodoModel } from "../../models/todo.model";
import { AddTodoAction, ChangeTodoCheckAction, TodoListActionsTypes } from "../actions/todo-list.actions";

const initialState: TodoModel[] = []

export const todoListReducer = (state: TodoModel[] = initialState, action: AddTodoAction | ChangeTodoCheckAction) => {

    switch (action.type) {
        case TodoListActionsTypes.ADD_TODO:
            state.push(action.payload)
            return state
            
        case TodoListActionsTypes.CHANGE_CHECK:
            const todoItem: TodoModel | undefined = state.find((todoModel) => todoModel.id === action.payload)
            if(todoItem) {
                todoItem.isCheck = !todoItem.isCheck
            }
            return state
            
        default:
            return state;
    }

}