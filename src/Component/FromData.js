import React,{useState} from 'react';

const FormData = () =>{
    const [name,setName] = useState("")
    const [fullName,setFullName] = useState("");
    const onSubmit = () =>{
        setFullName(name)
    }
    const changeHandler = (event)=>{
            setName(event.target.value);
    }
    return (
        <>
         <div>
         <h1>Hello {fullName}</h1>
          <input type="text" placeholder='Enter your name' onChange={changeHandler} value={name} />
          <button onClick={onSubmit}>Click me </button>
        </div>   
        </>
    )
}

export default FormData;