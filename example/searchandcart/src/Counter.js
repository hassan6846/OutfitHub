import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Add,Subtract,resetCounter } from "./actions";
import "./counter.css"
const Counter=()=>{
    const {amount}=useSelector(state=>state.counter)
    const dispatch=useDispatch();
    // handle add
    const handleAdd=()=>{
        dispatch(Add())
    }
    const handleReset=()=>{
        dispatch(resetCounter)
    }
    const handleSub=()=>{
        dispatch(Subtract)
    }
    return(
        <section>
        <h3>0</h3>
        <h1>Counter</h1>
        <div className='actions'>
          <button onClick={handleAdd} className='increase' >increase</button>
          <button onClick={handleSub} className='decrease' >decrease</button>
          <button onClick={handleReset} className='reset' >Reset</button>
        </div>
      </section>
    )
}
export default Counter;