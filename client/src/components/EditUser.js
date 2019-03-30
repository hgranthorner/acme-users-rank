import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserFromStore } from '../store'

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

class EditUser extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      bio: '',
      rank: '',
      errors: []
    }
  }

  componentDidMount() {
    const { name, bio, rank } = getUserFromStore(id)
  }

  render() {
    return <div />
  }
}

export default EditUser
