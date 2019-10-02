import React from 'react';
import axios from 'axios';
import './App.css';
import Usercard from './components/Usercard';

class App extends React.Component {
    
    state = {
      user: {},
      usersFollowers: []
    
  };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/rrrbba`)
      .then(response => {
       console.log(response.data)
       this.setState({
         user: response.data
       })
  })
  // .catch(err => console.log(err));
  // }
      .then(res => {
        axios.get(`https://api.github.com/users/rrrbba/followers`)
          .then(follow => {
            console.log(follow)
            follow.data.forEach(follower => {
              axios.get(follower.url)
              .then(followerData => {
                console.log(followerData);
                this.setState({
                  usersFollowers: [...this.state.usersFollowers, followerData.data]
                })
              })
            })
          })
      })
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.)
  }

  render(){
  return (
    <div className="App">
  <h1>Hello Users</h1>
      
   <div className = "users">
     <Usercard user = {this.state.user} />
     {this.state.usersFollowers.map(usersFollower => {
       return(
        <Usercard user = {usersFollower} />
       )
     })}
    </div> 
       </div> 
  );
}
}

export default App;
