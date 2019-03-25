import React, { useState } from 'react'
import { Text, View, TextInput, Button } from 'react-native';
import { InputTodoStyles } from './form-todo.styles';
import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { AddTodoAction } from '../../store/actions/todo-list.actions';
import { TodoModel } from '../../models/todo.model';


let id = 0


interface DispatchProps {
    dispatch: (action: AnyAction) => void 
}

type Props = DispatchProps 

const TodoInputComponent = (props: Props) => {
    const { dispatch } = props

    const [text, setText] = useState('')

    function addTodo() {
        dispatch(new AddTodoAction(
            new TodoModel(++id, text, false)
        ))
    }

    return (
        <View>
            <Text style={InputTodoStyles.text} >Digite abaixo o quer adicionar ao TODO</Text>
            <View>
                <TextInput placeholder="Digite aqui" onChangeText = {setText} value={text} >
                </TextInput>
            </View>
            <Text> { text } </Text>
            <Button title="Adicionar" onPress={() => { addTodo() }} ></Button>
        </View>

    )

}

const mapDispatchToProps = (dispatch: (action: AnyAction) => void ) => ()

export const ConnectedTodoInput = connect(null,mapDispatchToProps)(TodoInputComponent)

