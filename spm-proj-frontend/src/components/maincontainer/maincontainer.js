import React, {Component} from 'react';
import Header from './header/header';
import Body from './body/body';

class MainContainer extends Component {

  constructor(props){
    super(props);
    this.childBody = React.createRef();
    this.setLoggedStatus=this.setLoggedStatus.bind(this);
    this.state={
      loggedStatus : false
    }
  }

  setLoggedStatus(){
    this.setState({loggedStatus : !this.state.loggedStatus});
    console.log("main container loggedstatus method reached");
    console.log(this.state.loggedStatus);
    this.childBody.current.setLoadedBodyToLogin();
  }

  render(){

    return(
      <div>
        <Header logout={this.setLoggedStatus}/>
        <Body ref={this.childBody}/>
      </div>
    );
  }
}

export default MainContainer;
