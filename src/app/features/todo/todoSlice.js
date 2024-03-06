import { createSlice ,nanoid} from "@reduxjs/toolkit";
const initialState = {
    todos: [{id : 1, text : "Hello"}]
}
export const todoSlice = createSlice({
    name:"Todo",
    initialState,
    reducer:{
        addTodo:(state,action)=>{
            const todo = {
                id : nanoid(),//for generating Unique Id 
                text : action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>{
                todo.id !== action.payload
            })
        }
    },
})