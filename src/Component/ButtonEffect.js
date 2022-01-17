import React,{useState} from 'react'

function ButtonEffect() {
    let clr ='red';
   const [bg, setBg] = useState(clr);
   const [name,setName] = useState('Click me')
  
  const eventHandler = () =>{
      let newbg ='yellow';
      setBg(newbg);
      setName('O ho');

  }
  const backColor = () =>{
      setBg(clr);
      setName('Click me');
  }
    return (
        <div style={{backgroundColor:bg}}>
          <button onClick={eventHandler} onDoubleClick={backColor}>{name}</button>  
        </div>
    )
}

export default ButtonEffect
