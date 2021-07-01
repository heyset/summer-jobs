const { describe, it, expect } = require('@jest/globals');

jest.mock('../src/services/weatherApi');
const { queryForecast } = require('../src/weather');
const { fetchPlaces, fetchWeather } = require('../src/services/weatherApi');

describe('A função queryForecast', () => {
  it('retorna o objeto correto', async () => {
    const expectedForecast = require('./fixtures/weather.json');

    expect(await queryForecast({ query: 'brasília' })).toEqual(expectedForecast);

    expect(fetchPlaces).toHaveBeenCalledWith('brasília');
    expect(fetchWeather).toHaveBeenCalledWith(455819);
  });
});
