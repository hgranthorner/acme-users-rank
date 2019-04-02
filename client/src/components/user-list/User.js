import React from 'react'
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { deleteUser } from '../../store'

const mapDispatchToProps = dispatch => ({ deleteUser: id => dispatch(deleteUser(id)) })

const User = ({ user, deleteUser }) => {
  return (
    <div>
      {user.name}
      <br />
      {user.bio}
      <br />
      <span className="badge badge-success" style={{ marginBottom: '10px' }}>
        Ranked {user.rank}
      </span>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <button
          className="btn btn-warning"
          onClick={() => {
            console.log('deleting', user.id)
            deleteUser(user.id)
          }}
          type="button"
        >
          Delete
        </button>
        <Link to={`/users/${user.id}`}>Edit</Link>

      </div>
    </div>
  )
}

export default connect(
  null,
  mapDispatchToProps
)(User)
