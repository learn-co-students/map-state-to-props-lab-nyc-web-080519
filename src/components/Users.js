import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    let users = this.props.users.map(user => <li> {user.username}</li>);
    return (
      <div>
        {this.props.countOfUsers}
        <ul>
          {users}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    countOfUsers: state.users.length
  };
};

export default connect(mapStateToProps)(Users)
