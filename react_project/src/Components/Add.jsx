import { useState } from "react"
import axios from "axios"

function Add(){
    const [task,setTitle] = useState('')
    const [description,setDescription] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://127.0.0.1:8000/api/todo/',{task,description}).then(res=>{
            setTitle('')
            setDescription('')
        }).catch(error=>console.log(error.message)
        )
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" id="task" value={task} onChange={(e)=>setTitle(e.target.value)}/>
                <input type="text" name="description" id="description" value={description} onChange={(e)=>setDescription(e.target.value)}/>
                <input type="submit" value="Add"/>
            </form>
        </>
    )
}
export default Add