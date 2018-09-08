import React, {Component} from 'react';
import Login from './login/login';
import CompanyDash from './dashboards/companydash/comapnydash';
import AdminDash from './dashboards/admindash/admindash';
import StudentDash from './dashboards/studentdash/studentdash';
import Registration from './registration/registration';

class Body extends Component {

  constructor(props){
    super(props);

    this.setLoadedBody = this.setLoadedBody.bind(this);

    this.state={
      loaded_body : "login"
    }
  }

  setLoadedBody(x){
    this.setState({loaded_body:x});
  }

  render(){

    let body;

    if(this.state.loaded_body==="login"){
      body=(
        < Login setview={this.setLoadedBody}/>
      );
    }
    else if(this.state.loaded_body==="company"){
      body=(
        < CompanyDash/>
      );
    }
    else if(this.state.loaded_body==="admin"){
      body=(
        < AdminDash/>
      );
    }
    else if(this.state.loaded_body==="student"){
      body=(
        < StudentDash/>
      );
    }
    else if(this.state.loaded_body==="registration"){
      body=(
        < Registration/>
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
