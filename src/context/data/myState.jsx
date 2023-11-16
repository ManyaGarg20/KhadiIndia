// this context folder and files are used to remove props drilling. 
// any state that u want will be written here only and then used in other components

/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import myContext  from './myContext'

function myState(props) {

   // eslint-disable-next-line no-undef
   const [mode , setMode] = useState('light');
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = 'rgb(17, 24, 39)';
        }
        else {
            setMode('light');
            document.body.style.backgroundColor = 'white';
        }
    }

   
  return (
    <myContext.Provider value ={{mode , toggleMode }}>
        {props.children}
    </myContext.Provider>
  )
}

export default myState