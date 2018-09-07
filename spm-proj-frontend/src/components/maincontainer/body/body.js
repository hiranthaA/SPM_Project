import React, {Component} from 'react';
import Login from './login/login';
import CompanyDash from './dashboards/companydash/comapnydash';
import AdminDash from './dashboards/admindash/admindash';
import StudentDash from './dashboards/studentdash/studentdash';

class Body extends Component {

  constructor(props){
    super(props);

    this.setLoadedBody = this.setLoadedBody.bind(this);

    this.state={
      loaded_body : "student"
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

    return(
      <div>
          {body}
      </div>
    );
  }
}

export default Body;
