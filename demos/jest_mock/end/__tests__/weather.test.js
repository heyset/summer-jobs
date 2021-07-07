const { describe, it, expect } = require('@jest/globals');

jest.mock('../src/services/weatherApi');
const { queryForecast } = require('../src/weather');
const { fetchPlaces, fetchWeather } = require('../src/services/weatherApi');

const { byId, search } = require('./fixtures/weatherApi.json');

afterEach(() => {
  jest.clearAllMocks();
});

describe('A função queryForecast', () => {
  describe('quando bem-sucedida', () => {
    const query = { query: 'brasília' };

    beforeEach(() => {
      fetchPlaces.mockResolvedValueOnce(search);
      fetchWeather.mockResolvedValueOnce(byId);
    });
  
    it('chama as funções de fetch com os parâmetros corretos', async () => {
      await queryForecast(query);
  
      expect(fetchPlaces).toHaveBeenCalledWith('brasília');
      expect(fetchWeather).toHaveBeenCalledWith(455819);
    });
  
    it('retorna o objeto correto', async () => {
      const { expectedForecast } = require('./fixtures/weather.json');
  
      const forecast = await queryForecast(query);
  
      expect(forecast).toEqual(expectedForecast);
    });
  });

  describe('quando a fetchPlaces falha', () => {
    const query = { query: 'brasília' };

    it('não chama a fetchWeather', async () => {
      fetchPlaces.mockRejectedValueOnce('');

      try {
        await queryForecast(query);
      } catch {
        expect(fetchWeather).not.toHaveBeenCalled();
      }
    });

    it('retorna o erro correto', () => {
      const errorMsg = 'Could not search for place';

      fetchPlaces.mockRejectedValueOnce(errorMsg);

      const expectedError = new Error(errorMsg);

      return expect(queryForecast(query)).rejects.toEqual(expectedError);
    });
  });

  describe('quando a fetchWeather falha', () => {
    const query = { query: 'brasília' };

    it('retorna o erro correto', () => {
      const errorMsg = 'Could not find weather for target id';

      fetchPlaces.mockResolvedValueOnce(search);
      fetchWeather.mockRejectedValueOnce(errorMsg);

      const expectedError = new Error(errorMsg);

      return expect(queryForecast(query)).rejects.toEqual(expectedError);
    });
  });
});
