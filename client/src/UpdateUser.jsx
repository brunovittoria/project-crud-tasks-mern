import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"


export default function UpdateUser(){
    const {id} = useParams()  //Pegamos o ID UNICO do usuario na URL
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()

    //Iremos usar o useEffect para atualizar o CARD que iremos mudar
    useEffect(() => {
        axios.get('http://localhost:3001/getuser/'+id)
        .then(result => {console.log(result)
            setName(result.data.name)  //Passamos para as states e para os campos os valores do campo que o usuario clicou pra atualizar
            setEmail(result.data.email)
            setAge(result.data.age)
        })

        .catch(err => console.log(err))
    }, [])

    //Abaixo passamos os valores do fetch da nossa url para os campos INPUTS:
    //O value serve para obtermos o valor antes do UPDATE
    //O onchange serve para apos fazer o UPDATE

    const Update = (e) => { //Funçao responsavel por atualizar os valores ao voltarmos para HOME
        e.preventDefault()
        axios.put("http://localhost:3001/updateuser/"+id, {name, email, age})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Update}>
                    <h2>Update User</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Enter Name" className="form-control"
                        value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="Enter Email" className="form-control"
                        value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Age</label>
                        <input type="text" placeholder="Enter Age" className="form-control"
                        value={age} onChange={(e) => setAge(e.target.value)}/>
                    </div>
                    <button className="btn btn-success">Update</button>
                </form>
            </div>
        </div>
    )
}