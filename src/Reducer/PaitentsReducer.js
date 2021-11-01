export const paitentState = {
    paitents: []
} 
export const paitentsReducer = (state,action)=>{
    switch(action.type){
        case 'ADD_PAITENT':
            const newPaitent={
                id: action.id,
                name: action.name                
            }
            const allPaitent = [...state.paitents,newPaitent]
            // console.log('newPaitent: ',newPaitent);
            return {paitents:allPaitent};
        case 'REMOVE_PAITENT':
            const remaining= state.paitents.filter(pt=> pt.id !== action.id);
            const newState = {paitents:remaining}
            return newState;
            default:
                return state;
    }
}