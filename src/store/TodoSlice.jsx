import { createSlice } from '@reduxjs/toolkit'
const TodoSlice = createSlice({
  name: 'TODO',
  initialState: [],
  reducers: {
    add(state, actions) {
      state.push({
        todo: actions.payload,
        isCompleted: false,
        isEditable: false,
      })
    },
    remove(state, actions) {
      return state.filter((list) => list.todo !== actions.payload)
    },
    completed(state, actions) {
      return state.map((list) => {
        if (list.todo === actions.payload) {
          return { ...list, isCompleted: true }
        }
        return list
      })
    },
    editable(state, actions) {
      return state.map((list) => {
        if (list.todo === actions.payload) {
          return { ...list, isEditable: true }
        }
        return list
      })
    },
    editDone(state, actions) {
      return state.map((list) => {
        if (list.todo === actions.payload) {
          return { ...list, isEditable: false }
        }
        return list
      })
    },
    update(state, actions) {
      return state.map((list) => {
        if (list.todo === actions.payload.oldValue) {
          return { ...list, todo: actions.payload.newValue }
        }
        return list
      })
    },
  },
})
export const { add, remove, completed, editable, editDone, update } =
  TodoSlice.actions
export default TodoSlice.reducer
