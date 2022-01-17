import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
 const Counter = () => {
    return (
        <>
        <div>
           <h1>Countesr</h1> 
           <button>
           <AddIcon/>
           </button>
           <button>
             <RemoveIcon/>
           </button>
        </div>
        </> 
    )
}
export default Counter