import React, {Component} from 'react';
import axios from "axios";
class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:"",
            password:""
        }

        this.authentication = this.authentication.bind(this)
      }

      setPassword(e){
        var password = e.target.value;
        this.setState({password:password});

      }
      setName(e){
        var name = e.target.value;
        this.setState({email:name});


      }
      authentication(){
        debugger;

        var role = "";
       
            axios.get("http://localhost:9000/users/user/username/"+this.state.email+"/password/"+this.state.password+"").then(
            function(response){
                debugger;
                if(response!=null){
                    var uri="";
                    if (typeof(Storage) !== "undefined") {
                        // Store
                        localStorage.setItem("authUser", JSON.stringify(response.data));
                        // Retrieve
                        console.log(JSON.parse(localStorage.getItem("authUser")));
                    } else {
                        // Sorry! No Web Storage support..
                    }
                    
                    if(response.data.status==="Student"){
                        uri += "/student";
                        this.props.setview("student");

                    }else if (response.data.status==="Company"){
                        this.props.setview("company")
                    }else if (response.data.status==="admin"){
                        this.props.setview("admin")
                    }
                        //     axios.get("http://localhost:9000/company/getall").then(
                        //     function(response){
                        //         debugger;
                                
                        //         console.log(response.data);
                        //         response.data.forEach(element => {
                        //             console.log(element);
                        //             if(element.password===this.state.password && element.email=== this.state.email){
                        //                 ()=>this.props.setview("company");
                        //             }
                        //         });
                                
                        //     }.bind(this)
                        //     ).catch(function (error) {
                        //         debugger;
                        //         console.error(error);
                        // });;
                }



            }.bind(this)
        );
      }
  render(){
    return(
        <div>   
            <div class="container py-5"></div>
            <div class="row">
                <div class="col-md-12">
                    <h2 class="text-center text-white mb-4">Bootstrap 4 Login Form</h2>
                    <div class="row">
                        <div class="col-md-6 mx-auto">
                            <div class="card rounded-0">
                                <div class="card-header">
                                    <h3 class="mb-0">Login</h3>
                                </div>
                                <div class="card-body">
                                    <div class="form-group">
                                        <label for="usr">Username:</label>
                                        <input type="text" class="form-control" id="usr" onChange={this.setName.bind(this)}/>
                                    </div>
                                    <div class="form-group">
                                        <label for="pwd">Password:</label>
                                        <input type="password" class="form-control" id="pwd" onChange={this.setPassword.bind(this)}/>
                                    </div>
                                    <button type="button" class="btn btn-info p-2" onClick={()=> this.props.setview("registration")}>Register</button>
                                    <button type="button" class="btn btn-success p-2" onClick={()=>this.authentication()}>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
  }
}

export default Login;
