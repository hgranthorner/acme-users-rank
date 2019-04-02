import React from 'react'
import User from './User'

const UserList = ({users}) => {
  return (
    <ul className="list-group">
      {users.length > 0
        ? users.map(u => (
          <li className="list-group-item" key={u.id}>
            <User user={u}/>
          </li>
        ))
        : null}
    </ul>
  )
}

export default UserList
