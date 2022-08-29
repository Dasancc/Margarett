import React, { useReducer } from "react";

const initialState = {count:0};
const TYPES ={
    INCREMENT:"INCREMENT",
    DECREMENT:"DECREMENT",
    RESET:"RESET"
}
function reducer(state, action){
    switch(action.type){
        case TYPES.INCREMENT:
            return{count:state.count+1};
        case TYPES.DECREMENT:
            return{count:state.count-1};
        case TYPES.RESET:
            return initialState;
        default:
            return state;
    

    }
    
}
const ItemCount=() =>{
    
    const[state, dispatch]=useReducer(reducer, initialState)
    const sumar= ()=> dispatch({type: TYPES.INCREMENT});
    const restar= ()=> dispatch({type:TYPES.DECREMENT});
    const vaciar= ()=> dispatch({type:TYPES.RESET});

    return(
        <div>
            <h2> Contador</h2>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={vaciar}>Vaciar</button>
                <button onClick={restar}>-</button>
            </nav>
            <h3>{state.count}</h3>
        </div>
    )
   

}

export default ItemCount;