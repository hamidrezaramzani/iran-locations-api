import { States } from './state';

export type CitiesQueryParams = {
  state: string;
  state_id: string;
  city: string;
};

const _ = require('lodash');

const getAllCities = (states: States) => {
  const cities = [];
  states.forEach(state => {
    cities.push(...state.cities.map(cityItem => _.omit(cityItem, 'id')));
  });

  return cities;
};

const getCitiesBtCityName = (
  states: States,
  cityName: CitiesQueryParams['city'],
) => {
  const cities = getAllCities(states);
  return cities.filter(({ name }) => name.includes(cityName));
};

const getCitiesByStateId = (
  states: States,
  stateId: CitiesQueryParams['state_id'],
) => {
  const matchedState = states.find(({ id }) => id === Number(stateId));
  return matchedState ? matchedState.cities : [];
};

const getCitiesByStateName = (
  states: States,
  stateName: CitiesQueryParams['state'],
) =>
  states
    .filter(({ name }) => name.includes(stateName))
    .map(state => _.pick(state, 'cities'));

export const getCities = (
  states: States,
  stateId: CitiesQueryParams['state_id'],
  stateName: CitiesQueryParams['state'],
  cityName: CitiesQueryParams['city'],
) => {
  if (stateId) {
    if (isNaN(Number(stateId))) {
      const error = new Error('Invalid id parameter, id must be number');
      throw error;
    }
    return getCitiesByStateId(states, stateId);
  }

  if (stateName) {
    return getCitiesByStateName(states, stateName);
  }

  if (cityName) {
    return getCitiesBtCityName(states, cityName);
  }

  return getAllCities(states);
};
