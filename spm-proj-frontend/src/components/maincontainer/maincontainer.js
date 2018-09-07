import React, {Component} from 'react';
import Header from './header/header';
import Body from './body/body';

class MainContainer extends Component {
  render(){

    return(
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}

export default MainContainer;
