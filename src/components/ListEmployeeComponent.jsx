import React, { Component } from 'react';
import EmployeeService from '../servers/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            employee:[]
        }
    }
    componentDidMount(){
         EmployeeService.getEmployee().then((res) =>{
             this.setState({ employee: res.data});
         });
    }
    render() {
        return (
            <div>
               <h2 className="text-center"> Employee list </h2>    
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
                          this.state.employee.map(
    employee =>
    <tr key = {employee.id}>
    <td>{employee.firstname} </td>
    <td>{employee.lastname} </td>
    <td>{employee.emailid} </td>
</tr>
)
    }
                    </tbody>
                </table>
            </div>
            </div>
        )
    }
}
export default ListEmployeeComponent;