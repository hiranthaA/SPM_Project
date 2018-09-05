import React, {Component} from 'react';
import Login from './login/login';
import CompanyDash from './dashboards/companydash/comapnydash';

class Body extends Component {

  constructor(props){
    super(props);

    this.setLoadedBody = this.setLoadedBody.bind(this);

    this.state={
      loaded_body : "company"
    }
  }

  setLoadedBody(x){
    this.setState({loaded_body:x});
  }

  render(){

    let body;

    if(this.state.loaded_body==="login"){
      body=(
        < Login/>
      );
    }
    else if(this.state.loaded_body==="company"){
      body=(
        < CompanyDash/>
      );
    }

    return(
      <div>
          {body}
      </div>
    );
  }
}

export default Body;
