import {increase, decrease,reset } from "./actions.types";

//initial value
let count=0;
export const Add=()=>{
    return{
        type:increase,
        count:++count
    }
}

export const resetCounter = () => {
    count = 0;
    return {
      type: reset,
      count: 0
    };
  };
  export const Subtract = () => {
    count = 0;
    return {
      type: decrease,
      count: --count
    };
  };
  