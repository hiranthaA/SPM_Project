import React, {Component} from 'react';

class Login extends Component {
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
                                        <input type="text" class="form-control" id="usr"/>
                                    </div>
                                    <div class="form-group">
                                        <label for="pwd">Password:</label>
                                        <input type="password" class="form-control" id="pwd"/>
                                    </div>
                                    <button type="button" class="btn btn-info">Register</button>
                                    <button type="button" class="btn btn-success">Login</button>
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
