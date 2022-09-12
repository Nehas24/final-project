import React, { useState} from 'react'
import axios from 'axios'
import Popup from 'reactjs-popup'
import '../Styles/Project.css'
const Employee = ({ppost, employeeDelete }) => {

    
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [salary, setSalary] = useState("");

    

    const handlePost = () => {
        const employeedata = {
        
            firstname: firstname,
            lastname: lastname,
            email: email,
            salary: salary,
            
        }
        //console.log(employeedata);
        axios.post(`http://localhost:8089/employee`, employeedata)
            .catch((err) => console.log("Error", err))

        window.location.reload()
    }

    const updateData = (id,firstname,lastname,email,salary) => {

        const employeedata = {
            id:id,
            firstname:firstname,
            lastname:lastname,
            email: email,
            salary:salary,
           
        }
        
        axios.put(`http://localhost:8089/employee/${id}`, employeedata)
            .catch((err) => console.log("Error", err))
            window.location.reload()
     
    }
    
    return (
        <>
            <div id='form'>
                <div className="form">
                    <h1>Add new data here</h1>
                   
                    <label htmlFor="name">Enter your firstname</label><br />
                    <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} /><br />
                    <label htmlFor="name">Enter a lastname</label><br />
                    <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} /><br />
                    <label htmlFor="name">Enter your email </label><br />
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                    <label htmlFor="name">Enter a salary</label><br />
                    <input type="text" value={salary} onChange={(e) => setSalary(e.target.value)} /><br />
                    <button className="btn btn-primary my-3" onClick={handlePost}>Add Data</button>
                </div>
            </div>
            <div>
                <h1 className='h1'>Employee Data</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <th>firstname</th>
                            <th>lastname</th>
                            <th>email</th>
                            <th>salary</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                        {ppost && ppost.map((Post) => (
                            <tr>
                                <td>{Post.id}</td>
                               <td>{Post.firstname}</td>
                                <td>{Post.Lastname}</td>
        
                                <td>{Post.email}</td>
                                <td>{Post.salary}</td>
                                <td><Popup trigger={<button className="btn btn-primary">Edit</button>} >
                                    <h4>Update Data Here</h4>
                                    <label htmlFor="name">Enter a firstname</label><br />
                                    <input type="text" placeholder={Post.firstname} onChange={(e) => setFirstname(e.target.value)} /><br />
                                    <label htmlFor="name">Enter a lastname</label><br />
                                    <input type="text" placeholder={Post.lastname} onChange={(e) => setLastname(e.target.value)} /><br />
                                    <label htmlFor="name">Enter a email</label><br />
                                    <input type="text" placeholder={Post.email} onChange={(e) => setEmail(e.target.value)} /><br />
                                    <label htmlFor="name">Enter a salary</label><br />
                                    <input type="text" placeholder={Post.salary} onChange={(e) => setSalary(e.target.value)} /><br />
                                    <button class="btn btn-primary" onClick={() => updateData(Post.id,firstname,lastname,email,salary)}>Update</button>
                                   
                                </Popup>
                                </td>
                                <td><button className="btn btn-primary" onClick={() => employeeDelete(Post.id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
            </div>
        </>
    )
}
export default Employee