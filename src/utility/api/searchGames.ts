import axios from 'axios'
import { baseUrl } from '@/utility/constants/constants'


export const searchGames = async (query: string) => {
  const params = {
    query,
  };

  try {
    const response = await axios.get(`${baseUrl}/casino/games/search`, { params });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch games');
  }
};