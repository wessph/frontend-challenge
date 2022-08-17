import api from '../api';

class CharactersApi {
  async getAll(): Promise<any> {
    try {
      const response = await api.get('/character');

      return response.data
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default new CharactersApi();