/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import React, {Component, useState, Fragment} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { ConnectedTodoInput } from './components/form-todo/form-todo.component';
import { TodoModel } from './models/todo.model';
import { ConnectedTodoList } from './components/todo-list/todo-list.component';
import { Provider } from 'react-redux';
import { STORE } from './store';

export default () => {


  return (
    <Provider store={STORE} >
      <ConnectedTodoInput  />
      <ConnectedTodoList />
    </Provider>
  )

}