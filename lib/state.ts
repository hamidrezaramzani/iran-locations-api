const _ = require('lodash');
export type States = {
  name: string;
  center: string;
  latitude: string;
  longitude: string;
  landlinePrefix: string;
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

  return getAllStates(states);
};
