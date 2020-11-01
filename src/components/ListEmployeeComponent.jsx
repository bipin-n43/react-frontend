import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            employees:[]
        }
        this.addEmployee=this.addEmployee.bind(this);
    }
    deleteEmployee(id){
     EmployeeService.deleteEmployees(id).then(res=> {
this.setState({employees:this.state.employees.filter(employee=>employee.id!==id)});
     });
    }
    editEmployee(id){
        this.props.history.push(`/add-employees/${id}`)
    }
    componentDidMount(){
         EmployeeService.getEmployees().then((res) =>{
            this.setState({employees:res.data});
         });
        }
         
        addEmployee(){
            this.props.history.push('/add-employees/_add')
         }
         viewEmployee(id){
             this.props.history.push(`/view-employees/${id}`)

         }
        
         
    render() {
        return (
            <div>
               <h2 className="text-center"> Employee list </h2> 
               <div className= "row">
                  <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
               </div>
                   
            <div className= "row">
                <table className = "table table-striped table-bordered">
                    <thead>
                        <tr>
                            
                             <th>  Employee First Name </th>
                             <th>  Employee Last Name </th>
                             <th>  Employee Email id </th>
                             <th>  Actions</th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                          this.state.employees.map(
    employee =>
    <tr key = {employee.id}>
    <td>{employee.firstname} </td>
    <td>{employee.lastname} </td>
   <td>{employee.emailId} </td>
<td>
    <button className="btn btn-info" onClick={()=>this.editEmployee(employee.id)}> Update</button>
    <button style={{marginLeft:"10px"}}className="btn btn-danger" onClick={()=>this.deleteEmployee(employee.id)}> Delete</button>
    <button style={{marginLeft:"10px"}}className="btn btn-info" onClick={()=>this.viewEmployee(employee.id)}> View</button>
</td>
</tr>
)}
                    </tbody>
                </table>
            </div>
            </div>
        )
    }
}
export default ListEmployeeComponent;