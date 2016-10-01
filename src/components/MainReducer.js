import { Map, fromJS } from 'immutable';


export default function(state = Map(), action) {
  switch (action.type){
    case 'GRANT_ACCESS' :
      return state.set('allowed', true);
  }
  return state;
}
