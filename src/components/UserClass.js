import React from 'react';

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: []  
    };
  }

  async componentDidMount() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await data.json();
    this.setState({
      userInfo: json,  
    });
  }

  render() {
    
    return (
      <div className='user-list'>
        {this.state.userInfo.map(user => (
          <div className='user-card' key={user.id}>
            <h1>Name: {user.name}</h1>
            <h3>Location: {user.address.city}</h3>
            <h4>Email: {user.email}</h4>
          </div>
        ))}
      </div>
    );
  }
}

export default UserClass;