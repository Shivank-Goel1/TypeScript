import { useReducer } from "react";

interface CounterState{
    count : number,
}

interface updateAction{
    // type : string, this is relatively loose, we can make it more strict using -
    type: 'increment' | 'decrement', // template literals make it strict so that nothing other than 'increment' or 'decrement' can be passed
    payload : number,
}

interface resetAction{
    type: 'reset'
}

type CounterAction = updateAction | resetAction;
const initialState = {count : 0}

function reducer(state : CounterState, action : CounterAction){
    switch(action.type){
        case 'increment':
            return { count : state.count + action.payload}; 
        case 'decrement':
            return { count : state.count - action.payload};
        case 'reset':
            return initialState;
        default :
            return state;
    }
}

export const Counter = () => {
    const [state , dispatch] = useReducer(reducer, initialState);
    return(
        <>
        Count : {state.count}
        <button onClick={() => dispatch({type: 'increment', payload: 10})}>
        {/* Here, --- dispatch({type : 'reset'}) will give error due to template literals*/}
            Increment 10
        </button>
        <button onClick={() => dispatch({type : 'decrement', payload: 10})}>
            Decrement 10
        </button>
        <button onClick={() => dispatch({type : 'reset'})}>
            Reset
        </button>
        </>
    )
}