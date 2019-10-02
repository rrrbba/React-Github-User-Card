import React from 'react';




const Usercard = props => {
    
      return (

       <div className = "users">
       
            <div className = "eachUser">
                <img width = "200" src = {props.user.avatar_url} key = {props.user} alt = {props.user} />
              <h2>{props.user.name}</h2>
          <p>Username: {props.user.login}</p>
          <p>Following: {props.user.following}</p>
          <p>Followers: {props.user.followers}</p>
          <p>Location: {props.user.location}</p>
          <a>{props.user.html_url}</a>
           </div>
     
        </div> 
          
      );
    

    }

  export default Usercard