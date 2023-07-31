import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';

export default function About () {

    const [user, setUser] = useState("")
    const [stock, setStock] = useState("")
    // const history = useHistory();
    const navigate = useNavigate();

    function handleSubmit(event){
        event.preventDefault()
        
        if(user === "" || stock===null){
          alert("Please enter correct details")
          return 
        }

        console.log(user, stock)
        let userData ={
            user:user,
            stock:stock
        } 
        fetch("http://localhost:5000/api/fetchStockData",{
            method:"Post",
            headers:{
                'Content-Type':"application/json"
        },
            body:JSON.stringify(userData)
    }).then(response => response.json()).then(data=>{
  
        navigate('/display', {state : {
          data:data
        }});

        return data
    })}

  return (
    <> 
    <div>
      <form onSubmit={handleSubmit} >

        <div className="form-group" >    
        <input name = "stock" className="form-control" onChange={e=>setStock(e.target.value)} placeholder="Enter stock details like AAPL.. "/>
        <input type="date" name = "user" className="form-control" onChange={e=>setUser(e.target.value)} placeholder="Enter yours name here "/>
        
        <br />
        <button type="submit"  className="btn btn-primary">Submit</button>
        </div>
    </form>

    </div>

    </>
  )
}


