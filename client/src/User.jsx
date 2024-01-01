import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

export default function Users(){

    const [users, setUsers] = useState([])

    //Here we will fetch the records and display once USERS are ADDED at CreateUser PAGE
    useEffect(() => {
        axios.get('http://localhost:3001') //Pegamos a rota principal "/" ao carregar nossa pagina fazemos o fetch do /
        .then(result => setUsers(result.data))  //Passamos os dados do usuario que criou um novo USER para dentro da useState
        .catch(err => console.log(err))
    }, [])

    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <Link to={"/create"} className="btn btn-success">Add +</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => {
                                return <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>
                                        <Link to={`/update/${user._id}`} className="btn btn-warning">Update</Link> 
                                        <button className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}