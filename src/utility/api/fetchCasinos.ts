import axios from 'axios'
import { baseUrl } from '@/utility/constants/constants'


export const fetchGames = async ({ category, vendor, limit = 50, offset = 0, sort, order }: { category?: string, vendor?: string, limit?: number, offset?: number, sort?: string, order?: string }) => {
  const params = {
    limit,
    offset,
    ...(category && { category }),
    ...(vendor && { vendor }),
    ...(sort && { sort }),
    ...(order && { order }),
  };

  try {
    const response = await axios.get(`${baseUrl}/casino/games`, { params });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch games');
  }
};