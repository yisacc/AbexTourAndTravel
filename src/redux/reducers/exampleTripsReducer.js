import * as types from '../actions/actionTypes';
export default function exampleTrip(state = [], action) {
  switch (action.type) {
    case types.ADD_EXAMPLE_TRIPS:
      return [...state, { ...action.exampleTrips }];
      case types.DELETE_EXAMPLE_TRIPS:
        return state=[];
    default:
      return state;
  }
}