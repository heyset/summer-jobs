const { describe, it, expect } = require('@jest/globals');

jest.mock('../src/services/weatherApi');
const { queryForecast } = require('../src/weather');
const { fetchPlaces, fetchWeather } = require('../src/services/weatherApi');

describe('A função queryForecast', () => {
  it('chama as funções de fetch com os parâmetros corretos', async () => {
    await queryForecast({ query: 'brasília' });

    expect(fetchPlaces).toHaveBeenCalledWith('brasília');
    expect(fetchWeather).toHaveBeenCalledWith(455819);
  });

  it('retorna o objeto correto', async () => {
    const expectedForecast = require('./fixtures/weather.json');

    const forecast = await queryForecast({ query: 'brasília' });

    expect(forecast).toEqual(expectedForecast);
  });
});
