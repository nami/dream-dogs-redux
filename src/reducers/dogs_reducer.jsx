import { SELECT_CHANNEL } from '../actions';

export default function(state = null, action){
  switch(action.type){
    case 'FETCH_DOGS':
      return action.payload;
    default:
      return state;
  }
}
