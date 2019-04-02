import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUserFromStore } from '../store'

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

class EditUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      bio: '',
      rank: '',
      errors: []
    }
  }

  componentDidMount() {
    console.log('props: ',this.props)
    const user = getUserFromStore(this.props.id)
    console.log(user)
    // if () const { name, bio, rank } = getUserFromStore(this.props.id)
  }

  render() {
    return <div>In Edit user</div>
  }
}

export default EditUser
