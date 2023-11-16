// this context folder and files are used to remove props drilling. 
// any state that u want will be written here only and then used in other components

/* eslint-disable no-unused-vars */
import React from 'react'
import myContext  from './myContext'

function myState(props) {
    const state ={
        name: "m",

    }
    const color = "red"
  return (
    <myContext.Provider value ={{state , color}}>
        {props.children}
    </myContext.Provider>
  )
}

export default myState