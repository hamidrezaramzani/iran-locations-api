const _ = require('lodash');

const getAllCities = (states) => {
  const cities = [];
  states.forEach((state) => {
    cities.push(...state.cities.map((cityItem) => _.omit(cityItem, 'id')));
  });

  return cities;
};

const getCitiesBtCityName = (states, cityName) => {
  const cities = getAllCities(states);
  return cities.filter(({ name }) => name.includes(cityName));
};

const getCitiesByStateId = (states, stateId) => {
  const matchedState = states.find(({ id }) => id === stateId);
  return matchedState ? matchedState.cities : [];
};

const getCitiesByStateName = (states, state) => states
  .filter(({ name }) => name.includes(state))
  .map((state) => _.pick(state, 'cities'));

export const getCities = (states, id, state, cityName) => {
  if (id) {
    if (isNaN(id)) {
      const error = new Error('Invalid id parameter, id most be number');
      throw error;
    }
    return getCitiesByStateId(states, Number(id));
  }

  if (state) {
    return getCitiesByStateName(states, state);
  }

  if (cityName) {
    return getCitiesBtCityName(states, cityName);
  }

  return getAllCities(states);
};
