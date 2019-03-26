import React, { useState } from 'react'
import { TodoModel } from '../../models/todo.model';
import { View, Text, TouchableOpacity } from 'react-native';
import { AnyAction } from 'redux';
import { ChangeTodoCheckAction, changeTodoCheck } from '../../store/actions/todo-list.actions';
import { Store } from '../../store';
import { connect } from 'react-redux';

//pega as actions
interface DispatchProps {
    dispatch: (action: AnyAction) => void
}

//pega as infos da store
interface StateProps {
    todoList: TodoModel[]
}

type Props = DispatchProps & StateProps

const TodoListComponent = (props: Props) => {

    const { dispatch } = props

    function renderTodoItem() {
        return props.todoList.map(
            (item) => (
                <TouchableOpacity style={{ backgroundColor: item.isCheck ? `green` : `grey` }} onPress={() => dispatchCheckAction(item.id)} >
                    <Text>{item.text}</Text>
                </TouchableOpacity>
            )
        )
    }

    function dispatchCheckAction(id: number) {
        dispatch(
            changeTodoCheck(id)
        )
    }

    return (
        <View>
            {renderTodoItem()}
        </View>
    )

}

const mapDispatchToProps = (dispatch: (action: AnyAction) => void) => ({ dispatch })

const mapStateToProps = (store: Store) => ({ todoList: store.todoList })

export const ConnectedTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoListComponent)