import './App.css';
import React from 'react';
import UserCard from './UserCard';
import UsersList from './UsersList'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      selected: null,
      cardVisible: false,
    }
  }

  fetchUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ 
          users: data,
        })
      })
  }

  handleUserButtonClick(user) {
    if (!user) return null
    this.setState({ selected: user })
    this.setState({ cardVisible: true })
  }

  handleCloseCard() {
    this.setState({cardVisible: false})
  }

  componentDidMount() {
    this.fetchUsers()
  }

  render() {
   
    return (
      
      <div className="App">
        <div className='app-container'>
          <UsersList users={this.state.users} tabAvailable={this.state.cardVisible ? "-1" : "0"}  handleClick={this.handleUserButtonClick.bind(this)}/>
          <UserCard user={this.state.selected} visible={this.state.cardVisible} handleClose={_ => this.handleCloseCard()} />
        </div>  
      </div>
    );
  }
}



export default App;
