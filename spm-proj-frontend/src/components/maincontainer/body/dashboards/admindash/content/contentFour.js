import React, {Component} from 'react';

import { css }                      from 'styled-components';
import jsPDF                        from 'jspdf';
import html2canvas                  from 'html2canvas';
import {Table, Button}              from 'react-bootstrap'

import './content.css';


class ContentFour extends Component {

  constructor(){
    super();
    this.state = {
        date : new Date()
    }
    
  }  
  componentWillMount(){

  }
  createFormI1(e){
    // var tr1 = document.createElement('tr');

    // var td1 = document.createElement('td');
    // var td2 = document.createElement('td');
    // td1.innerHTML = "Student ID:";
    // td2.innerHTML = '"<input type="text" id ="stdName" name="StudentName"/> "';

    // var tr2 = document.createElement('tr');

    // var td3 = document.createElement('td');
    // var td4 = document.createElement('td');
    // td3.innerHTML = "Address:";
    // td4.innerHTML = <input type="text" id ="addr" name="StudentAddress"/> ;
    
    // var tr3 = document.createElement('tr');

    // var td5 = document.createElement('td');
    // var td6 = document.createElement('td');
    // td5.innerHTML = "Home Phone:";
    // td6.innerHTML = <input type="text" id ="hpho" name="StudentHomeContact"/> ;
    
    // var tr4 = document.createElement('tr');

    // var td7 = document.createElement('td');
    // var td8 = document.createElement('td');
    // td7.innerHTML = "Mobile Phone:";
    // td8.innerHTML = <input type="text" id ="mpho" name="StudentMobile"/> ;
    
    // var tr5 = document.createElement('tr');

    // var td9 = document.createElement('td');
    // var td10 = document.createElement('td');
    // td9.innerHTML = "E-mail Addresses:";
    // td10.innerHTML = <input type="text" id ="emailAddr" name="StudentEmail"/> ;
    
    // var tr6 = document.createElement('tr');

    // var td11 = document.createElement('td');
    // var td12 = document.createElement('td');
    // var td13 = document.createElement('td');
    // var td14 = document.createElement('td');
    // var td15 = document.createElement('td');
    // var td16 = document.createElement('td');
    // td11.innerHTML = "Semester: ";
    // td12.innerHTML = <input type="text" id ="sem" name="Semester"/> ;
    // td13.innerHTML = "Year: ";
    // td14.innerHTML = <input type="text" id ="yr" name="Yeat"/>
    // td15.innerHTML = "CGPA: ";
    // td16.innerHTML = <input type="text" id ="cgpa" name="StudentCGPA"/>


    // tr1.appendChild(td1);
    // tr1.appendChild(td2);

    // tr2.appendChild(td3);
    // tr2.appendChild(td4);

    // tr3.appendChild(td5);
    // tr3.appendChild(td6);

    // tr4.appendChild(td7);                                
    // tr4.appendChild(td8);

    // tr5.appendChild(td9);
    // tr5.appendChild(td10);

    // tr6.appendChild(td11);
    // tr6.appendChild(td12);
    // tr6.appendChild(td13);
    // tr6.appendChild(td14);
    // tr6.appendChild(td15);
    // tr6.appendChild(td16);  

    // var tbd =document.getElementById("formI1Body");
    // tbd.appendChild(tr1);
    // tbd.appendChild(tr2);
    // tbd.appendChild(tr3);
    // tbd.appendChild(tr4);
    // tbd.appendChild(tr5);
    // tbd.appendChild(tr6);


    const input = document.getElementById('divToPrint');
                    html2canvas(input).then(
                        (canvas)=>{
                            const imageData = canvas.toDataURL('image/png');
                            const pdf = new jsPDF();
                            pdf.addImage(imageData, "JPEG",5,30,200,60 );
                            // pdf.output('dataurlnewwindow');
                            pdf.save("Report.pdf");
                        });
                
            
            e.preventDefault();

  }
  render(){
    return(
      <div className="content">
        <h1>Fill first part of Form I-1</h1>
        <div >
            <hr/>
            <span><h3>Create Form I-1: </h3></span>
            <div id="divToPrint" >
            <h3>Internship Acceptance Form</h3>
            <br/>

            <Table  striped  condensed  hover id="formI1Table">
              <thead>
                <tr>
                  
                </tr>                
              </thead>
              <tbody id="formI1Body">
                <tr>
                  <td>Student ID:</td>
                  <td colSpan='5'><input className='inputBlock' type="text" id ="stdName" name="StudentName"/></td>
                </tr>
                <tr>
                  <td>Address:</td>
                  <td colSpan='5'><input className='inputBlock' type="text" id ="addr" name="StudentAddress"/></td>
                </tr>
                <tr>
                  <td>Home Phone:</td>
                  <td colSpan='5'><input className='inputBlock' type="text" id ="hpho" name="StudentHomeContact"/></td>
                </tr>
                <tr>
                  <td>Mobile Phone:</td>
                  <td colSpan='5'> <input className='inputBlock' type="text" id ="mpho" name="StudentMobile"/> </td>
                </tr>
                <tr>
                  <td>E-mail Addresses:</td>
                  <td colSpan='5'><input className='inputBlock' type="text" id ="emailAddr" name="StudentEmail"/></td>
                </tr>
                <tr>
                  <td>Semester:</td>
                  <td><input className='inputBlock' type="text" id ="sem" name="Semester"/></td>
                  <td>Year:</td>
                  <td><input className='inputBlock' type="text" id ="yr" name="Year"/></td>
                  <td>CGPA:</td>
                  <td><input className='inputBlock' type="text" id ="cgpa" name="StudentCGPA"/></td>
                  
                </tr>
              </tbody>
            </Table>

           
            <hr/>
            </div>
            <Button  value="Create I-1 Form" onClick={this.createFormI1.bind(this)}>Create</Button>
        </div>
      </div>
    );
  }
}

export default ContentFour;