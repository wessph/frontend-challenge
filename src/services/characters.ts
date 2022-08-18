import api from '../api';

class CharactersApi {
  async getAll(pagination: number): Promise<any> {
    try {
      const response = await api.get(`/character/?page=${pagination}`);

      return response.data
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getOne(id: number): Promise<any> {
    try {
      const response = await api.get(`/character/${id}`);

      return response.data
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

export default new CharactersApi();