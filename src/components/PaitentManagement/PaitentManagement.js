import React, { useReducer, useRef } from 'react';
import { paitentsReducer, paitentState } from '../../Reducer/PaitentsReducer';


const PaitentManagement = () => {
    const nameRef = useRef()
    const [state,dispatch] = useReducer(paitentsReducer,paitentState);
    console.log(state);
    const handleSubmit = event =>{
        event.preventDefault();
        dispatch({
             type: 'ADD_PAITENT',
             name: nameRef.current.value,
             id: state.paitents.length + 1
            })
            nameRef.current.value='';
    }
    return (
        <div>
            <h1>Paitent Management:{state.paitents.length}</h1>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} />
            </form>
            {
                state.paitents.map(paitent=> <li key={paitent.id}
                 onClick={()=>dispatch({type:'REMOVE_PAITENT',id:paitent.id})}>{paitent.name}</li>)
            }
        </div>
    );
};

export default PaitentManagement;