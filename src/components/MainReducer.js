import { Map, fromJS } from 'immutable';
// import {
//   PULL_STATIC_DATA,
//  } from '../../constants/ActionTypes';


export default function(state = Map(), action) {
  switch (action.type){
    case 'PULL_STATIC_DATA' :
      return state;
  }
  return state;
}
