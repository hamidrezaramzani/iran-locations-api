const _ = require('lodash');
export type States = {
  name: string;
  center: string;
  latitude: string;
  longitude: string;
  landlinePrefix: string;
  carLicencePlates: string[];
  id: number;
  cities: {
    name: string;
    latitude: string;
    longitude: string;
    id: number;
  }[];
}[];

export type StateQueryParams = {
  id: string;
  state: string;
  landlinePrefix: string;
  carLicencePlate: string;
};

const getAllStates = (states: States) =>
  states.map(state => _.omit(state, 'cities'));

const getStatesById = (states: States, stateId: number) => {
  const matchedState = states
    .filter(({ id }) => id === Number(stateId))
    .map(state => _.omit(state, 'cities'));
  return matchedState.length ? matchedState[0] : {};
};

const getStatesByName = (states: States, state: StateQueryParams['state']) =>
  states
    .filter(({ name }) => name.toLowerCase().includes(state.toLowerCase()))
    .map(state => _.omit(state, 'cities'));


const getStateByCarLicencePlate = (
  states: States,
  carLicencePlate: StateQueryParams['carLicencePlate'],
) => {
  const matchedState = states.filter(({ carLicencePlates }) =>
    carLicencePlates.includes(carLicencePlate)
  );

  if (!matchedState) {
    const error = new Error('No state found for carLicencePlate');
    throw error;
  }

  return matchedState ? matchedState.map(({ cities: _, ...rest }) => rest) : []
};


const getStatesByLandlinePrefix = (
  states: States,
  landlineCode: StateQueryParams['landlinePrefix'],
) =>
  states
    .filter(({ landlinePrefix }) => landlinePrefix === landlineCode)
    .map(state => _.omit(state, 'cities'));

export const getStates = (
  states: States,
  stateId: StateQueryParams['id'],
  stateName: StateQueryParams['state'],
  landlinePrefix: StateQueryParams['landlinePrefix'],
  carLicencePlate: StateQueryParams['carLicencePlate'],
) => {


  if (stateId) {
    if (isNaN(Number(stateId))) {
      const error = new Error('Invalid id parameter, id must be number');
      throw error;
    }
    return getStatesById(states, Number(stateId));
  }

  if (stateName) {
    return getStatesByName(states, stateName);
  }

  if (landlinePrefix) {
    if (!landlinePrefix.startsWith('0')) {
      const error = new Error(
        'Invalid landlinePrefix parameter, landlinePrefix must be started with 0',
      );
      throw error;
    }
    return getStatesByLandlinePrefix(states, landlinePrefix);
  }

  if (carLicencePlate) {
    if (isNaN(Number(carLicencePlate))) {
      const error = new Error('Invalid carLicencePlate parameter, carLicencePlate must be number');
      throw error;
    }
    return getStateByCarLicencePlate(states, carLicencePlate);
  }

  return getAllStates(states);
};
