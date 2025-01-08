import { useEffect,useState } from "react";


function List(){
    const [data,SetData] = useState([])
    useEffect(()=>{
        axios.get('')
    })
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
                            <td>{value.completed}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}
export default List