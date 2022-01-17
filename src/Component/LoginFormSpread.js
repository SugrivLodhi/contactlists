import React,{useState} from 'react';

const FormData = () =>{

 const [fullName,setFullName] = useState({fname:"",lname:"",email:"",phone:""});

    const submits = (event) =>{
        event.preventDefault();
      alert('Form Data is Submitted');      
    }
    const changeHandler = (event)=>{
            // const value=event.target.value;
            // const name=event.target.name;
        const {value,name} = event.target   

          setFullName((prev)=>{
                  
            return{
                ...prev,
                [name]:value
            }
    //         if(name==='fname'){
    //             return{
    //                 fname:value,
    //                 lname:prev.lname,
    //                 email:prev.email,
    //                 phone:prev.phone
    //             }
    //               else if(name==='lname'){
    //                 return{
    //                     fname:prev.fname,
    //                     lname:value,
    //                     email:prev.email,
    //                     phone:prev.phone
    //                 }
    //         }
    //         else if(name==='email'){
    //             return{
    //                 fname:prev.fname,
    //                 lname:prev.lname,
    //                 email: value,
    //                 phone:prev.phone
    //             }
    //     }
    //     else if(name==='phone'){
    //         return{
    //             fname:prev.fname,
    //             lname:prev.lname,
    //             email:prev.email,
    //             phone:value
    //         }
    // }

          })  
    }
      return (
        <>
        <form onSubmit={submits}>
         <div>
         <h1>Hello {fullName.fname} {fullName.lname}</h1>
         <p>{fullName.email}</p>
         <p>{fullName.phone}</p>
          <input type="text" placeholder='Enter Your name' name="fname" 
          onChange={changeHandler} value={fullName.fname}  autoComplete='off'/>
          <input type="text" placeholder='Enter Your Last name' name="lname"
           onChange={changeHandler} value={fullName.lname} autoComplete='off' />
           <input type="text" placeholder='Enter Your EmailId' name="email" 
          onChange={changeHandler} value={fullName.email} autoComplete='off' />
          <input type="text" placeholder='Enter Your Phone Number' name="phone" 
          onChange={changeHandler} value={fullName.phone} autoComplete='off' />
          <button type='submit'>Click me </button>
        </div>   
        </form>
        </>
    )
}

export default FormData;