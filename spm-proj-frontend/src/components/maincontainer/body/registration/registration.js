import React, {Component} from 'react';



class Registration extends Component {
    render(){
        return(
            <div class="container">

                <h4 class="pb-2 pt-3">Register Forms</h4>
                    <div class="row" id="parent">
                    <div class="col-md-10 col-16 card d-block border-0 py-2">
                        <a href="" class="btn btn-outline-secondary" data-toggle="collapse" data-target="#companyRegister" data-parent="#parent">Company</a>
                        <a href="" class="btn btn-outline-secondary" data-toggle="collapse" data-target="#studentRegister" data-parent="#parent">Student</a>

                        <div class="collapse py-2" id="companyRegister">
                            <div class="card">
                                <div class="card-body" >
                                    <h2 class="text-center">Register</h2>

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
                                                <button type="submit" class="btn btn-secondary-outline btn-lg btn-block">Register</button>
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

    addCompany(){

        var cmpname = document.getElementById("defaultFormRegistercmpNameEx").value;
        var address = document.getElementById("defaultFormRegisterAddressEx").value;
        var pername = document.getElementById("defaultFormRegisterNameEx").value;
        var tele = document.getElementById("defaultFormRegistertpEx").value;
        var fax = document.getElementById("defaultFormRegisterFaxEx").value;
        var email = document.getElementById("defaultFormRegisterEmailEx").value;
        var password = document.getElementById("defaultFormRegisterPasswrdEx").value;
        var confPassword = document.getElementById("defaultFormRegisterPasswrdConEx").value;

        if(cmpname===""){
            alert("Fill the name");
        }else if(address===""){
            alert("Fill the address");
        }else if(pername===""){
            alert("Fill the person name");
        }else if(tele===""){
            alert("Fill the telephone");
        }else if(fax===""){
            alert("Fill the fax");
        }else if(email===""){
            alert("Fill the email");
        }else if(password===""){
            alert("Fill the password");
        }else if(email===""){
            alert("Fill the email");
        }else if(password!==confPassword){
            alert("Password entered doesn't match");
        }else if(tele.length!==10){
            alert("Invalid telephone number");
        }else if(fax.length!==10){
            alert("Invalid fax number");
        }else {
            var obj = {
                //id: id,
                cmpName: cmpname,
                address: address,
                personInCharge: pername,
                contact : tele,
                fax : fax,
                email : email,
                password: password
            };

            fetch('http://localhost:9000/company/add', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({obj})
            }).then(function () {
                alert("Company Registered Succesfully");
            })
        }

    }
}

export default Registration;
