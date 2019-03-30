import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

const initialState = {
  users: []
}

// action types

const GET_USERS = Symbol('getusers')
const REMOVE_USER = Symbol('deleteuser')
const ADD_USER = Symbol('createuser')

// action creators

const getUsers = users => ({ type: GET_USERS, users })
const removeUser = id => ({ type: REMOVE_USER, id })
const addUser = user => ({ type: ADD_USER, user })

// reducers

const userReducer = (state = initialState, { type, users, id, user }) => {
  switch (type) {
    case GET_USERS:
      return { ...state, users }
    case ADD_USER:
      return { ...state, users: [...state.users, user] }
    case REMOVE_USER:
      const newUsers = [...state.users]
      return { ...state, users: newUsers.filter(u => u.id !== id) }
    default:
      return state
  }
}

const store = createStore(userReducer, applyMiddleware(thunk))

// thunks

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

const createUser = user => {
  console.log('creating user', user)
  return dispatch => {
    return axios
      .post('api/users', user)
      .then(res => {
        dispatch(addUser(res.data))
      })
      .then(() => console.log('user created'))
      .catch(e => console.error(`Failed to create user. Here's why:\n${e}`))
  }
}

export { store, fetchUsers, deleteUser, createUser }
