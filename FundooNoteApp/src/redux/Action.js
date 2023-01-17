import{GET_LABELS,TOGGLE} from'./ActionType'

export const toggle = () => {
  return {
    type: 'TOGGLE',
  };
};
export const getLabels = labels =>{
  return {
    type: GET_LABELS,
    payload:labels,
  }
}

