import React, {Component} from 'react';
import Login from './login/login';

class Body extends Component {

  constructor(props){
    super(props);
    this.state={
      loaded_body : "login"
    }
  }

  setLoadedBody(){

  }

  render(){
    return(
      <div>
          < Login/>
      </div>
    );
  }
}

export default Body;
