import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUsers } from './store'
import { Nav, Home, UserList } from './components'

const mapStateToProps = ({ users }) => ({ users })

const mapDispatchToProps = dispatch => ({ fetchUsers: () => dispatch(fetchUsers()) })

const App = ({ fetchUsers, users }) => {
  useEffect(() => {
    fetchUsers()
  }, [])

  const topUser = users.length > 0 ? users.sort((a, b) => (a.rank > b.rank ? 1 : -1))[0] : null
  return (
    <Router>
      <h1>Acme Users With Ranks</h1>
      <Nav userCount={users.length} topName={topUser ? topUser.name : null} />
      <Switch>
        <Route path="/" exact render={() => <Home userCount={users.length} />} />
        <Route path="/users" exact render={() => <UserList users={users} />} />
      </Switch>
    </Router>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
