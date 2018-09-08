import React, { Component } from 'react';
import './content.css';

class ContentOne extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
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

                
                <div className="col-sm-6 col-md-6">
                  <div className="form-group">
                    <label id="label" >Student Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Student Name"></input>
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
    );
  }
}

export default ContentOne;