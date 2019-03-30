import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchUsers } from './store'
import { Nav, Home, UserList, CreateUser, EditUser } from './components'

const mapStateToProps = ({ users }) => ({ users })

const mapDispatchToProps = dispatch => ({ fetchUsers: () => dispatch(fetchUsers()) })

const App = ({ fetchUsers, users }) => {
  useEffect(() => {
    fetchUsers()
  }, [])

  const topUser = users && users.length > 0 ? users.sort((a, b) => (a.rank > b.rank ? 1 : -1))[0] : null
  return (
    <Router>
      <h1>Acme Users With Ranks</h1>
      <Nav userCount={users.length} topName={topUser ? topUser.name : null} />
      <Switch>
        <Route path="/" exact render={() => <Home userCount={users.length} />} />
        <Route path="/users" exact render={() => <UserList users={users} />} />
        <Route path="/users/create" exact component={CreateUser} />
        <Route path="/users/:id" exact render={({ match }) => <EditUser id={match.params.id} />} />
        {topUser ? <Route path="/users/topRanked" exact render={() => <UserList users={[topUser]} />} /> : null}
      </Switch>
    </Router>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
