import React from 'react'
import { Link } from 'react-router-dom'

const Nav = ({ userCount, topName }) => {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/users">
          Users ({userCount})
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/users/create">
          Create A User
        </Link>
      </li>
      {topName ? (
        <li className="nav-item">
          <Link className="nav-link" to="/users/topRanked">
            Top Ranked ({topName})
          </Link>
        </li>
      ) : null}
    </ul>
  )
}

export default Nav
