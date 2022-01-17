import React,{useState} from 'react'

function Mock() {
    const  [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [statedetails,setDetails] = useState([{firstName:"",emailId:" ",phoneNum:""}]);
    // const changeHandler =(e) =>{
    //     setName(e.target.value);
    //     setEmail(e.target.value)
    //     setNumber(e.target.value)
    // }
    const clickHandler = () =>{
        setDetails({firstName:name,emailId:email,phoneNum:number})
        return(
            <>
             <table>
               <th>name</th>
               <tr>{name}</tr>
               <th>email</th>
               <tr>{email}</tr>
               <th>phonenumber</th>
               <tr>{number}</tr>
             </table>   
            </>
        )
    } 
    return (
        <>
        <div>
            <input type="text" placeholder='Enter your Name' value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="email"  placeholder='Enter the Email ' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="number" placeholder='Enter your Mobile Number' value={number} onChange={(e)=>setNumber(e.target.value)}/>
            <button onClick={clickHandler}>Submit</button>
        </div>
      </>
    )
}
export default Mock
