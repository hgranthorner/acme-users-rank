import React from 'react'

const UserFields = ({ name, bio, rank, handleChange }) => {
  return (
    <div>
      <input className="form-control" value={name} placeholder="name" name="name" onChange={handleChange} />
      <input className="form-control" value={bio} placeholder="bio" name="bio" onChange={handleChange} />
      <input className="form-control" value={rank} placeholder="rank" name="rank" onChange={handleChange} />
    </div>
  )
}

export default UserFields
