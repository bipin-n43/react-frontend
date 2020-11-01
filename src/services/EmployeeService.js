import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8082/api/v1/employee";

class EmployeeService{ 

   getEmployees(){ 
       return axios.get(EMPLOYEE_API_BASE_URL);
   
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL,employee);
    }
    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL+ '/' +employeeId);

    }
    updateEmployees(employee,employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL+'/'+ employeeId,employee);

    }
    deleteEmployees(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL+'/'+employeeId);
    }
}
export default new EmployeeService();