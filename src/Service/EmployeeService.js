import axios from "axios";

const EmployeeURL = "http://127.0.0.1:8089/employee";

class EmployeeService {

    getEmployee()
    {
        return axios.get(EmployeeURL);
    }

}

export default EmployeeService