import React, { useState } from 'react';
import './Main.css'
const Main = () => {

    const[count,setcount]=useState(0)
    const[limit,setlimit]=useState(10)

    const inc = () => {
        if(count<limit){
            setcount(count+1)

        }
    }
     
    const dec = () => {
        if(count<limit){
            setcount(count-1)

        }
    }
    
    const colorclcuter = () => {
        if(count>10)return"green"
        if(count<6)return"red"
    }
    const changel =(value)=>{
        setlimit(value)
    }
     
    return (
        <>
           
          <div className='cardparent'>
              
          <div class="card">

                <div id='input'>
                        {/* <label htmlFor=''> limit</label> */}
                        <input id='inputnum' type='number' onChange={(event)=>changel(event.target.value)} />
                </div>
             <div className='btn'>
                  <button  className='circle shape'  onClick={inc}> +</button>

                  <div id='count' style={{color:colorclcuter()}}>{count}</div>

                  <button className='circle shape'   onClick={dec}> -</button>
              </div>

              </div>
       
           </div> 
       
        </>
      );
}
 
export default Main;