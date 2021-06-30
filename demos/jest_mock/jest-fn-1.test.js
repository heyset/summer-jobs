const { describe, it, expect } = require('@jest/globals');

jest.mock('./jest-fn-1');
const weather = require('./jest-fn-1');

it('sein', async () => {
  const { expectedPlaces, expectedWeather, expectedObject } = require('./jest-fn-1.data.json');

  // jest.spyOn(weather, 'fetchPlaces').mockReturnValueOnce(expectedPlaces);
  // jest.spyOn(weather, 'fetchWeather').mockReturnValueOnce(expectedWeather);

  // jest.mock(weather);
  // weather.fetchPlaces = jest.fn().mockResolvedValueOnce(expectedPlaces);
  // weather.fetchWeather = jest.fn().mockResolvedValueOnce(expectedWeather);

  // weather.fetchPlaces = jest.fn().mockResolvedValueOnce(expectedPlaces);
  // weather.fetchWeather = jest.fn().mockResolvedValueOnce(expectedWeather);

  // expect(await weather.fetchPlaces('opa')).toEqual(expectedPlaces);

  expect(await weather.createWeatherObject({ query: 'batata' })).toEqual(expectedObject);

  // expect(weather.fetchPlaces).toHaveBeenCalled();
});
