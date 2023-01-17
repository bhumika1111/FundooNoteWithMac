import { TOGGLE,GET_LABELS } from "./ActionType";
const initialState = {
  toggle: false,
  labels:[]
  
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return {
        toggle: !state.toggle,
      };
      case 'GET_LABELS':
        return{
          ...state,labels:action.payload
        }
        
      
      default:
        return state;
    }
  }

