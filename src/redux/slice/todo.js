import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: { list: [] },
    reducers: {
        addTodo(state, action) {
            
            state.list.push(action.payload);
        },
        removeTodo(state, action) {
            
            state.list = state.list.filter(todo => todo.id !== action.payload.id);
        },
        updateStatus(state, action) {
            
            const updatedAt = new Date().toLocaleString();
            const todo = state.list.find(todo => todo.id === action.payload.id);
            if (todo) {
                todo.isDone = true;
                todo.updatedAt = updatedAt;  
            }
        }
    }
});

const { actions, reducer } = todoSlice;

export const { addTodo, removeTodo, updateStatus } = actions;

export default reducer;
