import React, {Component} from 'react';
import Login from './login/login';
import CompanyDash from './dashboards/companydash/comapnydash';
import AdminDash from './dashboards/admindash/admindash';
import StudentDash from './dashboards/studentdash/studentdash';
import Registration from './registration/registration';
<<<<<<< HEAD
=======
import SupervisorDash from './dashboards/supervisordash/supervisordash';

>>>>>>> 73acb470d240e20faf2e2b57a7c410f283d276cb

class Body extends Component {

  constructor(props){
    super(props);

    this.setLoadedBody = this.setLoadedBody.bind(this);

    this.state={
<<<<<<< HEAD
      loaded_body : "login"
=======
      loaded_body : "supervisor"
>>>>>>> 73acb470d240e20faf2e2b57a7c410f283d276cb
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
<<<<<<< HEAD
=======
    else if(this.state.loaded_body==="supervisor"){
      body=(
        < SupervisorDash/>
      );
    }
>>>>>>> 73acb470d240e20faf2e2b57a7c410f283d276cb

    return(
      <div>
          {body}
      </div>
    );
  }
}

export default Body;
