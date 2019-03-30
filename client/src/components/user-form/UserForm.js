import React from 'react'
import UserButtons from './UserButtons'
import UserFields from './UserFields'

const UserForm = ({ handleSubmit, handleChange, name, bio, rank, buttonText }) => {
  return (
    <form onSubmit={handleSubmit}>
      <UserFields name={name} bio={bio} rank={rank} handleChange={handleChange} />
      <UserButtons buttonText={buttonText} />
    </form>
  )
}

export default UserForm
