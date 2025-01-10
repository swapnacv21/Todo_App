import { useEffect,useState } from "react";
import axios from 'axios'


function List(){
    const [data,SetData] = useState([])
    const [editing,setEditing] = useState(false)
    const [editdata,setEditData] = useState(null)

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/todo/').then((res) =>{
            console.log(res.data);
            SetData(res.data)
        }).catch(error => console.log(error.message))
    },[])
    const Edit_dtls = (task) =>{
        setEditing(true)
        setEditData(task)
    }

    const updateDtls = (id,task) =>{
        setEditing(false)
        axios.put('',task).then(res=>{
            SetData(data.map((prv)=>prv.id===id ? res.data : prv))
        }).catch(error =>console.log(error.message))
    }
    return(

        <div className="container">
            <h1>Display Details</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((value,index)=>(
                        <tr key={index}>
                            <td>{value.title}</td>
                            <td>{value.description}</td>
                            <td>{value.completed ? 'completed' : 'not'}</td>
                            <td><button className="btn btn-outline-info" onClick={()=>{Edit_dtls(value)}}>Edit</button></td>
                            <td><button className="btn btn-outline-danger" onClick={()=>{}}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {editing ? <EditForm curTask = {editdata} updataefun={updateDtls}/>:null}
        </div>
    )

}

const EditForm = ({curTask,updataefun})=>{
    const[task,setTask] = useState(curTask)
    const handleChange = (e) =>{
        const {name,value} = e.target 
        setTask({...task,[name]:value})
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        updataefun(task.id,task)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" id="title" value={task.title} onChange={handleChange}/>
            <input type="text" name="description" id="description" value={task.description} onChange={handleChange}/>
            <input type="submit" value="Update"/>

        </form>
    )
}
export default List