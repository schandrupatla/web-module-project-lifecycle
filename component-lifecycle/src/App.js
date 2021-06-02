
import React from 'react';
import './App.css';
import axios from 'axios'
import User from './User'

class App extends React.Component {

  state ={
    userData:{},
    followers:[]
  }

  componentDidMount(){
    axios.get('https://api.github.com/users/schandrupatla')
    .then((res)=>{
    axios.get("https://api.github.com/users/schandrupatla/followers").then((followersResp) => {
      console.log("followersResp:",followersResp.data);
      this.setState({
        userData:res.data,
        followers:followersResp.data})
      })
    })
    .then()
    .catch((err)=>{
      console.log(err);
    })

  }

  render(){
  return (
    <div className="App">
      {/* <header height="100" width="100" className="App-header"> */}
          <h1>{this.state.userData.login}</h1>
          <img src ={this.state.userData.avatar_url} alt=""/>
        {/* </header> */}
        <div >
          <h1>Followers:</h1>
             {
             this.state.followers.map(follower=>{
                return <User key={follower.id} name={follower.login} avatar ={follower.avatar_url} url={follower.html_url}/>
            })
            }
        </div>   

    </div>
  );
  }
}

export default App;
