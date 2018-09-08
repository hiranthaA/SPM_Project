import React, { Component } from 'react';
import './registration.css';

class Registration extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content card ">
        <div className="card header">

          <nav>
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Student Registration</a>
              <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Company Registration</a>
            </div>
          </nav>
        </div>

        <div className="card body">
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
              <div className="content card ">

                <div className="card-header">
                  <h4 className="heading "><i class="fas fa-user-plus"></i> Student Registration</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-6 col-md-6">

                      <div className="row">
                        <div className="col-sm-6 col-md-6">
                          <div className="form-group">
                            <label id="label" >Student ID</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Student ID"></input>
                          </div>
                        </div>

                        <div className="col-sm-6 col-md-2">
                          <div className="form-group">
                            <label id="label">Year</label>
                            <input type="number" min='1' max='4' className="form-control" id="formGroupExampleInput" placeholder="Year" ></input>
                          </div>
                        </div>

                        <div className="col-md-2">
                          <div className="form-group">
                            <label id="label">Semester</label>
                            <input type="number" min='1' max='2' className="form-control" id="formGroupExampleInput" placeholder="Sem"></input>
                          </div>
                        </div>

                        <div className="col-md-2">
                          <div className="form-group">
                            <label id="label">GPA</label>
                            <input type="number" min='1' max='4' className="form-control" id="formGroupExampleInput" placeholder="GPA" ></input>
                          </div>
                        </div>


                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label id="label">Address</label>
                            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Student Address"></input>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label id="label">Mobile</label>
                            <input type="number" className="form-control" id="formGroupExampleInput" placeholder="Mobile"></input>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label id="label">Home</label>
                            <input type="number" className="form-control" id="formGroupExampleInput" placeholder="Home"></input>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label id="label">Password</label>
                            <input type="password" className="form-control" id="formGroupExampleInput" placeholder="Password"></input>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label id="label">Password</label>
                            <input type="password" className="form-control" id="formGroupExampleInput" placeholder="Confirm Password"></input>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-3 ml-auto">
                          <button type="button" class="btn btn-outline-primary btn-block">Register</button>
                        </div>
                      </div>


                    </div>

                  </div>
                </div>

              </div>

            </div>


            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            {/*Place your code here*/}

                    <div class="card">
                        <div className="card-header">
                            <h4 className="heading "><i class="fas fa-user-plus"></i> Company Registration</h4>
                        </div>
                        <div class="card-body" >

                            <form role="form">
                                <div class="form-group row">
                                    <label className="grey-text">Company Name</label>
                                    <input type="text" placeholder="eg: ABC Company" id="defaultFormRegistercmpNameEx" className="form-control w-100"/><br/>

                                </div>
                                <div class="form-group row">
                                    <label className="grey-text">Address</label>
                                    <input type="text" placeholder="eg: No.1, Orugodawaththa, Colombo" id="defaultFormRegisterAddressEx" className="form-control w-100"/><br/>

                                </div>
                                <div class="form-group row">
                                    <label className="grey-text">Name(Person in charge)</label>
                                    <input type="text" placeholder="eg: Joe Root" id="defaultFormRegisterNameEx" className="form-control w-100"/><br/>

                                </div>

                                <div class="form-group row">
                                    <label className="grey-text">Telephone(Person in charge)</label>
                                    <input type="number" placeholder="eg: 0711234567" id="defaultFormRegistertpEx" className="form-control w-100"/><br/>

                                </div>

                                <div class="form-group row">
                                    <label className="grey-text">Email(Person in charge)</label>
                                    <input type="email" placeholder="eg: someone@abc.com" id="defaultFormRegisterEmailEx" className="form-control w-100"/><br/>

                                </div>

                                <div class="form-group row">
                                    <label className="grey-text">Password</label>
                                    <input type="password" id="defaultFormRegisterPasswrdEx" className="form-control w-100"/><br/>

                                </div>

                                <div class="form-group row">
                                    <label className="grey-text">Confirm Password</label>
                                    <input type="password" id="defaultFormRegisterPasswrdConEx" className="form-control w-100"/><br/>

                                </div>

                                <div class="form-group row">
                                    <div class="offset-sm-2 col-sm-8 pb-3 pt-2">
                                        <button type="submit" class="btn btn-outline-primary btn-block" >Register</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default Registration;