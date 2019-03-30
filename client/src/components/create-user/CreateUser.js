import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createUser } from '../../store'
import { UserForm } from '../user-form'

const mapDispatchToProps = dispatch => ({ createUser: user => dispatch(createUser(user)) })

class CreateUser extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      bio: '',
      rank: '',
      errors: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    const { name, bio, rank } = this.state
    console.log('state', this.state)
    console.log('user in createuser', { name, bio, rank })
    this.props.createUser({ name, bio, rank })
  }

  render() {
    const { name, bio, rank } = this.state
    return (
      <UserForm handleSubmit={this.handleSubmit} name={name} bio={bio} rank={rank} handleChange={this.handleChange} buttonText="Submit" />
    )
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CreateUser)
