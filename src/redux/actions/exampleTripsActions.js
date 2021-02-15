import * as types from './actionTypes';
export default function addExampleTrips(exampleTrips) {
  return { type: types.ADD_EXAMPLE_TRIPS, exampleTrips };
}
