import React from 'react'

const UserButtons = ({ buttonText }) => (
  <div className="btn-group" style={{ marginTop: '10px' }}>
    <button type="submit" className="btn btn-primary">
      {buttonText}
    </button>
    <button type="button" className="btn btn-info">
      Cancel
    </button>
  </div>
)

export default UserButtons
