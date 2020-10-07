import axios from 'axios';
const EMPLOYEE_API_BASE_URL = "http://localhost:8082/api/v1";

class EmployeeService{ 

   get employee(){ 
       return axios.get(EMPLOYEE_API_BASE_URL);
   
    }
}
export default new EmployeeService()
