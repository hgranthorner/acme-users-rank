import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

const initialState = {
  users: []
}

// action types

const GET_USERS = Symbol('getusers')
const REMOVE_USER = Symbol('deleteuser')

// action creators

const getUsers = users => ({ type: GET_USERS, users })
const removeUser = id => ({ type: REMOVE_USER, id })

// reducers

const userReducer = (state = initialState, { type, users, id }) => {
  switch (type) {
    case GET_USERS:
      return { ...state, users }
    case REMOVE_USER:
      const newUsers = [...state.users]
      return { ...state, users: newUsers.filter(u => u.id !== id) }
    default:
      return state
  }
}

const store = createStore(userReducer, applyMiddleware(thunk))

const fetchUsers = () => {
  return dispatch => {
    return axios
      .get('/api/users')
      .then(res => res.data)
      .then(users => dispatch(getUsers(users)))
      .catch(e => console.error(`Failed to fetch users. Here's why:\n${e}`))
  }
}

const deleteUser = id => {
  return dispatch => {
    return axios
      .delete(`/api/users/${id}`)
      .then(() => console.log(`Removed user ${id}`))
      .then(() => dispatch(removeUser(id)))
      .catch(e => console.error(`Failed to remove user. Here's why:\n${e}`))
  }
}

export { store, fetchUsers, deleteUser }
