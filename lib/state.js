const _ = require('lodash');

const getAllStates = states => states.map(state => _.omit(state, 'cities'));
const getStatesById = (states, stateId) => {
  const matchedState = states
    .filter(({ id }) => id === stateId)
    .map(state => _.omit(state, 'cities'));
  return matchedState.length ? matchedState[0] : {};
};

const getStatesByName = (states, state) =>
  states
    .filter(({ name }) => name.includes(state))
    .map(state => _.omit(state, 'cities'));

const getStatesByLandlinePrefix = (states, landlineCode) =>
  states
    .filter(({ landlinePrefix }) => landlinePrefix === landlineCode)
    .map(state => _.omit(state, 'cities'));

export const getStates = (states, id, state, landlinePrefix) => {
  if (id) {
    if (isNaN(id)) {
      const error = new Error('Invalid id parameter, id must be number');
      throw error;
    }
    return getStatesById(states, Number(id));
  }

  if (state) {
    return getStatesByName(states, state);
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
