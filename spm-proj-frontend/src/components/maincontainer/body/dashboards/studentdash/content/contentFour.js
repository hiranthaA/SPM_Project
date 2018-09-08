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
        date : new Date(),
        StudentID:null,
        StudentName:null,
        StudentAddress:null,
        StudentEmail:null,
        StudentCGPA:null,
        StudentHomeContact:null,
        StudentMobile:null,
        StudentYear:null,
    }
    this.getStudentDetails();
  }  
  componentWillMount(){

  }


  getStudentDetails(){

    this.setState({
      StudentID:'null',
      StudentName:'null',
      StudentAddress:'null',
      StudentEmail:'null',
      StudentCGPA:'null',
      StudentHomeContact:'null',
      StudentMobile:'null',
      StudentYear:'null'
    });

  }

  createFormI1(e){
   
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
                  <td colSpan='5'><input className='inputBlock' type="text" id ="stdName" name="StudentName" value={this.state.StudentID} /></td>
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