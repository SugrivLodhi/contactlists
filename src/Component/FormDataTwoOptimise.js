import React,{useState} from 'react';

const FormData = () =>{

 const [fullName,setFullName] = useState({fname:"",lname:""});

    // const onSubmits = (event) =>{
    //     event.preventDefault();
    
    //     setLastNameNew(lastName)
    // }
    const changeHandler = (event)=>{
            const value=event.target.value;
            const name=event.target.name;

          setFullName((prev)=>{
             
            if(name==='fname'){
                return{
                    fname:value,
                    lname:prev.lname
                }
            }
                else if(name==='lname'){
                    return{
                        fname:prev.fname,
                        lname:value
                    }
            }

          })  
    }
   
    
    return (
        <>
        <form>
         <div>
         <h1>Hello {fullName.fname} {fullName.lname}</h1>
        
          <input type="text" placeholder='Enter your name' name="fname" onChange={changeHandler} value={fullName.fname} />
          <input type="text" placeholder='Enter your name' name="lname" onChange={changeHandler} value={fullName.lname} />
          <button type='submit'>Click me </button>
        </div>   
        </form>
        </>
    )
}

export default FormData;