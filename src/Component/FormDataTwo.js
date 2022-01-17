import React,{useState} from 'react';

const FormData = () =>{
    const [name,setName] = useState("")
    const [lastName,setLastName] = useState("")

    const [lastNameNew,setLastNameNew] = useState("")

    const [fullName,setFullName] = useState("");
    const onSubmits = (event) =>{
        event.preventDefault();
        setFullName(name)
        setLastNameNew(lastName)
    }
    const changeHandler = (event)=>{
            setName(event.target.value);
    }
    const changeHandlerTwo = (event)=>{
        setLastName(event.target.value);
}
    
    return (
        <>
        <form onSubmit={onSubmits}>
         <div>
         <h1>Hello {fullName} {lastNameNew}</h1>
          <input type="text" placeholder='Enter your name' onChange={changeHandler} value={name} />
          <input type="text" placeholder='Enter your name' onChange={changeHandlerTwo} value={lastName} />
          <button type='submit'>Click me </button>
        </div>   
        </form>
        </>
    )
}

export default FormData;